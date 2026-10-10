import { useState } from 'react'
import { ArrowDown, ArrowUpRight, Code2, Database, Download, Github, GraduationCap, Laptop, Linkedin, Mail, MapPin, MonitorSmartphone, Palette, Sparkles, Terminal, UserRound, BriefcaseBusiness, ExternalLink, CheckCircle2 } from 'lucide-react'
import Navbar from './components/Navbar'
import SectionHeading from './components/SectionHeading'
import ProjectCard from './components/ProjectCard'
import ContactForm from './components/ContactForm'

const projects = [
  { title: 'React Calculator', description: 'A responsive calculator interface for practicing arithmetic operations and interactive UI behavior.', details: 'React components, useState, click handlers, expression display, clear controls, and Tailwind utility classes.', tags: ['ReactJS', 'Tailwind CSS'], type: 'Frontend application', url: 'https://calculator-dcit-26-fxsj.vercel.app/', icon: <Code2 size={34}/>, art: 'bg-gradient-to-br from-blue-500/50 via-indigo-500/30 to-slate-900' },
  { title: 'To-Do List App', description: 'A task organizer concept for adding items, tracking completion, and removing finished or unwanted tasks.', details: 'Controlled input, form submission, array state updates, conditional styling, completion toggles, and delete actions.', tags: ['ReactJS', 'State'], type: 'Interactive web app', url: 'https://to-do-list-dcit-26.vercel.app/', icon: <CheckCircle2 size={34}/>, art: 'bg-gradient-to-br from-cyan-500/40 via-blue-500/30 to-slate-900' },
]
const skills = [
  { name: 'ReactJS', note: 'Components & state', icon: <Code2 size={20}/> },
  { name: 'Tailwind CSS', note: 'Responsive styling', icon: <Palette size={20}/> },
  { name: 'HTML & CSS', note: 'Web structure & design', icon: <MonitorSmartphone size={20}/> },
  { name: 'JavaScript', note: 'Events & interactivity', icon: <Terminal size={20}/> },
  { name: 'Database basics', note: 'SQL & data organization', icon: <Database size={20}/> },
]

function App() {
  const [showAllSkills, setShowAllSkills] = useState(false)
  const [showMoreAbout, setShowMoreAbout] = useState(false)
  return (
    <div className="min-h-screen overflow-hidden bg-[#071426] text-slate-100">
      <Navbar />
      <main>
        <section id="home" className="relative flex min-h-[760px] scroll-mt-20 items-center pb-20 pt-32 sm:min-h-[800px]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_35%,rgba(37,99,235,.18),transparent_40%),radial-gradient(ellipse_at_15%_80%,rgba(14,165,233,.08),transparent_35%)]" />
          <div className="section-wrap relative grid items-center gap-14 lg:grid-cols-[1.2fr_.8fr]">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-300/10 px-4 py-2 text-sm text-blue-200"><span className="h-2 w-2 rounded-full bg-emerald-400"/> Available to learn, collaborate, and grow</div>
              <p className="eyebrow mb-4">HELLO, WELCOME TO MY PORTFOLIO</p>
              <h1 className="max-w-3xl text-5xl font-black leading-[1.04] tracking-[-.06em] text-white sm:text-6xl lg:text-7xl">I’m T-Jay Teogangco<span className="text-blue-300">.</span><br/><span className="mt-3 block text-3xl leading-tight tracking-[-.04em] text-slate-300 sm:text-4xl">BSIT Student &amp; Aspiring Developer</span></h1>
              <p className="section-copy mt-7 text-base sm:text-lg">I’m building my skills in web development and application design. This portfolio is a space to share my academic journey, projects, and the things I’m learning along the way.</p>
              <div className="mt-9 flex flex-wrap gap-3"><a href="#projects" className="focus-ring inline-flex items-center gap-2 rounded-xl bg-blue-400 px-6 py-3.5 font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-blue-300">Explore my work <ArrowUpRight size={18}/></a><a href="#about" className="focus-ring inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 font-semibold text-white transition hover:border-blue-300/50 hover:bg-white/5">About me <ArrowDown size={17}/></a></div>
              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400"><span className="inline-flex items-center gap-2"><MapPin size={16} className="text-blue-300"/> Cavite, Philippines</span><span className="inline-flex items-center gap-2"><GraduationCap size={17} className="text-blue-300"/> Cavite State University</span></div>
            </div>
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-5 rounded-[2.5rem] border border-blue-300/10 rotate-6"/><div className="absolute -inset-2 rounded-[2.2rem] border border-white/10 -rotate-3"/>
              <div className="glass grid-dots relative flex aspect-[4/5] flex-col items-center justify-center overflow-hidden rounded-[2rem] p-8 text-center">
                <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-blue-400/10 to-transparent"/>     
                <div className="relative h-36 w-36 shrink-0">
                  <img
                    src="/profile.jpg"
                      alt="T-Jay Teogangco"
                      className="h-full w-full rounded-full border border-blue-200/30 object-cover"/>
                  <span className="absolute bottom-1 right-0 grid h-9 w-9 place-items-center rounded-full border-4 border-[#10213a] bg-blue-400 text-slate-950">
                    <Sparkles size={16} />
                  </span>
                </div>
                <p className="relative mt-8 text-2xl font-extrabold text-white">Curious by nature.</p><p className="relative mt-2 max-w-xs text-sm leading-6 text-slate-400">Creating, experimenting, and learning one project at a time.</p>
                <div className="relative mt-7 flex gap-2"><span className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-1.5 text-xs text-blue-200">Problem solver</span><span className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-1.5 text-xs text-blue-200">Lifelong learner</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section-pad scroll-mt-20 border-y border-white/5 bg-[#0a192d]/65">
          <div className="section-wrap grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
            <div><SectionHeading eyebrow="A LITTLE ABOUT ME" title="Learning today. Building for tomorrow."/><p className="section-copy">I’m a Bachelor of Science in Information Technology student at Cavite State University. I’m interested in how technology can solve everyday problems through useful, accessible, and thoughtfully designed applications.</p><p className="section-copy mt-4">As I continue studying, I’m strengthening my programming fundamentals, exploring frontend development, and practicing how to turn ideas into working projects.</p>
              {showMoreAbout && <div className="mt-4 space-y-3 rounded-xl border border-white/10 bg-slate-950/25 p-4 text-sm leading-7 text-slate-300"><p><strong className="text-white">My approach:</strong> learn by doing, break difficult problems into smaller steps, and improve through feedback.</p><p><strong className="text-white">My goal:</strong> become a capable IT professional who creates practical, user-friendly digital solutions.</p></div>}
              <button onClick={() => setShowMoreAbout(v => !v)} className="focus-ring mt-6 inline-flex items-center gap-2 rounded-lg font-semibold text-blue-300 hover:text-blue-200">{showMoreAbout ? 'Show less' : 'Read more about me'} <ArrowUpRight size={17}/></button>
            </div>
            <div><div className="mb-5 flex items-end justify-between gap-3"><div><p className="text-lg font-bold text-white">Skills I’m developing</p><p className="mt-1 text-sm text-slate-500">A growing toolkit, one lesson at a time.</p></div><span className="text-xs text-slate-500">{showAllSkills ? '6 skills' : '4 skills'}</span></div><div className="grid gap-3 sm:grid-cols-2">{skills.slice(0, showAllSkills ? skills.length : 4).map(skill => <div key={skill.name} className="glass flex items-center gap-4 rounded-xl p-4 transition hover:border-blue-300/30"><div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-300/10 text-blue-300">{skill.icon}</div><div><p className="font-semibold text-white">{skill.name}</p><p className="mt-1 text-xs text-slate-500">{skill.note}</p></div></div>)}</div><button onClick={() => setShowAllSkills(v => !v)} className="focus-ring mt-4 rounded-lg px-1 py-2 text-sm font-semibold text-blue-300 hover:text-blue-200">{showAllSkills ? 'Show fewer skills −' : 'Show all skills +'}</button></div>
          </div>
        </section>

        <section id="projects" className="section-pad scroll-mt-20"><div className="section-wrap"><SectionHeading eyebrow="SELECTED WORK" title="Projects & work samples" description="A few practice and academic projects that show what I’ve been learning. Replace the sample descriptions with your actual project details and add links when available."/><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index}/>)}</div><div className="mt-8 rounded-xl border border-blue-300/15 bg-blue-300/5 p-5 text-sm leading-6 text-slate-400"><span className="font-semibold text-blue-200">Portfolio tip:</span> Add screenshots of your real projects and working public URLs before submitting. Don’t list a project as complete unless you can demonstrate it.</div></div></section>

        <section id="resume" className="section-pad scroll-mt-20 border-y border-white/5 bg-[#0a192d]/65"><div className="section-wrap"><SectionHeading eyebrow="MY BACKGROUND" title="Resume & education" description="A short overview of my academic background and current technical focus. Download the editable sample CV and update it with accurate details before submitting."/><div className="grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
          <div className="glass rounded-2xl p-6 sm:p-8"><div className="flex gap-4"><div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-blue-300/10 text-blue-300"><GraduationCap size={24}/></div><div><p className="text-xs font-bold uppercase tracking-widest text-blue-300">Education</p><h3 className="mt-2 text-xl font-bold text-white">Bachelor of Science in Information Technology</h3><p className="mt-2 text-slate-300">Cavite State University (CvSU)</p><p className="mt-1 text-sm text-slate-500">Current student · Update year level and expected graduation date</p></div></div><div className="my-7 border-t border-white/10"/><div className="flex gap-4"><div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-blue-300/10 text-blue-300"><BriefcaseBusiness size={23}/></div><div><p className="text-xs font-bold uppercase tracking-widest text-blue-300">Experience</p><h3 className="mt-2 text-lg font-bold text-white">Academic & personal projects</h3><p className="mt-2 text-sm leading-6 text-slate-400">Hands-on practice creating small web applications, learning programming concepts, and improving user interface layouts through coursework.</p></div></div><a href="/sample-cv.txt" download="T-Jay-Teogangco-Sample-CV.txt" className="focus-ring mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-blue-300"><Download size={17}/> Download sample CV</a><p className="mt-3 text-xs text-slate-500">This downloads a text CV template. Replace the sample information with your own.</p></div>
          <div className="glass rounded-2xl p-6 sm:p-8"><div className="flex items-center gap-3"><div className="grid h-11 w-11 place-items-center rounded-xl bg-blue-300/10 text-blue-300"><Laptop size={22}/></div><h3 className="text-xl font-bold text-white">Technical toolkit</h3></div><div className="mt-6 space-y-5">{[['Frontend','ReactJS, JavaScript, HTML, CSS'],['Styling','Tailwind CSS, responsive layouts'],['Development tools','VS Code, GitHub, Vite, Vercel'],['Foundations','Programming logic, SQL, debugging']].map(([name, detail]) => <div key={name}><p className="text-sm font-semibold text-slate-200">{name}</p><p className="mt-1 text-sm leading-6 text-slate-400">{detail}</p></div>)}</div><div className="mt-7 rounded-xl border border-white/10 bg-slate-950/30 p-4"><p className="text-sm font-semibold text-white">Currently focused on</p><p className="mt-2 text-sm leading-6 text-slate-400">Building responsive interfaces, writing reusable React components, and understanding state and event handling.</p></div></div>
        </div></div></section>

        <section id="contact" className="section-pad scroll-mt-20"><div className="section-wrap"><SectionHeading eyebrow="GET IN TOUCH" title="Let’s connect" description="Have a question, project idea, or opportunity to collaborate? Use the form or replace the placeholder contact details with your real links."/><div className="grid items-start gap-8 lg:grid-cols-[.8fr_1.2fr]"><div className="space-y-4"><div className="glass rounded-2xl p-6"><p className="text-lg font-bold text-white">Contact information</p><p className="mt-2 text-sm leading-6 text-slate-400">My email and social links are placeholders. Update them before publishing your portfolio.</p><a href="mailto:your.email@example.com" className="focus-ring mt-6 flex items-center gap-4 rounded-xl border border-white/10 p-4 transition hover:border-blue-300/30"><span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-300/10 text-blue-300"><Mail size={20}/></span><span><span className="block text-xs text-slate-500">EMAIL</span><span className="mt-1 block text-sm font-semibold text-white">your.email@example.com</span></span><ArrowUpRight size={17} className="ml-auto text-slate-500"/></a><div className="mt-3 flex items-center gap-4 rounded-xl border border-white/10 p-4"><span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-300/10 text-blue-300"><MapPin size={20}/></span><span><span className="block text-xs text-slate-500">LOCATION</span><span className="mt-1 block text-sm font-semibold text-white">Cavite, Philippines</span></span></div><div className="mt-4 flex gap-3"><a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub homepage" className="focus-ring inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm text-slate-300 transition hover:border-blue-300/30 hover:text-white"><Github size={17}/> GitHub <ExternalLink size={13}/></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn homepage" className="focus-ring inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm text-slate-300 transition hover:border-blue-300/30 hover:text-white"><Linkedin size={17}/> LinkedIn <ExternalLink size={13}/></a></div></div><div className="rounded-2xl border border-blue-300/15 bg-blue-300/5 p-5"><p className="text-sm font-semibold text-blue-200">Before you publish</p><p className="mt-2 text-sm leading-6 text-slate-400">The contact form validates entries in your browser but does not send messages to an inbox. Connect a form service or backend if you need to receive real submissions.</p></div></div><ContactForm/></div></div></section>
      </main>
      <footer className="border-t border-white/10 bg-[#050e1b] py-7"><div className="section-wrap flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left"><a href="#home" className="focus-ring rounded text-sm font-bold text-white">T-Jay Teogangco<span className="text-blue-300">.</span></a><p className="text-xs text-slate-500">Designed and built with ReactJS + Tailwind CSS.</p><a href="#home" className="focus-ring rounded text-xs font-semibold text-blue-300 hover:text-blue-200">Back to top ↑</a></div></footer>
    </div>
  )
}
export default App
