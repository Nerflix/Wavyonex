import { useEffect, useRef, useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { WA } from '../utils/whatsapp'

const FULL_TEXT   = 'CONTACT US'
const TYPE_MS     = 110
const DELETE_MS   = 65
const PAUSE_TYPED = 1600   // pause after fully typed
const PAUSE_EMPTY = 500    // pause after fully deleted

// Sections whose background is light (only #products uses #F4F4F4)
const LIGHT_IDS = new Set(['products'])

export default function WhatsAppFloat() {
  const [display, setDisplay]   = useState('')
  const [isLight, setIsLight]   = useState(false)
  const timerRef                = useRef(null)
  const stateRef                = useRef({ index: 0, deleting: false })

  /* ── Typewriter loop ── */
  useEffect(() => {
    let alive = true

    const tick = () => {
      if (!alive) return
      const { index, deleting } = stateRef.current

      if (!deleting) {
        const next = index + 1
        setDisplay(FULL_TEXT.slice(0, next))
        stateRef.current.index = next

        if (next === FULL_TEXT.length) {
          stateRef.current.deleting = true
          timerRef.current = setTimeout(tick, PAUSE_TYPED)
        } else {
          timerRef.current = setTimeout(tick, TYPE_MS)
        }
      } else {
        const next = index - 1
        setDisplay(FULL_TEXT.slice(0, next))
        stateRef.current.index = next

        if (next === 0) {
          stateRef.current.deleting = false
          timerRef.current = setTimeout(tick, PAUSE_EMPTY)
        } else {
          timerRef.current = setTimeout(tick, DELETE_MS)
        }
      }
    }

    timerRef.current = setTimeout(tick, 800) // initial delay
    return () => { alive = false; clearTimeout(timerRef.current) }
  }, [])

  /* ── Detect light/dark section behind float ── */
  useEffect(() => {
    const check = () => {
      // Sample the Y coordinate ~120px above the screen bottom
      const sampleY = window.innerHeight - 140
      const sections = document.querySelectorAll('section[id]')
      for (const sec of sections) {
        const r = sec.getBoundingClientRect()
        if (r.top <= sampleY && r.bottom >= sampleY) {
          setIsLight(LIGHT_IDS.has(sec.id))
          return
        }
      }
    }

    check()
    window.addEventListener('scroll', check, { passive: true })
    return () => window.removeEventListener('scroll', check)
  }, [])

  return (
    <div className="wa-float">
      {/* ── Shake + pulse icon ── */}
      <a
        href={WA.general}
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp — free quote"
        style={{
          background: '#25D366',
          width: 56, height: 56,
          borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 22px rgba(37,211,102,0.55)',
          textDecoration: 'none',
          position: 'relative',
          animation: 'wa-shake 3s ease-in-out infinite',
          flexShrink: 0,
        }}
      >
        <MessageCircle size={26} color="#fff" fill="#fff" />
        {/* Pulse ring */}
        <span style={{
          position: 'absolute', inset: -5,
          borderRadius: '50%',
          border: '2px solid rgba(37,211,102,0.4)',
          animation: 'pulse-ring 2.2s infinite',
          pointerEvents: 'none',
        }} />
      </a>

      {/* ── Typewriter label ── */}
      <div style={{
        background: isLight ? 'rgba(13,27,62,0.82)' : 'rgba(0,0,0,0.52)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        color: '#fff',
        fontSize: 11,
        fontFamily: "'Barlow Condensed', monospace",
        fontWeight: 700,
        letterSpacing: 2,
        padding: '3px 10px',
        borderRadius: 20,
        minWidth: 84,
        textAlign: 'center',
        transition: 'background 0.35s ease',
        whiteSpace: 'nowrap',
        userSelect: 'none',
      }}>
        {display}
        <span style={{
          display: 'inline-block',
          width: 1.5,
          height: '0.85em',
          background: '#F5C518',
          marginLeft: 2,
          verticalAlign: 'middle',
          animation: 'tw-blink 0.75s step-end infinite',
        }} />
      </div>
    </div>
  )
}
