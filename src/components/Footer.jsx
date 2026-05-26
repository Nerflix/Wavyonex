import { Phone, Mail, Globe, MapPin, MessageCircle, ChevronRight } from 'lucide-react'
import { WA } from '../utils/whatsapp'

const serviceLinks = [
  { label: 'HVAC Systems', href: '#services' },
  { label: 'Refrigeration Solutions', href: '#services' },
  { label: 'Solar Energy', href: '#services' },
  { label: 'Installation', href: '#services' },
  { label: 'Maintenance', href: '#services' },
  { label: 'Energy Audits', href: '#services' },
]

const sectors = [
  'Residential', 'Commercial', 'Industrial',
  'Hospitality', 'Healthcare', 'Retail',
  'Institutions', 'Food & Beverage',
]

const contactItems = [
  { Icon: Phone,  value: '0790 155 393',       href: 'tel:0790155393' },
  { Icon: Mail,   value: 'info@wavonex.co.ke',  href: 'mailto:info@wavonex.co.ke' },
  { Icon: Globe,  value: 'www.wavonex.co.ke',   href: null },
  { Icon: MapPin, value: 'Nairobi, Kenya',       href: null },
]

export default function Footer() {
  return (
    <footer style={{ background: '#2E2E2E' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(40px,6vw,64px) clamp(16px,4vw,32px) 0' }}>

        <style>{`
          /* Desktop: 4 equal columns */
          .footer-main {
            display: grid;
            grid-template-columns: 1.6fr 1fr 1fr 1fr;
            gap: 48px;
            margin-bottom: 48px;
          }
          /* Tablet: brand full-width top, then 3 cols */
          @media (max-width: 900px) {
            .footer-main {
              grid-template-columns: 1fr 1fr;
              gap: 32px;
            }
            .footer-brand { grid-column: 1 / -1; }
          }
          /* Mobile: brand full-width, middle two side-by-side, contact full-width */
          @media (max-width: 500px) {
            .footer-main {
              grid-template-columns: 1fr 1fr;
              gap: 24px;
            }
            .footer-brand   { grid-column: 1 / -1; }
            .footer-contact { grid-column: 1 / -1; }
          }
        `}</style>

        <div className="footer-main">

          {/* ── Brand ── */}
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <img src="/Logo.jpeg" alt="Wavonex Ltd" style={{ height: 60, width: 60, borderRadius: 10, objectFit: 'cover', flexShrink: 0 }} />
              <div>
                <div style={{ fontFamily: 'Barlow Condensed', fontWeight: 800, fontSize: 20, color: '#fff', letterSpacing: 1, lineHeight: 1.1 }}>WAVONEX LTD</div>
                <div style={{ fontSize: 10, color: '#F5C518', letterSpacing: 2, textTransform: 'uppercase', marginTop: 2 }}>Precision Performance</div>
              </div>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.75, marginBottom: 18, maxWidth: 340 }}>
              HVAC, Refrigeration &amp; Solar engineering — supply, installation, and maintenance for residential, commercial, and industrial clients across East Africa.
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a href={WA.general} target="_blank" rel="noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '9px 16px', borderRadius: 6, fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: 13, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 5 }}>
                <MessageCircle size={14} /> Chat on WhatsApp
              </a>
              <a href="tel:0790155393" style={{ border: '1px solid rgba(245,197,24,0.5)', color: '#F5C518', padding: '9px 16px', borderRadius: 6, fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: 13, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 5 }}>
                <Phone size={13} /> Call Now
              </a>
            </div>
          </div>

          {/* ── Services ── */}
          <div>
            <h4 style={{ fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: 14, color: '#F5C518', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>Our Services</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9 }}>
              {serviceLinks.map(s => (
                <li key={s.label}>
                  <a href={s.href} style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'rgba(255,255,255,0.55)', fontSize: 13, textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#F5C518'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                  >
                    <ChevronRight size={12} color="#F5C518" strokeWidth={2.5} /> {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Sectors ── */}
          <div>
            <h4 style={{ fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: 14, color: '#F5C518', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>Sectors We Serve</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9 }}>
              {sectors.map(s => (
                <li key={s}>
                  <a href="#sectors" style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'rgba(255,255,255,0.55)', fontSize: 13, textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#F5C518'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                  >
                    <ChevronRight size={12} color="#F5C518" strokeWidth={2.5} /> {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div className="footer-contact">
            <h4 style={{ fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: 14, color: '#F5C518', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>Get In Touch</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 13, marginBottom: 20 }}>
              {contactItems.map(({ Icon, value, href }) => (
                <div key={value} style={{ display: 'flex', alignItems: 'flex-start', gap: 9 }}>
                  <Icon size={14} color="#F5C518" style={{ flexShrink: 0, marginTop: 2 }} />
                  {href
                    ? <a href={href} style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, textDecoration: 'none', lineHeight: 1.4, wordBreak: 'break-all', transition: 'color 0.2s' }}
                        onMouseEnter={e => e.currentTarget.style.color = '#F5C518'}
                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                      >{value}</a>
                    : <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.4 }}>{value}</span>
                  }
                </div>
              ))}
            </div>
            {/* Mini emergency CTA */}
            <div style={{ background: 'rgba(245,197,24,0.08)', border: '1px solid rgba(245,197,24,0.2)', borderRadius: 8, padding: '12px 14px' }}>
              <div style={{ fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: 13, color: '#F5C518', marginBottom: 6 }}>24/7 Emergency Support</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginBottom: 10, lineHeight: 1.4 }}>System breakdown? We respond within the hour.</div>
              <a href={WA.emergency} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#F5C518', color: '#0D1B3E', padding: '8px 12px', borderRadius: 6, fontFamily: 'Barlow Condensed', fontWeight: 800, fontSize: 13, textDecoration: 'none' }}>
                <MessageCircle size={13} /> Emergency WhatsApp
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '16px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
          <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 12 }}>© 2026 Wavonex Ltd. All rights reserved.</div>
          <div style={{ color: '#F5C518', fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: 12, letterSpacing: 2 }}>PRECISION PERFORMANCE · NAIROBI, KENYA</div>
        </div>
      </div>
    </footer>
  )
}
