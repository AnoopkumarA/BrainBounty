import React from 'react'
import { Shield, Lock, Eye, UserCheck, Heart, Zap } from 'lucide-react'

const Privacy = () => {
  const privacyPoints = [
    {
      icon: Shield,
      title: 'Your Data Safety',
      description: 'We do not collect any personal data from users in our app.',
    },
    {
      icon: Lock,
      title: 'Secure Storage',
      description: 'All your game progress and coins are securely stored and encrypted.',
    },
    {
      icon: Eye,
      title: 'No Hidden Tracking',
      description: 'We only collect essential data needed for game functionality.',
    },
    {
      icon: UserCheck,
      title: 'User Control',
      description: 'You have full control over your data and can delete it anytime.',
    },
  ]

  const freeFeatures = [
    {
      icon: Heart,
      title: 'Completely Free',
      description: 'No subscriptions, no hidden fees—100% free to download and play.',
    },
    {
      icon: Zap,
      title: 'No Paywalls',
      description: 'All features are accessible through gameplay. Earn coins, unlock everything.',
    },
    {
      icon: Shield,
      title: 'Optional Ads',
      description: 'Watch ads only when you want to earn extra coins or skip challenges.',
    },
  ]

  return (
    <section id="privacy" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Privacy Section */}
        <div className="mb-20">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-400/30 text-sm font-semibold text-green-400 mb-4">
              Privacy & Security
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-6">
              Your Privacy Matters
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We believe in transparent practices. Your privacy and security are our top priorities.
            </p>
          </div>

          {/* Privacy Points */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {privacyPoints.map((point, index) => (
              <div
                key={index}
                className="group relative p-6 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-green-400/20 hover:border-green-400/40 hover:bg-slate-800/50 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="relative inline-block mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                  <div className="relative p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
                    <point.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h4 className="text-xl font-bold text-white mb-2">{point.title}</h4>
                <p className="text-gray-400">{point.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Free to Use Section */}
        <div>
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full border border-blue-400/30 text-sm font-semibold text-blue-400 mb-4">
              100% Free
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-6">
              Totally Free to Use
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              No tricks, no traps. BrainBounty is genuinely free with no strings attached.
            </p>
          </div>

          {/* Free Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {freeFeatures.map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-blue-400/20 hover:border-blue-400/40 hover:bg-slate-800/50 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="relative inline-block mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                  <div className="relative p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h4 className="text-2xl font-bold text-white mb-3">{feature.title}</h4>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Highlight Card */}
          <div className="relative overflow-hidden p-8 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-3xl border border-blue-400/30">
            <div className="relative z-10 text-center">
              <Heart className="w-16 h-16 mx-auto mb-4 text-pink-400 animate-pulse-slow" />
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Made with Players in Mind
              </h3>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
                BrainBounty was created to provide an enjoyable, educational gaming experience 
                without any financial barriers. We believe everyone deserves access to quality 
                brain training games.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full text-white font-bold text-lg hover:shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 transform hover:scale-105">
                  Download BrainBounty
                </button>
                <span className="text-gray-400 font-semibold">It's Free Forever!</span>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Privacy

