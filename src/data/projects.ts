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
  id: 'security-lab',
  number: '01',
  title: 'Security Operations Laboratory',
  category: 'CYBERSECURITY / DETECTION ENGINEERING',
  status: 'Operational Lab',
  summary:
    'A virtualized Blue Team laboratory for security monitoring, endpoint visibility, network traffic analysis, threat intelligence, and incident investigation.',
  challenge:
    'Design and operate a controlled environment for investigating suspicious activity across Linux hosts, Windows endpoints, and network traffic using multiple defensive security platforms.',
  solution:
    'Deployed specialized virtual machines for Wazuh, Security Onion, Velociraptor, and MISP. Used these platforms to explore host telemetry, network monitoring, file integrity monitoring, endpoint investigation, and threat intelligence management.',
  technologies: [
    'Wazuh',
    'Security Onion',
    'Velociraptor',
    'MISP',
    'Proxmox VE',
    'Linux',
    'Wireshark',
    'Network Monitoring',
  ],
  highlights: [
    'Deployed Wazuh for centralized security monitoring and endpoint visibility.',
    'Configured and validated Wazuh agent communication with monitored Linux systems.',
    'Used file integrity monitoring exercises to investigate monitored filesystem changes.',
    'Deployed Security Onion as a standalone network security monitoring environment.',
    'Established a Velociraptor environment for endpoint investigation and visibility.',
    'Deployed MISP infrastructure for managing threat intelligence information.',
    'Used network and host analysis exercises to develop practical Blue Team investigation skills.',
  ],
  results: [
    'Verified active Wazuh agent enrollment and connectivity.',
    'Performed host-based file integrity monitoring validation exercises.',
    'Established operational laboratory installations of multiple defensive security platforms.',
    'Created a reusable virtualized environment for defensive security investigation and experimentation.',
  ],
 },

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
  {
    id: 'terraform',
    number: '03',
    title: 'Automated VM Provisioning',
    category: 'INFRASTRUCTURE AS CODE',
    status: 'Validated Laboratory Implementation',
    summary:
      'Repeatable provisioning of Ubuntu Server virtual machines on Proxmox VE using Terraform, cloud-init templates, and infrastructure configuration.',
    challenge:
      'Reduce manual virtual machine deployment and establish consistent, reproducible infrastructure configurations.',
    solution:
      'Developed reusable Terraform configurations for provisioning Ubuntu virtual machines from a cloud-init template on Proxmox VE, including CPU, memory, storage, networking, and guest initialization.',
    technologies: [
      'Terraform',
      'Proxmox VE',
      'Ubuntu Server 24.04',
      'Cloud-init',
      'QEMU Guest Agent',
      'Linux',
      'SSH',
    ],
    highlights: [
      'Created an Ubuntu 24.04 cloud-init virtual machine template.',
      'Implemented a reusable Terraform module for VM provisioning.',
      'Configured virtual CPU, RAM, storage, networking, and guest initialization.',
      'Provisioned multiple Ubuntu virtual machines with different resource specifications.',
      'Validated VM networking, SSH connectivity, cloud-init, and QEMU guest agent operation.',
    ],
    results: [
      'Successfully provisioned Ubuntu virtual machines through Terraform.',
      'Verified network connectivity and SSH access.',
      'Validated cloud-init configuration and QEMU guest agent functionality.',
    ],
  },
  
  {
    id: 'aegis-control',
    number: '04',
    title: 'Aegis Control — AI-Assisted Security Automation',
    category: 'CYBERSECURITY / AI ORCHESTRATION',
    status: 'Operational Prototype / Active Development',
    summary:
      'An early-stage security automation platform developed under Aegis Shield Blue Team Services, using a distributed controller/worker architecture to support modular defensive security workflows.',
    challenge:
      'Design a modular orchestration environment capable of coordinating security tools and automation workers while maintaining separation between orchestration, execution, and managed infrastructure.',
    solution:
      'Deployed dedicated Ubuntu Server virtual machines for a controller and worker, configured Docker-based services, established an OpenClaw gateway, paired Telegram connectivity, and validated the worker API health endpoint.',
    technologies: [
      'Ubuntu Server 24.04',
      'Proxmox VE',
      'Docker',
      'Docker Compose',
      'OpenClaw',
      'REST API',
      'Telegram',
      'Linux',
    ],
    highlights: [
      'Provisioned dedicated controller and worker virtual machines.',
      'Configured Docker and container orchestration prerequisites.',
      'Established the OpenClaw gateway on the controller.',
      'Paired Telegram as an orchestration communication interface.',
      'Validated the worker API health endpoint.',
      'Designed a modular architecture for future authorized defensive automation.',
    ],
    results: [
      'Controller environment deployed and gateway operational.',
      'Telegram integration paired successfully.',
      'Worker API health endpoint returned a successful status.',
      'Initial worker plugin initialized.',
    ],
  },

  {
    id: 'terratech',
    number: '05',
    title: 'TerraTech — Satellite & IoT Telemetry',
    category: 'SATELLITE / IoT',
    status: 'Architecture / Development',
    summary:
      'An agricultural telemetry platform architecture combining wireless sensor networks, edge computing, satellite connectivity, and remote monitoring.',
    challenge:
      'Collect environmental telemetry from geographically distributed agricultural sensors and make it accessible remotely, including in areas without conventional broadband connectivity.',
    solution:
      'Designed an architecture using ESP32-C6 wireless sensor nodes, Raspberry Pi edge processing, a local wireless network, Starlink satellite internet, and Grafana-based visualization.',
    technologies: [
      'ESP32-C6',
      'Raspberry Pi',
      'Starlink',
      'Wi-Fi',
      'MQTT',
      'Grafana',
      'IoT',
    ],
    highlights: [
      'Designed distributed environmental telemetry acquisition using ESP32-C6 nodes.',
      'Defined a Raspberry Pi gateway for local telemetry aggregation and processing.',
      'Included satellite-backed connectivity for remotely deployed agricultural sites.',
      'Planned Grafana visualization for sensor data and system monitoring.',
    ],
    results: [
      'Documented the proposed sensor-to-dashboard system architecture.',
    ],
  },
]

export function getProject(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}
