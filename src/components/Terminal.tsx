
import { useEffect, useRef, useState } from 'react'
import type { FormEvent, KeyboardEvent } from 'react'

type Entry = {
  command: string
  prompt: string
  output: string[]
}

const directories: Record<string, string[]> = {
  '/': [
    'about.txt',
    'skills.txt',
    'certs.txt',
    'contact.txt',
    'projects',
    'experience',
  ],
  '/projects': [
    'security-lab',
    'homelab',
    'terraform',
    'aegis-control',
    'terratech',
  ],
  '/projects/security-lab': ['README.md'],
  '/projects/homelab': ['README.md'],
  '/projects/terraform': ['README.md'],
  '/projects/aegis-control': ['README.md'],
  '/projects/terratech': ['README.md'],
  '/experience': ['README.md'],
}

const files: Record<string, string[]> = {
  '/about.txt': [
    'Edilberto Rodriguez',
    'Infrastructure & Security Engineer',
    '',
    'Engineering professor and technical professional',
    'focused on cybersecurity, networks, infrastructure,',
    'automation, and satellite communications.',
  ],
  '/skills.txt': [
    '[INFRASTRUCTURE]',
    'Linux, Windows Server, Proxmox, Docker',
    '',
    '[NETWORKING]',
    'Cisco, VLANs, Routing, Switching',
    '',
    '[CYBERSECURITY]',
    'Wazuh, Security Onion, Velociraptor, MISP',
    '',
    '[AUTOMATION]',
    'Terraform, Cloud-init, Scripting',
    '',
    '[SPACE / TELEMETRY]',
    'Starlink, Raspberry Pi, ESP32-C6, IoT',
  ],
  '/certs.txt': [
    '[COMPLETED]',
    'Blue Team Level 1 (BTL1)',
    'Google Cybersecurity Certificate',
    '',
    '[PLANNED]',
    'CompTIA Security+',
    'CompTIA CySA+',
  ],
  '/contact.txt': [
    'GitHub: github.com/edilbertorodriguez',
    'Professional contact information: coming soon',
  ],
  '/projects/security-lab/README.md': [
    'SECURITY OPERATIONS LABORATORY',
    '',
    'Tools: Wazuh, Security Onion, Velociraptor, MISP',
    'Focus: Monitoring, threat detection, log analysis,',
    'endpoint visibility, and incident response.',
    '',
    'Environment: Virtualized defensive security lab.',
  ],
  '/projects/homelab/README.md': [
    'SEGMENTED HOMELAB INFRASTRUCTURE',
    '',
    'Technologies: Proxmox, VLANs, Cisco, Tailscale',
    'Focus: Network segmentation, virtualization,',
    'routing, administration, and secure remote access.',
  ],
  '/projects/terraform/README.md': [
    'AUTOMATED VM PROVISIONING',
    '',
    'Technologies: Terraform, Ubuntu, Cloud-init',
    'Platform: Proxmox VE',
    '',
    'Objective: Repeatable virtual machine deployment',
    'and infrastructure automation.',
  ],
  '/projects/aegis-control/README.md': [
    'AEGIS CONTROL',
    'Aegis Shield Blue Team Services',
    '',
    'Status: Early-stage development',
    '',
    'Architecture: Ubuntu Server controller and worker',
    'VMs, Docker, API services, and agent orchestration.',
    '',
    'Focus: Defensive security workflow automation.',
  ],
  '/projects/terratech/README.md': [
    'TERRATECH — SATELLITE & IoT TELEMETRY',
    '',
    'Status: Architecture / Development',
    '',
    'Architecture:',
    'ESP32-C6 wireless sensor nodes',
    '  -> Raspberry Pi edge gateway',
    '  -> Starlink internet connectivity',
    '  -> Remote telemetry monitoring',
    '',
    'Technologies: ESP32-C6, Raspberry Pi, Starlink,',
    'Grafana, IoT and wireless networking.',
  ],
  '/experience/README.md': [
    'PROFESSIONAL EXPERIENCE',
    '',
    'Engineering Professor — Computer Systems',
    'Academic Department Leadership',
    'Cybersecurity training and technical workshops',
    '',
    'Founder / Technical Lead — Aegis Shield',
    'Early-stage cybersecurity venture.',
  ],
}

const helpText = [
  'AVAILABLE COMMANDS',
  '',
  '  help       Show this help message',
  '  neofetch   Displays simulated system profile',
  '  whoami     Professional profile',
  '  skills     Technical competencies',
  '  projects   Engineering projects',
  '  project    View an individual project',
  '  resume     View available resume versions',
  '  github     Open GitHub profile',
  '  certs      Certifications',
  '  ls         List directory contents',
  '  pwd        Print working directory',
  '  cd         Change directory',
  '  cat        Read a text file',
  '  history    Display command history',
  '  clear      Clear the terminal',
  '',
  'EXAMPLES',
  '  ls projects',
  '  cd projects/terratech',
  '  cat README.md',
  '  cd ..',
  '  cd ~',
  '  project terratech',
  '  project aegis-control',
]

const knownCommands = [
  'help', 'whoami', 'skills', 'projects',
  'project', 'certs', 'ls', 'pwd', 'cd',
  'cat', 'clear', 'github', 'resume',
  'history', 'neofetch',
]

function normalizePath(cwd: string, target: string): string {
  if (!target || target === '~') return '/'

  const input = target.startsWith('~/')
    ? target.slice(1)
    : target

  const parts = input.startsWith('/')
    ? []
    : cwd.split('/').filter(Boolean)

  for (const part of input.split('/')) {
    if (!part || part === '.') continue
    if (part === '..') {
      parts.pop()
    } else {
      parts.push(part)
    }
  }

  return '/' + parts.join('/')
}

function displayPath(path: string): string {
  return path === '/' ? '~' : '~' + path
}

function autocompletePath(
  cwd: string,
  typed: string,
  directoriesOnly = false
): string | null {
  const lastSlash = typed.lastIndexOf('/')

  const parentInput =
    lastSlash >= 0 ? typed.slice(0, lastSlash + 1) : ''

  const prefix =
    lastSlash >= 0 ? typed.slice(lastSlash + 1) : typed

  const parentPath = parentInput
    ? normalizePath(cwd, parentInput)
    : cwd

  const entries = directories[parentPath]

  if (!entries) return null

  const matches = entries.filter((name) => {
    const fullPath =
      parentPath === '/' ? `/${name}` : `${parentPath}/${name}`

    return (
      name.startsWith(prefix) &&
      (!directoriesOnly || Boolean(directories[fullPath]))
    )
  })

  if (matches.length !== 1) return null

  const match = matches[0]

  const fullPath =
    parentPath === '/' ? `/${match}` : `${parentPath}/${match}`

  const isDirectory = Boolean(directories[fullPath])

  return parentInput + match + (isDirectory ? '/' : '')
}

export default function Terminal() {
  const [cwd, setCwd] = useState('/')
  const [history, setHistory] = useState<Entry[]>([
    {
      command: 'help',
      prompt: '~',
      output: helpText,
    },
  ])
  const [input, setInput] = useState('')
  const [previousCommands, setPreviousCommands] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)

  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    })
  }, [history])

  function executeCommand(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const raw = input.trim()
    if (!raw) return

    const [command, ...args] = raw.split(/\s+/)
    const cmd = command.toLowerCase()
    const argument = args[0]

    setPreviousCommands((prev) => [...prev, raw])
    setHistoryIndex(-1)
    setInput('')

    if (cmd === 'clear') {
      setHistory([])
      return
    }

    let output: string[] = []

    switch (cmd) {
      case 'neofetch': {
        output = [
            '    ███████╗██████╗',
            '    ██╔════╝██╔══██╗',
            '    █████╗  ██████╔╝',
            '    ██╔══╝  ██╔══██╗',
            '    ███████╗██║  ██║',
            '    ╚══════╝╚═╝  ╚═╝',
            '',
            'guest@portfolio',
            '----------------------------',
            'OS: Edilberto.OS 1.0 (Simulated)',
            'Role: Infrastructure & Security Engineer',
            'Shell: portfolio-shell',
            'Focus: Blue Team / Networks / Automation',
            'Projects: 5',
            'Certifications: BTL1, Google Cybersecurity',
            'Environment: Browser-based simulation',
        ]
        break
        }
        
      case 'help':
        output = helpText
        break

      case 'whoami':
        output = files['/about.txt']
        break

      case 'skills':
        output = files['/skills.txt']
        break

      case 'certs':
        output = files['/certs.txt']
        break

        case 'project': {
        if (!argument) {
            output = [
            'Usage: project <name>',
            '',
            'Available projects:',
            '  security-lab',
            '  homelab',
            '  terraform',
            '  aegis-control',
            '  terratech',
            '',
            'Example: project terratech',
            ]
            break
        }

  const projectPath = `/projects/${argument}/README.md`

  if (files[projectPath]) {
    output = files[projectPath]
  } else {
    output = [
      `Project not found: ${argument}`,
      "Type 'project' to list available projects.",
    ]
  }
  break
}

      case 'projects':
        output = [
          '01  Security Operations Laboratory',
          '02  Segmented Homelab Infrastructure',
          '03  Automated VM Provisioning',
          '04  Aegis Control - Security Automation',
          '05  TerraTech - Satellite & IoT Telemetry',
          '',
          'Explore with: cd projects',
        ]
        break

      case 'sudo': {
          if (args.join(' ').toLowerCase() === 'su') {
            output = [
            '[sudo] password for guest:',
            'guest is not in the sudoers file.',
            'This incident will be reported.',
            '',
            '[SECURITY] Privilege escalation attempt denied.',
            '[SECURITY] Access level: UNPRIVILEGED',
            ]
        } else {
            output = [
            'sudo: permission denied',
            'This portfolio operates in unprivileged mode.',
            ]
        }
        break
        }

      case 'github': {
         window.open(
            'https://github.com/edilbertorodriguez',
            '_blank',
          'noopener,noreferrer'
        )

        output = [
            'Opening GitHub profile...',
            'github.com/edilbertorodriguez',
        ]
        break
        }
      
      case 'resume': {
          output = [
            'EDILBERTO RODRIGUEZ — RESUME CENTER',
            '',
            'Available resume versions:',
            '  Infrastructure & Systems Engineering',
            '  Cybersecurity / Blue Team',
            '  Satellite Communications & Space Systems',
            '',
            '[STATUS] Resume downloads coming soon.',
            'Use "github" to explore current technical projects.',
        ]
        break
        }  

      case 'history': {
         output = [...previousCommands, raw].map(
         (previous, index) =>
             `${String(index + 1).padStart(4, ' ')}  ${previous}`
         )
         break
        }

      case 'pwd':
        output = ['/home/guest' + (cwd === '/' ? '' : cwd)]
        break

      case 'ls': {
        const path = argument
          ? normalizePath(cwd, argument)
          : cwd

        if (directories[path]) {
          output = directories[path].map((name) =>
            directories[path === '/' ? '/' + name : path + '/' + name]
              ? name + '/'
              : name
          )
        } else if (files[path]) {
          output = [path.split('/').pop() || path]
        } else {
          output = [`ls: cannot access '${argument}': No such file or directory`]
        }
        break
      }

      case 'cd': {
        const target = normalizePath(cwd, argument || '~')

        if (directories[target]) {
          setCwd(target)
        } else {
          output = [`cd: ${argument}: No such directory`]
        }
        break
      }

      case 'cat': {
        if (!argument) {
          output = ['cat: missing file operand']
          break
        }
        if (normalizePath(cwd, argument) === '/etc/shadow') {
          output = ['cat: /etc/shadow: Permission denied']
          break
        }
        const path = normalizePath(cwd, argument)

        if (files[path]) {
          output = files[path]
        } else if (directories[path]) {
          output = [`cat: ${argument}: Is a directory`]
        } else {
          output = [`cat: ${argument}: No such file`]
        }
        break
      }

      default:
        output = [
          `Command not found: ${command}`,
          "Type 'help' for available commands.",
        ]
    }

    setHistory((prev) => [
      ...prev,
      {
        command: raw,
        prompt: displayPath(cwd),
        output,
      },
    ])
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'ArrowUp') {
      event.preventDefault()
      if (!previousCommands.length) return

      const next =
        historyIndex === -1
          ? previousCommands.length - 1
          : Math.max(0, historyIndex - 1)

      setHistoryIndex(next)
      setInput(previousCommands[next])
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault()
      if (historyIndex === -1) return

      const next = historyIndex + 1

      if (next >= previousCommands.length) {
        setHistoryIndex(-1)
        setInput('')
      } else {
        setHistoryIndex(next)
        setInput(previousCommands[next])
      }
    }

    if (event.key === 'Tab' && !event.shiftKey) {
      const trimmed = input.trim()
      if (!trimmed) return

      const firstSpace = trimmed.indexOf(' ')

      // Autocomplete command names
      if (firstSpace === -1) {
        const matches = knownCommands.filter((cmd) =>
          cmd.startsWith(trimmed.toLowerCase())
        )

        if (matches.length === 1) {
          event.preventDefault()
          setInput(matches[0] + ' ')
        }

        return
      }

      const command = trimmed.slice(0, firstSpace).toLowerCase()
      const argument = trimmed.slice(firstSpace + 1)

      // Autocomplete project shortcuts
      if (command === 'project') {
        const projectNames = directories['/projects']

        const matches = projectNames.filter((name) =>
          name.startsWith(argument)
        )

        if (matches.length === 1) {
          event.preventDefault()
          setInput(`project ${matches[0]} `)
        }

        return
      }

      // Autocomplete filesystem paths
      if (['cd', 'ls', 'cat'].includes(command)) {
      const completed = autocompletePath(
          cwd,
          argument,
          command === 'cd'
        )

        if (completed !== null) {
          event.preventDefault()
          setInput(`${command} ${completed}`)
        }
      }
    }

  }

  return (
    <div
      className="terminal-frame"
      aria-label="Interactive portfolio terminal"
    >
      <div className="terminal-topbar">
        <div className="flex gap-2">
          <i className="traffic-light bg-rose-400" />
          <i className="traffic-light bg-amber-400" />
          <i className="traffic-light bg-emerald-400" />
        </div>

        <span className="font-mono text-xs text-slate-400">
          guest@portfolio: {displayPath(cwd)}
        </span>

        <span className="text-emerald-400">● LIVE</span>
      </div>

      <div
        className="max-h-[400px] min-h-[320px] overflow-y-auto px-5 py-6 font-mono text-[13px] leading-7 sm:px-7 sm:text-sm"
        onClick={() => inputRef.current?.focus()}
      >
        <div className="mb-5 text-xs text-cyan-300">
          EDILBERTO.OS // INTERACTIVE TERMINAL
          <div className="mt-2 h-px bg-gradient-to-r from-cyan-500/40 to-transparent" />
        </div>

        <p className="mb-5 text-slate-400">
          Welcome. Type 'help' to get started.
        </p>

        {history.map((entry, index) => (
          <div key={index} className="mb-4">
            <div className="break-all">
              <span className="text-emerald-400">
                guest@portfolio
              </span>
              <span className="text-slate-500">
                :{entry.prompt}$ 
              </span>
              <span className="text-slate-100">
                {entry.command}
              </span>
            </div>

            <div className="whitespace-pre-wrap break-words text-slate-400">
              {entry.output.map((line, lineIndex) => (
                <div key={lineIndex}>
                  {line || '\u00A0'}
                </div>
              ))}
            </div>
          </div>
        ))}

        <form
          onSubmit={executeCommand}
          className="flex items-center gap-2"
        >
          <label
            htmlFor="terminal-input"
            className="shrink-0 text-emerald-400"
          >
            guest@portfolio:{displayPath(cwd)}$
          </label>

          <input
            ref={inputRef}
            id="terminal-input"
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            spellCheck={false}
            aria-label="Terminal command"
            className="min-w-0 flex-1 border-0 bg-transparent text-slate-100 outline-none placeholder:text-slate-600"
            placeholder="type a command..."
          />
        </form>

        <div ref={bottomRef} />
      </div>

      <div className="border-t border-white/10 px-5 py-3 font-mono text-xs text-slate-500">
        ENTER: Execute · ↑↓: History · TAB: Autocomplete
      </div>
    </div>
  )
}
