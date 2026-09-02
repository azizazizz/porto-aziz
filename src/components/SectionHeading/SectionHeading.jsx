import './SectionHeading.css'

function SectionHeading({ number, title, subtitle }) {
  return (
    <div className="section-heading-block">
      <p className="section-eyebrow">
        <span className="num numeral">{number}</span>
        <span className="rule" aria-hidden="true" />
      </p>
      <h2 className="section-heading">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  )
}

export default SectionHeading
