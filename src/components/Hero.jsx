import { MessageCircle, Phone, Zap, CheckCircle, ArrowRight } from 'lucide-react'
import { WA } from '../utils/whatsapp'

const services = [
  { label: 'HVAC Systems', sub: 'Design · Supply · Install · Maintain' },
  { label: 'Refrigeration', sub: 'Cold Rooms · Chillers · Cold Chain' },
  { label: 'Solar Energy', sub: 'Grid-Tied · Off-Grid · Hybrid PV' },
]

const proof = [
  'Licensed in-house technical engineers',
  '24-hour emergency response across East Africa',
  'Residential, commercial & industrial projects',
]

export default function Hero() {
  return (
    <section id="hero" style={{ minHeight: '100vh', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden' }}>

      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1600&q=85"
        alt=""
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
      />
      {/* Overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(110deg, rgba(13,27,62,0.96) 0%, rgba(13,27,62,0.88) 55%, rgba(13,27,62,0.6) 100%)' }} />
      {/* Blueprint grid */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(245,197,24,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(245,197,24,0.05) 1px, transparent 1px)`, backgroundSize: '40px 40px', animation: 'gridMove 10s linear infinite' }} />

      {/* 24/7 badge — tablet+ only, hidden on phones to avoid overlap */}
      <div className="pulse-badge hero-badge" style={{ position: 'absolute', top: 84, right: 24, background: '#F5C518', color: '#0D1B3E', fontFamily: 'Barlow Condensed', fontWeight: 800, fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', padding: '7px 14px', borderRadius: 40, display: 'flex', alignItems: 'center', gap: 5, zIndex: 2 }}>
        <Zap size={12} fill="#0D1B3E" /> 24/7 Emergency Support
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', width: '100%', padding: 'clamp(100px,12vw,140px) clamp(16px,5vw,40px) clamp(60px,8vw,100px)' }}>

        <style>{`
          .hero-grid { display: grid; grid-template-columns: 1fr 380px; gap: 60px; align-items: center; }
          .hero-card { display: flex; flex-direction: column; }
          .hero-stats { display: flex; }
          @media (max-width: 1100px) {
            .hero-grid { grid-template-columns: 1fr !important; gap: 0 !important; }
            .hero-card { display: none !important; }
          }
          @media (max-width: 600px) {
            .hero-stats { flex-direction: row; }
            .hero-cta-row { flex-direction: column !important; }
            .hero-cta-row a { width: 100% !important; justify-content: center !important; }
            .hero-proof { display: none !important; }
          }
        `}</style>

        <div className="hero-grid">

          {/* ── LEFT: Headline + CTAs ── */}
          <div>
            {/* Pill badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(245,197,24,0.14)', border: '1px solid rgba(245,197,24,0.4)', color: '#F5C518', fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', padding: '6px 16px', borderRadius: 40, marginBottom: 24 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#F5C518', display: 'inline-block' }} />
              Nairobi, Kenya · East Africa
            </div>

            {/* Headline */}
            <h1 style={{ fontFamily: 'Barlow Condensed', fontWeight: 900, fontSize: 'clamp(44px, 7.5vw, 88px)', lineHeight: 0.95, color: '#fff', marginBottom: 18, textTransform: 'uppercase', letterSpacing: -1 }}>
              Precision<br />Engineering.<br />
              <span style={{ color: '#F5C518' }}>Reliable<br />Performance.</span>
            </h1>

            <p style={{ fontSize: 'clamp(14px, 2vw, 18px)', color: 'rgba(255,255,255,0.75)', maxWidth: 500, lineHeight: 1.7, marginBottom: 20 }}>
              HVAC · Refrigeration · Solar — Supply, Installation &amp; Maintenance across East Africa
            </p>

            {/* Trust proof — hidden on very small screens */}
            <div className="hero-proof" style={{ marginBottom: 28 }}>
              {proof.map(p => (
                <div key={p} style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 7 }}>
                  <CheckCircle size={14} color="#F5C518" strokeWidth={2.5} />
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)' }}>{p}</span>
                </div>
              ))}
            </div>

            {/* Mobile service chips */}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 28 }}>
              {services.map(s => (
                <a key={s.label} href="#services" style={{ background: 'rgba(245,197,24,0.1)', border: '1px solid rgba(245,197,24,0.3)', color: '#F5C518', padding: '5px 12px', borderRadius: 20, fontSize: 12, fontFamily: 'Barlow Condensed', fontWeight: 700, textDecoration: 'none', letterSpacing: 0.5, whiteSpace: 'nowrap' }}>
                  {s.label}
                </a>
              ))}
            </div>

            {/* CTAs */}
            <div className="hero-cta-row" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 44 }}>
              <a href={WA.general} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 9, background: '#25D366', color: '#fff', padding: 'clamp(13px,2vw,16px) clamp(20px,3vw,30px)', borderRadius: 8, fontFamily: 'Barlow Condensed', fontWeight: 800, fontSize: 'clamp(16px,2vw,19px)', textDecoration: 'none', boxShadow: '0 4px 24px rgba(37,211,102,0.35)', transition: 'transform 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <MessageCircle size={20} /> Get a Free Quote
              </a>
              <a href="tel:0790155393" style={{ display: 'flex', alignItems: 'center', gap: 9, background: 'transparent', color: '#F5C518', border: '2px solid #F5C518', padding: 'clamp(13px,2vw,16px) clamp(20px,3vw,30px)', borderRadius: 8, fontFamily: 'Barlow Condensed', fontWeight: 800, fontSize: 'clamp(16px,2vw,19px)', textDecoration: 'none', transition: 'background 0.2s, color 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#F5C518'; e.currentTarget.style.color = '#0D1B3E'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#F5C518'; }}
              >
                <Phone size={18} /> Call Now
              </a>
            </div>

            {/* Stats strip */}
            <div className="hero-stats" style={{ borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: 28, gap: 0 }}>
              {[
                { num: '10+', label: 'Years Experience' },
                { num: '500+', label: 'Projects Done' },
                { num: '24/7', label: 'Emergency Support' },
              ].map((s, i) => (
                <div key={s.label} style={{ flex: 1, textAlign: 'center', borderRight: i < 2 ? '1px solid rgba(255,255,255,0.12)' : 'none', padding: '0 clamp(8px,2vw,16px)' }}>
                  <div style={{ fontFamily: 'Barlow Condensed', fontWeight: 900, fontSize: 'clamp(26px,4vw,40px)', color: '#F5C518', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: 'clamp(9px,1.2vw,12px)', color: 'rgba(255,255,255,0.5)', letterSpacing: 1, textTransform: 'uppercase', marginTop: 5 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Service panel (desktop only) ── */}
          <div className="hero-card" style={{ background: '#ffffff', borderRadius: 16, padding: '0 0 24px', gap: 4, boxShadow: '0 24px 64px rgba(0,0,0,0.5)', overflow: 'hidden', border: 'none' }}>
            {/* Yellow top bar */}
            <div style={{ background: '#F5C518', padding: '14px 28px', marginBottom: 20 }}>
              <div style={{ fontFamily: 'Barlow Condensed', fontWeight: 800, fontSize: 11, color: '#0D1B3E', letterSpacing: 3, textTransform: 'uppercase' }}>What We Do</div>
            </div>

            <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: 8 }}>
            {services.map((s, i) => (
              <a key={s.label} href="#services" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 18px', borderRadius: 10, background: '#FFF8DC', border: '1.5px solid #F5C518', textDecoration: 'none', transition: 'background 0.2s, transform 0.15s' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#FFF3B0'; e.currentTarget.style.transform = 'translateX(3px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#FFF8DC'; e.currentTarget.style.transform = 'translateX(0)'; }}
              >
                <div>
                  <div style={{ fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: 17, color: '#0D1B3E', marginBottom: 2 }}>{s.label}</div>
                  <div style={{ fontSize: 11, color: 'rgba(13,27,62,0.5)' }}>{s.sub}</div>
                </div>
                <ArrowRight size={15} color="#0D1B3E" />
              </a>
            ))}
            </div>

            <div style={{ margin: '16px 20px 0', padding: '18px', background: '#0D1B3E', borderRadius: 10 }}>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: 14 }}>
                <strong style={{ color: '#F5C518' }}>Not sure where to start?</strong><br />
                Free consultation — our engineers respond within 2 hours.
              </div>
              <a href={WA.engineer} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: '#25D366', color: '#fff', padding: '11px 16px', borderRadius: 8, fontFamily: 'Barlow Condensed', fontWeight: 800, fontSize: 15, textDecoration: 'none' }}>
                <MessageCircle size={16} /> Speak to an Engineer
              </a>
            </div>
            <div style={{ marginTop: 14, textAlign: 'center' }}>
              <a href="tel:0790155393" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, color: 'rgba(13,27,62,0.4)', fontSize: 12, textDecoration: 'none' }}>
                <Phone size={12} /> 0790 155 393 · Available 24/7
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll cue */}
      <div style={{ position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, color: 'rgba(255,255,255,0.3)', fontSize: 9, letterSpacing: 2, textTransform: 'uppercase', zIndex: 2 }}>
        <span>Scroll</span>
        <div style={{ width: 1, height: 32, background: 'linear-gradient(to bottom, rgba(245,197,24,0.5), transparent)' }} />
      </div>
    </section>
  )
}
