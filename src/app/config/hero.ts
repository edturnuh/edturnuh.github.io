// ========================================
// HERO ANIMATION CONFIG
// ========================================

// Rotating text array - add or remove items as needed
export const ROTATING_TEXT = [
  'unlock revenue',
  'boost conversion',
  'streamline ops',
  'transform websites.',
];

// Animation timing (in milliseconds)
export const HERO_ANIMATION = {
  // How long each word is displayed before transitioning (in ms)
  displayDuration: 2800, // 3 seconds - increase this to slow down
  
  // How long the transition animation takes (in ms)
  transitionDuration: 200, // 0.25 seconds
  
  // Total cycle time = displayDuration + transitionDuration
  // Current: 3000ms visible + 250ms transition = 3.25s per word
};
