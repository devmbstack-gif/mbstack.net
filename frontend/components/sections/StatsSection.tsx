'use client'

import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { STATS } from '@/constants'

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const numberEls = section.querySelectorAll<HTMLElement>('[data-stat-value]')
    const counterObjs = Array.from(numberEls).map(() => ({ value: 0 }))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || hasAnimated) return
          setHasAnimated(true)
          numberEls.forEach((el, i) => {
            const target = STATS[i]?.value ?? 0
            gsap.to(counterObjs[i], {
              value: target,
              duration: 2,
              ease: 'power2.out',
              onUpdate: () => {
                el.textContent = `${Math.round(counterObjs[i].value)}+`
              },
            })
          })
        })
      },
      { threshold: 0.3, rootMargin: '0px 0px -50px 0px' }
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [hasAnimated])

  return (
    <div
      ref={sectionRef}
      className="border-t border-stone-200 bg-stone-50/50"
    >
      <div className="page-container max-w-5xl py-10 sm:py-14 md:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {STATS.map(({ value, label }) => (
            <div key={label} className="text-center px-1">
              <div
                data-stat-value
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand tabular-nums"
                aria-label={`${value}+ ${label}`}
              >
                0+
              </div>
              <p className="mt-1 text-xs sm:text-sm md:text-base text-stone-600 font-medium leading-snug">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
