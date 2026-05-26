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
    <div ref={ref} className="fade-in" style={{ background: '#2E2E2E', borderRadius: 12, padding: 'clamp(20px,2.5vw,32px) clamp(16px,2vw,24px)', border: '1px solid rgba(255,255,255,0.06)', textAlign: 'center', transition: 'all 0.3s', cursor: 'default' }}
    onMouseEnter={e => { e.currentTarget.style.background = '#0D1B3E'; e.currentTarget.style.borderColor = 'rgba(245,197,24,0.4)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
    onMouseLeave={e => { e.currentTarget.style.background = '#2E2E2E'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }}>
        <div style={{ background: 'rgba(245,197,24,0.1)', borderRadius: 12, padding: 14, display: 'inline-flex' }}>
          <Icon size={28} color="#F5C518" strokeWidth={1.6} />
        </div>
      </div>
      <h4 style={{ fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: 'clamp(16px,1.8vw,20px)', color: '#fff', marginBottom: 6 }}>{sector.name}</h4>
      <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>{sector.desc}</p>
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
    <section id="sectors" className="section-pad" style={{ background: '#1a1a2e' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        <div ref={titleRef} className="fade-in" style={{ textAlign: 'center', marginBottom: 52 }}>
          <span className="section-label">Sectors We Serve</span>
          <h2 style={{ fontFamily: 'Barlow Condensed', fontWeight: 900, fontSize: 'clamp(32px,5vw,56px)', color: '#fff', textTransform: 'uppercase', lineHeight: 1 }}>
            Built for Every<br /><span style={{ color: '#F5C518' }}>Industry</span>
          </h2>
        </div>

        <div className="grid-4">
          {sectors.map((s, i) => <SectorCard key={s.name} sector={s} delay={i * 60} />)}
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 18, fontSize: 14 }}>Whatever your sector, we have the right engineering solution.</p>
          <a href={WA.engineer} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#F5C518', color: '#0D1B3E', padding: 'clamp(12px,2vw,14px) clamp(16px,3vw,28px)', borderRadius: 8, fontFamily: 'Barlow Condensed', fontWeight: 800, fontSize: 'clamp(14px,2vw,17px)', textDecoration: 'none', textAlign: 'center' }}>
            <MessageCircle size={18} /> Speak to an Engineer — 24-Hour Response Guaranteed
          </a>
        </div>
      </div>
    </section>
  )
}
