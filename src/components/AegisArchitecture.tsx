
import { useState } from 'react'

type Node = {
  id: string
  name: string
  role: string
  details: string
  status: string
  technologies: string[]
}

const nodes: Node[] = [
  {
    id: 'interface',
    name: 'Operator Interface',
    role: 'Human interaction',
    details:
      'Telegram is paired as a communication interface with the OpenClaw environment. Authorized operations remain subject to the platform configuration.',
    status: 'Paired in lab',
    technologies: ['Telegram', 'Messaging'],
  },
  {
    id: 'controller',
    name: 'Aegis Controller',
    role: 'Orchestration layer',
    details:
      'Dedicated Ubuntu Server VM hosting the OpenClaw gateway and supporting container environment.',
    status: 'Deployed',
    technologies: ['Ubuntu 24.04', 'Docker', 'OpenClaw'],
  },
  {
    id: 'worker',
    name: 'Aegis Worker',
    role: 'Execution layer',
    details:
      'Separate Ubuntu Server VM providing an API-based worker interface. Health endpoint and initial plugin initialization have been validated.',
    status: 'Health check validated',
    technologies: ['Ubuntu 24.04', 'API', 'Docker'],
  },
  {
    id: 'tools',
    name: 'Defensive Security Tools',
    role: 'Planned automation capabilities',
    details:
      'Future workflows may coordinate authorized network discovery, inventory, and defensive security checks. End-to-end automation is not yet claimed as validated.',
    status: 'In development',
    technologies: ['Security Automation', 'Discovery', 'Tool Integration'],
  },
]

export default function AegisArchitecture() {
  const [selected, setSelected] = useState('controller')
  const active = nodes.find(node => node.id === selected) ?? nodes[1]

  return (
    <section className="mt-14 rounded-2xl border border-cyan-800/40 bg-[#091626] p-5 sm:p-8">
      <p className="font-mono text-xs tracking-widest text-emerald-400">
        // AEGIS CONTROL ARCHITECTURE
      </p>

      <h2 className="mt-3 text-2xl font-bold text-white">
        Distributed Security Orchestration
      </h2>

      <p className="mt-3 text-sm leading-7 text-slate-400">
        Explore the controller/worker architecture. Select a
        component to examine its purpose, technologies, and
        current implementation status.
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {nodes.map((node, index) => (
          <button
            key={node.id}
            type="button"
            aria-pressed={selected === node.id}
            onClick={() => setSelected(node.id)}
            className={`rounded-xl border p-5 text-left transition
              focus-visible:outline-2 focus-visible:outline-cyan-300 ${
                selected === node.id
                  ? 'border-cyan-400 bg-cyan-500/15'
                  : 'border-slate-700 bg-[#102033] hover:border-cyan-600'
              }`}
          >
            <span className="font-mono text-xs text-emerald-400">
              COMPONENT {String(index + 1).padStart(2, '0')}
            </span>

            <h3 className="mt-3 font-semibold text-white">
              {node.name}
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              {node.role}
            </p>

            <p className="mt-4 font-mono text-xs text-cyan-300">
              {selected === node.id ? '● SELECTED' : 'EXPLORE →'}
            </p>
          </button>
        ))}
      </div>

      <div
        aria-live="polite"
        className="mt-6 rounded-xl border border-emerald-800/40 bg-emerald-950/10 p-6"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-xl font-bold text-white">
            {active.name}
          </h3>

          <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs text-amber-200">
            {active.status}
          </span>
        </div>

        <p className="mt-5 leading-7 text-slate-300">
          {active.details}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {active.technologies.map(technology => (
            <span
              key={technology}
              className="rounded-md border border-cyan-800/50 bg-cyan-950/30 px-3 py-2 font-mono text-xs text-cyan-200"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>

      <p className="mt-5 text-xs text-slate-500">
        Architecture overview only. Internal addresses, API
        credentials, tokens, and administrative endpoints
        are intentionally excluded.
      </p>
    </section>
  )
}
