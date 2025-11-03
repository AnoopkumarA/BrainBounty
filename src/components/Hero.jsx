import React from 'react'
import { ArrowRight, CheckCircle2, Star } from 'lucide-react'

const Hero = () => {
  const stats = [
    { value: '50K+', label: 'Active Users', trend: '+23%' },
    { value: '1M+', label: 'Questions Solved', trend: '+45%' },
    { value: '4.8', label: 'App Rating', stars: true },
    { value: '150+', label: 'Challenges', trend: 'Growing' },
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Professional Grid Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e520_1px,transparent_1px),linear-gradient(to_bottom,#4f46e520_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900" />
      </div>

      {/* Animated Gradient Mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700/50 mb-8 animate-slide-down">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-300">Free • No Credit Card Required</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight animate-slide-up">
            <span className="text-gradient">Brain</span>
            <span className="text-gradient">Bounty</span>
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-300 mb-8 animate-fade-in">
            Challenge Your Mind,
            <br className="hidden sm:inline" /> Earn Rewards
          </h2>

          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            A comprehensive brain training platform designed to enhance your cognitive abilities 
            through scientifically-designed puzzles and quizzes. Build skills while earning rewards.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <button className="group relative px-8 py-5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl text-white font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/50 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-500 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center space-x-2">
                <span>Download Free</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
            
            <a
              href="#features"
              className="px-8 py-5 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl text-white font-bold text-lg hover:bg-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:scale-105"
            >
              Explore Features
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span>No subscription</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span>100% Free</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span>No ads required</span>
            </div>
          </div>
        </div>

        {/* Professional Stats Grid */}
        <div className="mt-24 mb-20 px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: '0.7s' }}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative p-8 bg-slate-800/30 backdrop-blur-xl rounded-2xl border border-slate-700/50 hover:border-primary-400/50 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
                
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl font-bold text-white">{stat.value}</div>
                    {stat.stars ? (
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    ) : stat.trend && (
                      <span className="px-3 py-1.5 bg-green-500/20 rounded-lg text-xs text-green-400 font-semibold">
                        {stat.trend}
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-gray-400 font-medium mb-4">{stat.label}</div>
                  
                  {/* Progress bar for visual interest */}
                  <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transition-all duration-1000 group-hover:w-full" 
                      style={{ width: '75%' }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-400/50 to-transparent" />
    </section>
  )
}

export default Hero

