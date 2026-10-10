import { useState } from 'react'
import { ArrowUpRight, ChevronDown, ChevronUp, Code2 } from 'lucide-react'

export default function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <article className="glass group flex h-full flex-col overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:border-blue-300/40">
      <div className={`relative grid h-44 place-items-center overflow-hidden ${project.art}`}>
        <div className="absolute inset-0 grid-dots opacity-70" />
        <div className="relative grid h-20 w-20 place-items-center rounded-2xl border border-white/20 bg-slate-950/30 text-white shadow-xl transition duration-300 group-hover:scale-110">{project.icon}</div>
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-slate-950/35 px-3 py-1 text-xs font-semibold text-white/90">PROJECT 0{index + 1}</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="rounded-full bg-blue-300/10 px-2.5 py-1 text-xs font-medium text-blue-200">{tag}</span>)}</div>
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
        <p className="mt-3 flex-1 leading-7 text-slate-400">{project.description}</p>
        {expanded && <div className="mt-4 rounded-xl border border-white/10 bg-slate-950/30 p-4 text-sm leading-6 text-slate-300"><p className="font-semibold text-blue-200">What I practiced</p><p className="mt-1">{project.details}</p><p className="mt-3 font-semibold text-blue-200">Status</p><p className="mt-1">Academic / practice project. Replace this text with your final project outcome and repository or live link.</p></div>}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
          <span className="inline-flex items-center gap-2 text-xs text-slate-500"><Code2 size={14}/>{project.type}</span>
          <button onClick={() => setExpanded(v => !v)} className="focus-ring inline-flex items-center gap-1 rounded-lg px-2 py-1 text-sm font-semibold text-blue-300 hover:text-blue-200">{expanded ? 'View less' : 'View details'} {expanded ? <ChevronUp size={16}/> : <ChevronDown size={16}/>}</button>
        </div>
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-400 px-5 py-3 font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-blue-300"
          >
            {project.title === 'React Calculator' ? 'Open Calculator' : project.title === 'To-Do List App' ? 'Open To-Do List' : 'Live Demo'} <ArrowUpRight size={17}/>
          </a>
        ) : (
          <p className="mt-4 rounded-xl border border-white/10 px-4 py-3 text-center text-sm text-slate-500">Live demo link coming soon</p>
        )}
      </div>
    </article>
  )
}
