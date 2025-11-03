import React, { useState, useEffect } from 'react'
import { Brain, Target, TrendingUp, Zap, Award, Users, Star, CheckCircle2 } from 'lucide-react'

const About = () => {
  const [activeMetric, setActiveMetric] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % 3)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const metrics = [
    { value: '50K+', label: 'Active Users', icon: Users },
    { value: '1M+', label: 'Questions Solved', icon: CheckCircle2 },
    { value: '4.8★', label: 'App Rating', icon: Star },
  ]

  const benefits = [
    {
      icon: Brain,
      title: 'Cognitive Enhancement',
      description: 'Scientifically-designed challenges to improve logical thinking and reasoning abilities.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Target,
      title: 'Problem Solving',
      description: 'Master complex problem-solving techniques with progressive difficulty levels.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: TrendingUp,
      title: 'Mathematical Proficiency',
      description: 'Build strong mathematical foundations with engaging quizzes and puzzles.',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Zap,
      title: 'Quick Decision Making',
      description: 'Train your brain to think faster and make better decisions under pressure.',
      gradient: 'from-orange-500 to-red-500',
    },
  ]

  const features = [
    {
      title: 'Progressive Difficulty',
      description: 'Adaptive learning path that grows with your skills',
    },
    {
      title: 'Rewarding Experience',
      description: 'Earn coins and unlock features as you progress',
    },
    {
      title: 'Completely Free',
      description: 'No subscriptions, no hidden costs—just pure learning',
    },
  ]

  return (
    <section id="about" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-24">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-full border border-primary-400/20 text-sm font-medium text-primary-300 mb-6">
            About BrainBounty
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Your Brain's New
            <br />
            <span className="text-gradient">Best Friend</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            BrainBounty is more than just a game—it's a comprehensive brain training platform 
            that makes learning fun and rewarding.
          </p>
        </div>

        {/* Animated Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`relative p-8 bg-slate-800/30 backdrop-blur-sm rounded-2xl border transition-all duration-700 ${
                activeMetric === index
                  ? 'border-primary-400/60 bg-slate-800/50 scale-105'
                  : 'border-slate-700/50'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <metric.icon className={`w-8 h-8 transition-colors duration-700 ${
                  activeMetric === index ? 'text-primary-400' : 'text-gray-500'
                }`} />
                <div className={`h-2 w-2 rounded-full transition-all duration-700 ${
                  activeMetric === index ? 'bg-primary-400 shadow-lg shadow-primary-400/50' : 'bg-gray-600'
                }`} />
              </div>
              <div className="text-4xl font-bold text-white mb-2">{metric.value}</div>
              <div className="text-sm text-gray-400">{metric.label}</div>
              
              {activeMetric === index && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-accent-500/5 rounded-2xl pointer-events-none" />
              )}
            </div>
          ))}
        </div>

        {/* Main Content - Professional Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Left: Description */}
          <div className="space-y-8">
            <h3 className="text-4xl font-bold text-white leading-tight">
              What Makes BrainBounty Special?
            </h3>
            <p className="text-lg text-gray-400 leading-relaxed">
              BrainBounty combines entertainment with education, offering a unique gaming experience 
              that challenges your mind while keeping you engaged. Whether you're solving math quizzes 
              or fitting blocks in puzzles, every moment is designed to enhance your cognitive abilities.
            </p>
            
            <div className="space-y-6 pt-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group flex items-start space-x-4 p-5 rounded-xl bg-slate-800/20 border border-slate-700/30 hover:border-primary-400/30 hover:bg-slate-800/40 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Animated Visual */}
          <div className="relative">
            {/* Animated Background Orbs */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full blur-3xl animate-pulse-slow" />
            </div>

            {/* Main Visual Card */}
            <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-12 border border-slate-700/50 shadow-2xl">
              {/* Animated Logo */}
              <div className="text-center mb-8">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 blur-2xl opacity-50 animate-pulse-slow" />
                  <img 
                    src="/brainbounty.png" 
                    alt="BrainBounty Logo" 
                    className="relative w-32 h-32 mx-auto animate-float"
                  />
                </div>
              </div>

              <h4 className="text-3xl font-bold text-white mb-4 text-center">
                Train Your Brain Daily
              </h4>
              <p className="text-gray-400 text-center mb-8 leading-relaxed">
                Join thousands of players who are already boosting their cognitive skills with BrainBounty.
              </p>

              {/* Mini Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                  <div className="text-2xl font-bold text-primary-400 mb-1">150+</div>
                  <div className="text-xs text-gray-500">Challenges</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                  <div className="text-2xl font-bold text-accent-400 mb-1">50+</div>
                  <div className="text-xs text-gray-500">Puzzles</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">10+</div>
                  <div className="text-xs text-gray-500">Themes</div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full blur-2xl opacity-40 animate-pulse-slow" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-accent-500 to-primary-500 rounded-full blur-2xl opacity-40 animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
          </div>
        </div>

        {/* Benefits Grid - Modern Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative p-8 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-primary-400/40 transition-all duration-500 hover:-translate-y-2"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Gradient Overlay on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className="relative mb-6">
                <div className={`inline-flex p-4 bg-gradient-to-br ${benefit.gradient} rounded-xl group-hover:scale-110 transition-transform duration-500`}>
                  <benefit.icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
              </div>

              {/* Content */}
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-colors duration-300">
                {benefit.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {benefit.description}
              </p>

              {/* Decorative Line */}
              <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${benefit.gradient} w-0 group-hover:w-full transition-all duration-500 rounded-full`} />
            </div>
          ))}
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  )
}

export default About

