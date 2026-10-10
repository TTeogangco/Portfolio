import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const links = [ ['Home', 'home'], ['About', 'about'], ['Projects', 'projects'], ['Resume', 'resume'], ['Contact', 'contact'] ]
export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#071426]/90 backdrop-blur-xl">
      <nav className="section-wrap flex h-[76px] items-center justify-between" aria-label="Main navigation">
        <a href="#home" onClick={() => setOpen(false)} className="focus-ring flex items-center gap-3 rounded-lg" aria-label="T-Jay home">
          <img src="/profile.jpg"alt="T-Jay Teogangco"className="h-12 w-12 shrink-0 rounded-full border border-blue-300/40 object-cover"/>
          <span className="hidden text-sm font-semibold text-white sm:block">T-Jay Teogangco<span className="block text-xs font-normal text-slate-400">BSIT Student · Portfolio</span></span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, id]) => <a key={id} href={`#${id}`} className="focus-ring rounded text-sm text-slate-300 transition hover:text-blue-300">{label}</a>)}
          <a href="#contact" className="focus-ring inline-flex items-center gap-2 rounded-full bg-blue-400 px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-blue-300">Let’s talk <ArrowUpRight size={16}/></a>
        </div>
        <button className="focus-ring rounded-lg p-2 text-slate-200 md:hidden" onClick={() => setOpen(v => !v)} aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open}>
          {open ? <X size={23}/> : <Menu size={23}/>}
        </button>
      </nav>
      {open && <div className="border-t border-white/10 bg-[#0a1a30] px-5 py-4 md:hidden">{links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 text-slate-200 transition hover:bg-white/5 hover:text-blue-300">{label}</a>)}</div>}
    </header>
  )
}
