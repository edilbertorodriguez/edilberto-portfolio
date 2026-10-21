import { useEffect, useRef, useState } from 'react'
import type { FormEvent, KeyboardEvent } from 'react'

type Entry = {
  command: string
  output: string[]
}

const commands: Record<string, string[]> = {
  help: [
    'Available commands:',
    '  help       Show available commands',
    '  whoami     Professional profile',
    '  skills     Technical competencies',
    '  projects   Engineering projects',
    '  certs      Certifications',
    '  clear      Clear terminal',
  ],

  whoami: [
    'Edilberto Rodriguez',
    'Infrastructure & Security Engineer',
    '',
    'Focus: Cybersecurity, Networking,',
    'Virtualization, Automation & Space Systems',
  ],

  skills: [
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
  ],

  projects: [
    '01  Security Operations Laboratory',
    '02  Segmented Homelab Infrastructure',
    '03  Automated VM Provisioning',
    '04  Aegis Control - Security Automation',
    '05  TerraTech - Satellite & IoT Telemetry',
    '',
    'See the Projects section for details.',
  ],

  certs: [
    '[COMPLETED]',
    'Blue Team Level 1 (BTL1)',
    'Google Cybersecurity Certificate',
    '',
    '[PLANNED]',
    'CompTIA Security+',
    'CompTIA CySA+',
  ],
}

const availableCommands = Object.keys(commands)

export default function Terminal() {
  const [history, setHistory] = useState<Entry[]>([
    {
      command: 'help',
      output: commands.help,
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

    const command = input.trim().toLowerCase()
    if (!command) return

    setPreviousCommands((previous) => [...previous, command])
    setHistoryIndex(-1)
    setInput('')

    if (command === 'clear') {
      setHistory([])
      return
    }

    const output = commands[command] ?? [
      `Command not found: ${command}`,
      "Type 'help' for available commands.",
    ]

    setHistory((previous) => [
      ...previous,
      { command, output },
    ])
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'ArrowUp') {
      event.preventDefault()

      if (previousCommands.length === 0) return

      const nextIndex =
        historyIndex === -1
          ? previousCommands.length - 1
          : Math.max(0, historyIndex - 1)

      setHistoryIndex(nextIndex)
      setInput(previousCommands[nextIndex])
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault()

      if (historyIndex === -1) return

      const nextIndex = historyIndex + 1

      if (nextIndex >= previousCommands.length) {
        setHistoryIndex(-1)
        setInput('')
      } else {
        setHistoryIndex(nextIndex)
        setInput(previousCommands[nextIndex])
      }
    }

    if (event.key === 'Tab') {
      const matches = availableCommands.filter((command) =>
        command.startsWith(input.trim().toLowerCase())
      )

      if (matches.length === 1) {
        event.preventDefault()
        setInput(matches[0])
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
          guest@portfolio: ~
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
              <span className="text-slate-500">:~$ </span>
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
            guest@portfolio:~$
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