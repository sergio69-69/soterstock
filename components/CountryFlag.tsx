import Image from 'next/image'
import { CountryCode } from '@/types/server'

interface CountryFlagProps {
  code: CountryCode
  size?: number
  className?: string
}

export default function CountryFlag({ code, size = 24, className = '' }: CountryFlagProps) {
  return (
    <Image
      src={`/flags/${code}.svg`}
      alt={code}
      width={size}
      height={size}
      className={`rounded-sm shadow-sm ${className}`}
    />
  )
}
