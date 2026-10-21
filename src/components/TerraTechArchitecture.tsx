
import { useState } from 'react'

type ArchitectureNode = {
  id: string
  number: string
  title: string
  subtitle: string
  responsibility: string
  technologies: string[]
  communication: string
  status: string
}

const nodes: ArchitectureNode[] = [
  {
    id: 'sensors',
    number: '01',
    title: 'Sensor Nodes',
    subtitle: 'Environmental telemetry acquisition',
    responsibility:
      'ESP32-C6 nodes acquire environmental measurements and prepare telemetry for transmission to the local network.',
    technologies: ['ESP32-C6', 'Environmental Sensors', 'Firmware'],
    communication: 'Local wireless connectivity',
    status: 'Architecture / Development',
  },
  {
    id: 'network',
    number: '02',
    title: 'Wireless Network',
    subtitle: 'Agricultural site connectivity',
    responsibility:
      'A wireless access network connects distributed sensor nodes to the local edge gateway.',
    technologies: ['Wi-Fi', 'Access Point', 'IP Networking'],
    communication: 'Local IP transport; MQTT is a proposed application protocol',
    status: 'Architecture / Development',
  },
  {
    id: 'edge',
    number: '03',
    title: 'Edge Gateway',
    subtitle: 'Local telemetry aggregation',
    responsibility:
      'A Raspberry Pi collects incoming telemetry, performs local processing, and can buffer data during internet connectivity interruptions.',
    technologies: ['Raspberry Pi', 'Linux', 'Edge Computing'],
    communication: 'Local ingestion and outbound IP communication',
    status: 'Architecture / Development',
  },
  {
    id: 'satellite',
    number: '04',
    title: 'Satellite Uplink',
    subtitle: 'Remote internet backhaul',
    responsibility:
      'Starlink provides internet connectivity between the agricultural site and remote monitoring infrastructure. Sensor nodes do not communicate directly with satellites.',
    technologies: ['Starlink', 'Satellite Internet', 'IP Routing'],
    communication: 'Satellite-backed internet transport',
    status: 'Architecture / Development',
  },
  {
    id: 'monitoring',
    number: '05',
    title: 'Monitoring Platform',
    subtitle: 'Remote telemetry visualization',
    responsibility:
      'A remote monitoring platform receives stored or forwarded telemetry and presents environmental measurements and system health through dashboards.',
    technologies: ['Grafana', 'Time-Series Data', 'Monitoring'],
    communication: 'Application-layer telemetry ingestion',
    status: 'Architecture / Development',
  },
]

export default function TerraTechArchitecture() {
  const [selected, setSelected] = useState('sensors')

  const active = nodes.find(
    (node) => node.id === selected
  ) ?? nodes[0]

  return (
    <section
      aria-labelledby="terratech-architecture-title"
      className="mt-14 rounded-2xl border border-cyan-800/40 bg-[#091626] p-5 sm:p-8"
    >
      <div className="mb-8">
        <p className="font-mono text-xs tracking-widest text-emerald-400">
          // SATELLITE TELEMETRY ARCHITECTURE
        </p>

        <h2
          id="terratech-architecture-title"
          className="mt-3 text-2xl font-bold text-white"
        >
          Sensor-to-Dashboard Data Pipeline
        </h2>

        <p className="mt-3 text-sm leading-7 text-slate-400">
          Explore the proposed telemetry architecture.
          Select any component to inspect its engineering
          responsibilities, technology stack, and connectivity.
        </p>
      </div>

      <div className="grid gap-3 md:grid-cols-5">
        {nodes.map((node) => (
          <button
            key={node.id}
            type="button"
            onClick={() => setSelected(node.id)}
            aria-pressed={selected === node.id}
            className={`min-w-0 rounded-xl border p-4 text-left transition
              focus-visible:outline-2 focus-visible:outline-offset-2
              focus-visible:outline-cyan-300 ${
                selected === node.id
                  ? 'border-cyan-400 bg-cyan-500/15'
                  : 'border-slate-700 bg-[#102033] hover:border-cyan-600'
              }`}
          >
            <span className="font-mono text-xs text-emerald-400">
              NODE {node.number}
            </span>

            <h3 className="mt-3 text-sm font-semibold text-white">
              {node.title}
            </h3>

            <p className="mt-2 text-xs leading-5 text-slate-400">
              {node.subtitle}
            </p>

            <div className="mt-4 font-mono text-xs text-cyan-300">
              {selected === node.id
                ? '● SELECTED'
                : 'VIEW DETAILS →'}
            </div>
          </button>
        ))}
      </div>

      <div
        aria-live="polite"
        className="mt-6 rounded-xl border border-emerald-800/40 bg-emerald-950/10 p-5 sm:p-6"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-xl font-bold text-white">
            {active.title}
          </h3>

          <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 font-mono text-xs text-amber-200">
            {active.status}
          </span>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <h4 className="text-sm font-semibold text-cyan-300">
              Engineering Responsibility
            </h4>

            <p className="mt-2 text-sm leading-7 text-slate-300">
              {active.responsibility}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-cyan-300">
              Communication
            </h4>

            <p className="mt-2 text-sm leading-7 text-slate-300">
              {active.communication}
            </p>
          </div>
        </div>

        <h4 className="mt-7 text-sm font-semibold text-cyan-300">
          Technologies
        </h4>

        <div className="mt-3 flex flex-wrap gap-2">
          {active.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-cyan-800/50 bg-cyan-950/30 px-3 py-2 font-mono text-xs text-cyan-200"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>

      <p className="mt-5 text-xs leading-6 text-slate-500">
        Architecture concept. Hardware selections, communication
        protocols, buffering, and deployment outcomes require
        implementation-level validation.
      </p>
    </section>
  )
}
