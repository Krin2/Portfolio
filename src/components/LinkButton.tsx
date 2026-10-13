import type { AnchorHTMLAttributes } from 'react'

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary'
}

const styles = {
  primary: 'bg-accent text-accent-text border-accent',
  secondary: 'bg-surface text-text border-border',
}

export default function LinkButton({
  variant = 'secondary',
  className = '',
  children,
  ...rest
}: LinkButtonProps) {
  return (
    <a
      className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 font-medium transition hover:-translate-y-0.5 hover:border-accent motion-reduce:transition-none ${styles[variant]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  )
}
