import React from 'react'
import { Coins, Gift, Video, Trophy, Unlock, Sparkles } from 'lucide-react'

const CoinSystem = () => {
  const earnMethods = [
    {
      icon: Video,
      title: 'Watch Ads',
      description: 'Earn coins by watching rewarded video ads',
      coins: '10-50',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Gift,
      title: 'Mystery Boxes',
      description: 'Open daily mystery boxes for coin rewards',
      coins: '5-100',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Trophy,
      title: 'Quizzes',
      description: 'Score high in quizzes to earn bonus coins',
      coins: '20-200',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Sparkles,
      title: 'Complete Levels',
      description: 'Finish puzzle levels and collect coins',
      coins: '30-150',
      color: 'from-purple-500 to-indigo-500',
    },
  ]

  const usageOptions = [
    {
      icon: Unlock,
      title: 'Unlock Puzzle Levels',
      description: 'Access new Block Fit Puzzle levels',
      cost: '50 coins per level',
    },
    {
      icon: Sparkles,
      title: 'App Themes',
      description: 'Personalize with beautiful themes',
      cost: 'Varies by theme',
    },
    {
      icon: Trophy,
      title: 'Restart Puzzles',
      description: 'Start a puzzle over when stuck',
      cost: '20 coins',
    },
    {
      icon: Gift,
      title: 'Reshuffle Shapes',
      description: 'Get new shape arrangements',
      cost: '15 coins',
    },
  ]

  return (
    <section id="coins" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full border border-yellow-400/30 text-sm font-semibold text-yellow-400 mb-4">
            Reward System
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-6">
            Game Coin System
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Earn coins through gameplay and use them to unlock exciting features, 
            themes, and power-ups. The more you play, the more you earn!
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Earn Coins */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
                <Coins className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">How to Earn Coins</h3>
            </div>

            <div className="space-y-4">
              {earnMethods.map((method, index) => (
                <div
                  key={index}
                  className="group relative p-6 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-yellow-400/20 hover:border-yellow-400/40 hover:bg-slate-800/50 transition-all duration-300 hover:-translate-x-2"
                >
                  <div className="flex items-start space-x-4">
                    {/* Icon */}
                    <div className="relative flex-shrink-0">
                      <div className={`absolute inset-0 bg-gradient-to-r ${method.color} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
                      <div className={`relative p-3 bg-gradient-to-r ${method.color} rounded-xl`}>
                        <method.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-bold text-white">{method.title}</h4>
                        <span className={`px-3 py-1 bg-gradient-to-r ${method.color} rounded-full text-white text-sm font-semibold`}>
                          {method.coins}
                        </span>
                      </div>
                      <p className="text-gray-400">{method.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Spend Coins */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">How to Use Coins</h3>
            </div>

            <div className="space-y-4">
              {usageOptions.map((option, index) => (
                <div
                  key={index}
                  className="group relative p-6 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-purple-400/20 hover:border-purple-400/40 hover:bg-slate-800/50 transition-all duration-300 hover:translate-x-2"
                >
                  <div className="flex items-start space-x-4">
                    {/* Icon */}
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                      <div className="relative p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                        <option.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-bold text-white">{option.title}</h4>
                        <span className="px-3 py-1 bg-slate-700/50 rounded-full text-gray-300 text-sm font-semibold">
                          {option.cost}
                        </span>
                      </div>
                      <p className="text-gray-400">{option.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Info Card */}
        <div className="relative overflow-hidden p-8 bg-gradient-to-br from-yellow-500/10 via-orange-500/10 to-pink-500/10 backdrop-blur-sm rounded-3xl border border-yellow-400/30">
          <div className="relative z-10 text-center">
            <Coins className="w-16 h-16 mx-auto mb-4 text-yellow-400 animate-bounce-slow" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Progressive Coin-Based Rewards
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our coin system keeps you engaged and motivated. The better you perform, 
              the more coins you earn. Use them strategically to enhance your gaming 
              experience and unlock premium features—all without spending real money!
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  )
}

export default CoinSystem

