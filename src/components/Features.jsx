import React from 'react'
import { Calculator, Puzzle, SkipForward, Palette, Coins, RefreshCw, Trophy, Zap, Target, Brain } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Calculator,
      title: 'BrainBounty Quiz',
      subtitle: 'Test Your Math Skills',
      description: 'Challenge yourself with engaging math quizzes designed for all skill levels. From basic arithmetic to complex problems, improve your mathematical thinking while earning rewards.',
      color: 'from-blue-500 to-cyan-500',
      highlights: [
        {
          icon: Target,
          title: 'Easy & Hard Quizzes',
          description: 'Multiple difficulty levels from beginner to expert',
        },
        {
          icon: SkipForward,
          title: 'Skip Hard Questions',
          description: 'Watch ads to skip challenging questions',
        },
        {
          icon: Coins,
          title: 'Score-Based Rewards',
          description: 'Earn coins based on your performance',
        },
        {
          icon: Palette,
          title: 'Unlock Themes',
          description: 'Personalize with stunning theme collections',
        },
      ],
    },
    {
      icon: Puzzle,
      title: 'Block Fit Puzzle',
      subtitle: 'Master Spatial Reasoning',
      description: 'Exercise your brain with addictive block-fitting puzzles. Drag, drop, and arrange shapes to complete levels while developing your spatial awareness and problem-solving abilities.',
      color: 'from-purple-500 to-pink-500',
      highlights: [
        {
          icon: Puzzle,
          title: 'Progressive Levels',
          description: 'Unlock new challenging levels with coins',
        },
        {
          icon: Brain,
          title: 'Shape Challenges',
          description: 'Multiple shapes and increasing complexity',
        },
        {
          icon: RefreshCw,
          title: 'Smart Helpers',
          description: 'Restart or reshuffle when you need a fresh start',
        },
        {
          icon: Trophy,
          title: 'Earn Rewards',
          description: 'Complete levels to earn game coins',
        },
      ],
    },
  ]

  return (
    <section id="features" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
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

        {/* Features - Alternating Layout */}
        <div className="space-y-32">
          {features.map((feature, featureIndex) => (
            <div
              key={featureIndex}
              className={`relative flex flex-col ${
                featureIndex % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 lg:gap-16 items-center`}
            >
              {/* Content Side */}
              <div className="flex-1 space-y-8">
                {/* Header */}
                <div className="space-y-4">
                  <div className="inline-flex items-center space-x-3">
                    <div className={`p-3 bg-gradient-to-r ${feature.color} rounded-2xl`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className={`text-sm font-semibold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                      {feature.subtitle}
                    </span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Feature List */}
                <div className="space-y-4">
                  {feature.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-primary-400/30 hover:bg-slate-800/50 transition-all duration-300 group"
                    >
                      <div className={`flex-shrink-0 p-2 bg-gradient-to-r ${feature.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                        <highlight.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-1">
                          {highlight.title}
                        </h4>
                        <p className="text-sm text-gray-400">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <button className={`px-8 py-4 bg-gradient-to-r ${feature.color} rounded-full text-white font-bold text-lg hover:shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2`}>
                    <span>Try {feature.title}</span>
                    <Zap className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Image/Visual Side */}
              <div className="flex-1 relative">
                <div className="relative">
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} blur-3xl opacity-20 animate-pulse-slow`} />
                  
                  {/* Main Visual Container */}
                  <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl border border-slate-700/50 p-8 lg:p-12">
                    {/* Mockup/Placeholder for Screenshot */}
                    <div className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${feature.color} p-1`}>
                      <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center relative overflow-hidden p-6">
                        {/* Animated Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-white to-transparent rounded-full blur-2xl animate-float" />
                          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-white to-transparent rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
                        </div>
                        
                        {/* Quiz Questions Display */}
                        {featureIndex === 0 ? (
                          <div className="relative z-10 w-full h-full overflow-y-auto space-y-3 pr-2">
                            {/* Question 1 - Calculus */}
                            <div className="bg-slate-800/90 backdrop-blur-sm rounded-xl p-4 border border-blue-400/40 animate-slide-up">
                              <div className="flex items-center justify-between mb-3">
                                <span className="text-xs text-blue-300 font-semibold">Q1/10 • Calculus</span>
                                <span className="px-2 py-1 bg-blue-500/20 rounded text-xs text-blue-300">2 pts</span>
                              </div>
                              <p className="text-white text-sm mb-3 leading-relaxed">Evaluate: ∫(3x² + 2x - 5)dx</p>
                              <div className="space-y-2">
                                <div className="flex items-center space-x-2 p-2 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer">
                                  <span className="text-cyan-400 font-semibold">A.</span>
                                  <span className="text-gray-300 text-sm">x³ + x² - 5x + C</span>
                                </div>
                                <div className="flex items-center space-x-2 p-2 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer">
                                  <span className="text-cyan-400 font-semibold">B.</span>
                                  <span className="text-gray-300 text-sm">3x³ + 2x² - 5x</span>
                                </div>
                                <div className="flex items-center space-x-2 p-2 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer">
                                  <span className="text-cyan-400 font-semibold">C.</span>
                                  <span className="text-gray-300 text-sm">x³ + x² - 5</span>
                                </div>
                              </div>
                            </div>

                            {/* Question 2 - Trigonometry */}
                            <div className="bg-slate-800/90 backdrop-blur-sm rounded-xl p-4 border border-purple-400/40 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                              <div className="flex items-center justify-between mb-3">
                                <span className="text-xs text-purple-300 font-semibold">Q2/10 • Trigonometry</span>
                                <span className="px-2 py-1 bg-purple-500/20 rounded text-xs text-purple-300">1 pt</span>
                              </div>
                              <p className="text-white text-sm mb-3">If sin(θ) = 3/5 and θ is in QII, find cos(θ)</p>
                              <input 
                                type="text" 
                                placeholder="Enter your answer..."
                                className="w-full p-3 bg-slate-700/50 rounded-lg text-white text-sm border border-slate-600 focus:border-purple-400 focus:outline-none"
                                disabled
                              />
                            </div>

                            {/* Question 3 - Limits */}
                            <div className="bg-slate-800/90 backdrop-blur-sm rounded-xl p-4 border border-cyan-400/40 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                              <div className="flex items-center justify-between mb-3">
                                <span className="text-xs text-cyan-300 font-semibold">Q3/10 • Limits</span>
                                <span className="px-2 py-1 bg-cyan-500/20 rounded text-xs text-cyan-300">2 pts</span>
                              </div>
                              <p className="text-white text-sm mb-3">lim(x→2) (x² - 4)/(x - 2) = ?</p>
                              <div className="grid grid-cols-2 gap-2">
                                <button className="p-2 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors text-gray-300 text-sm">0</button>
                                <button className="p-2 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors text-gray-300 text-sm">4</button>
                                <button className="p-2 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors text-gray-300 text-sm">∞</button>
                                <button className="p-2 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors text-gray-300 text-sm">DNE</button>
                              </div>
                            </div>
                          </div>
                        ) : (
                          /* Block Puzzle Display */
                          <div className="relative z-10 w-full h-full flex items-center justify-center">
                            <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/40 w-full max-w-md">
                              {/* Puzzle Grid */}
                              <div className="grid grid-cols-6 gap-2 mb-6">
                                {Array.from({ length: 36 }).map((_, idx) => {
                                  const filled = [0, 1, 2, 6, 7, 8, 12, 13, 14, 18, 19, 24, 25, 30].includes(idx);
                                  return (
                                    <div
                                      key={idx}
                                      className={`aspect-square rounded-lg transition-all duration-300 ${
                                        filled
                                          ? 'bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50'
                                          : 'bg-slate-700/40 border-2 border-slate-600/30 border-dashed'
                                      }`}
                                    />
                                  );
                                })}
                              </div>

                              {/* Available Shapes */}
                              <div className="border-t border-slate-700 pt-4">
                                <p className="text-xs text-purple-300 mb-3 font-semibold text-center">Available Shapes</p>
                                <div className="flex gap-4 justify-center">
                                  {/* L-Shape */}
                                  <div className="grid grid-cols-2 gap-1">
                                    <div className="w-7 h-7 bg-gradient-to-br from-pink-500 to-orange-500 rounded-md shadow-lg"></div>
                                    <div className="w-7 h-7"></div>
                                    <div className="w-7 h-7 bg-gradient-to-br from-pink-500 to-orange-500 rounded-md shadow-lg"></div>
                                    <div className="w-7 h-7 bg-gradient-to-br from-pink-500 to-orange-500 rounded-md shadow-lg"></div>
                                  </div>
                                  {/* Square */}
                                  <div className="grid grid-cols-2 gap-1">
                                    <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-md shadow-lg"></div>
                                    <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-md shadow-lg"></div>
                                    <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-md shadow-lg"></div>
                                    <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-md shadow-lg"></div>
                                  </div>
                                  {/* I-Shape */}
                                  <div className="flex gap-1">
                                    <div className="w-7 h-7 bg-gradient-to-br from-green-500 to-emerald-500 rounded-md shadow-lg"></div>
                                    <div className="w-7 h-7 bg-gradient-to-br from-green-500 to-emerald-500 rounded-md shadow-lg"></div>
                                    <div className="w-7 h-7 bg-gradient-to-br from-green-500 to-emerald-500 rounded-md shadow-lg"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Floating Elements */}
                        
                        <div className={`absolute bottom-4 left-4 px-4 py-2 bg-slate-800/90 backdrop-blur-sm rounded-full text-white text-sm font-semibold border border-slate-700 animate-pulse shadow-xl`}>
                          Level {featureIndex + 1}
                        </div>
                      </div>
                    </div>

                    {/* Decorative Stats */}
                    <div className="grid grid-cols-3 gap-4 mt-6">
                      {['100+ Levels', '50K+ Players', '4.8★ Rating'].map((stat, idx) => (
                        <div key={idx} className="text-center p-3 bg-slate-800/50 rounded-xl border border-slate-700/50">
                          <p className="text-xs text-gray-400 font-semibold">{stat}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className={`absolute ${featureIndex % 2 === 0 ? '-right-20' : '-left-20'} top-1/2 w-64 h-64 bg-gradient-to-r ${feature.color} rounded-full blur-3xl opacity-20 pointer-events-none`} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA - Professional Banner */}
        <div className="mt-32 relative">
          {/* Background Gradient Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-accent-500/10 to-primary-500/10 blur-3xl" />
          
          <div className="relative bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-900/60 backdrop-blur-xl rounded-3xl border border-slate-700/50 overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full blur-3xl animate-pulse-slow" />
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-br from-accent-500 to-primary-500 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
            </div>

            <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center p-8 lg:p-16">
              {/* Left: Content */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full border border-primary-400/30 mb-6">
                  <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-primary-300">Available Now</span>
                </div>

                <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  Ready to Elevate Your
                  <br />
                  <span className="text-gradient">Cognitive Skills?</span>
                </h3>
                
                <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-lg">
                  Join thousands of users worldwide who are already boosting their brain power with BrainBounty's scientifically-designed challenges.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/50 hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-500 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative flex items-center justify-center space-x-2">
                      <span>Download Free</span>
                      <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </button>

                  <button className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl text-white font-semibold text-lg hover:bg-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:scale-105">
                    View Demo
                  </button>
                </div>

                <div className="flex items-center justify-center lg:justify-start space-x-6 mt-8 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>No credit card</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>100% Free</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Cancel anytime</span>
                  </div>
                </div>
              </div>

              {/* Right: Stats & Features */}
              <div className="grid grid-cols-2 gap-4">
                {/* Stat Card 1 */}
                <div className="group p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-primary-400/50 transition-all duration-500 hover:-translate-y-1">
                  <div className="text-3xl font-bold text-gradient mb-2">50K+</div>
                  <div className="text-sm text-gray-400">Active Users</div>
                  <div className="mt-3 flex items-center space-x-1">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs text-green-400 font-medium">+23% this month</span>
                  </div>
                </div>

                {/* Stat Card 2 */}
                <div className="group p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-accent-400/50 transition-all duration-500 hover:-translate-y-1">
                  <div className="text-3xl font-bold text-gradient mb-2">4.8★</div>
                  <div className="text-sm text-gray-400">App Rating</div>
                  <div className="mt-3 flex -space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 border-2 border-slate-800" />
                    ))}
                  </div>
                </div>

                {/* Stat Card 3 */}
                <div className="group p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-500 hover:-translate-y-1">
                  <div className="text-3xl font-bold text-gradient mb-2">150+</div>
                  <div className="text-sm text-gray-400">Challenges</div>
                  <div className="mt-3 h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse" style={{ width: '75%' }} />
                  </div>
                </div>

                {/* Stat Card 4 */}
                <div className="group p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-green-400/50 transition-all duration-500 hover:-translate-y-1">
                  <div className="text-3xl font-bold text-gradient mb-2">1M+</div>
                  <div className="text-sm text-gray-400">Questions Solved</div>
                  <div className="mt-3 flex items-center space-x-1">
                    <div className="flex -space-x-2">
                      <div className="w-5 h-5 rounded-full bg-primary-500 animate-pulse" />
                      <div className="w-5 h-5 rounded-full bg-accent-500 animate-pulse" style={{ animationDelay: '0.2s' }} />
                      <div className="w-5 h-5 rounded-full bg-cyan-500 animate-pulse" style={{ animationDelay: '0.4s' }} />
                    </div>
                    <span className="text-xs text-gray-500">Live activity</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Gradient Line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-400 to-transparent opacity-50" />
          </div>
        </div>
      </div>

      {/* SVG Gradient Definitions */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#d946ef" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  )
}

export default Features

