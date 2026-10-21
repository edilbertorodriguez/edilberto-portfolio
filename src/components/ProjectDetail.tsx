
import type { Project } from '../data/projects'
import NetworkArchitecture from './NetworkArchitecture'
import TerraTechArchitecture from './TerraTechArchitecture'
import SOCArchitecture from './SOCArchitecture'
import InvestigationEvidence from './InvestigationEvidence'
import TerraformArchitecture from './TerraformArchitecture'

type ProjectDetailProps = {
  project: Project
  onBack: () => void
}

export default function ProjectDetail({
  project,
  onBack,
}: ProjectDetailProps) {
  return (
    <article className="mx-auto max-w-5xl px-6 py-12 text-slate-100">
      <button
        type="button"
        onClick={onBack}
        className="mb-10 font-mono text-sm text-cyan-400 hover:text-cyan-200"
      >
        ← Back to Projects
      </button>

      <div className="mb-5 font-mono text-sm tracking-widest text-emerald-400">
        PROJECT {project.number} // {project.category}
      </div>

      <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
        {project.title}
      </h1>

      <div className="mt-5 inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 font-mono text-xs text-emerald-300">
        {project.status}
      </div>

      <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
        {project.summary}
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <section className="rounded-xl border border-slate-700 bg-[#101a2a] p-6">
          <h2 className="mb-4 text-xl font-semibold text-cyan-400">
            Engineering Challenge
          </h2>
          <p className="leading-8 text-slate-300">
            {project.challenge}
          </p>
        </section>

        <section className="rounded-xl border border-slate-700 bg-[#101a2a] p-6">
          <h2 className="mb-4 text-xl font-semibold text-cyan-400">
            Technical Solution
          </h2>
          <p className="leading-8 text-slate-300">
            {project.solution}
          </p>
        </section>
      </div>
      {project.id === 'homelab' && <NetworkArchitecture />}
      {project.id === 'terratech' && <TerraTechArchitecture />}
      {project.id === 'security-lab' && <SOCArchitecture />}
      {project.id === 'security-lab' && <InvestigationEvidence />}
      {project.id === 'terraform' && <TerraformArchitecture />}
      <section className="mt-12">
        <h2 className="text-2xl font-bold">
          Technology Stack
        </h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-cyan-800/50 bg-cyan-950/30 px-4 py-2 font-mono text-sm text-cyan-200"
            >
              {technology}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">
          Implementation Highlights
        </h2>
        <div className="mt-6 space-y-4">
          {project.highlights.map((item) => (
            <div
              key={item}
              className="flex gap-4 rounded-lg border border-slate-800 bg-[#101a2a] p-5"
            >
              <span className="font-mono text-emerald-400">
                &gt;
              </span>
              <p className="leading-7 text-slate-300">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-xl border border-emerald-800/40 bg-emerald-950/10 p-6">
        <h2 className="text-2xl font-bold">
          Verified Outcomes
        </h2>
        <ul className="mt-6 space-y-4">
          {project.results.map((result) => (
            <li
              key={result}
              className="flex gap-3 text-slate-300"
            >
              <span className="text-emerald-400">✓</span>
              <span>{result}</span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}
