
import { useState } from 'react'

type Segment = {
  id: number
  name: string
  purpose: string
  systems: string
  security: string
}

const segments: Segment[] = [
  {
    id: 10,
    name: 'Management',
    purpose: 'Administration of networking and infrastructure devices.',
    systems: 'Switch management and infrastructure interfaces.',
    security: 'Restrict access to authorized administration devices.',
  },
  {
    id: 20,
    name: 'Trusted',
    purpose: 'Workstations and trusted user devices.',
    systems: 'Personal computers and authorized endpoints.',
    security: 'Permit only necessary access to management and services.',
  },
  {
    id: 30,
    name: 'Services',
    purpose: 'Shared services used by the home network.',
    systems: 'DNS, NAS, media services and remote-access connectors.',
    security: 'Apply service-specific access policies.',
  },
  {
    id: 40,
    name: 'IoT',
    purpose: 'Segmentation of connected and smart devices.',
    systems: 'Smart-home and IoT endpoints.',
    security: 'Reduce unnecessary access to trusted systems.',
  },
  {
    id: 50,
    name: 'Guests',
    purpose: 'Internet connectivity for visiting devices.',
    systems: 'Guest phones, laptops and other endpoints.',
    security: 'Isolate visitors from internal resources.',
  },
  {
    id: 60,
    name: 'Laboratory',
    purpose: 'Infrastructure and cybersecurity experimentation.',
    systems: 'Proxmox VMs, Linux systems and security tooling.',
    security: 'Separate experimental workloads from trusted devices.',
  },
  {
    id: 70,
    name: 'DMZ',
    purpose: 'Dedicated segment for isolated service testing.',
    systems: 'Designated test or exposed-service workloads.',
    security: 'Apply explicit inter-segment access restrictions.',
  },
]

export default function NetworkArchitecture() {
  const [selected, setSelected] = useState(60)

  const active = segments.find(
    (segment) => segment.id === selected
  )!

  return (
    <section
      aria-labelledby="architecture-title"
      className="mt-14 rounded-2xl border border-cyan-800/40 bg-[#091626] p-5 sm:p-8"
    >
      <div className="mb-8">
        <p className="font-mono text-xs tracking-widest text-emerald-400">
          // NETWORK TOPOLOGY
        </p>

        <h2
          id="architecture-title"
          className="mt-3 text-2xl font-bold text-slate-100"
        >
          Logical Network Architecture
        </h2>

        <p className="mt-3 text-sm leading-7 text-slate-400">
          Select a VLAN to explore its role and security
          considerations. This is a simplified public-facing
          representation, not a complete physical topology.
        </p>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-full max-w-sm rounded-xl border border-cyan-700/50 bg-[#102237] p-4 text-center">
          <div className="text-2xl">◎</div>
          <h3 className="font-semibold text-white">Internet</h3>
          <p className="text-xs text-slate-400">
            ISP connectivity
          </p>
        </div>

        <div className="h-8 w-px bg-cyan-600/70" />

        <div className="w-full max-w-sm rounded-xl border border-cyan-700/50 bg-[#102237] p-4 text-center">
          <div className="font-mono text-xs text-emerald-400">
            NETWORK GATEWAY
          </div>
          <h3 className="mt-2 font-semibold text-white">
            TP-Link ER605
          </h3>
          <p className="text-xs text-slate-400">
            Routing and policy enforcement
          </p>
        </div>

        <div className="h-8 w-px bg-cyan-600/70" />

        <div className="w-full max-w-sm rounded-xl border border-cyan-700/50 bg-[#102237] p-4 text-center">
          <div className="font-mono text-xs text-emerald-400">
            DISTRIBUTION
          </div>
          <h3 className="mt-2 font-semibold text-white">
            Managed Switching
          </h3>
          <p className="text-xs text-slate-400">
            802.1Q VLAN segmentation
          </p>
        </div>

        <div className="h-8 w-px bg-cyan-600/70" />

        <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {segments.map((segment) => (
            <button
              key={segment.id}
              type="button"
              onClick={() => setSelected(segment.id)}
              aria-pressed={selected === segment.id}
              className={`rounded-xl border p-4 text-left transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 ${
                selected === segment.id
                  ? 'border-cyan-400 bg-cyan-500/15 shadow-lg shadow-cyan-950/40'
                  : 'border-slate-700 bg-[#102033] hover:border-cyan-600'
              }`}
            >
              <span className="font-mono text-xs text-emerald-400">
                VLAN {segment.id}
              </span>
              <span className="mt-2 block font-semibold text-white">
                {segment.name}
              </span>
              <span className="mt-2 block text-xs text-slate-400">
                {selected === segment.id
                  ? 'Selected'
                  : 'View details →'}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div
        aria-live="polite"
        className="mt-7 rounded-xl border border-emerald-800/40 bg-emerald-950/10 p-5 sm:p-6"
      >
        <p className="font-mono text-xs text-emerald-400">
          SELECTED NETWORK SEGMENT
        </p>

        <h3 className="mt-2 text-xl font-bold text-slate-100">
          VLAN {active.id} — {active.name}
        </h3>

        <div className="mt-5 grid gap-5 md:grid-cols-3">
          <div>
            <h4 className="text-sm font-semibold text-cyan-300">
              Purpose
            </h4>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              {active.purpose}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-cyan-300">
              Systems
            </h4>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              {active.systems}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-cyan-300">
              Security Considerations
            </h4>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              {active.security}
            </p>
          </div>
        </div>
      </div>

      <p className="mt-5 text-xs leading-6 text-slate-500">
        Public architecture overview. VLAN descriptions summarize
        intended roles and design considerations; they do not
        constitute a verified firewall or isolation audit.
      </p>
    </section>
  )
}
