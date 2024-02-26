'use client'
import { useEffect } from 'react'
import lcs from './Header.module.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function Header() {

  useEffect(() => {
    const showAnim = gsap.from(`.${lcs.header}`, {
      yPercent: -100,
      paused: true,
      duration: 0.2
    }).progress(1)

    ScrollTrigger.create({
      start: '50px top',
      end: 99999,
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse()
      }
    })
  }, [])

  return (
    <header className={lcs.header}>
      <div className={lcs.logo}>Header</div>
    </header>
  )
}