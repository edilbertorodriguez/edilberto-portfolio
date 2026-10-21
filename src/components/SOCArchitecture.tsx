
import { useState } from 'react'

type SOCPlatform = {
  id: string
  name: string
  role: string
  description: string
  sources: string[]
  capabilities: string[]
  example: string
  validation: string
}

const platforms: SOCPlatform[] = [
  {
    id: 'wazuh',
    name: 'Wazuh',
    role: 'Host Security Monitoring',
    description:
      'Centralized agent-based security monitoring for Linux and Windows systems.',
    sources: [
      'Endpoint security events',
      'System logs',
      'File integrity events',
      'Agent inventory',
    ],
    capabilities: [
      'File Integrity Monitoring',
      'Security event correlation',
      'Agent health monitoring',
      'Host-based detection',
    ],
    example:
      'Modify a monitored test file and inspect the resulting file integrity event in the Wazuh Dashboard.',
    validation:
      'Agent connectivity and file integrity monitoring exercises validated in the laboratory.',
  },
  {
    id: 'security-onion',
    name: 'Security Onion',
    role: 'Network Security Monitoring',
    description:
      'Network-focused monitoring platform for investigating security events and traffic.',
    sources: [
      'Network traffic',
      'IDS alerts',
      'Network metadata',
      'Packet captures when available',
    ],
    capabilities: [
      'Network intrusion detection',
      'Traffic investigation',
      'Alert triage',
      'Network visibility',
    ],
    example:
      'Inspect laboratory network traffic and investigate associated metadata or alerts when generated.',
    validation:
      'Standalone Security Onion environment deployed; individual detection exercises require supporting evidence.',
  },
  {
    id: 'velociraptor',
    name: 'Velociraptor',
    role: 'Endpoint Investigation',
    description:
      'Digital forensics and incident-response platform for endpoint investigations.',
    sources: [
      'Endpoint artifacts',
      'Operating system information',
      'Process and filesystem evidence',
      'Collected investigation results',
    ],
    capabilities: [
      'Artifact collection',
      'Endpoint visibility',
      'Threat hunting',
      'Incident-response investigation',
    ],
    example:
      'Collect authorized endpoint artifacts in the lab and document investigation findings.',
    validation:
      'Velociraptor server environment established; specific collections should be documented individually.',
  },
  {
    id: 'misp',
    name: 'MISP',
    role: 'Threat Intelligence',
    description:
      'Threat intelligence platform for organizing indicators and structured threat information.',
    sources: [
      'Indicators of compromise',
      'Threat events',
      'Contextual intelligence',
      'Structured indicator attributes',
    ],
    capabilities: [
      'IOC management',
      'Threat intelligence organization',
      'Indicator correlation',
      'Intelligence sharing workflows',
    ],
    example:
      'Document a synthetic IOC event and examine its attributes and relationships.',
    validation:
      'MISP laboratory deployment established; automated integrations are not claimed.',
  },
]

export default function SOCArchitecture() {
  const [selected, setSelected] = useState('wazuh')

  const active =
    platforms.find((platform) => platform.id === selected) ??
    platforms[0]

  return (
    <section
      aria-labelledby="soc-architecture-title"
      className="mt-14 rounded-2xl border border-cyan-800/40 bg-[#091626] p-5 sm:p-8"
    >
      <p className="font-mono text-xs tracking-widest text-emerald-400">
        // SECURITY OPERATIONS ARCHITECTURE
      </p>

      <h2
        id="soc-architecture-title"
        className="mt-3 text-2xl font-bold text-white"
      >
        Defensive Security Laboratory
      </h2>

      <p className="mt-3 text-sm leading-7 text-slate-400">
        Explore four defensive security platforms deployed in a
        virtualized laboratory environment. Select a platform
        to inspect its capabilities and investigation use cases.
      </p>

      <div className="mt-8 rounded-xl border border-slate-700 bg-[#102033] p-5 text-center">
        <div className="font-mono text-xs text-emerald-400">
          LABORATORY DATA SOURCES
        </div>
        <h3 className="mt-2 font-semibold text-white">
          Linux / Windows Endpoints + Network Telemetry
        </h3>
        <p className="mt-2 text-xs text-slate-400">
          Controlled laboratory workloads and test activity
        </p>
      </div>

      <div className="mx-auto h-8 w-px bg-cyan-600/60" />

      <div className="grid gap-3 sm:grid-cols-2">
        {platforms.map((platform) => (
          <button
            key={platform.id}
            type="button"
            onClick={() => setSelected(platform.id)}
            aria-pressed={selected === platform.id}
            className={`rounded-xl border p-5 text-left transition
              focus-visible:outline-2 focus-visible:outline-offset-2
              focus-visible:outline-cyan-300 ${
                selected === platform.id
                  ? 'border-cyan-400 bg-cyan-500/15'
                  : 'border-slate-700 bg-[#102033] hover:border-cyan-600'
              }`}
          >
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-xs text-emerald-400">
                SECURITY PLATFORM
              </span>
              <span className="text-xs text-cyan-300">
                {selected === platform.id ? '● SELECTED' : 'VIEW →'}
              </span>
            </div>

            <h3 className="mt-3 text-xl font-bold text-white">
              {platform.name}
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              {platform.role}
            </p>
          </button>
        ))}
      </div>

      <div
        aria-live="polite"
        className="mt-6 rounded-xl border border-emerald-800/40 bg-emerald-950/10 p-5 sm:p-7"
      >
        <p className="font-mono text-xs text-emerald-400">
          SELECTED PLATFORM
        </p>

        <h3 className="mt-2 text-2xl font-bold text-white">
          {active.name}
        </h3>

        <p className="mt-3 leading-7 text-slate-300">
          {active.description}
        </p>

        <div className="mt-7 grid gap-7 md:grid-cols-2">
          <div>
            <h4 className="font-semibold text-cyan-300">
              Data Sources
            </h4>
            <ul className="mt-3 space-y-2">
              {active.sources.map((source) => (
                <li key={source} className="text-sm text-slate-300">
                  <span className="mr-2 text-emerald-400">›</span>
                  {source}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-cyan-300">
              Capabilities
            </h4>
            <ul className="mt-3 space-y-2">
              {active.capabilities.map((capability) => (
                <li key={capability} className="text-sm text-slate-300">
                  <span className="mr-2 text-emerald-400">›</span>
                  {capability}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-7 rounded-lg border border-slate-700 bg-[#0b1929] p-5">
          <h4 className="font-semibold text-cyan-300">
            Investigation Example
          </h4>
          <p className="mt-2 text-sm leading-7 text-slate-300">
            {active.example}
          </p>
        </div>

        <div className="mt-4 rounded-lg border border-slate-700 bg-[#0b1929] p-5">
          <h4 className="font-semibold text-emerald-300">
            Lab Validation Status
          </h4>
          <p className="mt-2 text-sm leading-7 text-slate-300">
            {active.validation}
          </p>
        </div>
      </div>

      <p className="mt-5 text-xs leading-6 text-slate-500">
        This diagram summarizes separate defensive security
        capabilities. It does not depict confirmed automated
        integrations, continuous production monitoring,
        or commercial SOC operations.
      </p>
    </section>
  )
}
