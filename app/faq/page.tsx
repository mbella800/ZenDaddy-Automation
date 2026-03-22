import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import SimpleHeader from '@/components/SimpleHeader';

export const metadata: Metadata = {
  title: 'FAQ - Cronus Zen Fortnite Questions Answered | ZenDaddy',
  description: 'Frequently asked questions about Cronus Zen for Fortnite, ZenDaddy GOD FLICK v3.0 PRO installation, compatibility, safety, and aim assist settings.',
  keywords: 'cronus zen faq, fortnite zen questions, is cronus zen detectable, cronus zen ban, zen script help, fortnite aim assist questions',
  openGraph: {
    title: 'Cronus Zen Fortnite FAQ | ZenDaddy',
    description: 'Get answers to all your questions about using Cronus Zen for Fortnite with ZenDaddy GOD FLICK v3.0 PRO.',
    url: 'https://zendaddy.pro/faq'
  }
};

export default function FAQPage() {
  const faqs = [
    {
      category: 'General',
      questions: [
        {
          q: 'What is Cronus Zen?',
          a: 'Cronus Zen is a controller adapter device that sits between your controller and console. It can run custom scripts (.gpc files) that modify controller inputs. It\'s a physical hardware device — it has NO access to game data, screen content, or in-game information.'
        },
        {
          q: 'What is ZenDaddy?',
          a: 'ZenDaddy GOD FLICK v3.0 PRO is a professional Fortnite aim assist script for Cronus Zen. It features per-stick, per-mode control (separate ADS and Hip-fire settings), 6 aim patterns including the new DYN (Dynamic Human-Like) pattern, 29 OLED settings across 5 pages, and pre-aim sticky for one-shot weapons.'
        },
        {
          q: 'Do I need a Cronus Zen device?',
          a: 'Yes, ZenDaddy is a script FOR Cronus Zen. You must own a Cronus Zen device to use this script. The device can be purchased from cronusmax.com or retailers like Amazon.'
        },
        {
          q: 'Is this an aimbot?',
          a: 'No. An aimbot reads game data to know where enemies are and auto-aims at them. Cronus Zen is a hardware device that CANNOT access any game data — it has zero knowledge of what\'s on screen. ZenDaddy works by sending micro-movements through your controller to keep Fortnite\'s own built-in aim assist active. The tracking comes 100% from Fortnite\'s system, not from the script.'
        }
      ]
    },
    {
      category: 'Compatibility',
      questions: [
        {
          q: 'What platforms does ZenDaddy work on?',
          a: 'ZenDaddy works on all platforms that support Cronus Zen: PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S, and PC. The script is optimized specifically for Fortnite.'
        },
        {
          q: 'Does it work on PC/keyboard & mouse?',
          a: 'No, ZenDaddy is designed for CONTROLLER only. It enhances controller aim assist. If you play on PC with mouse & keyboard, this script won\'t apply to you.'
        },
        {
          q: 'Does it work on mobile/Switch?',
          a: 'No, ZenDaddy requires Cronus Zen hardware which only supports PlayStation, Xbox, and PC platforms. Mobile and Nintendo Switch are not supported.'
        }
      ]
    },
    {
      category: 'Safety & Detection',
      questions: [
        {
          q: 'Can I get banned using Cronus Zen?',
          a: 'Cronus Zen is a hardware device that operates outside the game software, making it undetectable by Fortnite\'s anti-cheat. However, use at your own risk — Epic Games\' TOS technically prohibits any external assistance.'
        },
        {
          q: 'Is ZenDaddy safe to use?',
          a: 'ZenDaddy works WITH Fortnite\'s native aim assist (not against it) which makes it feel natural. The script doesn\'t inject code or modify game files — it simply sends controller inputs through the Cronus Zen device. There is no software running on your console for Epic to detect.'
        },
        {
          q: 'How is this different from an aimbot?',
          a: 'An aimbot uses game data (enemy positions, screen pixels) to automatically aim at targets. Cronus Zen is a physical device between your controller and console — it has ZERO access to game data. It doesn\'t know where enemies are. It only modifies your controller stick inputs with micro-movements. Fortnite\'s own aim assist system does all the tracking.'
        }
      ]
    },
    {
      category: 'Purchase & Download',
      questions: [
        {
          q: 'How do I get ZenDaddy after purchase?',
          a: 'After completing your Stripe payment, you\'ll be redirected to a download page where you can instantly download the ZenDaddy GOD FLICK v3.0 PRO script file (.gpc) plus instructions. Your purchase is verified through Stripe before download access is granted.'
        },
        {
          q: 'What file format is the script?',
          a: 'ZenDaddy is a .gpc file (GamePack Compiler file). This is the standard script format for Cronus Zen devices. You load it using the free Zen Studio software.'
        },
        {
          q: 'Can I get a refund?',
          a: 'Due to the digital nature of the product, all sales are final. However, we offer comprehensive Discord support to ensure the script works perfectly for you. You can also purchase our Setup Support service for live 1-on-1 help.'
        },
        {
          q: 'How much does it cost?',
          a: 'GOD FLICK v3.0 PRO is a one-time payment of \u20ac59.99. No subscriptions, no monthly fees. You get instant download access and Discord community support. Optional Setup Support is available for \u20ac14.99.'
        },
        {
          q: 'What is Setup Support?',
          a: 'For \u20ac14.99, you get a live 1-on-1 Discord session with the developer. We\'ll screenshare, install the script on your Cronus Zen, tune the settings for your playstyle, and give you 30 days of priority support. Available on the download page after your script purchase.'
        }
      ]
    },
    {
      category: 'Setup & Installation',
      questions: [
        {
          q: 'How long does setup take?',
          a: 'Setup takes about 2-3 minutes. Download the script, load it into Zen Studio, program your Cronus Zen device, connect to console, and you\'re ready to play.'
        },
        {
          q: 'Do I need a PC to install?',
          a: 'Yes, you need a Windows PC for the initial setup to load the script onto your Cronus Zen using Zen Studio software. After programming, you can disconnect the PC and use Zen with your console.'
        },
        {
          q: 'How do I toggle the script on/off?',
          a: 'Hold R1 + D-pad UP to enable the script (LED turns green). Hold R1 + D-pad DOWN to disable (LED turns red). This works in-game without pausing.'
        },
        {
          q: 'How do I open the settings menu?',
          a: 'Hold L2 + press OPTIONS to open/close the OLED menu. Use L1/R1 to switch between 5 pages, D-pad to navigate and adjust, and Square to toggle between ADS and Hip-fire sub-modes on the stick pages.'
        }
      ]
    },
    {
      category: 'Features & Usage',
      questions: [
        {
          q: 'What are the 6 aim patterns?',
          a: 'ZenDaddy offers 6 movement patterns per stick: Circle (smooth rotation), Diamond (sharp angular movement), Cross (aggressive plus pattern), Figure-8 (wide tracking), Jitter (random micro-movements), and DYN (Dynamic Human-Like — mimics natural thumb movement with phase-cycling and direction reversals for maximum aim assist sync). Each stick can use a different pattern for ADS and Hip-fire modes.'
        },
        {
          q: 'What is Per-Mode Control?',
          a: 'Each stick (Left and Right) has completely separate settings for ADS (aiming down sights) and Hip-fire modes. This means you can use Circle pattern with speed 12 when aiming, but Jitter with speed 20 when hip-firing. Toggle between modes with Square in the menu.'
        },
        {
          q: 'What is Pre-Aim Sticky?',
          a: 'Pre-Aim Sticky adds extra aim dampening when you\'re aiming (L2) WITHOUT shooting. Perfect for shotguns and snipers — you get maximum stickiness while lining up your shot, then normal settings kick in when you fire. Adjustable from 0-100 in the DAMP menu page.'
        },
        {
          q: 'Will it feel natural or "robotic"?',
          a: 'ZenDaddy is specifically designed to feel NATURAL. It works WITH Fortnite\'s native aim assist, enhancing it rather than fighting against it. The micro-movements are calibrated to trigger Fortnite\'s tracking without feeling jerky.'
        },
        {
          q: 'How do I reset all settings?',
          a: 'In the OLED menu, press R1 + L1 simultaneously to reset all 23 settings to their optimized defaults. This only works while the menu is open to prevent accidental resets during gameplay.'
        }
      ]
    },
    {
      category: 'Support',
      questions: [
        {
          q: 'How do I get help if something doesn\'t work?',
          a: 'Join our Discord community at discord.gg/zp2HmEgTWq for free community support. For dedicated 1-on-1 help, purchase our Setup Support service (\u20ac14.99) for a live screenshare session with the developer.'
        },
        {
          q: 'Are updates included?',
          a: 'Yes, all script updates are included with your purchase. When Fortnite changes its aim assist mechanics, we update the script and you can download the latest version. Updates are announced in Discord.'
        }
      ]
    }
  ];

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.flatMap(section => 
      section.questions.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    )
  };

  return (
    <>
      <Script
        id="faq-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <SimpleHeader />
      <main className="min-h-screen bg-black text-white pt-20 md:pt-16">
      <section className="relative py-20 px-4 border-b border-lime-500/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-lime-900/20 via-black to-black"></div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-lime-400">Frequently Asked</span>{' '}
            <span className="text-white">Questions</span>
          </h1>
          
          <p className="text-xl text-gray-300 font-mono max-w-2xl mx-auto">
            Everything you need to know about <span className="text-lime-400">Cronus Zen</span> and <span className="text-lime-400">ZenDaddy</span> for Fortnite.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-16">
          {faqs.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h2 className="text-3xl font-bold mb-8">
                <span className="text-lime-400">{section.category}</span>
              </h2>
              
              <div className="space-y-4">
                {section.questions.map((faq, faqIndex) => (
                  <details
                    key={faqIndex}
                    className="group bg-black/60 border border-lime-500/30 rounded-lg hover:border-lime-400 transition-all"
                  >
                    <summary className="cursor-pointer p-6 flex items-center justify-between">
                      <h3 className="text-lg font-bold text-white group-hover:text-lime-400 transition-colors pr-4">
                        {faq.q}
                      </h3>
                      <span className="text-lime-400 text-2xl group-open:rotate-180 transition-transform flex-shrink-0">
                        ▼
                      </span>
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-gray-300 font-mono text-sm leading-relaxed border-t border-lime-500/20 pt-4">
                        {faq.a}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-black/40 border-t border-lime-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-white">Still Have</span>{' '}
            <span className="text-lime-400">Questions?</span>
          </h2>
          <p className="text-xl text-gray-300 font-mono mb-8">
            Join our Discord community for instant support from the developer.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://discord.gg/zp2HmEgTWq"
              target="_blank"
              className="bg-lime-500 hover:bg-lime-400 text-black font-bold px-10 py-4 rounded-lg transition-all hover:shadow-[0_0_40px_rgba(57,255,20,0.6)] text-lg"
            >
              Join Discord Support
            </Link>
            <Link
              href="/#pricing"
              className="border border-lime-500 text-lime-400 hover:bg-lime-500/10 font-bold px-10 py-4 rounded-lg transition-all text-lg"
            >
              Get GOD FLICK v3.0 PRO
            </Link>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
