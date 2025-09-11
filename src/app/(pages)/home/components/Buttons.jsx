'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Buttons = () => {
  return (
   <div className="font-[font2] overflow-hidden flex justify-center items-center gap-4 pb-3">
          <Button variant="ghost" size="lg">
            <Link href="/work">Work</Link>
          </Button>
          <Button variant="ghost" size="lg">
            <Link href="/agency">Agency</Link>
          </Button>
        </div>
  )
}

export default Buttons
