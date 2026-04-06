import { useEffect, useMemo, useRef, useState } from 'react';
import { trackEvent } from '../lib/analytics';

const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 20;
const EMPTY_CELL = '';
const PIECE_ORDER = ['I', 'O', 'T', 'S', 'Z', 'J', 'L'] as const;

const TETROMINOES = {
  I: { color: '#38bdf8', shape: [[1, 1, 1, 1]] },
  O: { color: '#facc15', shape: [[1, 1], [1, 1]] },
  T: { color: '#c084fc', shape: [[0, 1, 0], [1, 1, 1]] },
  S: { color: '#4ade80', shape: [[0, 1, 1], [1, 1, 0]] },
  Z: { color: '#fb7185', shape: [[1, 1, 0], [0, 1, 1]] },
  J: { color: '#60a5fa', shape: [[1, 0, 0], [1, 1, 1]] },
  L: { color: '#fb923c', shape: [[0, 0, 1], [1, 1, 1]] },
} as const;

type PieceKind = keyof typeof TETROMINOES;
type Board = string[][];

interface ActivePiece {
  kind: PieceKind;
  row: number;
  col: number;
  rotation: number;
}

interface GameState {
  board: Board;
  current: ActivePiece;
  nextKind: PieceKind;
  score: number;
  lines: number;
  level: number;
  isPaused: boolean;
  isGameOver: boolean;
}

function createEmptyBoard(): Board {
  return Array.from({ length: BOARD_HEIGHT }, () => Array.from({ length: BOARD_WIDTH }, () => EMPTY_CELL));
}

function rotateClockwise(matrix: number[][]): number[][] {
  return matrix[0].map((_, colIndex) => matrix.map((row) => row[colIndex]).reverse());
}

function getShape(kind: PieceKind, rotation: number): number[][] {
  let shape = TETROMINOES[kind].shape.map((row) => [...row]);

  for (let index = 0; index < rotation % 4; index += 1) {
    shape = rotateClockwise(shape);
  }

  return shape;
}

function randomPieceKind(): PieceKind {
  return PIECE_ORDER[Math.floor(Math.random() * PIECE_ORDER.length)];
}

function spawnPiece(kind: PieceKind): ActivePiece {
  const shape = getShape(kind, 0);
  return {
    kind,
    rotation: 0,
    row: 0,
    col: Math.floor((BOARD_WIDTH - shape[0].length) / 2),
  };
}

function isValidPosition(board: Board, piece: ActivePiece, nextRow = piece.row, nextCol = piece.col, nextRotation = piece.rotation): boolean {
  const shape = getShape(piece.kind, nextRotation);

  for (let rowIndex = 0; rowIndex < shape.length; rowIndex += 1) {
    for (let colIndex = 0; colIndex < shape[rowIndex].length; colIndex += 1) {
      if (!shape[rowIndex][colIndex]) continue;

      const boardRow = nextRow + rowIndex;
      const boardCol = nextCol + colIndex;

      if (boardCol < 0 || boardCol >= BOARD_WIDTH || boardRow >= BOARD_HEIGHT) {
        return false;
      }

      if (boardRow >= 0 && board[boardRow][boardCol] !== EMPTY_CELL) {
        return false;
      }
    }
  }

  return true;
}

function placePiece(board: Board, piece: ActivePiece): Board {
  const nextBoard = board.map((row) => [...row]);
  const shape = getShape(piece.kind, piece.rotation);

  for (let rowIndex = 0; rowIndex < shape.length; rowIndex += 1) {
    for (let colIndex = 0; colIndex < shape[rowIndex].length; colIndex += 1) {
      if (!shape[rowIndex][colIndex]) continue;

      const boardRow = piece.row + rowIndex;
      const boardCol = piece.col + colIndex;

      if (boardRow >= 0) {
        nextBoard[boardRow][boardCol] = TETROMINOES[piece.kind].color;
      }
    }
  }

  return nextBoard;
}

function clearCompletedLines(board: Board): { board: Board; cleared: number } {
  const remainingRows = board.filter((row) => row.some((cell) => cell === EMPTY_CELL));
  const cleared = BOARD_HEIGHT - remainingRows.length;

  if (cleared === 0) {
    return { board, cleared: 0 };
  }

  const emptyRows = Array.from({ length: cleared }, () => Array.from({ length: BOARD_WIDTH }, () => EMPTY_CELL));
  return { board: [...emptyRows, ...remainingRows], cleared };
}

function scoreForClears(cleared: number, level: number): number {
  const scoreMap = [0, 100, 300, 500, 800];
  return scoreMap[cleared] * level;
}

function createInitialState(): GameState {
  const currentKind = randomPieceKind();
  const nextKind = randomPieceKind();
  const current = spawnPiece(currentKind);

  return {
    board: createEmptyBoard(),
    current,
    nextKind,
    score: 0,
    lines: 0,
    level: 1,
    isPaused: false,
    isGameOver: false,
  };
}

function withSpawnedPiece(board: Board, nextKind: PieceKind, score: number, lines: number, isPaused: boolean): GameState {
  const current = spawnPiece(nextKind);
  const level = Math.floor(lines / 10) + 1;
  const queuedNextKind = randomPieceKind();

  if (!isValidPosition(board, current)) {
    return {
      board,
      current,
      nextKind: queuedNextKind,
      score,
      lines,
      level,
      isPaused: false,
      isGameOver: true,
    };
  }

  return {
    board,
    current,
    nextKind: queuedNextKind,
    score,
    lines,
    level,
    isPaused,
    isGameOver: false,
  };
}

function lockCurrentPiece(state: GameState): GameState {
  const placedBoard = placePiece(state.board, state.current);
  const { board, cleared } = clearCompletedLines(placedBoard);
  const nextScore = state.score + scoreForClears(cleared, state.level);
  const nextLines = state.lines + cleared;

  return withSpawnedPiece(board, state.nextKind, nextScore, nextLines, state.isPaused);
}

function advanceGame(state: GameState): GameState {
  if (state.isPaused || state.isGameOver) return state;

  const nextRow = state.current.row + 1;

  if (isValidPosition(state.board, state.current, nextRow, state.current.col, state.current.rotation)) {
    return {
      ...state,
      current: {
        ...state.current,
        row: nextRow,
      },
    };
  }

  return lockCurrentPiece(state);
}

function getProjectedBoard(board: Board, piece: ActivePiece): Board {
  const projected = board.map((row) => [...row]);
  const shape = getShape(piece.kind, piece.rotation);

  for (let rowIndex = 0; rowIndex < shape.length; rowIndex += 1) {
    for (let colIndex = 0; colIndex < shape[rowIndex].length; colIndex += 1) {
      if (!shape[rowIndex][colIndex]) continue;

      const boardRow = piece.row + rowIndex;
      const boardCol = piece.col + colIndex;

      if (boardRow >= 0) {
        projected[boardRow][boardCol] = TETROMINOES[piece.kind].color;
      }
    }
  }

  return projected;
}

function movePiece(state: GameState, colDelta: number, rowDelta: number): GameState {
  if (state.isPaused || state.isGameOver) return state;

  const nextRow = state.current.row + rowDelta;
  const nextCol = state.current.col + colDelta;

  if (!isValidPosition(state.board, state.current, nextRow, nextCol, state.current.rotation)) {
    return state;
  }

  return {
    ...state,
    current: {
      ...state.current,
      row: nextRow,
      col: nextCol,
    },
  };
}

function rotatePiece(state: GameState): GameState {
  if (state.isPaused || state.isGameOver) return state;

  const nextRotation = (state.current.rotation + 1) % 4;
  const kickOffsets = [0, -1, 1, -2, 2];

  for (const offset of kickOffsets) {
    if (isValidPosition(state.board, state.current, state.current.row, state.current.col + offset, nextRotation)) {
      return {
        ...state,
        current: {
          ...state.current,
          col: state.current.col + offset,
          rotation: nextRotation,
        },
      };
    }
  }

  return state;
}

function hardDrop(state: GameState): GameState {
  if (state.isPaused || state.isGameOver) return state;

  let nextRow = state.current.row;

  while (isValidPosition(state.board, state.current, nextRow + 1, state.current.col, state.current.rotation)) {
    nextRow += 1;
  }

  return lockCurrentPiece({
    ...state,
    current: {
      ...state.current,
      row: nextRow,
    },
  });
}

function getTickSpeed(level: number): number {
  return Math.max(130, 720 - (level - 1) * 55);
}

function renderMiniPreview(kind: PieceKind): string[][] {
  const preview = Array.from({ length: 4 }, () => Array.from({ length: 4 }, () => EMPTY_CELL));
  const shape = getShape(kind, 0);
  const rowOffset = Math.floor((4 - shape.length) / 2);
  const colOffset = Math.floor((4 - shape[0].length) / 2);

  for (let rowIndex = 0; rowIndex < shape.length; rowIndex += 1) {
    for (let colIndex = 0; colIndex < shape[rowIndex].length; colIndex += 1) {
      if (!shape[rowIndex][colIndex]) continue;
      preview[rowOffset + rowIndex][colOffset + colIndex] = TETROMINOES[kind].color;
    }
  }

  return preview;
}

export function TetrisGame() {
  const [game, setGame] = useState<GameState>(() => createInitialState());
  const containerRef = useRef<HTMLDivElement>(null);
  const hasTrackedEngagementRef = useRef(false);
  const previousGameOverRef = useRef(false);

  const trackTetrisEngagement = (engagementType: string, inputMethod: 'keyboard' | 'button') => {
    if (hasTrackedEngagementRef.current) {
      return;
    }

    hasTrackedEngagementRef.current = true;
    trackEvent('tetris_engaged', {
      engagement_type: engagementType,
      input_method: inputMethod,
    });
  };

  useEffect(() => {
    containerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!game.isGameOver || previousGameOverRef.current) {
      previousGameOverRef.current = game.isGameOver;
      return;
    }

    trackEvent('tetris_game_over', {
      score: game.score,
      lines_cleared: game.lines,
      level_reached: game.level,
    });
    previousGameOverRef.current = true;
  }, [game.isGameOver, game.level, game.lines, game.score]);

  useEffect(() => {
    if (game.isPaused || game.isGameOver) return;

    const interval = window.setInterval(() => {
      setGame((current) => advanceGame(current));
    }, getTickSpeed(game.level));

    return () => window.clearInterval(interval);
  }, [game.isPaused, game.isGameOver, game.level]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.defaultPrevented) return;
      if (event.metaKey || event.ctrlKey || event.altKey) return;

      const target = event.target as HTMLElement | null;
      const isTyping =
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        (target?.getAttribute('contenteditable') === 'true');

      if (isTyping) return;

      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          trackTetrisEngagement('move', 'keyboard');
          setGame((current) => movePiece(current, -1, 0));
          break;
        case 'ArrowRight':
          event.preventDefault();
          trackTetrisEngagement('move', 'keyboard');
          setGame((current) => movePiece(current, 1, 0));
          break;
        case 'ArrowDown':
          event.preventDefault();
          trackTetrisEngagement('move', 'keyboard');
          setGame((current) => movePiece(current, 0, 1));
          break;
        case 'ArrowUp':
        case 'x':
        case 'X':
          event.preventDefault();
          trackTetrisEngagement('rotate', 'keyboard');
          setGame((current) => rotatePiece(current));
          break;
        case ' ':
          event.preventDefault();
          trackTetrisEngagement('drop', 'keyboard');
          setGame((current) => hardDrop(current));
          break;
        case 'p':
        case 'P':
          event.preventDefault();
          trackTetrisEngagement('pause', 'keyboard');
          setGame((current) => ({ ...current, isPaused: !current.isPaused }));
          break;
        case 'r':
        case 'R':
          event.preventDefault();
          trackTetrisEngagement('restart', 'keyboard');
          previousGameOverRef.current = false;
          setGame(createInitialState());
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const visibleBoard = useMemo(() => getProjectedBoard(game.board, game.current), [game.board, game.current]);
  const nextBoard = useMemo(() => renderMiniPreview(game.nextKind), [game.nextKind]);

  const statusText = game.isGameOver
    ? `Game over. Final score ${game.score}. Press restart to play again.`
    : game.isPaused
      ? `Game paused. Score ${game.score}.`
      : `Score ${game.score}. ${game.lines} lines cleared. Level ${game.level}.`;

  return (
    <section
      ref={containerRef}
      tabIndex={0}
      aria-label="Playable Tetris game"
      aria-describedby="tetris-instructions"
      className="h-full bg-[radial-gradient(circle_at_top,#202632_0%,#11151d_55%,#090b0f_100%)] text-[#F5F3EF] outline-none"
    >
      <div className="grid h-full gap-4 p-4 md:grid-cols-[minmax(0,1fr)_220px] md:gap-5 md:p-5">
        <div className="flex min-h-0 items-center justify-center rounded-[20px] border border-white/10 bg-black/20 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm md:p-4">
          <div
            className="grid aspect-[1/2] h-full max-h-full w-auto max-w-full gap-[3px] rounded-[16px] bg-white/[0.04] p-[6px]"
            style={{ gridTemplateColumns: `repeat(${BOARD_WIDTH}, minmax(0, 1fr))` }}
            role="img"
            aria-label={`Tetris board, score ${game.score}, level ${game.level}, ${game.lines} lines cleared`}
          >
            {visibleBoard.flatMap((row, rowIndex) =>
              row.map((cell, colIndex) => (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className="rounded-[5px] border border-black/10 bg-[#0e131b]"
                  style={{
                    backgroundColor: cell || '#0e131b',
                    boxShadow: cell ? 'inset 0 1px 0 rgba(255,255,255,0.16)' : 'none',
                  }}
                />
              )),
            )}
          </div>
        </div>

        <div className="flex min-h-0 flex-col gap-4 overflow-y-auto pr-1">
          <div className="rounded-[20px] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm">
            <div className="mb-3 flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/55">Now Playing</span>
              <span className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">
                {game.isGameOver ? 'Finished' : game.isPaused ? 'Paused' : 'Live'}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-2xl bg-black/20 p-3">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">Score</div>
                <div className="mt-2 text-[24px] font-semibold leading-none">{game.score}</div>
              </div>
              <div className="rounded-2xl bg-black/20 p-3">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">Lines</div>
                <div className="mt-2 text-[24px] font-semibold leading-none">{game.lines}</div>
              </div>
              <div className="rounded-2xl bg-black/20 p-3">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">Level</div>
                <div className="mt-2 text-[24px] font-semibold leading-none">{game.level}</div>
              </div>
            </div>
          </div>

          <div className="rounded-[20px] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm">
            <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.24em] text-white/55">Next Piece</div>
            <div
              className="grid aspect-square max-w-[132px] gap-[4px] rounded-2xl bg-black/20 p-3"
              style={{ gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' }}
              aria-hidden="true"
            >
              {nextBoard.flatMap((row, rowIndex) =>
                row.map((cell, colIndex) => (
                  <div
                    key={`next-${rowIndex}-${colIndex}`}
                    className="rounded-[4px]"
                    style={{ backgroundColor: cell || '#121722' }}
                  />
                )),
              )}
            </div>
          </div>

          <div className="rounded-[20px] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm">
            <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.24em] text-white/55">Controls</div>
            <p id="tetris-instructions" className="text-[14px] leading-[1.6] text-white/72">
              Use arrow keys to move, up arrow to rotate, space to hard drop, <span className="font-mono">P</span> to pause, and <span className="font-mono">R</span> to restart.
            </p>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => {
                  trackTetrisEngagement('rotate', 'button');
                  setGame((current) => rotatePiece(current));
                }}
                className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm text-white transition-colors hover:bg-white/10"
              >
                Rotate
              </button>
              <button
                type="button"
                onClick={() => {
                  trackTetrisEngagement('pause', 'button');
                  setGame((current) => ({ ...current, isPaused: !current.isPaused }));
                }}
                className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm text-white transition-colors hover:bg-white/10"
              >
                {game.isPaused ? 'Resume' : 'Pause'}
              </button>
              <button
                type="button"
                onClick={() => {
                  trackTetrisEngagement('move', 'button');
                  setGame((current) => movePiece(current, -1, 0));
                }}
                className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm text-white transition-colors hover:bg-white/10"
              >
                Move Left
              </button>
              <button
                type="button"
                onClick={() => {
                  trackTetrisEngagement('move', 'button');
                  setGame((current) => movePiece(current, 1, 0));
                }}
                className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm text-white transition-colors hover:bg-white/10"
              >
                Move Right
              </button>
              <button
                type="button"
                onClick={() => {
                  trackTetrisEngagement('move', 'button');
                  setGame((current) => movePiece(current, 0, 1));
                }}
                className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm text-white transition-colors hover:bg-white/10"
              >
                Soft Drop
              </button>
              <button
                type="button"
                onClick={() => {
                  trackTetrisEngagement('drop', 'button');
                  setGame((current) => hardDrop(current));
                }}
                className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm text-white transition-colors hover:bg-white/10"
              >
                Hard Drop
              </button>
            </div>

            <button
              type="button"
              onClick={() => {
                trackTetrisEngagement('restart', 'button');
                previousGameOverRef.current = false;
                setGame(createInitialState());
              }}
              className="mt-3 w-full rounded-xl border border-white/10 bg-white px-3 py-2.5 text-sm font-medium text-black transition-opacity hover:opacity-90"
            >
              Restart Game
            </button>
          </div>
        </div>
      </div>

      <div aria-live="polite" className="sr-only">
        {statusText}
      </div>
    </section>
  );
}
