const projects = [
  {
    id: '01',
    title: 'Security Operations Lab',
    description: 'Wazuh, Security Onion, Velociraptor and threat detection.',
    tag: 'CYBERSECURITY',
  },
  {
    id: '02',
    title: 'Network & Infrastructure',
    description: 'Proxmox, VLAN architecture, routing and secure remote access.',
    tag: 'NETWORKING',
  },
  {
    id: '03',
    title: 'Infrastructure as Code',
    description: 'Terraform, Ubuntu cloud-init and automated VM provisioning.',
    tag: 'AUTOMATION',
  },
  {
    id: '04',
    title: 'Aegis Shield / Aegis Control',
    description: 'Early-stage security venture developing agent-based automation.',
    tag: 'FEATURED VENTURE',
  },
]

function App() {
  return (
    <div className="min-h-screen bg-[#070d18] text-slate-100">
      <header className="border-b border-slate-800/80">
        <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">
          <a href="#" className="font-mono text-xl font-bold text-cyan-400">
            ER<span className="text-emerald-400">_</span>
          </a>

          <div className="flex flex-wrap gap-5 text-sm text-slate-400">
            <a href="#about" className="hover:text-cyan-300">About</a>
            <a href="#projects" className="hover:text-cyan-300">Projects</a>
            <a href="#terminal" className="hover:text-cyan-300">Terminal</a>
            <a href="#contact" className="hover:text-cyan-300">Contact</a>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        <section id="about" className="grid gap-12 py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-5 font-mono text-sm tracking-widest text-emerald-400">
              &gt; SYSTEM INITIALIZED
            </p>

            <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
              Edilberto
              <br />
              <span className="text-cyan-400">Rodriguez.</span>
            </h1>

            <h2 className="mt-6 text-xl text-slate-300">
              Infrastructure & Security Engineering
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-slate-400">
              Building, securing and automating modern infrastructure.
              Focused on cybersecurity, networking, Linux, virtualization
              and emerging technologies.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-md bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400"
              >
                Explore Projects
              </a>
              <a
                href="https://github.com/edilbertorodriguez"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-slate-600 px-6 py-3 hover:border-cyan-400"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          <div id="terminal" className="overflow-hidden rounded-xl border border-slate-700 bg-[#0c1523] shadow-2xl shadow-cyan-950/30">
            <div className="flex items-center gap-2 border-b border-slate-700 bg-[#111e30] px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-4 font-mono text-xs text-slate-400">
                guest@edilberto:~
              </span>
            </div>

            <div className="space-y-4 p-6 font-mono text-sm">
              <p className="text-emerald-400">
                guest@portfolio:~$ whoami
              </p>
              <p className="text-slate-300">
                Edilberto Rodriguez
                <br />
                Infrastructure & Security Engineer
              </p>

              <p className="text-emerald-400">
                guest@portfolio:~$ cat skills.txt
              </p>
              <p className="leading-7 text-slate-400">
                Linux | Windows Server | Networking
                <br />
                Proxmox | Docker | Terraform
                <br />
                Wazuh | Security Onion | Security Automation
              </p>

              <p className="text-emerald-400">
                guest@portfolio:~$ ls projects/
              </p>
              <p className="text-cyan-300">
                security-lab/
                <br />
                network-infrastructure/
                <br />
                infrastructure-as-code/
                <br />
                aegis-control/
              </p>

              <p className="text-emerald-400">
                guest@portfolio:~$ <span className="animate-pulse">▋</span>
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="py-12">
          <p className="font-mono text-sm text-emerald-400">
            // SELECTED WORK
          </p>
          <h2 className="mt-3 text-3xl font-bold">Featured Projects</h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.id}
                className="rounded-xl border border-slate-800 bg-[#101a2a] p-6 transition hover:border-cyan-500"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-cyan-400">
                    {project.id}
                  </span>
                  <span className="text-xs tracking-wider text-emerald-400">
                    {project.tag}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-semibold">
                  {project.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-400">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="py-16 text-center">
          <p className="font-mono text-sm text-emerald-400">
            // CONNECT
          </p>
          <h2 className="mt-3 text-3xl font-bold">
            Let's Build Something Meaningful.
          </h2>
          <p className="mt-4 text-slate-400">
            Infrastructure. Cybersecurity. Networking. Automation.
          </p>
          <a
            href="https://github.com/edilbertorodriguez"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-block rounded-md border border-cyan-500 px-6 py-3 text-cyan-300 hover:bg-cyan-950"
          >
            Visit GitHub ↗
          </a>
        </section>
      </main>

      <footer className="border-t border-slate-800 px-6 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Edilberto Rodriguez
        · Infrastructure & Security Engineering
      </footer>
    </div>
  )
}

export default App