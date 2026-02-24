import Image from 'next/image'

interface LogoProps {
  variant?: 'light' | 'dark'
  className?: string
}

export default function Logo({ variant = 'light', className = '' }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Image
        src="/logo.png"
        alt="SoterStock"
        width={92}
        height={92}
        className="w-[92px] h-[92px] object-contain"
      />
      <span className={`font-heading font-semibold text-lg tracking-tight ${variant === 'light' ? 'text-white' : 'text-primary'}`}>
        SoterStock
      </span>
    </div>
  )
}
