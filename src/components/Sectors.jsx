import { useEffect, useRef } from 'react'
import { Home, Building2, Factory, Hotel, HeartPulse, ShoppingCart, GraduationCap, UtensilsCrossed, MessageCircle } from 'lucide-react'
import { WA } from '../utils/whatsapp'

const sectors = [
  { name: 'Residential', desc: 'Home AC, solar & refrigeration systems', icon: Home },
  { name: 'Commercial', desc: 'Office buildings, malls & business parks', icon: Building2 },
  { name: 'Industrial', desc: 'Factories, warehouses & process cooling', icon: Factory },
  { name: 'Hospitality', desc: 'Hotels, lodges & hospitality facilities', icon: Hotel },
  { name: 'Healthcare', desc: 'Hospitals, clinics & pharma cold chains', icon: HeartPulse },
  { name: 'Retail', desc: 'Supermarkets, stores & display cooling', icon: ShoppingCart },
  { name: 'Institutions', desc: 'Schools, universities & government buildings', icon: GraduationCap },
  { name: 'Food & Beverage', desc: 'Restaurants, bakeries & F&B processing', icon: UtensilsCrossed },
]

function SectorCard({ sector, delay }) {
  const ref = useRef(null)
  const Icon = sector.icon

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setTimeout(() => { if (ref.current) ref.current.classList.add('visible') }, delay)
        obs.disconnect()
      }
    }, { threshold: 0.08 })
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [delay])

  return (
    <div ref={ref} className="fade-in" style={{ background: '#fff', borderRadius: 12, padding: 'clamp(20px,2.5vw,32px) clamp(16px,2vw,24px)', border: '1px solid rgba(13,27,62,0.08)', textAlign: 'center', transition: 'all 0.3s', cursor: 'default', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
    onMouseEnter={e => {
      e.currentTarget.style.background = '#0D1B3E';
      e.currentTarget.style.borderColor = 'rgba(245,197,24,0.4)';
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.querySelector('.sector-name').style.color = '#fff';
      e.currentTarget.querySelector('.sector-desc').style.color = 'rgba(255,255,255,0.6)';
      const ib = e.currentTarget.querySelector('.sector-icon-bg');
      ib.style.background = 'rgba(245,197,24,0.18)';
      ib.style.color = '#F5C518';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.background = '#fff';
      e.currentTarget.style.borderColor = 'rgba(13,27,62,0.08)';
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.querySelector('.sector-name').style.color = '#0D1B3E';
      e.currentTarget.querySelector('.sector-desc').style.color = '#777';
      const ib = e.currentTarget.querySelector('.sector-icon-bg');
      ib.style.background = 'rgba(13,27,62,0.08)';
      ib.style.color = '#0D1B3E';
    }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }}>
        <div className="sector-icon-bg" style={{ background: 'rgba(13,27,62,0.08)', borderRadius: 12, padding: 14, display: 'inline-flex', color: '#0D1B3E', transition: 'background 0.3s, color 0.3s' }}>
          <Icon size={28} strokeWidth={1.6} />
        </div>
      </div>
      <h4 className="sector-name" style={{ fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: 'clamp(16px,1.8vw,20px)', color: '#0D1B3E', marginBottom: 6, transition: 'color 0.3s' }}>{sector.name}</h4>
      <p className="sector-desc" style={{ fontSize: 12, color: '#777', lineHeight: 1.5, transition: 'color 0.3s' }}>{sector.desc}</p>
    </div>
  )
}

export default function Sectors() {
  const titleRef = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { titleRef.current.classList.add('visible'); obs.disconnect() }
    }, { threshold: 0.1 })
    obs.observe(titleRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="sectors" className="section-pad" style={{ background: '#F4F4F4' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        <div ref={titleRef} className="fade-in" style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{ display: 'inline-block', background: '#0D1B3E', color: '#F5C518', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', fontWeight: 700, padding: '4px 16px', borderRadius: 20, marginBottom: 16 }}>Sectors We Serve</div>
          <h2 style={{ fontFamily: 'Barlow Condensed', fontWeight: 900, fontSize: 'clamp(32px,5vw,56px)', color: '#0D1B3E', textTransform: 'uppercase', lineHeight: 1 }}>
            Built for Every<br /><span style={{ color: '#F5C518' }}>Industry</span>
          </h2>
        </div>

        <div className="grid-4">
          {sectors.map((s, i) => <SectorCard key={s.name} sector={s} delay={i * 60} />)}
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <p style={{ color: '#666', marginBottom: 18, fontSize: 14 }}>Whatever your sector, we have the right engineering solution.</p>
          <a href={WA.engineer} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#F5C518', color: '#0D1B3E', padding: 'clamp(12px,2vw,14px) clamp(16px,3vw,28px)', borderRadius: 8, fontFamily: 'Barlow Condensed', fontWeight: 800, fontSize: 'clamp(14px,2vw,17px)', textDecoration: 'none', textAlign: 'center' }}>
            <MessageCircle size={18} /> Speak to an Engineer — 24-Hour Response Guaranteed
          </a>
        </div>
      </div>
    </section>
  )
}
