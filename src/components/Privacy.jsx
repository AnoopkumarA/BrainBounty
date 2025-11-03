import React from 'react'
import { CheckCircle2, Shield, Lock, Database } from 'lucide-react'

const Privacy = () => {
  const privacyFeatures = [
    {
      title: 'Data Privacy',
      description: 'Your personal information remains private. We collect only essential game data required for functionality.',
      stat: '100%',
      statLabel: 'Private',
    },
    {
      title: 'Secure Storage',
      description: 'All game progress and coins are encrypted and securely stored using industry-standard protocols.',
      stat: 'AES-256',
      statLabel: 'Encryption',
    },
    {
      title: 'User Control',
      description: 'Full control over your data with the ability to export or delete your information at any time.',
      stat: 'Total',
      statLabel: 'Control',
    },
  ]

  const commitments = [
    'No personal data collection',
    'Transparent data usage',
    'Secure encrypted storage',
    'User data control',
    'No third-party sharing',
    'GDPR compliant',
  ]

  const freeCommitments = [
    'Zero subscription fees',
    'No hidden costs',
    'All features unlockable',
    'Optional ad viewing',
    'No paywalls',
    'Free forever',
  ]

  return (
    <section id="privacy" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Privacy & Security - Split Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Left: Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-full border border-primary-400/20 text-sm font-medium text-primary-300 mb-6">
              Privacy & Security
            </span>
            
            <h2 className="text-5xl sm:text-6xl font-bold text-white mb-8 leading-tight">
              Your Privacy is
              <br />
              <span className="text-gradient">Our Priority</span>
            </h2>
            
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              We believe in transparent practices and data protection. Your information is handled 
              with the highest security standards, ensuring your gaming experience is both safe and private.
            </p>

            {/* Commitments List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {commitments.map((commitment, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-primary-400/30 transition-all duration-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{commitment}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual Stats */}
          <div className="relative">
            <div className="grid gap-6">
              {privacyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group relative p-8 bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 hover:border-primary-400/50 transition-all duration-500"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-2xl font-bold text-white">{feature.title}</h4>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-gradient">{feature.stat}</div>
                      <div className="text-xs text-gray-500">{feature.statLabel}</div>
                    </div>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                  
                  {/* Progress indicator */}
                  <div className="mt-4 h-1 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transition-all duration-1000 group-hover:w-full" style={{ width: '85%' }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative element */}
            <div className="absolute -right-20 top-1/2 w-64 h-64 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>

        {/* Free to Use - Split Layout Reversed */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual Badge Display */}
          <div className="relative order-2 lg:order-1">
            <div className="relative bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-900/60 backdrop-blur-xl rounded-3xl p-12 border border-slate-700/50">
              {/* Central Badge */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl mb-4">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">100% Free</h3>
                <p className="text-gray-400">Forever. No Exceptions.</p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4">
                {freeCommitments.map((commitment, index) => (
                  <div
                    key={index}
                    className="p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 text-center"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-300">{commitment}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -left-20 top-1/2 w-64 h-64 bg-gradient-to-r from-accent-500/20 to-primary-500/20 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full border border-green-400/20 text-sm font-medium text-green-300 mb-6">
              Free Forever
            </span>
            
            <h2 className="text-5xl sm:text-6xl font-bold text-white mb-8 leading-tight">
              Completely Free,
              <br />
              <span className="text-gradient">No Strings Attached</span>
            </h2>
            
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              BrainBounty is built on the principle that education and brain training should be 
              accessible to everyone. No subscriptions, no hidden fees, no paywalls—just pure learning and fun.
            </p>

            {/* Key Points */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-5 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">No Subscriptions</h4>
                  <p className="text-gray-400 text-sm">All features available without any recurring charges</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-5 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Earn Through Gameplay</h4>
                  <p className="text-gray-400 text-sm">Unlock everything by playing—no purchases required</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-5 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Optional Rewards</h4>
                  <p className="text-gray-400 text-sm">Watch ads only if you choose to for bonus coins</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-green-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  )
}

export default Privacy

