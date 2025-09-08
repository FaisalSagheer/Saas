'use client'
import React from 'react'

export default function HomeLayout({ children }) {

  return (
    <div>
      <section>
        {children}
      </section>
    </div>
  )
}