import { useState } from 'react'
import Terminal from './components/Terminal'

const projects = [
  {
    number: '01',
    type: 'DETECTION ENGINEERING',
    title: 'Security Operations Laboratory',
    description: 'A defensive security lab for log analytics, endpoint visibility, network monitoring, and incident-response exercises.',
    stack: ['Wazuh', 'Security Onion', 'Velociraptor', 'MISP'],
  },
  {
    number: '02',
    type: 'NETWORK ARCHITECTURE',
    title: 'Segmented Homelab Infrastructure',
    description: 'A virtualized multi-VLAN environment with network isolation, routing, and secure remote administration.',
    stack: ['Proxmox', 'VLANs', 'Cisco', 'Tailscale'],
  },
  {
    number: '03',
    type: 'INFRASTRUCTURE AS CODE',
    title: 'Automated VM Provisioning',
    description: 'Repeatable Ubuntu VM deployments using infrastructure definitions, templates, and cloud-init configuration.',
    stack: ['Terraform', 'Ubuntu', 'Cloud-init', 'Proxmox'],
  },
  {
  number: '04',
  type: 'SATELLITE / IoT TELEMETRY',
  title: 'TerraTech — Satellite & IoT Telemetry',
  description:
    'Agricultural IoT platform architecture integrating ESP32-C6 sensor nodes, Raspberry Pi edge computing, Starlink satellite connectivity, and Grafana telemetry monitoring.',
  stack: ['Starlink', 'ESP32-C6', 'Raspberry Pi', 'MQTT', 'IoT'],
},
]

const specialties = [
  { icon: '⌘', name: 'Infrastructure', summary: 'Linux · Windows Server · Virtualization' },
  { icon: '⌁', name: 'Networking', summary: 'Routing · Switching · VLAN Design' },
  { icon: '◈', name: 'Cybersecurity', summary: 'Blue Team · Detection · Incident Response' },
  { icon: '⚙', name: 'Automation', summary: 'Terraform · Docker · Scripting' },
  { icon: '✧', name: 'Space Systems', summary: 'Satellite communications · Emerging systems' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="site-shell min-h-screen text-slate-100">
      <div className="space-scene" aria-hidden="true">
        <div className="starfield" />
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="planet" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#06101ee6] backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8" aria-label="Main navigation">
          <a href="#home" className="font-mono text-xl font-bold tracking-widest text-white" aria-label="Edilberto Rodriguez, home">
            ER<span className="text-cyan-400">_</span>
          </a>
          <button
            type="button"
            className="rounded border border-slate-600 px-3 py-2 text-sm text-slate-200 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="main-links"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
          <div id="main-links" className={`${menuOpen ? 'flex' : 'hidden'} absolute left-0 right-0 top-full flex-col gap-5 border-b border-white/10 bg-[#06101e] px-6 py-6 text-sm text-slate-300 md:static md:flex md:flex-row md:items-center md:gap-8 md:border-none md:bg-transparent md:p-0`}>
            <a className="nav-link" href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a className="nav-link" href="#expertise" onClick={() => setMenuOpen(false)}>Expertise</a>
            <a className="nav-link" href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a className="nav-link" href="#aegis" onClick={() => setMenuOpen(false)}>Aegis Shield</a>
            <a className="nav-link" href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            <a className="rounded-md border border-cyan-400/60 px-4 py-2 text-center font-medium text-cyan-200 transition hover:bg-cyan-400/10" href="https://github.com/edilbertorodriguez" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </nav>
      </header>

      <main id="home" className="relative z-10">
        <section id="about" className="mx-auto grid min-h-[660px] max-w-7xl items-center gap-10 px-5 pb-24 pt-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pt-28">
          <div>
            <div className="eyebrow mb-7"><span className="status-dot" /> SYSTEMS ONLINE <span className="text-slate-600">//</span> PORTFOLIO v1.0</div>
            <p className="mb-3 font-mono text-sm uppercase tracking-[.25em] text-cyan-300">Engineering the systems behind what's next</p>
            <h1 className="hero-title text-5xl font-extrabold leading-[1.04] tracking-tight sm:text-6xl xl:text-7xl">Edilberto<br /><span className="gradient-text">Rodriguez.</span></h1>
            <p className="mt-7 max-w-lg text-xl font-medium text-slate-200">Infrastructure & Security Engineer</p>
            <p className="mt-4 max-w-xl leading-8 text-slate-400">Building resilient networks, secure platforms, and automated infrastructure—with an eye toward the future of connected and space-based systems.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="primary-btn">Explore my work <span aria-hidden="true">↗</span></a>
              <a href="https://github.com/edilbertorodriguez" className="secondary-btn" target="_blank" rel="noreferrer">View GitHub ↗</a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/10 pt-6 font-mono text-xs uppercase tracking-wider text-slate-500">
              <span><span className="text-emerald-400">●</span> Linux & Infrastructure</span>
              <span><span className="text-emerald-400">●</span> Blue Team</span>
              <span><span className="text-emerald-400">●</span> Network Engineering</span>
            </div>
          </div>

          <Terminal />
        </section>

        <section id="expertise" className="section-band border-y border-white/10">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
            <div className="section-heading"><div><p className="section-kicker">// CORE CAPABILITIES</p><h2 className="section-title">Engineering expertise</h2></div><p className="max-w-md text-sm leading-7 text-slate-400">A cross-disciplinary foundation spanning reliable infrastructure, defensive security, and automation.</p></div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{specialties.map((specialty) => <article key={specialty.name} className="glass-card p-5"><div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/10 text-2xl text-cyan-300" aria-hidden="true">{specialty.icon}</div><h3 className="font-semibold text-white">{specialty.name}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{specialty.summary}</p></article>)}</div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <div className="section-heading"><div><p className="section-kicker">// SELECTED ENGINEERING WORK</p><h2 className="section-title">Featured projects</h2></div><p className="max-w-md text-sm leading-7 text-slate-400">Practical environments built to explore, validate, and document engineering skills.</p></div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">{projects.map((project) => <article key={project.number} className="glass-card group flex flex-col p-6"><div className="mb-12 flex items-center justify-between"><span className="font-mono text-sm text-cyan-300">/{project.number}</span><span className="text-[10px] font-semibold tracking-[.14em] text-emerald-300">{project.type}</span></div><h3 className="text-xl font-bold text-slate-100">{project.title}</h3><p className="mt-4 flex-1 text-sm leading-7 text-slate-400">{project.description}</p><div className="mt-7 flex flex-wrap gap-2">{project.stack.map((item) => <span className="tech-chip" key={item}>{item}</span>)}</div></article>)}</div>
        </section>

        <section id="aegis" className="border-y border-white/10 bg-[#081525]/85">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div><p className="section-kicker">// FEATURED VENTURE</p><h2 className="section-title">Aegis <span className="text-cyan-300">Shield</span></h2><p className="mt-3 text-sm font-medium text-emerald-300">Founder & CEO · Early-stage cybersecurity venture</p><p className="mt-6 max-w-xl leading-8 text-slate-400">Building practical defensive security capabilities and security automation for organizations. The flagship Aegis Control platform is currently in active development and lab validation.</p><p className="mt-4 text-sm text-slate-500">This section documents engineering progress—not commercial customer outcomes.</p></div>
            <div className="glass-card p-6 sm:p-8"><div className="flex flex-wrap items-center justify-between gap-3"><span className="font-mono text-sm font-bold tracking-wider text-cyan-300">AEGIS CONTROL</span><span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs text-amber-200">In development</span></div><div className="mt-6 flex items-center justify-center gap-3 font-mono text-xs sm:gap-5 sm:text-sm"><div className="diagram-node">Controller</div><span className="text-emerald-400">↔</span><div className="diagram-node">Worker API</div><span className="text-emerald-400">↔</span><div className="diagram-node">Lab Tools</div></div><p className="mt-7 text-sm leading-7 text-slate-400">Controller/worker orchestration running on Ubuntu and Docker, with API-based task coordination in a controlled lab environment.</p><div className="mt-5 flex flex-wrap gap-2">{['Ubuntu Server', 'Docker', 'API', 'Orchestration'].map((item) => <span className="tech-chip" key={item}>{item}</span>)}</div></div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-5 py-24 text-center sm:px-8"><p className="section-kicker">// GET IN TOUCH</p><h2 className="mt-3 text-3xl font-bold sm:text-4xl">Let's build what comes next.</h2><p className="mx-auto mt-5 max-w-xl leading-8 text-slate-400">Interested in infrastructure, cybersecurity, networking, or emerging space technologies? Explore my engineering work and connect.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><a href="https://github.com/edilbertorodriguez" className="primary-btn" target="_blank" rel="noreferrer">Explore GitHub ↗</a><a href="#home" className="secondary-btn">Back to top ↑</a></div></section>
      </main>
      <footer className="relative z-10 border-t border-white/10 px-5 py-7 text-center font-mono text-xs text-slate-500">© {new Date().getFullYear()} Edilberto Rodriguez · Infrastructure & Security Engineering</footer>
    </div>
  )
}

export default App
