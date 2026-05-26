import { useState, useEffect } from 'react'
import { X, Menu, MessageCircle, Phone, ChevronRight } from 'lucide-react'
import { WA } from '../utils/whatsapp'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Why Us', href: '#why' },
  { label: 'Sectors', href: '#sectors' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  const close = () => setDrawerOpen(false)

  return (
    <>
      {/* ── Top bar ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? 'rgba(13,27,62,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(245,197,24,0.2)' : 'none',
        transition: 'all 0.3s ease',
        padding: '0 24px',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>

          {/* Logo */}
          <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0 }}>
            <img src="/Logo.jpeg" alt="Wavonex Ltd" style={{ height: 54, width: 54, borderRadius: 8, objectFit: 'cover' }} />
            <div>
              <div style={{ fontFamily: 'Barlow Condensed', fontWeight: 800, fontSize: 18, color: '#fff', letterSpacing: 1, lineHeight: 1 }}>WAVONEX LTD</div>
              <div style={{ fontSize: 9, color: '#F5C518', letterSpacing: 2, textTransform: 'uppercase' }}>Precision Performance</div>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="desktop-nav" style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
            {links.map(l => (
              <a key={l.label} href={l.href} className="nav-link">{l.label}</a>
            ))}
            <a href={WA.general} target="_blank" rel="noopener noreferrer" style={{
              background: '#25D366', color: '#fff', padding: '8px 18px',
              borderRadius: 6, fontSize: 13, fontWeight: 600, textDecoration: 'none',
              display: 'flex', alignItems: 'center', gap: 6,
            }}>
              <MessageCircle size={15} /> WhatsApp Us
            </a>
            <a href="tel:0790155393" style={{
              border: '1px solid rgba(245,197,24,0.6)', color: '#F5C518',
              padding: '8px 16px', borderRadius: 6, fontSize: 13, fontWeight: 600, textDecoration: 'none',
              display: 'flex', alignItems: 'center', gap: 6,
            }}>
              <Phone size={14} /> Call
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setDrawerOpen(true)}
            className="mobile-menu-btn"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#fff', padding: 6, display: 'none' }}
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </nav>

      {/* ── Drawer overlay ── */}
      {drawerOpen && (
        <div className="drawer-overlay" onClick={close} />
      )}

      {/* ── Slide-in drawer ── */}
      <div className="drawer" style={{ transform: drawerOpen ? 'translateX(0)' : 'translateX(100%)', transition: 'transform 0.3s ease' }}>
        {/* Drawer header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <img src="/Logo.jpeg" alt="Wavonex" style={{ height: 48, width: 48, borderRadius: 8, objectFit: 'cover' }} />
            <div>
              <div style={{ fontFamily: 'Barlow Condensed', fontWeight: 800, fontSize: 16, color: '#fff' }}>WAVONEX LTD</div>
              <div style={{ fontSize: 9, color: '#F5C518', letterSpacing: 2 }}>PRECISION PERFORMANCE</div>
            </div>
          </div>
          <button onClick={close} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', cursor: 'pointer', borderRadius: 8, padding: 8, display: 'flex' }}>
            <X size={20} />
          </button>
        </div>

        {/* Nav links */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>Navigate</div>
          {[{ label: 'Home', href: '#hero' }, ...links].map(l => (
            <a key={l.label} href={l.href} onClick={close} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              color: '#fff', textDecoration: 'none', fontSize: 20,
              fontFamily: 'Barlow Condensed', fontWeight: 700,
              padding: '14px 0',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
              letterSpacing: 0.5,
            }}>
              {l.label} <ChevronRight size={16} color="#F5C518" />
            </a>
          ))}
        </div>

        {/* Drawer CTAs */}
        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 4 }}>Get in touch</div>
          <a href={WA.general} target="_blank" rel="noopener noreferrer" onClick={close} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
            background: '#25D366', color: '#fff', padding: '16px',
            borderRadius: 10, fontFamily: 'Barlow Condensed', fontWeight: 800,
            fontSize: 18, textDecoration: 'none',
          }}>
            <MessageCircle size={20} /> Chat on WhatsApp
          </a>
          <a href="tel:0790155393" onClick={close} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
            background: '#F5C518', color: '#0D1B3E', padding: '16px',
            borderRadius: 10, fontFamily: 'Barlow Condensed', fontWeight: 800,
            fontSize: 18, textDecoration: 'none',
          }}>
            <Phone size={20} /> Call 0790 155 393
          </a>
          <p style={{ textAlign: 'center', fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 8 }}>
            24/7 Emergency Support · Nairobi, Kenya
          </p>
        </div>
      </div>

      {/* ── Mobile bottom bar ── */}
      <div className="mobile-bottom-nav">
        {[
          { href: '#services', label: 'Services', icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg> },
          { href: '#products', label: 'Products', icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg> },
        ].map(item => (
          <a key={item.label} href={item.href} style={{
            flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            color: 'rgba(255,255,255,0.7)', textDecoration: 'none', gap: 3, fontSize: 10,
            fontWeight: 600, letterSpacing: 0.5, textTransform: 'uppercase',
            transition: 'color 0.2s',
          }}
          onTouchStart={e => e.currentTarget.style.color = '#F5C518'}
          onTouchEnd={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
          >
            {item.icon}
            {item.label}
          </a>
        ))}

        {/* Sectors centre button */}
        <a href="#sectors" style={{
          flex: 1.2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          background: 'rgba(245,197,24,0.15)', color: '#F5C518', textDecoration: 'none', gap: 3,
          fontSize: 10, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase',
          borderLeft: '1px solid rgba(245,197,24,0.15)', borderRight: '1px solid rgba(245,197,24,0.15)',
        }}>
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0H5m-2 0H1m6-4h4m-2-4h.01M7 8h.01M17 8h.01M17 12h.01"/>
          </svg>
          Sectors
        </a>

        {[
          { href: '#why', label: 'Why Us', icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg> },
          { href: 'tel:0790155393', label: 'Call Now', icon: <Phone size={20} />, isCall: true },
        ].map(item => (
          <a key={item.label} href={item.href} style={{
            flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            color: item.isCall ? '#F5C518' : 'rgba(255,255,255,0.7)',
            textDecoration: 'none', gap: 3, fontSize: 10,
            fontWeight: item.isCall ? 700 : 600, letterSpacing: 0.5, textTransform: 'uppercase',
          }}>
            {item.icon}
            {item.label}
          </a>
        ))}
      </div>
    </>
  )
}
