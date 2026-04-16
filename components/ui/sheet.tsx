'use client'
import * as React from 'react'
import { cn } from '@/lib/utils'
import { X } from 'lucide-react'

interface SheetContextValue {
  open: boolean
  setOpen: (v: boolean) => void
}
const SheetContext = React.createContext<SheetContextValue>({ open: false, setOpen: () => {} })

function Sheet({ children }: { children?: React.ReactNode }) {
  const [open, setOpen] = React.useState(false)
  return (
    <SheetContext.Provider value={{ open, setOpen }}>
      {children}
    </SheetContext.Provider>
  )
}

function SheetTrigger({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { setOpen } = React.useContext(SheetContext)
  return (
    <button
      onClick={() => setOpen(true)}
      className={cn('inline-flex items-center justify-center', className)}
      {...props}
    >
      {children}
    </button>
  )
}

interface SheetContentProps extends React.HTMLAttributes<HTMLDivElement> {
  side?: 'left' | 'right' | 'top' | 'bottom'
  showCloseButton?: boolean
}

function SheetContent({ side = 'right', showCloseButton = true, className, children, ...props }: SheetContentProps) {
  const { open, setOpen } = React.useContext(SheetContext)
  if (!open) return null

  const sideClasses = {
    right:  'inset-y-0 right-0 h-full w-3/4 max-w-sm border-l',
    left:   'inset-y-0 left-0 h-full w-3/4 max-w-sm border-r',
    top:    'inset-x-0 top-0 border-b',
    bottom: 'inset-x-0 bottom-0 border-t',
  }

  return (
    <div className="fixed inset-0 z-50">
      <div className="fixed inset-0 bg-black/40" onClick={() => setOpen(false)} />
      <div
        className={cn('fixed z-50 bg-background p-6 shadow-lg overflow-y-auto', sideClasses[side], className)}
        {...props}
      >
        {showCloseButton && (
          <button
            onClick={() => setOpen(false)}
            className="absolute top-3 right-3 p-1 rounded hover:bg-accent"
          >
            <X className="w-4 h-4" />
          </button>
        )}
        {children}
      </div>
    </div>
  )
}

function SheetClose({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { setOpen } = React.useContext(SheetContext)
  return <button onClick={() => setOpen(false)} {...props}>{children}</button>
}

export { Sheet, SheetTrigger, SheetContent, SheetClose }
