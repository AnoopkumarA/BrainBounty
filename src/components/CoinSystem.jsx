import React, { useState } from 'react'
import { Coins, ArrowRight, TrendingUp, Zap, CheckCircle2 } from 'lucide-react'

const CoinSystem = () => {
  const [activeTab, setActiveTab] = useState('earn')

  const earnMethods = [
    {
      title: 'Complete Quizzes',
      description: 'Answer math questions correctly and earn coins based on your score and difficulty level',
      value: '20-200 coins',
      gradient: 'from-blue-500 to-cyan-500',
      stat: 'Up to 200 coins per quiz',
    },
    {
      title: 'Finish Puzzle Levels',
      description: 'Complete block fit puzzles to earn coins. Higher levels reward more coins',
      value: '30-150 coins',
      gradient: 'from-purple-500 to-pink-500',
      stat: 'Earn more with difficulty',
    },
    {
      title: 'Watch Rewarded Ads',
      description: 'Opt-in to watch video ads and get instant coin rewards anytime you need them',
      value: '10-50 coins',
      gradient: 'from-orange-500 to-red-500',
      stat: 'Instant rewards',
    },
    {
      title: 'Open Mystery Boxes',
      description: 'Daily mystery boxes contain random coin rewards. Check back every day',
      value: '5-100 coins',
      gradient: 'from-green-500 to-emerald-500',
      stat: 'Daily opportunities',
    },
  ]

  const usageOptions = [
    {
      title: 'Unlock Premium Themes',
      description: 'Choose from 10+ beautiful themes to personalize your app experience',
      cost: 'Varies by theme',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      title: 'Access Puzzle Levels',
      description: 'Unlock new challenging Block Fit Puzzle levels progressively',
      cost: '50 coins per level',
      gradient: 'from-purple-500 to-indigo-500',
    },
    {
      title: 'Power-Ups & Helpers',
      description: 'Use coins to restart puzzles or reshuffle shapes when stuck',
      cost: '15-20 coins',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Skip Hard Questions',
      description: 'Use coins to skip difficult quiz questions and maintain momentum',
      cost: '25 coins per skip',
      gradient: 'from-orange-500 to-amber-500',
    },
  ]

  return (
    <section id="coins" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-24">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-full border border-primary-400/20 text-sm font-medium text-primary-300 mb-6">
            Reward System
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Earn & Spend
            <br />
            <span className="text-gradient">Game Coins</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A transparent, rewarding system where your progress directly translates to in-app currency. 
            No real money required—just skill and dedication.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-2 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50">
            <button
              onClick={() => setActiveTab('earn')}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'earn'
                  ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/50'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <span className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5" />
                <span>Earn Coins</span>
              </span>
            </button>
            <button
              onClick={() => setActiveTab('spend')}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'spend'
                  ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/50'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <span className="flex items-center space-x-2">
                <Zap className="w-5 h-5" />
                <span>Use Coins</span>
              </span>
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="relative">
          {/* Earn Section */}
          {activeTab === 'earn' && (
            <div className="space-y-24 animate-fade-in">
              {earnMethods.map((method, index) => (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${method.gradient} bg-opacity-10 rounded-full border border-primary-400/20 mb-6`}>
                      <div className={`w-2 h-2 bg-gradient-to-r ${method.gradient} rounded-full mr-2 animate-pulse`} />
                      <span className="text-sm font-medium text-gray-300">{method.stat}</span>
                    </div>

                    <h3 className="text-4xl font-bold text-white mb-6">
                      {method.title}
                    </h3>
                    
                    <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                      {method.description}
                    </p>

                    <div className="flex items-center space-x-6">
                      <div className={`px-6 py-3 bg-gradient-to-r ${method.gradient} rounded-xl`}>
                        <div className="text-2xl font-bold text-white">{method.value}</div>
                      </div>
                      <button className="group flex items-center space-x-2 text-primary-400 hover:text-primary-300 font-semibold transition-colors duration-300">
                        <span>Learn more</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>

                  {/* Visual Mockup */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-3xl p-12 border border-slate-700/50">
                      {/* Animated Background */}
                      <div className="absolute inset-0 opacity-10">
                        <div className={`absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r ${method.gradient} rounded-full blur-2xl animate-pulse-slow`} />
                      </div>

                      {/* Coin Animation */}
                      <div className="relative">
                        <div className="flex items-center justify-center mb-8">
                          <div className={`relative w-32 h-32 bg-gradient-to-br ${method.gradient} rounded-full flex items-center justify-center animate-float`}>
                            <Coins className="w-16 h-16 text-white" strokeWidth={1.5} />
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full" />
                          </div>
                        </div>

                        {/* Floating Value */}
                        <div className="flex justify-center space-x-4 mb-6">
                          {['+50', '+100', '+200'].map((val, i) => (
                            <div
                              key={i}
                              className={`px-4 py-2 bg-slate-800/80 backdrop-blur-sm rounded-lg border border-slate-700 text-primary-400 font-bold animate-float`}
                              style={{ animationDelay: `${i * 0.3}s` }}
                            >
                              {val}
                            </div>
                          ))}
                        </div>

                        {/* Progress */}
                        <div className="space-y-3">
                          <div className="flex justify-between text-sm text-gray-400 mb-2">
                            <span>Progress</span>
                            <span>75%</span>
                          </div>
                          <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                            <div className={`h-full bg-gradient-to-r ${method.gradient} rounded-full transition-all duration-1000`} style={{ width: '75%' }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Spend Section */}
          {activeTab === 'spend' && (
            <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
              {usageOptions.map((option, index) => (
                <div
                  key={index}
                  className="group relative p-8 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-primary-400/50 transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${option.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
                  
                  {/* Icon/Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`inline-flex p-4 bg-gradient-to-br ${option.gradient} rounded-xl group-hover:scale-110 transition-transform duration-500`}>
                      <CheckCircle2 className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                    <span className="px-4 py-2 bg-slate-800/80 backdrop-blur-sm rounded-lg border border-slate-700 text-gray-300 text-sm font-semibold">
                      {option.cost}
                    </span>
                  </div>

                  {/* Content */}
                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-gradient transition-colors duration-300">
                    {option.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {option.description}
                  </p>

                  {/* Arrow */}
                  <div className="flex items-center text-primary-400 group-hover:text-primary-300 transition-colors duration-300">
                    <span className="text-sm font-semibold mr-2">Unlock now</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>

                  {/* Decorative Line */}
                  <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${option.gradient} w-0 group-hover:w-full transition-all duration-500`} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Info Banner */}
        <div className="mt-32 relative overflow-hidden p-12 bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-900/60 backdrop-blur-xl rounded-3xl border border-slate-700/50">
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-1/4 w-64 h-64 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full blur-3xl animate-pulse-slow" />
          </div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl mb-6">
              <Coins className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-4">
              Fair & Transparent Reward System
            </h3>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              Every action you take in BrainBounty contributes to your coin balance. 
              Use them strategically to unlock features, customize your experience, and progress faster—all without spending real money.
            </p>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>No hidden costs</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>Earn through gameplay</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>Transparent pricing</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  )
}

export default CoinSystem

