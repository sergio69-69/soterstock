import Image from 'next/image'

interface LogoProps {
  variant?: 'light' | 'dark'
  className?: string
}

export default function Logo({ variant = 'light', className = '' }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Image
        src="/logo.png"
        alt="SoterStock"
        width={44}
        height={44}
        className="w-11 h-11"
      />
      <span className={`font-heading font-semibold text-lg tracking-tight ${variant === 'light' ? 'text-white' : 'text-primary'}`}>
        SoterStock
      </span>
    </div>
  )
}
