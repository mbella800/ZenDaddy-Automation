'use client';

export default function TrustBadges() {
  const badges = [
    {
      icon: '✅',
      title: 'Instant Delivery',
      description: 'Download immediately after purchase'
    },
    {
      icon: '🔒',
      title: 'Secure Payment',
      description: 'Stripe-powered checkout'
    },
    {
      icon: '🔄',
      title: 'Free Updates',
      description: 'Lifetime version updates included'
    },
    {
      icon: '💬',
      title: 'Discord Support',
      description: '24/7 community + dev support'
    },
    {
      icon: '⚡',
      title: 'No Subscription',
      description: 'One-time payment, yours forever'
    },
    {
      icon: '🎯',
      title: 'Proven Results',
      description: '58+ satisfied customers'
    }
  ];

  return (
    <section className="py-16 bg-black/40 border-t border-lime-500/20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-lime-400">Why Choose</span>{' '}
          <span className="text-white">ZenDaddy?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="group bg-black/60 border border-lime-500/30 rounded-lg p-6 hover:border-lime-400 hover:shadow-[0_0_30px_rgba(57,255,20,0.3)] transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl group-hover:scale-110 transition-transform">
                  {badge.icon}
                </div>
                <div>
                  <h3 className="text-lime-400 font-bold text-lg mb-1">
                    {badge.title}
                  </h3>
                  <p className="text-gray-400 text-sm font-mono">
                    {badge.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Security Note */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-black/80 border border-lime-500/50 rounded-lg px-6 py-4">
            <p className="text-gray-300 font-mono text-sm">
              <span className="text-lime-400 font-bold">🔐 100% Secure:</span>{' '}
              All payments processed through Stripe. Your data is encrypted and never stored.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
