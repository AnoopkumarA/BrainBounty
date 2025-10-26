import React from 'react'
import { Sparkles, Brain, Trophy, Gamepad2 } from 'lucide-react'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Brain className="absolute top-1/4 left-10 w-16 h-16 text-primary-400/20 animate-float" />
        <Trophy className="absolute top-1/3 right-20 w-20 h-20 text-accent-400/20 animate-float" style={{ animationDelay: '1s' }} />
        <Gamepad2 className="absolute bottom-1/4 left-1/4 w-12 h-12 text-primary-300/20 animate-float" style={{ animationDelay: '2s' }} />
        <Sparkles className="absolute top-1/2 right-1/3 w-14 h-14 text-accent-300/20 animate-float" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full border border-primary-400/30 mb-8 animate-slide-down">
          <Sparkles className="w-4 h-4 mr-2 text-primary-400" />
          <span className="text-sm font-semibold text-gray-200">Totally Free to Use</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up">
          <span className="text-gradient glow">BrainBounty</span>
        </h1>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-300 mb-6 animate-fade-in">
          Challenge Your Mind, Earn Rewards
        </h2>

        <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          A fun and challenging puzzle and quiz game designed to improve your logical thinking, 
          problem-solving, and math skills. Play, learn, and unlock amazing features with game coins!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <button className="group px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full text-white font-bold text-lg hover:shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 transform hover:scale-105 flex items-center">
            <span>Download Now</span>
            <Sparkles className="ml-2 w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
          </button>
          <a
            href="#features"
            className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-primary-400/30 rounded-full text-white font-bold text-lg hover:bg-slate-700/50 hover:border-primary-400/50 transition-all duration-300 transform hover:scale-105"
          >
            Explore Features
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          {[
            { icon: Brain, label: 'Math Quizzes', value: '15+' },
            { icon: Gamepad2, label: 'Puzzle Levels', value: '10+' },
            { icon: Trophy, label: 'Achievements', value: '30+' },
            { icon: Sparkles, label: 'Themes', value: '4' },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-primary-400/20 hover:border-primary-400/40 hover:bg-slate-800/50 transition-all duration-300 group"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary-400 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-500/30 rounded-full blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: '1s' }} />
    </section>
  )
}

export default Hero

