import React from 'react'
import { Calculator, Puzzle, SkipForward, Palette, Coins, RefreshCw } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Calculator,
      title: 'BrainBounty Quiz',
      color: 'from-blue-500 to-cyan-500',
      highlights: [
        {
          icon: SkipForward,
          title: 'Easy & Hard Quizzes',
          description: 'Challenge yourself with math quizzes ranging from easy to expert level.',
        },
        {
          icon: SkipForward,
          title: 'Skip Hard Questions',
          description: 'Watch ads to skip challenging questions and keep your momentum going.',
        },
        {
          icon: Coins,
          title: 'Score-Based Rewards',
          description: 'Earn game coins based on your performance. The better you score, the more you earn!',
        },
        {
          icon: Palette,
          title: 'Unlock Themes',
          description: 'Use your earned coins to unlock stunning themes and personalize your experience.',
        },
      ],
    },
    {
      icon: Puzzle,
      title: 'Block Fit Puzzle',
      color: 'from-purple-500 to-pink-500',
      highlights: [
        {
          icon: Coins,
          title: 'Unlock Levels',
          description: 'Each puzzle level requires a one-time unlock for just 50 game coins.',
        },
        {
          icon: Puzzle,
          title: 'Shape Challenges',
          description: 'Play with different shapes and complete levels to earn more coins.',
        },
        {
          icon: RefreshCw,
          title: 'Restart or Reshuffle',
          description: 'Stuck? Use coins to restart the puzzle or reshuffle shapes for a fresh perspective.',
        },
        {
          icon: Calculator,
          title: 'Progressive Difficulty',
          description: 'Start simple and advance to complex puzzles that test your spatial reasoning.',
        },
      ],
    },
  ]

  return (
    <section id="features" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full border border-primary-400/30 text-sm font-semibold text-primary-400 mb-4">
            Game Modes
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-6">
            Two Ways to Challenge Yourself
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose your preferred brain workout: test your math skills with quizzes or 
            master spatial reasoning with block puzzles.
          </p>
        </div>

        {/* Features */}
        <div className="space-y-16">
          {features.map((feature, featureIndex) => (
            <div
              key={featureIndex}
              className="relative"
            >
              {/* Feature Header */}
              <div className="flex items-center justify-center mb-12">
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} blur-2xl opacity-50 animate-pulse-slow`} />
                  <div className={`relative flex items-center space-x-4 px-8 py-4 bg-gradient-to-r ${feature.color} rounded-2xl`}>
                    <feature.icon className="w-10 h-10 text-white" />
                    <h3 className="text-3xl font-bold text-white">{feature.title}</h3>
                  </div>
                </div>
              </div>

              {/* Highlights Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {feature.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="group relative p-6 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-primary-400/20 hover:border-primary-400/40 hover:bg-slate-800/50 transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Icon */}
                    <div className="relative inline-block mb-4">
                      <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
                      <div className={`relative p-3 bg-gradient-to-r ${feature.color} rounded-xl`}>
                        <highlight.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <h4 className="text-xl font-bold text-white mb-2">{highlight.title}</h4>
                    <p className="text-gray-400">{highlight.description}</p>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/0 to-accent-500/0 group-hover:from-primary-500/5 group-hover:to-accent-500/5 transition-all duration-300 pointer-events-none" />
                  </div>
                ))}
              </div>

              {/* Decorative Element */}
              {featureIndex === 0 && (
                <div className="absolute -right-10 top-1/2 w-40 h-40 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
              )}
              {featureIndex === 1 && (
                <div className="absolute -left-10 top-1/2 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl border border-primary-400/30">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Brain Journey?</h3>
            <p className="text-gray-400 mb-6">Download BrainBounty now and unlock your full potential!</p>
            <button className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full text-white font-bold text-lg hover:shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 transform hover:scale-105">
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features

