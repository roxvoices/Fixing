import * as React from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'destructive'
}

const variantClasses: Record<string, string> = {
  default:     'bg-primary text-primary-foreground',
  secondary:   'bg-secondary text-secondary-foreground',
  outline:     'border border-input text-foreground bg-transparent',
  destructive: 'bg-destructive/10 text-destructive',
}

function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors',
        variantClasses[variant],
        className
      )}
      {...props}
    />
  )
}

export { Badge }
