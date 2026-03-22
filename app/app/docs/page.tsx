import { Metadata } from 'next';
import Link from 'next/link';
import SimpleHeader from '@/components/SimpleHeader';

export const metadata: Metadata = {
  title: 'GOD FLICK v3.0 PRO Documentation - Complete User Manual | ZenDaddy',
  description: 'Full documentation for ZenDaddy GOD FLICK v3.0 PRO. All 29 settings explained, OLED menu guide, controls reference, recommended settings for Fortnite 2026.',
  keywords: 'zendaddy documentation, god flick manual, cronus zen settings guide, fortnite aim assist settings, oled menu guide, zen script tutorial 2026',
  openGraph: {
    title: 'GOD FLICK v3.0 PRO Documentation | ZenDaddy',
    description: 'Complete user manual for ZenDaddy GOD FLICK v3.0 PRO. Every setting explained with recommended values.',
    url: 'https://zendaddy.pro/docs'
  }
};

export default function DocsPage() {
  return (
    <>
      <SimpleHeader />
      <main className="min-h-screen bg-black text-white pt-20 md:pt-16">
        <section className="relative py-20 px-4 border-b border-lime-500/20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-lime-900/20 via-black to-black"></div>
          <div className="relative max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-lime-400">GOD FLICK</span>{' '}
              <span className="text-white">v3.0 PRO</span>
            </h1>
            <p className="text-xl text-gray-300 font-mono max-w-2xl mx-auto mb-6">
              Complete documentation and user manual. Everything you need to know about your script.
            </p>
            <div className="inline-block bg-black/60 border border-lime-500/30 rounded-lg px-6 py-3">
              <p className="text-lime-400 font-mono text-sm">
                29 Settings | 7 OLED Pages | 6 Aim Patterns | 15 PVars
              </p>
            </div>
          </div>
        </section>

        <section className="sticky top-[52px] z-50 py-3 px-4 border-b border-lime-500/10 bg-black/95 backdrop-blur-lg">
          <div className="max-w-4xl mx-auto">
            <nav className="flex flex-wrap gap-2 md:gap-3 justify-center text-xs md:text-sm font-mono">
              <a href="#controls" className="text-lime-400 hover:text-lime-300 transition-colors px-1">Controls</a>
              <span className="text-gray-700 hidden md:inline">|</span>
              <a href="#menu" className="text-lime-400 hover:text-lime-300 transition-colors px-1">Menu</a>
              <span className="text-gray-700 hidden md:inline">|</span>
              <a href="#patterns" className="text-lime-400 hover:text-lime-300 transition-colors px-1">Patterns</a>
              <span className="text-gray-700 hidden md:inline">|</span>
              <a href="#features" className="text-lime-400 hover:text-lime-300 transition-colors px-1">Features</a>
              <span className="text-gray-700 hidden md:inline">|</span>
              <a href="#settings" className="text-lime-400 hover:text-lime-300 transition-colors px-1">Settings</a>
              <span className="text-gray-700 hidden md:inline">|</span>
              <a href="#recommended" className="text-lime-400 hover:text-lime-300 transition-colors px-1">Recommended</a>
            </nav>
          </div>
        </section>

        <section id="controls" className="py-16 px-4 scroll-mt-[100px]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">
              <span className="text-lime-400">Controller</span>{' '}
              <span className="text-white">Controls</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-black/60 border border-lime-500/30 rounded-lg p-6">
                <h3 className="text-lime-400 font-bold text-xl mb-4">Script Toggle</h3>
                <ul className="space-y-3 text-gray-300 font-mono text-sm">
                  <li><span className="text-lime-400">R1 + D-pad UP</span> = Script ON (green LED)</li>
                  <li><span className="text-lime-400">R1 + D-pad DOWN</span> = Script OFF (red LED)</li>
                  <li><span className="text-lime-400">R1 + D-pad LEFT</span> = Toggle Tapfire</li>
                  <li><span className="text-lime-400">OPTIONS + L3</span> = Touchpad (map fix)</li>
                </ul>
              </div>

              <div className="bg-black/60 border border-lime-500/30 rounded-lg p-6">
                <h3 className="text-lime-400 font-bold text-xl mb-4">OLED Menu</h3>
                <ul className="space-y-3 text-gray-300 font-mono text-sm">
                  <li><span className="text-lime-400">L2 + OPTIONS</span> = Open/Close menu</li>
                  <li><span className="text-lime-400">L1 / R1</span> = Switch pages (7 pages)</li>
                  <li><span className="text-lime-400">D-pad UP/DOWN</span> = Select setting</li>
                  <li><span className="text-lime-400">D-pad LEFT/RIGHT</span> = Adjust value</li>
                  <li><span className="text-lime-400">SQUARE</span> = Toggle ADS/HIP mode</li>
                  <li><span className="text-lime-400">R1 + L1</span> = Reset all to defaults</li>
                </ul>
              </div>

              <div className="bg-black/60 border border-lime-500/30 rounded-lg p-6 md:col-span-2">
                <h3 className="text-lime-400 font-bold text-xl mb-4">LED Indicators</h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="w-6 h-6 bg-green-500 rounded-full mx-auto mb-2 shadow-[0_0_10px_rgba(0,255,0,0.5)]"></div>
                    <p className="text-gray-300 font-mono text-sm">Script ON</p>
                  </div>
                  <div>
                    <div className="w-6 h-6 bg-red-500 rounded-full mx-auto mb-2 shadow-[0_0_10px_rgba(255,0,0,0.5)]"></div>
                    <p className="text-gray-300 font-mono text-sm">Script OFF</p>
                  </div>
                  <div>
                    <div className="w-6 h-6 bg-blue-500 rounded-full mx-auto mb-2 shadow-[0_0_10px_rgba(0,0,255,0.5)]"></div>
                    <p className="text-gray-300 font-mono text-sm">Menu Open / Splash</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="menu" className="py-16 px-4 bg-black/40 border-y border-lime-500/20 scroll-mt-[100px]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">
              <span className="text-white">OLED Menu</span>{' '}
              <span className="text-lime-400">Pages</span>
            </h2>
            <p className="text-gray-400 font-mono mb-8">
              7 pages with 29 settings total. All settings are saved automatically and persist across power cycles.
            </p>

            <div className="space-y-6">
              {[
                {
                  page: 'P0',
                  title: 'L STICK [ADS/HIP]',
                  desc: 'Left stick micro-movement settings. Press SQUARE to switch between ADS and HIP mode.',
                  settings: [
                    { name: 'PTN', label: 'Pattern', range: '0-6', def: '6 (DYN)', desc: 'Movement shape: 0=OFF, 1=CIR, 2=DIA, 3=CRS, 4=FG8, 5=JIT, 6=DYN' },
                    { name: 'SPD', label: 'Speed', range: '4-24', def: '10', desc: 'How fast the pattern rotates. Higher = faster micro-movements' },
                    { name: 'SIZ', label: 'Size', range: '5-40', def: 'ADS:30 / HIP:32', desc: 'Pattern radius. Higher = stronger rotational aim assist trigger. This is the most important setting.' },
                  ]
                },
                {
                  page: 'P1',
                  title: 'R STICK [ADS/HIP]',
                  desc: 'Right stick micro-movement settings. Controls aim bubble activation. Press SQUARE to switch modes.',
                  settings: [
                    { name: 'PTN', label: 'Pattern', range: '0-6', def: 'ADS:1 (CIR) / HIP:0 (OFF)', desc: 'Movement shape for right stick. Usually subtle circular for ADS.' },
                    { name: 'SPD', label: 'Speed', range: '5-30', def: '15', desc: 'Rotation speed for right stick pattern' },
                    { name: 'SIZ', label: 'Size', range: '0-30', def: 'ADS:15 / HIP:7', desc: 'Right stick pattern size. Keep lower than left stick to avoid visible jitter.' },
                  ]
                },
                {
                  page: 'P2',
                  title: 'DAMP',
                  desc: 'Stick resistance dampening. Lower values = more sticky/slow aim when near enemies.',
                  settings: [
                    { name: 'ADS', label: 'ADS Damp', range: '10-100', def: '70', desc: 'Right stick sensitivity when ADS. Lower = stickier aim. 100 = no dampening.' },
                    { name: 'HIP', label: 'Hip Damp', range: '30-100', def: '75', desc: 'Right stick sensitivity when hip-firing. Usually slightly higher than ADS.' },
                    { name: 'TRN', label: 'Turn Threshold', range: '50-100', def: '85', desc: 'Stick input above this value bypasses dampening. Allows fast turns without interference.' },
                    { name: 'PRE', label: 'Pre-Aim', range: '0-100', def: '0', desc: 'Extra dampening when ADS but NOT firing. For shotgun/sniper: aim sticky before you shoot.' },
                  ]
                },
                {
                  page: 'P3',
                  title: 'SYSTEM',
                  desc: 'Core system settings for deadzone and tapfire.',
                  settings: [
                    { name: 'DZN', label: 'Deadzone L', range: '5-25', def: '13', desc: 'Left stick deadzone. Match your Fortnite deadzone setting. Too low = stick drift.' },
                    { name: 'DZR', label: 'Deadzone R', range: '3-15', def: '8', desc: 'Right stick deadzone. Usually lower than left stick.' },
                    { name: 'TFD', label: 'Tapfire Delay', range: '10-60', def: '30', desc: 'Delay before tapfire activates (x100ms). Toggle tapfire with R1 + D-pad LEFT.' },
                  ]
                },
                {
                  page: 'P4',
                  title: 'BOOST',
                  desc: 'Performance boost settings for tracking and randomization.',
                  settings: [
                    { name: 'TRK', label: 'Track Boost', range: '0-30', def: '0', desc: 'Extra pattern size when ADS+firing. Increases micro-movement strength during active tracking.' },
                    { name: 'STK', label: 'Stick Boost', range: '0-40', def: '0', desc: 'Extra dampening reduction when ADS+firing. Makes aim even stickier during combat.' },
                    { name: 'LRN', label: 'L Random', range: '0-20', def: '3', desc: 'Random jitter overlay on left stick. Prevents detectable repeating patterns.' },
                    { name: 'RRN', label: 'R Random', range: '0-20', def: '0', desc: 'Random jitter overlay on right stick. Usually keep at 0 unless needed.' },
                  ]
                },
                {
                  page: 'P5',
                  title: 'MODS',
                  desc: 'Advanced combat modifications. ADS Pulse and Crouch Spam for extra aim assist triggers.',
                  settings: [
                    { name: 'ADP', label: 'ADS Pulse', range: 'OFF/ON', def: 'OFF', desc: 'Rapidly toggles L2 to re-trigger aim assist snap. Each ADS cycle forces a new rotational assist lock on the nearest enemy.' },
                    { name: 'PSP', label: 'Pulse Speed', range: '1-10', def: '5', desc: 'ADS pulse rate. Higher = faster L2 toggling. Speed 5 = ~115ms hold between releases.' },
                    { name: 'CRC', label: 'Crouch Spam', range: 'OFF/ON', def: 'OFF', desc: 'Rapidly toggles crouch (R3) while firing. Crouch counts as movement = extra rotational assist.' },
                    { name: 'CSP', label: 'Crouch Speed', range: '1-10', def: '5', desc: 'Crouch spam rate. Higher = faster crouching. Speed 5 = ~140ms gap between crouches.' },
                  ]
                },
                {
                  page: 'P6',
                  title: 'EXTRA',
                  desc: 'Extra combat tools. Headshot bias and anti-bloom for precision and consistency.',
                  settings: [
                    { name: 'HSB', label: 'Headshot Bias', range: '0-20', def: '0', desc: 'Constant upward R-stick pull when ADS+firing. Steers aim toward head hitbox. Start with 3-5 and adjust.' },
                    { name: 'ABL', label: 'Anti-Bloom', range: 'OFF/ON', def: 'OFF', desc: 'Smart burst fire: 280ms fire, 55ms pause. Prevents bloom buildup on full-auto weapons like SMG/AR.' },
                  ]
                },
              ].map((page) => (
                <div key={page.page} className="bg-black/60 border border-lime-500/30 rounded-lg overflow-hidden">
                  <div className="bg-lime-950/30 border-b border-lime-500/20 px-6 py-4 flex items-center gap-4">
                    <span className="bg-lime-500 text-black font-bold text-sm px-3 py-1 rounded">{page.page}</span>
                    <h3 className="text-xl font-bold text-lime-400">{page.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-400 font-mono text-sm mb-4">{page.desc}</p>
                    <div className="space-y-4">
                      {page.settings.map((s) => (
                        <div key={s.name} className="border-b border-gray-800/50 pb-3 last:border-0 last:pb-0">
                          <div className="flex flex-wrap items-center gap-3 mb-1">
                            <span className="text-lime-400 font-bold font-mono">{s.name}</span>
                            <span className="text-gray-500 text-xs font-mono">({s.label})</span>
                            <span className="text-gray-600 text-xs font-mono">Range: {s.range}</span>
                            <span className="text-gray-600 text-xs font-mono">Default: {s.def}</span>
                          </div>
                          <p className="text-gray-300 text-sm">{s.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="patterns" className="py-16 px-4 scroll-mt-[100px]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">
              <span className="text-lime-400">Aim</span>{' '}
              <span className="text-white">Patterns</span>
            </h2>
            <p className="text-gray-400 font-mono mb-8">
              6 movement shapes that trigger Fortnite's rotational aim assist. Each pattern creates a different micro-movement
              path on the stick, fooling the game into thinking you're actively tracking an enemy.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { id: 0, name: 'OFF', desc: 'No pattern. Stick operates normally without micro-movements.' },
                { id: 1, name: 'CIR (Circle)', desc: 'Smooth circular rotation. Most consistent and predictable. Good starting point for beginners.' },
                { id: 2, name: 'DIA (Diamond)', desc: 'Diamond/square shaped path. More aggressive than circle with harder directional changes.' },
                { id: 3, name: 'CRS (Cross)', desc: 'Alternates between cardinal directions (up/right/down/left). Strong but can feel mechanical.' },
                { id: 4, name: 'FG8 (Figure-8)', desc: 'Figure-8 oscillation pattern. Covers more area, good for medium-range tracking.' },
                { id: 5, name: 'JIT (Jitter)', desc: 'Random jitter movement. Hardest to detect but less consistent. Good for anti-detection.' },
                { id: 6, name: 'DYN (Dynamic)', desc: 'Human-like pattern that cycles through distorted circle, figure-8, and jitter every ~100ms with random direction reversals. Mimics natural thumb tremor. RECOMMENDED for most players.' },
              ].map((p) => (
                <div key={p.id} className={`bg-black/60 border rounded-lg p-6 ${p.id === 6 ? 'border-lime-500/50 bg-lime-950/10' : 'border-gray-700/50'}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-2xl font-bold font-mono ${p.id === 6 ? 'text-lime-400' : 'text-gray-400'}`}>{p.id}</span>
                    <h3 className={`text-xl font-bold ${p.id === 6 ? 'text-lime-400' : 'text-gray-300'}`}>{p.name}</h3>
                    {p.id === 6 && <span className="bg-lime-500 text-black text-xs font-bold px-2 py-0.5 rounded">DEFAULT</span>}
                  </div>
                  <p className="text-gray-400 text-sm">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="py-16 px-4 bg-black/40 border-y border-lime-500/20 scroll-mt-[100px]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">
              <span className="text-white">v3.0</span>{' '}
              <span className="text-lime-400">Features Explained</span>
            </h2>

            <div className="space-y-8">
              <div className="bg-black/60 border border-lime-500/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-lime-400 mb-4">ADS Pulse</h3>
                <p className="text-gray-300 mb-4">
                  ADS Pulse rapidly toggles your L2 (aim down sights) button on and off while you're already aiming and shooting.
                  Each time L2 is released and pressed again, Fortnite re-calculates aim assist and snaps your crosshair to the
                  nearest enemy. This means you get multiple aim assist "locks" per second instead of just one.
                </p>
                <div className="bg-lime-950/20 border border-lime-500/20 rounded p-4">
                  <p className="text-lime-400 font-mono text-sm">
                    <span className="font-bold">How it works:</span> 25ms L2 release → 30-200ms L2 hold (based on speed setting) → repeat.
                    Only activates when you're both aiming AND firing to prevent accidental un-scope.
                  </p>
                </div>
              </div>

              <div className="bg-black/60 border border-lime-500/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-lime-400 mb-4">Crouch Spam</h3>
                <p className="text-gray-300 mb-4">
                  Rapidly toggles crouch (R3) while you're firing. In Fortnite, crouching counts as body movement which triggers
                  extra rotational aim assist. You also become a harder target to hit because your hitbox keeps moving up and down.
                </p>
                <div className="bg-lime-950/20 border border-lime-500/20 rounded p-4">
                  <p className="text-lime-400 font-mono text-sm">
                    <span className="font-bold">How it works:</span> 40ms crouch tap → 50-250ms gap (based on speed setting) → repeat.
                    R3 is the standard Fortnite crouch button on Builder Pro controls.
                  </p>
                </div>
              </div>

              <div className="bg-black/60 border border-lime-500/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-lime-400 mb-4">Headshot Bias</h3>
                <p className="text-gray-300 mb-4">
                  Applies a constant subtle upward pull on the right stick when you're aiming and firing. This steers your crosshair
                  toward the enemy's head hitbox for increased damage. Works together with dampening for precise control.
                </p>
                <div className="bg-lime-950/20 border border-lime-500/20 rounded p-4">
                  <p className="text-lime-400 font-mono text-sm">
                    <span className="font-bold">Recommended:</span> Start with strength 3-5 and adjust based on your sensitivity.
                    Too high will pull your aim above the enemy. Combine with low ADS dampening for best results.
                  </p>
                </div>
              </div>

              <div className="bg-black/60 border border-lime-500/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-lime-400 mb-4">Anti-Bloom</h3>
                <p className="text-gray-300 mb-4">
                  Smart burst fire system for full-auto weapons (SMGs, ARs). Fires for 280ms then pauses for 55ms to let
                  bloom reset. This keeps your shots accurate even during sustained fire.
                </p>
                <div className="bg-lime-950/20 border border-lime-500/20 rounded p-4">
                  <p className="text-lime-400 font-mono text-sm">
                    <span className="font-bold">Best for:</span> Full-auto weapons only. Do NOT use with tapfire at the same time
                    (tapfire is for semi-auto weapons). Enable anti-bloom for AR/SMG spraying, use tapfire for single-shot weapons.
                  </p>
                </div>
              </div>

              <div className="bg-black/60 border border-lime-500/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-lime-400 mb-4">Pre-Aim Sticky</h3>
                <p className="text-gray-300 mb-4">
                  Extra dampening when you're aiming (L2) but NOT firing (R2). This makes your aim extremely sticky when
                  lining up a shot, perfect for one-shot weapons like shotguns and snipers.
                </p>
                <div className="bg-lime-950/20 border border-lime-500/20 rounded p-4">
                  <p className="text-lime-400 font-mono text-sm">
                    <span className="font-bold">How to use:</span> Set PRE value on the DAMP page. Higher values = stickier aim while
                    lining up your shot. When you pull R2, normal dampening resumes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="settings" className="py-16 px-4 scroll-mt-[100px]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">
              <span className="text-lime-400">All 29</span>{' '}
              <span className="text-white">Settings Reference</span>
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-sm font-mono">
                <thead>
                  <tr className="border-b border-lime-500/30">
                    <th className="text-left text-lime-400 py-3 px-4">Page</th>
                    <th className="text-left text-lime-400 py-3 px-4">Setting</th>
                    <th className="text-left text-lime-400 py-3 px-4">Range</th>
                    <th className="text-left text-lime-400 py-3 px-4">Default</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  {[
                    ['L STICK ADS', 'PTN (Pattern)', '0-6', '6 (DYN)'],
                    ['L STICK ADS', 'SPD (Speed)', '4-24', '10'],
                    ['L STICK ADS', 'SIZ (Size)', '5-40', '30'],
                    ['L STICK HIP', 'PTN (Pattern)', '0-6', '6 (DYN)'],
                    ['L STICK HIP', 'SPD (Speed)', '4-24', '10'],
                    ['L STICK HIP', 'SIZ (Size)', '5-40', '32'],
                    ['R STICK ADS', 'PTN (Pattern)', '0-6', '1 (CIR)'],
                    ['R STICK ADS', 'SPD (Speed)', '5-30', '15'],
                    ['R STICK ADS', 'SIZ (Size)', '0-30', '15'],
                    ['R STICK HIP', 'PTN (Pattern)', '0-6', '0 (OFF)'],
                    ['R STICK HIP', 'SPD (Speed)', '5-30', '15'],
                    ['R STICK HIP', 'SIZ (Size)', '0-30', '7'],
                    ['DAMP', 'ADS', '10-100', '70'],
                    ['DAMP', 'HIP', '30-100', '75'],
                    ['DAMP', 'TRN (Turn)', '50-100', '85'],
                    ['DAMP', 'PRE (Pre-Aim)', '0-100', '0'],
                    ['SYSTEM', 'DZN (Deadzone L)', '5-25', '13'],
                    ['SYSTEM', 'DZR (Deadzone R)', '3-15', '8'],
                    ['SYSTEM', 'TFD (Tapfire)', '10-60', '30'],
                    ['BOOST', 'TRK (Track)', '0-30', '0'],
                    ['BOOST', 'STK (Stick)', '0-40', '0'],
                    ['BOOST', 'LRN (L Random)', '0-20', '3'],
                    ['BOOST', 'RRN (R Random)', '0-20', '0'],
                    ['MODS', 'ADP (ADS Pulse)', 'OFF/ON', 'OFF'],
                    ['MODS', 'PSP (Pulse Speed)', '1-10', '5'],
                    ['MODS', 'CRC (Crouch)', 'OFF/ON', 'OFF'],
                    ['MODS', 'CSP (Crouch Speed)', '1-10', '5'],
                    ['EXTRA', 'HSB (Headshot)', '0-20', '0'],
                    ['EXTRA', 'ABL (Anti-Bloom)', 'OFF/ON', 'OFF'],
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-gray-800/50 hover:bg-lime-950/10 transition-colors">
                      <td className="py-2 px-4 text-gray-500">{row[0]}</td>
                      <td className="py-2 px-4 text-lime-400">{row[1]}</td>
                      <td className="py-2 px-4">{row[2]}</td>
                      <td className="py-2 px-4">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="recommended" className="py-16 px-4 bg-black/40 border-y border-lime-500/20 scroll-mt-[100px]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">
              <span className="text-white">Recommended</span>{' '}
              <span className="text-lime-400">Settings</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-black/60 border border-lime-500/30 rounded-lg p-6">
                <h3 className="text-lime-400 font-bold text-xl mb-4">Aggressive (Close Range)</h3>
                <p className="text-gray-400 text-sm mb-4">For SMG/shotgun players who like getting in faces.</p>
                <ul className="space-y-2 text-gray-300 font-mono text-sm">
                  <li>L STICK ADS: DYN / Speed 12 / Size 35</li>
                  <li>R STICK ADS: CIR / Speed 15 / Size 18</li>
                  <li>DAMP: ADS 60 / HIP 65 / TRN 80</li>
                  <li>MODS: ADS Pulse ON / Speed 6</li>
                  <li>MODS: Crouch ON / Speed 6</li>
                  <li>EXTRA: HSB 5 / ABL ON</li>
                </ul>
              </div>

              <div className="bg-black/60 border border-lime-500/30 rounded-lg p-6">
                <h3 className="text-lime-400 font-bold text-xl mb-4">Balanced (All-Round)</h3>
                <p className="text-gray-400 text-sm mb-4">Default settings. Good for most players and situations.</p>
                <ul className="space-y-2 text-gray-300 font-mono text-sm">
                  <li>L STICK ADS: DYN / Speed 10 / Size 30</li>
                  <li>R STICK ADS: CIR / Speed 15 / Size 15</li>
                  <li>DAMP: ADS 70 / HIP 75 / TRN 85</li>
                  <li>MODS: Both OFF (enable as needed)</li>
                  <li>BOOST: LRN 3</li>
                  <li>EXTRA: HSB 0 / ABL OFF</li>
                </ul>
              </div>

              <div className="bg-black/60 border border-lime-500/30 rounded-lg p-6">
                <h3 className="text-lime-400 font-bold text-xl mb-4">Sniper / Precision</h3>
                <p className="text-gray-400 text-sm mb-4">For long-range / one-shot weapon players.</p>
                <ul className="space-y-2 text-gray-300 font-mono text-sm">
                  <li>L STICK ADS: DYN / Speed 8 / Size 25</li>
                  <li>R STICK ADS: CIR / Speed 10 / Size 10</li>
                  <li>DAMP: ADS 55 / HIP 70 / PRE 30</li>
                  <li>MODS: Both OFF</li>
                  <li>EXTRA: HSB 8 / ABL OFF</li>
                </ul>
              </div>

              <div className="bg-black/60 border border-lime-500/30 rounded-lg p-6">
                <h3 className="text-lime-400 font-bold text-xl mb-4">Maximum Assist</h3>
                <p className="text-gray-400 text-sm mb-4">Strongest possible settings. May feel too aggressive for some.</p>
                <ul className="space-y-2 text-gray-300 font-mono text-sm">
                  <li>L STICK ADS: DYN / Speed 14 / Size 40</li>
                  <li>R STICK ADS: DYN / Speed 20 / Size 25</li>
                  <li>DAMP: ADS 40 / HIP 50 / TRN 75</li>
                  <li>MODS: ADS Pulse ON / Speed 8</li>
                  <li>MODS: Crouch ON / Speed 8</li>
                  <li>EXTRA: HSB 10 / ABL ON</li>
                  <li>BOOST: TRK 15 / STK 20 / LRN 5</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 border-t border-lime-500/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Need</span>{' '}
              <span className="text-lime-400">More Help?</span>
            </h2>
            <p className="text-xl text-gray-300 font-mono mb-8">
              Join the Discord for community settings, tips, and live support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://discord.gg/zp2HmEgTWq"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-lime-500 hover:bg-lime-400 text-black font-bold px-8 py-4 rounded-lg transition-all text-lg"
              >
                Join Discord
              </a>
              <Link
                href="/setup-guide"
                className="inline-block border border-lime-500 text-lime-400 hover:bg-lime-500/10 font-bold px-8 py-4 rounded-lg transition-all text-lg"
              >
                Setup Guide
              </Link>
              <Link
                href="/changelog"
                className="inline-block border border-gray-600 text-gray-400 hover:bg-gray-800/50 font-bold px-8 py-4 rounded-lg transition-all text-lg"
              >
                Version History
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
