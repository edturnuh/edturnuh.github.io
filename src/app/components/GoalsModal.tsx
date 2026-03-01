import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { X } from 'lucide-react';

interface GoalsModalProps {
  isOpen: boolean;
  onClose: () => void;
  website: string;
}

const goals = [
  'Boost Page Speed',
  'Increase Conversions',
  'Mobile-First Redesign',
  'Modernise CMS',
  'Higher SEO Rankings',
  'Accessibility Compliance',
  'Harden Site Security',
  'Personalise Content',
  'Fix Analytics Tracking',
  'Streamline Publishing',
];

export function GoalsModal({ isOpen, onClose, website }: GoalsModalProps) {
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);

  const toggleGoal = (goal: string) => {
    setSelectedGoals((prev) =>
      prev.includes(goal)
        ? prev.filter((g) => g !== goal)
        : [...prev, goal]
    );
  };

  const handleNext = () => {
    // Here you could handle form submission, send data to an API, etc.
    console.log('Website:', website);
    console.log('Selected Goals:', selectedGoals);
    onClose();
    // Reset selections after closing
    setSelectedGoals([]);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="bg-gradient-to-br from-neutral-900 to-black border border-white/10 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden pointer-events-auto"
            >
              {/* Header */}
              <div className="px-8 py-6 border-b border-white/10 flex items-start justify-between">
                <div>
                  <h2 className="text-[28px] font-medium text-white mb-2">
                    What would you like to improve?
                  </h2>
                  <p className="text-[15px] text-neutral-400">
                    Select all that apply for{' '}
                    <span className="text-blue-400 font-medium">{website}</span>
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="text-neutral-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/5"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Goals Grid */}
              <div className="px-8 py-6 overflow-y-auto max-h-[60vh]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {goals.map((goal) => {
                    const isSelected = selectedGoals.includes(goal);
                    return (
                      <button
                        key={goal}
                        onClick={() => toggleGoal(goal)}
                        className={`
                          px-5 py-4 rounded-lg border text-left transition-all
                          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-neutral-900
                          ${
                            isSelected
                              ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-blue-500/50 text-white'
                              : 'bg-white/5 border-white/10 text-neutral-300 hover:bg-white/10 hover:border-white/20'
                          }
                        `}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`
                            w-5 h-5 rounded border-2 flex items-center justify-center transition-all
                            ${
                              isSelected
                                ? 'bg-blue-500 border-blue-500'
                                : 'border-neutral-500'
                            }
                          `}
                          >
                            {isSelected && (
                              <svg
                                className="w-3 h-3 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={3}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            )}
                          </div>
                          <span className="text-[15px] font-medium">{goal}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Footer */}
              <div className="px-8 py-6 border-t border-white/10 flex items-center justify-between">
                <p className="font-mono text-[13px] text-neutral-500 uppercase tracking-wider">
                  {selectedGoals.length} goal{selectedGoals.length !== 1 ? 's' : ''} selected
                </p>
                <button
                  onClick={handleNext}
                  disabled={selectedGoals.length === 0}
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-neutral-900 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  Next
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}