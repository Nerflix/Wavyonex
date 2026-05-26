import { useEffect, useRef } from 'react'
import { MessageCircle, Phone, Mail, Globe, MapPin } from 'lucide-react'
import { WA } from '../utils/whatsapp'

const details = [
  { icon: Phone, label: 'Phone', value: '0790 155 393', href: 'tel:0790155393' },
  { icon: Mail, label: 'Email', value: 'info@wavonex.co.ke', href: 'mailto:info@wavonex.co.ke' },
  { icon: Globe, label: 'Website', value: 'www.wavonex.co.ke', href: null },
  { icon: MapPin, label: 'Location', value: 'Nairobi, Kenya', href: null },
]

export default function Contact() {
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { ref.current.classList.add('visible'); obs.disconnect() }
    }, { threshold: 0.1 })
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="contact" className="section-pad" style={{ background: '#0D1B3E', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(245,197,24,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(245,197,24,0.04) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

      <div ref={ref} className="fade-in" style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center', position: 'relative' }}>

        <span className="section-label">Get In Touch</span>
        <h2 style={{ fontFamily: 'Barlow Condensed', fontWeight: 900, fontSize: 'clamp(32px,6vw,68px)', color: '#fff', textTransform: 'uppercase', lineHeight: 1, marginBottom: 16 }}>
          Ready to Engineer<br /><span style={{ color: '#F5C518' }}>Your Solution?</span>
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 'clamp(14px,1.8vw,17px)', marginBottom: 44, lineHeight: 1.7 }}>
          Get a free assessment and quote. Our team responds within 2 hours.
        </p>

        {/* CTA buttons */}
        <style>{`
          .contact-btns { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; margin-bottom: 52px; }
          .contact-btns a { flex: 1 1 180px; max-width: 260px; }
          @media (max-width: 480px) { .contact-btns a { max-width: 100%; flex-basis: 100%; } }
        `}</style>
        <div className="contact-btns">
          <a href={WA.quote} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9, background: '#25D366', color: '#fff', padding: '17px 20px', borderRadius: 8, fontFamily: 'Barlow Condensed', fontWeight: 800, fontSize: 'clamp(15px,2vw,19px)', textDecoration: 'none', boxShadow: '0 4px 24px rgba(37,211,102,0.3)', transition: 'transform 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <MessageCircle size={20} /> Chat on WhatsApp
          </a>

          <a href="tel:0790155393" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9, background: '#F5C518', color: '#0D1B3E', padding: '17px 20px', borderRadius: 8, fontFamily: 'Barlow Condensed', fontWeight: 800, fontSize: 'clamp(15px,2vw,19px)', textDecoration: 'none', transition: 'transform 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <Phone size={20} strokeWidth={2.5} /> Call 0790 155 393
          </a>

          <a href="mailto:info@wavonex.co.ke" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9, background: 'transparent', color: '#fff', padding: '17px 20px', borderRadius: 8, border: '2px solid rgba(255,255,255,0.35)', fontFamily: 'Barlow Condensed', fontWeight: 800, fontSize: 'clamp(15px,2vw,19px)', textDecoration: 'none', transition: 'border-color 0.2s, background 0.2s' }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'; e.currentTarget.style.background = 'transparent'; }}
          >
            <Mail size={20} /> Email Us
          </a>
        </div>

        {/* Contact detail cards */}
        <div className="contact-grid" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 14, padding: 'clamp(20px,3vw,32px)' }}>
          {details.map(({ icon: Icon, label, value, href }) => (
            <div key={label} style={{ textAlign: 'center', padding: '8px 4px' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>
                <div style={{ background: 'rgba(245,197,24,0.12)', borderRadius: 10, padding: 11, display: 'inline-flex' }}>
                  <Icon size={20} color="#F5C518" strokeWidth={1.8} />
                </div>
              </div>
              <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 5 }}>{label}</div>
              {href
                ? <a href={href} style={{ color: '#F5C518', textDecoration: 'none', fontSize: 'clamp(12px,1.5vw,14px)', fontWeight: 600, wordBreak: 'break-all' }}>{value}</a>
                : <span style={{ color: '#fff', fontSize: 'clamp(12px,1.5vw,14px)', fontWeight: 600 }}>{value}</span>
              }
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
