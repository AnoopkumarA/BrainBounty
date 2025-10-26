import React from 'react'
import { Brain, Target, TrendingUp, Zap } from 'lucide-react'

const About = () => {
  const benefits = [
    {
      icon: Brain,
      title: 'Boost Logic',
      description: 'Enhance your logical thinking and reasoning abilities through carefully designed challenges.',
    },
    {
      icon: Target,
      title: 'Problem Solving',
      description: 'Master complex problem-solving techniques with progressive difficulty levels.',
    },
    {
      icon: TrendingUp,
      title: 'Math Skills',
      description: 'Improve your mathematical abilities with engaging quizzes and puzzles.',
    },
    {
      icon: Zap,
      title: 'Quick Thinking',
      description: 'Train your brain to think faster and make better decisions under pressure.',
    },
  ]

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full border border-primary-400/30 text-sm font-semibold text-primary-400 mb-4">
            About BrainBounty
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-6">
            Your Brain's New Best Friend
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            BrainBounty is more than just a game—it's a comprehensive brain training platform 
            that makes learning fun and rewarding.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Description */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">
              What Makes BrainBounty Special?
            </h3>
            <p className="text-lg text-gray-400">
              BrainBounty combines entertainment with education, offering a unique gaming experience 
              that challenges your mind while keeping you engaged. Whether you're solving math quizzes 
              or fitting blocks in puzzles, every moment is designed to enhance your cognitive abilities.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-300">
                  <span className="font-semibold text-white">Progressive Difficulty:</span> Start easy and gradually challenge yourself with harder levels.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-300">
                  <span className="font-semibold text-white">Rewarding System:</span> Earn coins for every achievement and unlock exciting features.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-300">
                  <span className="font-semibold text-white">Completely Free:</span> No hidden costs, no subscriptions—just pure brain-training fun.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Visual Element */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-primary-400/30 card-glow">
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full blur-2xl opacity-50 animate-pulse-slow" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-accent-500 to-primary-500 rounded-full blur-2xl opacity-50 animate-pulse-slow" style={{ animationDelay: '1s' }} />
              
              <div className="relative z-10 text-center">
                <Brain className="w-24 h-24 mx-auto mb-6 text-primary-400 animate-float" />
                <h4 className="text-2xl font-bold text-white mb-4">Train Your Brain Daily</h4>
                <p className="text-gray-400">
                  Join thousands of players who are already boosting their cognitive skills with BrainBounty.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-6 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-primary-400/20 hover:border-primary-400/40 hover:bg-slate-800/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative inline-block mb-4">
                <benefit.icon className="w-12 h-12 text-primary-400 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 blur-xl bg-primary-400 opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">{benefit.title}</h4>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

