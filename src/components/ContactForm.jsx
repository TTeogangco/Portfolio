import { useState } from 'react'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'

const initialForm = { name: '', email: '', subject: '', message: '' }
export default function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  function update(event) {
    const { name, value } = event.target
    setForm(current => ({ ...current, [name]: value }))
    setErrors(current => ({ ...current, [name]: '' }))
    setSubmitted(false)
  }
  function submit(event) {
    event.preventDefault()
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email address.'
    if (!form.subject.trim()) next.subject = 'Please add a subject.'
    if (form.message.trim().length < 10) next.message = 'Message must be at least 10 characters.'
    setErrors(next)
    if (Object.keys(next).length === 0) setSubmitted(true)
  }
  const fields = [
    { name: 'name', label: 'Your name', placeholder: 'e.g. Juan Dela Cruz', type: 'text' },
    { name: 'email', label: 'Email address', placeholder: 'you@example.com', type: 'email' },
    { name: 'subject', label: 'Subject', placeholder: 'What would you like to discuss?', type: 'text' },
  ]
  return (
    <form onSubmit={submit} noValidate className="glass rounded-2xl p-6 sm:p-8">
      <div className="mb-6"><p className="text-lg font-bold text-white">Send a message</p><p className="mt-1 text-sm text-slate-400">Fields marked with * are required.</p></div>
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map(field => <div key={field.name} className={field.name === 'subject' ? 'sm:col-span-2' : ''}>
          <label htmlFor={field.name} className="mb-2 block text-sm font-medium text-slate-200">{field.label} <span className="text-blue-300">*</span></label>
          <input id={field.name} name={field.name} type={field.type} value={form[field.name]} onChange={update} placeholder={field.placeholder} aria-invalid={Boolean(errors[field.name])} aria-describedby={errors[field.name] ? `${field.name}-error` : undefined} className={`focus-ring w-full rounded-xl border bg-slate-950/40 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 ${errors[field.name] ? 'border-rose-400' : 'border-white/10 focus:border-blue-300/60'}`}/>
          {errors[field.name] && <p id={`${field.name}-error`} className="mt-2 text-xs text-rose-300">{errors[field.name]}</p>}
        </div>)}
        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">Message <span className="text-blue-300">*</span></label>
          <textarea id="message" name="message" rows="5" value={form.message} onChange={update} placeholder="Write your message here..." aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} className={`focus-ring w-full resize-y rounded-xl border bg-slate-950/40 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 ${errors.message ? 'border-rose-400' : 'border-white/10 focus:border-blue-300/60'}`}/>
          <div className="mt-2 flex justify-between gap-3">{errors.message ? <p id="message-error" className="text-xs text-rose-300">{errors.message}</p> : <span className="text-xs text-slate-600">At least 10 characters</span>}<span className="text-xs text-slate-500">{form.message.length}/1000</span></div>
        </div>
      </div>
      {submitted && <div role="status" className="mt-5 flex gap-3 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm text-emerald-200"><CheckCircle2 size={19} className="shrink-0"/><div><p className="font-semibold">Form validation successful!</p><p className="mt-1 text-emerald-100/80">This demo does not send or store messages. Connect a form service or backend before using it for real contact.</p></div></div>}
      {Object.keys(errors).length > 0 && <p className="mt-4 flex items-center gap-2 text-sm text-rose-300"><AlertCircle size={16}/> Please fix the highlighted fields.</p>}
      <button type="submit" className="focus-ring mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-400 px-5 py-3.5 font-bold text-slate-950 transition hover:bg-blue-300 sm:w-auto">Validate message <Send size={17}/></button>
    </form>
  )
}
