import { useState, useEffect, useRef } from 'react'
import { Wind, Thermometer, Sun, ChevronDown, ChevronUp, MessageCircle, Phone } from 'lucide-react'
import { WA } from '../utils/whatsapp'

const services = [
  {
    id: 'hvac',
    name: 'HVAC Systems',
    image: 'https://media.istockphoto.com/id/2202510491/photo/engineers-are-checking-the-hot-coil-system-of-the-rooftop-air-conditioner-for-green-energy.jpg?s=612x612&w=0&k=20&c=BybDlj5GrzDk4S9LgW5oddpsSbbfIoBgFTCMqgZJ9E8=',
    description: 'From split units to full central plant systems — we design, supply, install, and maintain HVAC infrastructure that delivers consistent climate control. Residential, commercial, and industrial.',
    subServices: ['Air Conditioning', 'Ventilation', 'Ducting', 'BMS Integration', 'Energy Audits', 'PPM Contracts'],
    icon: <Wind size={26} color="#F5C518" strokeWidth={1.8} />,
    waLink: WA.hvac,
  },
  {
    id: 'refrigeration',
    name: 'Refrigeration Solutions',
    image: 'https://t4.ftcdn.net/jpg/03/30/86/05/240_F_330860566_NwetZ4EOspGszt93MtvCi5zB61gJFnqT.jpg',
    description: 'Cold rooms, blast freezers, display refrigeration, and industrial chillers — built to exact temperature specifications. Our cold chain solutions keep your product safe and your business compliant.',
    subServices: ['Cold Room Construction', 'Commercial Refrigeration', 'Industrial Cooling', 'Temperature Monitoring', 'System Upgrades'],
    icon: <Thermometer size={26} color="#F5C518" strokeWidth={1.8} />,
    waLink: WA.refrigeration,
  },
  {
    id: 'solar',
    name: 'Solar Energy',
    image: 'https://media.istockphoto.com/id/1546822778/photo/amount-of-energy-storage-systems-or-battery-container-units-with-solar-and-turbine-farm.jpg?s=612x612&w=0&k=20&c=hl27dCbAF5kTXBa7DWTZsY6PJE1IDzyZH2V2l1WvbmQ=',
    description: "Kenya's sun is your greatest untapped asset. We design and install grid-tied, off-grid, and hybrid solar PV systems that cut your energy costs and future-proof your operations.",
    subServices: ['Solar PV Installation', 'Battery Storage', 'Solar Water Heating', 'Commercial Solar', 'Solar Maintenance'],
    icon: <Sun size={26} color="#F5C518" strokeWidth={1.8} />,
    waLink: WA.solar,
  },
]

function ServiceCard({ service }) {
  const [expanded, setExpanded] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { ref.current.classList.add('visible'); obs.disconnect() }
    }, { threshold: 0.12 })
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="fade-in" style={{ background: '#2E2E2E', borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(245,197,24,0.1)', transition: 'border-color 0.3s, transform 0.3s', display: 'flex', flexDirection: 'column' }}
    onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(245,197,24,0.4)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(245,197,24,0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      <div style={{ position: 'relative', height: 200, overflow: 'hidden', flexShrink: 0 }}>
        <img src={service.image} alt={service.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(46,46,46,0.9) 0%, transparent 55%)' }} />
        <div style={{ position: 'absolute', top: 14, left: 14, background: 'rgba(13,27,62,0.85)', borderRadius: 8, padding: '9px 11px' }}>
          {service.icon}
        </div>
      </div>

      <div style={{ padding: 'clamp(18px,2vw,28px)', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ fontFamily: 'Barlow Condensed', fontWeight: 800, fontSize: 'clamp(22px,2.5vw,28px)', color: '#fff', marginBottom: 10, textTransform: 'uppercase' }}>
          {service.name}
        </h3>
        <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, fontSize: 14, marginBottom: 18, flex: 1 }}>
          {service.description}
        </p>

        {expanded && (
          <div style={{ marginBottom: 18 }}>
            <div style={{ fontSize: 10, color: '#F5C518', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 10, fontWeight: 700 }}>Sub-Services</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
              {service.subServices.map(s => (
                <span key={s} style={{ background: 'rgba(245,197,24,0.1)', border: '1px solid rgba(245,197,24,0.3)', color: '#F5C518', padding: '3px 11px', borderRadius: 20, fontSize: 12, fontWeight: 500 }}>{s}</span>
              ))}
            </div>
          </div>
        )}

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <button onClick={() => setExpanded(!expanded)} style={{ flex: '1 1 120px', background: 'none', border: '1px solid #F5C518', color: '#F5C518', padding: '9px 16px', borderRadius: 6, fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: 14, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, transition: 'background 0.2s, color 0.2s' }}
          onMouseEnter={e => { e.currentTarget.style.background = '#F5C518'; e.currentTarget.style.color = '#0D1B3E'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = '#F5C518'; }}
          >
            {expanded ? <><ChevronUp size={13} /> Show Less</> : <><ChevronDown size={13} /> Learn More</>}
          </button>
          <a href={service.waLink} target="_blank" rel="noopener noreferrer" style={{ flex: '1 1 120px', background: '#25D366', color: '#fff', padding: '9px 16px', borderRadius: 6, fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: 14, textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
            <MessageCircle size={14} /> Get a Quote
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { ref.current.classList.add('visible'); obs.disconnect() }
    }, { threshold: 0.1 })
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="services" className="section-pad" style={{ background: '#0D1B3E' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div ref={ref} className="fade-in" style={{ textAlign: 'center', marginBottom: 52 }}>
          <span className="section-label">What We Do</span>
          <h2 style={{ fontFamily: 'Barlow Condensed', fontWeight: 900, fontSize: 'clamp(32px,5vw,56px)', color: '#fff', textTransform: 'uppercase', lineHeight: 1 }}>
            Engineering Solutions<br /><span style={{ color: '#F5C518' }}>Built to Last</span>
          </h2>
        </div>

        <div className="grid-3">
          {services.map(s => <ServiceCard key={s.id} service={s} />)}
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 18, fontSize: 14 }}>Not sure which service you need? Speak to an engineer now.</p>
          <a href="tel:0790155393" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#F5C518', color: '#0D1B3E', padding: 'clamp(12px,2vw,14px) clamp(20px,3vw,32px)', borderRadius: 8, fontFamily: 'Barlow Condensed', fontWeight: 800, fontSize: 'clamp(15px,2vw,18px)', textDecoration: 'none' }}>
            <Phone size={17} strokeWidth={2.5} /> Speak to an Engineer — 0790 155 393
          </a>
        </div>
      </div>
    </section>
  )
}
