const screenshots = [
  {
    src: '/images/investigations/wazuh-fim/01-alert-overview.jpg',
    alt: 'Sanitized Wazuh Discover alert showing agent scanme, event timestamp, Rule 550, and alert severity',
    title: 'Evidence 01 — Alert identification',
    caption: 'Agent 001, rule 550, level 7, and integrity checksum changed.',
  },
  {
    src: '/images/investigations/wazuh-fim/02-integrity-details.jpg',
    alt: 'Wazuh FIM technical details showing modified path, real-time mode, file sizes, and before-and-after hashes',
    title: 'Evidence 02 — Integrity metadata',
    caption: 'Modified test file, real-time detection, byte-size difference and hash changes.',
  },
]

export default function InvestigationEvidence() {
  return (
    <section aria-labelledby="fim-investigation-title" className="mt-14 rounded-2xl border border-cyan-800/40 bg-[#091626] p-5 sm:p-8">
      <p className="font-mono text-xs tracking-widest text-emerald-400">// VERIFIED LAB EXERCISE 001</p>
      <h2 id="fim-investigation-title" className="mt-3 text-2xl font-bold text-slate-100">Wazuh File Integrity Monitoring Investigation</h2>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">A harmless, controlled modification of a monitored Linux test file generated a real-time Wazuh FIM alert. The event records changed file attributes and cryptographic hashes.</p>
      <dl className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ['Rule ID', '550'],
          ['Alert level', '7'],
          ['Event', 'modified'],
          ['Monitoring mode', 'realtime'],
        ].map(([label, value]) => (
          <div key={label} className="rounded-lg border border-slate-700 bg-[#102033] p-4">
            <dt className="font-mono text-xs text-slate-400">{label}</dt>
            <dd className="mt-2 font-semibold text-cyan-200">{value}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-6 rounded-lg border border-slate-700 bg-[#102033] p-5 text-sm leading-7 text-slate-300">
        <p><span className="text-cyan-300">Agent:</span> scanme (001)</p>
        <p><span className="text-cyan-300">Test path:</span> <code className="break-all">/opt/wazuh-fim-demo/config.txt</code></p>
        <p><span className="text-cyan-300">Observed timestamp:</span> October 21, 2026, 13:47:11.279 (dashboard display)</p>
        <p><span className="text-cyan-300">File size:</span> 26 → 71 bytes</p>
        <p><span className="text-cyan-300">Changed attributes:</span> size, mtime, MD5, SHA-1, SHA-256</p>
        <p><span className="text-cyan-300">MITRE mapping:</span> T1565.001 — Stored Data Manipulation (rule classification)</p>
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {screenshots.map((shot) => (
          <figure key={shot.src} className="min-w-0 overflow-hidden rounded-xl border border-slate-700 bg-[#102033]">
            <a href={shot.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full size ${shot.title}`}>
              <img src={shot.src} alt={shot.alt} loading="lazy" className="block h-auto w-full bg-white" />
            </a>
            <figcaption className="p-4">
              <p className="font-semibold text-slate-100">{shot.title}</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">{shot.caption}</p>
              <a href={shot.src} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm text-cyan-300 hover:text-cyan-200">View full-size evidence ↗</a>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-7 rounded-lg border border-emerald-800/40 bg-emerald-950/10 p-5">
        <h3 className="font-semibold text-emerald-300">Finding</h3>
        <p className="mt-2 text-sm leading-7 text-slate-300">Real-time FIM detected the controlled change and recorded modified attributes and before/after checksums. This validates this specific monitoring workflow in a lab; it does not indicate a real intrusion or establish broader detection coverage.</p>
      </div>
    </section>
  )
}
