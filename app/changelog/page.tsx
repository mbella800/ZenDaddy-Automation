import { Metadata } from 'next';
import Link from 'next/link';
import SimpleHeader from '@/components/SimpleHeader';

export const metadata: Metadata = {
  title: 'Version History & Changelog - GOD FLICK v3.0 PRO | ZenDaddy',
  description: 'Complete version history of ZenDaddy GOD FLICK PRO. See all updates, new features, and improvements from v1.0 to v3.0 for Cronus Zen Fortnite 2026.',
  keywords: 'zendaddy changelog, god flick version history, cronus zen script updates, fortnite aim assist update 2026',
  openGraph: {
    title: 'Version History - GOD FLICK v3.0 PRO | ZenDaddy',
    description: 'Full changelog from v1.0 to v3.0. See every feature added to the best Cronus Zen Fortnite aim assist script.',
    url: 'https://zendaddy.pro/changelog'
  }
};

export default function ChangelogPage() {
  return (
    <>
      <SimpleHeader />
      <main className="min-h-screen bg-black text-white pt-20 md:pt-16">
        <section className="relative py-20 px-4 border-b border-lime-500/20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-lime-900/20 via-black to-black"></div>
          <div className="relative max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-lime-400">Version</span>{' '}
              <span className="text-white">History</span>
            </h1>
            <p className="text-xl text-gray-300 font-mono max-w-2xl mx-auto">
              Every update to ZenDaddy GOD FLICK PRO, from day one to the latest release.
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-lime-500/30"></div>

              <div className="mb-16 relative pl-20">
                <div className="absolute left-4 top-2 w-8 h-8 bg-lime-500 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-xs">3.0</span>
                </div>
                <div className="bg-black/60 border border-lime-500/50 rounded-lg p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <h2 className="text-3xl font-bold text-lime-400">GOD FLICK v3.0 PRO</h2>
                    <span className="bg-lime-500 text-black text-xs font-bold px-3 py-1 rounded">LATEST</span>
                  </div>
                  <p className="text-gray-500 font-mono text-sm mb-6">February 2026</p>
                  <p className="text-gray-300 mb-6">
                    Massive performance upgrade. Fixed a critical size bug and added 5 new features that make the script
                    feel like a completely different level of aim assist. 29 settings across 7 OLED pages, all adjustable on-device.
                  </p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="text-lime-400 font-bold mb-2">Critical Bug Fix</h3>
                      <div className="bg-red-950/20 border border-red-500/30 rounded p-4">
                        <p className="text-gray-300 font-mono text-sm">
                          <span className="text-red-400 font-bold">FIXED:</span> Pattern size ramping bug. v2.0 patterns oscillated between
                          deadzone and target size instead of outputting at constant strength. Removed the entire cur_mag ramping system.
                          Patterns now output at full configured size with human randomization. This fix alone makes the script feel 2x stronger.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lime-400 font-bold mb-2">New Features</h3>
                      <ul className="space-y-3 text-gray-300 font-mono text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-lime-400 shrink-0">[+]</span>
                          <span><span className="text-lime-400">ADS Pulse</span> - Rapidly toggles L2 on/off (25ms release, 30-200ms hold). Each toggle re-triggers Fortnite's aim assist snap, pulling your crosshair to the nearest enemy. Adjustable speed 1-10.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-lime-400 shrink-0">[+]</span>
                          <span><span className="text-lime-400">Crouch Spam</span> - Rapid R3 toggle while firing (40ms tap, 50-250ms gap). Crouching triggers extra rotational assist in Fortnite and makes you harder to hit. Adjustable speed 1-10.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-lime-400 shrink-0">[+]</span>
                          <span><span className="text-lime-400">Headshot Bias</span> - Constant upward R-stick pull when ADS+firing, steering aim toward head hitbox. Adjustable strength 0-20.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-lime-400 shrink-0">[+]</span>
                          <span><span className="text-lime-400">Anti-Bloom</span> - Smart burst fire timing (280ms fire, 55ms pause) to prevent bloom accumulation on full-auto weapons.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-lime-400 shrink-0">[+]</span>
                          <span><span className="text-lime-400">DYN Pattern</span> - Dynamic human-like pattern (type 6) that cycles through distorted circle, figure-8, and jitter phases to mimic natural thumb movement.</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lime-400 font-bold mb-2">Improvements</h3>
                      <ul className="space-y-2 text-gray-300 font-mono text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-lime-400 shrink-0">[*]</span>
                          <span>Stronger defaults: L-stick ADS 30 (was 22), Hip 32 (was 25), R-stick ADS 15 (was 7)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-lime-400 shrink-0">[*]</span>
                          <span>29 settings across 7 OLED pages (was 23 settings / 5 pages)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-lime-400 shrink-0">[*]</span>
                          <span>15 PVars for persistent storage (was 12)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-lime-400 shrink-0">[*]</span>
                          <span>New MODS page: ADS Pulse on/off + speed, Crouch Spam on/off + speed</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-lime-400 shrink-0">[*]</span>
                          <span>New EXTRA page: Headshot Bias strength, Anti-Bloom toggle</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-lime-400 shrink-0">[*]</span>
                          <span>Splash screen updated to V3.0</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-16 relative pl-20">
                <div className="absolute left-4 top-2 w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-gray-300 font-bold text-xs">2.0</span>
                </div>
                <div className="bg-black/60 border border-gray-700/50 rounded-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-400 mb-1">GOD FLICK v2.0 PRO</h2>
                  <p className="text-gray-500 font-mono text-sm mb-6">October 2025</p>
                  <p className="text-gray-400 mb-6">
                    Major architecture overhaul. Introduced per-stick per-mode control, the OLED menu system, and the multi-pattern engine.
                  </p>
                  <ul className="space-y-2 text-gray-400 font-mono text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-gray-500 shrink-0">[+]</span>
                      <span>Per-stick, per-mode independence (L/R stick x ADS/HIP)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-500 shrink-0">[+]</span>
                      <span>5 aim patterns: Circle, Diamond, Cross, Figure-8, Jitter</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-500 shrink-0">[+]</span>
                      <span>23 real-time OLED settings across 5 pages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-500 shrink-0">[+]</span>
                      <span>Pre-aim sticky for shotgun/sniper</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-500 shrink-0">[+]</span>
                      <span>Per-stick randomness (LRN/RRN)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-500 shrink-0">[+]</span>
                      <span>Human randomization engine with PRNG</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-500 shrink-0">[+]</span>
                      <span>Matrix rain OLED splash screen + HUD</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-500 shrink-0">[+]</span>
                      <span>Safe reset system (R1+L1 in menu only)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-500 shrink-0">[+]</span>
                      <span>PVar-based persistent settings (survive power cycles)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative pl-20">
                <div className="absolute left-4 top-2 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-gray-400 font-bold text-xs">1.0</span>
                </div>
                <div className="bg-black/60 border border-gray-800/50 rounded-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-500 mb-1">GOD FLICK v1.0</h2>
                  <p className="text-gray-600 font-mono text-sm mb-6">August 2025</p>
                  <p className="text-gray-500 mb-6">
                    First release. Basic aim assist enhancement with single pattern and global settings.
                  </p>
                  <ul className="space-y-2 text-gray-500 font-mono text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-gray-600 shrink-0">[+]</span>
                      <span>Basic circular micro-movement pattern</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-600 shrink-0">[+]</span>
                      <span>Global ADS/Hip dampening</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-600 shrink-0">[+]</span>
                      <span>Basic OLED display with on/off indicator</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-600 shrink-0">[+]</span>
                      <span>Deadzone compensation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 border-t border-lime-500/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Get the</span>{' '}
              <span className="text-lime-400">Latest Version</span>
            </h2>
            <p className="text-xl text-gray-300 font-mono mb-8">
              GOD FLICK v3.0 PRO is available now. 29 settings, 7 OLED pages, built for Fortnite 2026.
            </p>
            <Link
              href="/#pricing"
              className="inline-block bg-lime-500 hover:bg-lime-400 text-black font-bold px-12 py-6 rounded-lg transition-all hover:shadow-[0_0_50px_rgba(57,255,20,0.7)] text-2xl"
            >
              Get GOD FLICK v3.0 PRO
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
