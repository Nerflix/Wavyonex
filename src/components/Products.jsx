import { useEffect, useRef } from 'react'
import { MessageCircle } from 'lucide-react'
import { WA } from '../utils/whatsapp'

const products = [
  { name: 'Air Conditioning Units', desc: 'Split, cassette & VRF systems for all spaces', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&q=80' },
  { name: 'Dehumidifiers', desc: 'Industrial & commercial moisture control units', image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&q=80' },
  { name: 'Refrigeration Gases', desc: 'R22, R410A, R404A, R134A & more refrigerants', image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&q=80' },
  { name: 'Air Curtains', desc: 'Energy-saving air curtains for entry points', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80' },
  { name: 'Compressors', desc: 'Scroll, reciprocating & rotary compressors', image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=400&q=80' },
  { name: 'Capacitors & AC Spares', desc: 'Genuine replacement parts for all AC brands', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80' },
  { name: 'Cold Room Systems', desc: 'Panels, insulation & complete cold room kits', image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80' },
  { name: 'Commercial Fridges & Freezers', desc: 'Display chillers, upright & chest freezers', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80' },
  { name: 'Copper Fittings & Pipes', desc: 'High-grade copper for HVAC & refrigeration', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80' },
  { name: 'Armaflex Insulation', desc: 'Closed-cell foam insulation for pipe lines', image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80' },
  { name: 'Oil Heaters', desc: 'Efficient portable & fixed oil-filled heaters', image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&q=80' },
  { name: 'Ventilation Fans', desc: 'Axial, centrifugal & inline duct fans', image: 'https://images.pexels.com/photos/2310904/pexels-photo-2310904.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
  { name: 'Solar Panels', desc: 'Mono & polycrystalline PV modules', image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&q=80' },
  { name: 'Solar Inverters', desc: 'String, hybrid & off-grid solar inverters', image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&q=80' },
  { name: 'Battery Storage Systems', desc: 'Lithium & lead-acid battery banks for solar', image: 'https://images.unsplash.com/photo-1548268770-66184a21657e?w=400&q=80' },
]

const brands = ['LG', 'Midea', 'Daikin', 'Carrier', 'Hisense', 'Bosch', 'Haier', 'Bitzer', 'Hitachi', 'Samsung', 'Copeland', 'York', 'Ramptons', 'Westpoint']

function ProductCard({ product, delay }) {
  const ref = useRef(null)
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
    <div ref={ref} className="fade-in" style={{ background: '#2E2E2E', borderRadius: 10, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)', transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s' }}
    onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(245,197,24,0.4)'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.3)'; }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
    >
      <div style={{ height: 150, overflow: 'hidden' }}>
        <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
          onMouseEnter={e => e.target.style.transform = 'scale(1.07)'}
          onMouseLeave={e => e.target.style.transform = 'scale(1)'}
        />
      </div>
      <div style={{ padding: '14px 16px' }}>
        <h4 style={{ fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: 'clamp(15px,1.8vw,18px)', color: '#fff', marginBottom: 5 }}>{product.name}</h4>
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>{product.desc}</p>
      </div>
    </div>
  )
}

export default function Products() {
  const titleRef = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { titleRef.current.classList.add('visible'); obs.disconnect() }
    }, { threshold: 0.1 })
    obs.observe(titleRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="products" className="section-pad" style={{ background: '#F4F4F4' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        <div ref={titleRef} className="fade-in" style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{ display: 'inline-block', background: '#0D1B3E', color: '#F5C518', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', fontWeight: 700, padding: '4px 16px', borderRadius: 20, marginBottom: 16 }}>Our Products</div>
          <h2 style={{ fontFamily: 'Barlow Condensed', fontWeight: 900, fontSize: 'clamp(32px,5vw,56px)', color: '#0D1B3E', textTransform: 'uppercase', lineHeight: 1, marginBottom: 14 }}>
            Premium Equipment.<br />Trusted Brands.
          </h2>
          <p style={{ color: '#666', maxWidth: 520, margin: '0 auto', fontSize: 15, lineHeight: 1.6 }}>
            We supply and install only top-grade equipment from globally recognised manufacturers.
          </p>
        </div>

        <div className="grid-4">
          {products.map((p, i) => (
            <ProductCard key={p.name} product={p} delay={i * 50} />
          ))}
        </div>

        {/* Brands marquee */}
        <div style={{ marginTop: 64, textAlign: 'center' }}>
          <div style={{ color: '#999', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 20 }}>Brands We Supply &amp; Service</div>
          <div style={{ overflow: 'hidden', position: 'relative' }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 56, background: 'linear-gradient(to right, #F4F4F4, transparent)', zIndex: 1 }} />
            <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 56, background: 'linear-gradient(to left, #F4F4F4, transparent)', zIndex: 1 }} />
            <div style={{ display: 'flex', width: 'max-content' }} className="marquee-track">
              {[...brands, ...brands].map((b, i) => (
                <div key={i} style={{ padding: '9px 24px', margin: '0 6px', background: '#0D1B3E', borderRadius: 6, fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: 15, color: '#fff', letterSpacing: 1, whiteSpace: 'nowrap', flexShrink: 0 }}>{b}</div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <p style={{ color: '#777', marginBottom: 18, fontSize: 14 }}>Looking for a specific product? We'll source it for you.</p>
          <a href={WA.products} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#25D366', color: '#fff', padding: 'clamp(12px,2vw,14px) clamp(20px,3vw,32px)', borderRadius: 8, fontFamily: 'Barlow Condensed', fontWeight: 800, fontSize: 'clamp(15px,2vw,18px)', textDecoration: 'none' }}>
            <MessageCircle size={19} /> Chat on WhatsApp for Stock Enquiries
          </a>
        </div>
      </div>
    </section>
  )
}
