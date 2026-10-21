
import { useState } from 'react'

const example = `# Sanitized Terraform configuration
# Illustrative structure based on a Proxmox VM module

module "ubuntu_vm" {
  source = "./modules/ubuntu_vm"

  vm_name = "ubuntu-demo"
  vm_id   = 500

  cores   = 2
  memory  = 2048
  disk_gb = 20

  bridge  = "vmbr-lab"
  ci_user = "ubuntu"

  # Credentials and management endpoints omitted
}`

export default function TerraformCodeExample() {
  const [copied, setCopied] = useState(false)

  async function copyExample() {
    try {
      await navigator.clipboard.writeText(example)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section className="mt-12 rounded-2xl border border-slate-700 bg-[#0a1423] p-5 sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="font-mono text-xs text-emerald-400">
            // CONFIGURATION EXAMPLE
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terraform VM Module
          </h2>
        </div>

        <button
          type="button"
          onClick={copyExample}
          className="rounded-md border border-cyan-600 px-4 py-2 text-sm text-cyan-200 hover:bg-cyan-950"
        >
          {copied ? 'Copied ✓' : 'Copy code'}
        </button>
      </div>

      <p className="mt-4 text-sm leading-7 text-slate-400">
        This sanitized example illustrates how virtual machine
        parameters can be defined through a reusable Terraform module.
        It is not intended as a complete, directly executable
        deployment configuration.
      </p>

      <pre className="mt-6 overflow-x-auto rounded-xl border border-slate-800 bg-[#050c16] p-5 text-sm leading-7 text-cyan-100">
        <code>{example}</code>
      </pre>
    </section>
  )
}
