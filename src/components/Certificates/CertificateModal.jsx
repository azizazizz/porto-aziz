import { useEffect, useState } from 'react'
import { useLanguage } from '../../hooks/useLanguage'
import './CertificateModal.css'

function CertificateModal({ certificates, index, onIndexChange, onClose }) {
  const { t } = useLanguage()
  const cert = certificates[index]
  const many = certificates.length > 1
  // keyed on the slug so stepping to another certificate shows its skeleton
  const [loadedSlug, setLoadedSlug] = useState(null)
  const loaded = loadedSlug === cert.slug

  useEffect(() => {
    const next = () => onIndexChange((index + 1) % certificates.length)
    const prev = () => onIndexChange((index - 1 + certificates.length) % certificates.length)

    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (many && e.key === 'ArrowRight') next()
      if (many && e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [index, certificates.length, many, onIndexChange, onClose])

  const go = (step) => onIndexChange((index + step + certificates.length) % certificates.length)

  return (
    <div className="cert-modal-backdrop" onClick={onClose} role="presentation">
      <div
        className="cert-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={cert.title}
      >
        <button
          type="button"
          className="cert-modal-close"
          onClick={onClose}
          aria-label={t.modal.close}
        >
          ✕
        </button>

        <div className="cert-modal-media">
          {cert.preview ? (
            <>
              {!loaded && <div className="cert-skeleton" aria-hidden="true" />}
              <img
                src={cert.preview}
                alt={cert.title}
                onLoad={() => setLoadedSlug(cert.slug)}
              />
            </>
          ) : (
            <div className="cert-modal-fallback">
              <span>PDF</span>
            </div>
          )}

          {many && (
            <>
              <span className="cert-modal-counter numeral">
                {index + 1} / {certificates.length}
              </span>
              <button
                type="button"
                className="cert-modal-nav prev"
                onClick={() => go(-1)}
                aria-label={t.certificates.prev}
              >
                ‹
              </button>
              <button
                type="button"
                className="cert-modal-nav next"
                onClick={() => go(1)}
                aria-label={t.certificates.next}
              >
                ›
              </button>
            </>
          )}
        </div>

        <div className="cert-modal-info">
          <h3>{cert.title}</h3>
          {cert.issuer && <p className="cert-modal-issuer">{cert.issuer}</p>}
        </div>
      </div>
    </div>
  )
}

export default CertificateModal
