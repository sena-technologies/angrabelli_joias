'use client'

import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  className?: string
  showText?: boolean
  href?: string
}

export function Logo({ className = '', showText = true, href = '/' }: LogoProps) {
  const content = (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="relative h-8 w-8 flex-shrink-0">
        <Image
          src="/logo_oficial.webp"
          alt="Angrabelli Joias Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      {showText && (
        <span className="text-xl font-heading font-bold">Angrabelli</span>
      )}
    </div>
  )

  return <Link href={href}>{content}</Link>
}
