
import { useState } from 'react'

type Step = {
  id: string
  number: string
  name: string
  subtitle: string
  description: string
  technologies: string[]
  validation: string
}

const steps: Step[] = [
  {
    id: 'terraform',
    number: '01',
    name: 'Terraform Configuration',
    subtitle: 'Infrastructure as Code',
    description:
      'Reusable Terraform module defining virtual machine resources, storage, networking and cloud-init settings.',
    technologies: ['Terraform', 'HCL', 'Reusable Modules'],
    validation:
      'Infrastructure definitions used to provision multiple Ubuntu VMs.',
  },
  {
    id: 'proxmox',
    number: '02',
    name: 'Proxmox VE',
    subtitle: 'Virtualization Platform',
    description:
      'Terraform communicates with the Proxmox API to manage VM resources and deploy instances using an existing template.',
    technologies: ['Proxmox VE', 'API', 'KVM'],
    validation:
      'VM provisioning validated on the Proxmox laboratory host.',
  },
  {
    id: 'template',
    number: '03',
    name: 'Ubuntu Cloud Template',
    subtitle: 'Reusable VM Image',
    description:
      'Ubuntu Server 24.04 cloud image prepared as a Proxmox template for repeatable virtual machine deployment.',
    technologies: ['Ubuntu 24.04', 'Cloud-init', 'QEMU'],
    validation:
      'Reusable VM template created and used during provisioning.',
  },
  {
    id: 'instances',
    number: '04',
    name: 'Provisioned Instances',
    subtitle: 'Compute Resources',
    description:
      'Two Ubuntu VMs deployed with different CPU, memory and storage configurations on the laboratory network.',
    technologies: ['Ubuntu', 'Virtual Networking', 'Cloud-init'],
    validation:
      'VM 01: 2 vCPU, 2 GB RAM, 20 GB storage. VM 02: 4 vCPU, 4 GB RAM, 25 GB storage.',
  },
  {
    id: 'validation',
    number: '05',
    name: 'Deployment Validation',
    subtitle: 'Operational Verification',
    description:
      'Post-provisioning checks verify VM reachability, SSH access, guest initialization and virtual machine agent functionality.',
    technologies: ['SSH', 'Ping', 'Cloud-init', 'QEMU Guest Agent'],
    validation:
      'Network connectivity, SSH, cloud-init and QEMU agent functionality verified.',
  },
]

export default function TerraformArchitecture() {
  const [selected, setSelected] = useState('terraform')

  const active =
    steps.find((step) => step.id === selected) ?? steps[0]

  return (
    <section
      aria-labelledby="terraform-architecture-title"
      className="mt-14 rounded-2xl border border-cyan-800/40 bg-[#091626] p-5 sm:p-8"
    >
      <p className="font-mono text-xs tracking-widest text-emerald-400">
        // INFRASTRUCTURE AUTOMATION
      </p>

      <h2
        id="terraform-architecture-title"
        className="mt-3 text-2xl font-bold text-white"
      >
        Automated VM Provisioning
      </h2>

      <p className="mt-3 text-sm leading-7 text-slate-400">
        Explore the infrastructure provisioning workflow.
        Select a component to inspect its responsibilities,
        technologies and validation evidence.
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((step) => (
          <button
            key={step.id}
            type="button"
            onClick={() => setSelected(step.id)}
            aria-pressed={selected === step.id}
            className={`rounded-xl border p-4 text-left transition
              focus-visible:outline-2 focus-visible:outline-offset-2
              focus-visible:outline-cyan-300 ${
                selected === step.id
                  ? 'border-cyan-400 bg-cyan-500/15'
                  : 'border-slate-700 bg-[#102033] hover:border-cyan-600'
              }`}
          >
            <span className="font-mono text-xs text-emerald-400">
              STAGE {step.number}
            </span>

            <h3 className="mt-3 text-sm font-bold text-white">
              {step.name}
            </h3>

            <p className="mt-2 text-xs leading-5 text-slate-400">
              {step.subtitle}
            </p>

            <div className="mt-4 font-mono text-xs text-cyan-300">
              {selected === step.id
                ? '● SELECTED'
                : 'VIEW DETAILS →'}
            </div>
          </button>
        ))}
      </div>

      <div
        aria-live="polite"
        className="mt-6 rounded-xl border border-emerald-800/40 bg-emerald-950/10 p-5 sm:p-7"
      >
        <p className="font-mono text-xs text-emerald-400">
          SELECTED COMPONENT
        </p>

        <h3 className="mt-2 text-2xl font-bold text-white">
          {active.name}
        </h3>

        <p className="mt-4 leading-7 text-slate-300">
          {active.description}
        </p>

        <h4 className="mt-7 font-semibold text-cyan-300">
          Technology Stack
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

        <div className="mt-7 rounded-lg border border-slate-700 bg-[#0b1929] p-5">
          <h4 className="font-semibold text-emerald-300">
            Laboratory Validation
          </h4>

          <p className="mt-2 text-sm leading-7 text-slate-300">
            {active.validation}
          </p>
        </div>
      </div>

      <p className="mt-5 text-xs leading-6 text-slate-500">
        Simplified provisioning workflow. Administrative addresses,
        API tokens, credentials and internal management endpoints
        are intentionally excluded.
      </p>
    </section>
  )
}
