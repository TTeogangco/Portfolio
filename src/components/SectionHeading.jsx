export default function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {description && <p className={`section-copy mt-4 ${centered ? 'mx-auto' : ''}`}>{description}</p>}
    </div>
  )
}
