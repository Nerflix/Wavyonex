import { useState, useEffect, useRef } from 'react'
import { Award, Link2, Zap, Clock, Star, Headphones, BadgeDollarSign, FileText, MessageCircle, Phone } from 'lucide-react'
import { WA } from '../utils/whatsapp'

const stats = [
  { value: 100, suffix: '%', label: 'In-House Technical Team' },
  { value: 3, suffix: '', label: 'Core Service Lines' },
  { value: 24, suffix: '/7', label: 'Emergency Support' },
  { value: 5, suffix: '+', label: 'EA Regional Coverage' },
]

const valueProps = [
  { num: '01', title: 'Certified Technical Team', desc: 'Licensed engineers with hands-on field experience', icon: Award },
  { num: '02', title: 'Integrated Service Model', desc: 'Supply, install, and maintain under one roof', icon: Link2 },
  { num: '03', title: 'Energy-Efficient Design', desc: 'Systems engineered to minimise running costs', icon: Zap },
  { num: '04', title: 'On-Time Delivery', desc: 'Project timelines respected, every single time', icon: Clock },
  { num: '05', title: 'Premium Equipment', desc: 'Only top-tier brands and genuine parts used', icon: Star },
  { num: '06', title: 'Responsive Support', desc: '24-hour response guaranteed on all service calls', icon: Headphones },
  { num: '07', title: 'Competitive Pricing', desc: 'Market-leading value without cutting corners', icon: BadgeDollarSign },
  { num: '08', title: 'Full Documentation', desc: 'Complete handover docs, manuals, and warranties', icon: FileText },
]

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true
        let start = 0
        const step = (ts) => {
          if (!start) start = ts
          const p = Math.min((ts - start) / 1800, 1)
          setCount(Math.floor(p * target))
          if (p < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
        obs.disconnect()
      }
    }, { threshold: 0.3 })
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target])

  return (
    <div ref={ref} style={{ textAlign: 'center', padding: '32px 16px' }}>
      <div style={{ fontFamily: 'Barlow Condensed', fontWeight: 900, fontSize: 'clamp(40px,5vw,68px)', color: '#F5C518', lineHeight: 1 }}>
        {count}{suffix}
      </div>
    </div>
  )
}

function ValueCard({ prop, delay }) {
  const ref = useRef(null)
  const Icon = prop.icon

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setTimeout(() => { if (ref.current) ref.current.classList.add('visible') }, delay)
        obs.disconnect()
      }
    }, { threshold: 0.1 })
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [delay])

  return (
    <div ref={ref} className="fade-in" style={{ background: '#fff', border: '1px solid rgba(13,27,62,0.1)', borderRadius: 10, padding: 'clamp(16px,2vw,24px)', transition: 'background 0.3s, border-color 0.3s, box-shadow 0.3s', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}
    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(13,27,62,0.04)'; e.currentTarget.style.borderColor = 'rgba(13,27,62,0.2)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(13,27,62,0.1)'; }}
    onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = 'rgba(13,27,62,0.1)'; e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)'; }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
        <span style={{ fontFamily: 'Barlow Condensed', fontWeight: 800, fontSize: 11, color: '#0D1B3E', opacity: 0.35 }}>{prop.num}</span>
        <div style={{ background: 'rgba(13,27,62,0.08)', borderRadius: 8, padding: 8, display: 'flex' }}>
          <Icon size={16} color="#0D1B3E" strokeWidth={1.8} />
        </div>
      </div>
      <h4 style={{ fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: 'clamp(15px,1.8vw,18px)', color: '#0D1B3E', marginBottom: 6 }}>{prop.title}</h4>
      <p style={{ fontSize: 13, color: '#666', lineHeight: 1.5 }}>{prop.desc}</p>
    </div>
  )
}

export default function WhyUs() {
  const titleRef = useRef(null)
  const quoteRef = useRef(null)

  useEffect(() => {
    [titleRef, quoteRef].forEach(r => {
      if (!r.current) return
      const obs = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) { r.current.classList.add('visible'); obs.disconnect() }
      }, { threshold: 0.1 })
      obs.observe(r.current)
    })
  }, [])

  return (
    <section id="why" className="section-pad" style={{ background: '#FFFFFF' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        <div ref={titleRef} className="fade-in" style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ display: 'inline-block', background: '#0D1B3E', color: '#F5C518', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', fontWeight: 700, padding: '4px 16px', borderRadius: 20, marginBottom: 16 }}>Why Wavonex</div>
          <h2 style={{ fontFamily: 'Barlow Condensed', fontWeight: 900, fontSize: 'clamp(32px,5vw,56px)', color: '#0D1B3E', textTransform: 'uppercase', lineHeight: 1 }}>
            The Standard Others<br /><span style={{ color: '#F5C518' }}>Are Measured Against</span>
          </h2>
        </div>

        {/* Stats */}
        <div className="stats-grid" style={{ background: 'rgba(245,197,24,0.12)', borderRadius: 12, overflow: 'hidden', marginBottom: 64, border: '1px solid rgba(245,197,24,0.2)' }}>
          {stats.map((s, i) => (
            <div key={i} style={{ background: '#0D1B3E', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(245,197,24,0.15)' : 'none' }}>
              <Counter target={s.value} suffix={s.suffix} />
              <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: 'clamp(11px,1.3vw,14px)', paddingBottom: 24, paddingInline: 8 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Value props */}
        <div className="vp-grid">
          {valueProps.map((v, i) => <ValueCard key={v.num} prop={v} delay={i * 70} />)}
        </div>

        {/* Pull quote */}
        <div ref={quoteRef} className="fade-in" style={{ background: 'rgba(13,27,62,0.03)', border: '1px solid rgba(13,27,62,0.1)', borderLeft: '4px solid #F5C518', borderRadius: 12, padding: 'clamp(28px,4vw,48px) clamp(20px,4vw,56px)', textAlign: 'center', marginBottom: 48 }}>
          <blockquote style={{ fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: 'clamp(18px,3vw,32px)', color: '#0D1B3E', lineHeight: 1.5, fontStyle: 'italic', maxWidth: 800, margin: '0 auto' }}>
            "When your systems fail, production stops. When your HVAC underperforms, people suffer. Wavonex exists to make sure none of that happens."
          </blockquote>
        </div>

        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={WA.quote} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#F5C518', color: '#0D1B3E', padding: 'clamp(12px,2vw,16px) clamp(20px,3vw,36px)', borderRadius: 8, fontFamily: 'Barlow Condensed', fontWeight: 800, fontSize: 'clamp(16px,2vw,20px)', textDecoration: 'none' }}>
            <MessageCircle size={20} /> Get a Free Quote Today
          </a>
          <a href="tel:0790155393" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: '#0D1B3E', padding: 'clamp(12px,2vw,16px) clamp(20px,3vw,36px)', borderRadius: 8, border: '2px solid rgba(13,27,62,0.3)', fontFamily: 'Barlow Condensed', fontWeight: 800, fontSize: 'clamp(16px,2vw,20px)', textDecoration: 'none' }}>
            <Phone size={20} /> Call 0790 155 393
          </a>
        </div>
      </div>
    </section>
  )
}
