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
