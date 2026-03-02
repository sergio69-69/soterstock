import Image from 'next/image'

interface LogoProps {
  variant?: 'light' | 'dark'
  className?: string
}

export default function Logo({ variant = 'light', className = '' }: LogoProps) {
  if (variant === 'light') {
    return (
      <div className={`flex items-center ${className}`}>
        <Image
          src="/logo-white.png"
          alt="SoterStock"
          width={180}
          height={48}
          className="h-10 w-auto object-contain"
          priority
        />
      </div>
    )
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Image
        src="/logo.png"
        alt="SoterStock"
        width={76}
        height={76}
        className="w-[76px] h-[76px] object-contain"
      />
      <span className="font-heading font-semibold text-lg tracking-tight text-primary">
        SoterStock
      </span>
    </div>
  )
}
