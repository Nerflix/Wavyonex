import { useEffect, useRef } from 'react'
import { ShieldCheck, TrendingUp, Lightbulb, MessageCircle } from 'lucide-react'
import { WA } from '../utils/whatsapp'

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Precision Engineering',
    body: 'Every system we touch is engineered to exact specification — no shortcuts, no compromises. Quality workmanship and safety standards underpin everything we do.',
  },
  {
    icon: TrendingUp,
    title: 'Technical Excellence',
    body: 'Our in-house team brings deep expertise across HVAC, refrigeration, and solar disciplines, delivering installations that perform reliably for years.',
  },
  {
    icon: Lightbulb,
    title: 'Sustainable Innovation',
    body: 'We integrate advanced technologies and energy-efficient design to future-proof operations and reduce your environmental footprint.',
  },
]

export default function About() {
  const leftRef = useRef(null)
  const rightRef = useRef(null)
  const pillarsRef = useRef(null)

  useEffect(() => {
    const targets = [leftRef.current, rightRef.current, pillarsRef.current]
    const observers = targets.map((el, i) => {
      if (!el) return null
      const obs = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => { if (el) el.classList.add('visible') }, i * 150)
          obs.disconnect()
        }
      }, { threshold: 0.1 })
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o && o.disconnect())
  }, [])

  return (
    <section id="about" style={{ background: '#F4F4F4', padding: '100px 24px', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Top label */}
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <div style={{ display: 'inline-block', background: '#0D1B3E', color: '#F5C518', fontSize: 12, letterSpacing: 3, textTransform: 'uppercase', fontWeight: 600, padding: '5px 18px', borderRadius: 20, marginBottom: 20 }}>
            Who We Are
          </div>
          <h2 style={{ fontFamily: 'Barlow Condensed', fontWeight: 900, fontSize: 'clamp(36px, 5vw, 60px)', color: '#0D1B3E', textTransform: 'uppercase', lineHeight: 1, maxWidth: 700, margin: '0 auto' }}>
            Engineering That Works.<br /><span style={{ color: '#F5C518', WebkitTextStroke: '1px #0D1B3E' }}>Systems That Last.</span>
          </h2>
        </div>

        {/* Split: text left, image collage right */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center', marginBottom: 80 }}>
          <style>{`
            @media(max-width:900px){#about-split{grid-template-columns:1fr!important;gap:40px!important}}
          `}</style>
          <div id="about-split" style={{ display: 'contents' }}>

            {/* Text side */}
            <div ref={leftRef} className="fade-in">
              <p style={{ fontSize: 18, color: '#0D1B3E', lineHeight: 1.8, fontWeight: 500, marginBottom: 24, borderLeft: '3px solid #F5C518', paddingLeft: 20 }}>
                Wavonex Ltd is a modern engineering and technical solutions company specializing in HVAC systems, refrigeration technologies, and solar energy solutions.
              </p>
              <p style={{ fontSize: 15, color: '#555', lineHeight: 1.85, marginBottom: 20 }}>
                Built on a foundation of precision engineering, technical excellence, and innovation, we deliver reliable supply, installation, and maintenance services for residential, commercial, and industrial clients across East Africa.
              </p>
              <p style={{ fontSize: 15, color: '#555', lineHeight: 1.85, marginBottom: 32 }}>
                At Wavonex, engineering is more than equipment installation — it is about delivering efficient, reliable, and sustainable systems that improve operational performance and long-term value. Through advanced technologies, skilled technical personnel, and customer-focused service delivery, we provide dependable engineering solutions tailored to modern environmental and operational demands.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 36 }}>
                {[
                  { label: 'Quality Workmanship', color: '#0D1B3E' },
                  { label: 'Safety Standards', color: '#0D1B3E' },
                  { label: 'Energy Efficiency', color: '#0D1B3E' },
                  { label: 'Technical Precision', color: '#0D1B3E' },
                ].map(t => (
                  <div key={t.label} style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    background: '#fff', border: '1px solid rgba(13,27,62,0.1)',
                    borderRadius: 8, padding: '12px 14px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#F5C518', flexShrink: 0 }} />
                    <span style={{ fontSize: 13, fontWeight: 600, color: t.color }}>{t.label}</span>
                  </div>
                ))}
              </div>

              <a href={WA.general} target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: '#0D1B3E', color: '#F5C518', padding: '14px 28px', borderRadius: 8,
                fontFamily: 'Barlow Condensed', fontWeight: 800, fontSize: 17, textDecoration: 'none',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#F5C518'}
              onMouseLeave={e => e.currentTarget.style.background = '#0D1B3E'}
              >
                <MessageCircle size={18} />
                Partner With Us Today
              </a>
            </div>

            {/* Image collage */}
            <div ref={rightRef} className="fade-in" style={{ position: 'relative', height: 520 }}>
              {/* Large top-left image */}
              <div style={{
                position: 'absolute', top: 0, left: 0,
                width: '62%', height: '58%',
                borderRadius: 12, overflow: 'hidden',
                boxShadow: '0 12px 40px rgba(0,0,0,0.18)',
              }}>
                <img
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80"
                  alt="HVAC installation"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(13,27,62,0.3) 0%, transparent 60%)' }} />
              </div>

              {/* Top-right image */}
              <div style={{
                position: 'absolute', top: 0, right: 0,
                width: '35%', height: '43%',
                borderRadius: 12, overflow: 'hidden',
                boxShadow: '0 12px 40px rgba(0,0,0,0.18)',
              }}>
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&q=80"
                  alt="Solar panels"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Bottom-left small image */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0,
                width: '38%', height: '38%',
                borderRadius: 12, overflow: 'hidden',
                boxShadow: '0 12px 40px rgba(0,0,0,0.18)',
              }}>
                <img
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80"
                  alt="Refrigeration engineering"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Bottom-right large image */}
              <div style={{
                position: 'absolute', bottom: 0, right: 0,
                width: '59%', height: '54%',
                borderRadius: 12, overflow: 'hidden',
                boxShadow: '0 12px 40px rgba(0,0,0,0.18)',
              }}>
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80"
                  alt="Engineering team"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,27,62,0.5) 0%, transparent 60%)' }} />
              </div>

              {/* Floating badge */}
              <div style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                background: '#F5C518', color: '#0D1B3E',
                borderRadius: 12, padding: '14px 18px', textAlign: 'center',
                boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
                zIndex: 10, minWidth: 110,
              }}>
                <div style={{ fontFamily: 'Barlow Condensed', fontWeight: 900, fontSize: 30, lineHeight: 1 }}>10+</div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', marginTop: 4 }}>Years in<br />Business</div>
              </div>
            </div>
          </div>
        </div>

        {/* Three pillars */}
        <div ref={pillarsRef} className="fade-in">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
            <style>{`
              @media(max-width:768px){#pillars-grid{grid-template-columns:1fr!important}}
            `}</style>
            <div id="pillars-grid" style={{ display: 'contents' }}>
              {pillars.map((p, i) => {
                const Icon = p.icon
                return (
                  <div key={p.title} style={{
                    background: i === 1 ? '#0D1B3E' : '#fff',
                    borderRadius: 14, padding: '36px 32px',
                    border: i === 1 ? 'none' : '1px solid rgba(13,27,62,0.08)',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    position: 'relative', overflow: 'hidden',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.08)'; }}
                  >
                    {i === 1 && (
                      <div style={{
                        position: 'absolute', top: -20, right: -20,
                        width: 120, height: 120, borderRadius: '50%',
                        background: 'rgba(245,197,24,0.08)',
                      }} />
                    )}
                    <div style={{
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      background: i === 1 ? 'rgba(245,197,24,0.15)' : 'rgba(13,27,62,0.06)',
                      borderRadius: 12, padding: 14, marginBottom: 20,
                    }}>
                      <Icon size={28} color={i === 1 ? '#F5C518' : '#0D1B3E'} strokeWidth={1.6} />
                    </div>
                    <h3 style={{
                      fontFamily: 'Barlow Condensed', fontWeight: 800, fontSize: 22,
                      color: i === 1 ? '#fff' : '#0D1B3E',
                      textTransform: 'uppercase', marginBottom: 12,
                    }}>{p.title}</h3>
                    <p style={{ fontSize: 14, color: i === 1 ? 'rgba(255,255,255,0.7)' : '#666', lineHeight: 1.75 }}>
                      {p.body}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
