import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const mouse   = useRef({ x: 0, y: 0 })
  const ring    = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = e => {
      mouse.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px'
        dotRef.current.style.top  = e.clientY + 'px'
      }
    }
    window.addEventListener('mousemove', onMove)

    let raf
    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px'
        ringRef.current.style.top  = ring.current.y + 'px'
      }
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)

    const onEnter = () => {
      if (!ringRef.current) return
      ringRef.current.style.width   = '54px'
      ringRef.current.style.height  = '54px'
      ringRef.current.style.opacity = '0.18'
    }
    const onLeave = () => {
      if (!ringRef.current) return
      ringRef.current.style.width   = '36px'
      ringRef.current.style.height  = '36px'
      ringRef.current.style.opacity = '0.35'
    }
    const els = document.querySelectorAll('a, button')
    els.forEach(el => { el.addEventListener('mouseenter', onEnter); el.addEventListener('mouseleave', onLeave) })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      els.forEach(el => { el.removeEventListener('mouseenter', onEnter); el.removeEventListener('mouseleave', onLeave) })
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999] w-2.5 h-2.5 bg-green-mid rounded-full -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[9998] rounded-full border-2 border-green-mid -translate-x-1/2 -translate-y-1/2 opacity-35 hidden md:block transition-[width,height,opacity] duration-300"
        style={{ width: 36, height: 36 }}
      />
    </>
  )
}