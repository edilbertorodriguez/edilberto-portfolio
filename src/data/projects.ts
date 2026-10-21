export type Project = {
  id: string
  number: string
  title: string
  category: string
  status: string
  summary: string
  challenge: string
  solution: string
  technologies: string[]
  highlights: string[]
  results: string[]
}

export const projects: Project[] = [
  {
    id: 'homelab',
    number: '02',
    title: 'Segmented Homelab Infrastructure',
    category: 'NETWORKING / INFRASTRUCTURE',
    status: 'Operational Lab',
    summary:
      'A virtualized, segmented infrastructure environment designed for networking, security monitoring, systems administration, and automation.',
    challenge:
      'Build an isolated but manageable environment where security experiments, virtual machines, and network services can coexist without unnecessarily exposing trusted devices.',
    solution:
      'Implemented a multi-VLAN architecture using managed switches, a dedicated router, Proxmox virtualization, and controlled remote access through private overlay networking.',
    technologies: [
      'Proxmox VE', 'Linux', 'VLANs / 802.1Q', 'Managed Switching',
      'Routing', 'Tailscale', 'Twingate', 'Docker',
    ],
    highlights: [
      'Separated management, trusted devices, services, IoT, guests, laboratory systems, and DMZ network segments.',
      'Deployed virtualized Linux and cybersecurity infrastructure on Proxmox.',
      'Implemented private remote access without exposing SSH or administrative interfaces through public port forwarding.',
      'Integrated infrastructure and security monitoring services.',
    ],
    results: [
      'Verified connectivity to laboratory virtual machines.',
      'Validated remote access to selected internal services.',
      'Established a reusable environment for cybersecurity and infrastructure engineering exercises.',
    ],
  },
]

export function getProject(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}
