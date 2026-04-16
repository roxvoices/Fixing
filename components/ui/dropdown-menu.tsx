'use client'
import * as React from 'react'
import { cn } from '@/lib/utils'

interface DropdownMenuProps { children?: React.ReactNode }
interface DropdownContextValue { open: boolean; setOpen: (v: boolean) => void }
const DropdownContext = React.createContext<DropdownContextValue>({ open: false, setOpen: () => {} })

function DropdownMenu({ children }: DropdownMenuProps) {
  const [open, setOpen] = React.useState(false)
  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      <div className="relative inline-block">{children}</div>
    </DropdownContext.Provider>
  )
}

function DropdownMenuTrigger({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { setOpen, open } = React.useContext(DropdownContext)
  return <button onClick={() => setOpen(!open)} {...props}>{children}</button>
}

function DropdownMenuContent({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { open, setOpen } = React.useContext(DropdownContext)
  if (!open) return null
  return (
    <>
      <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
      <div
        className={cn(
          'absolute right-0 z-50 mt-1 min-w-32 rounded-lg border bg-popover p-1 shadow-md',
          className
        )}
        {...props}
      >
        {children}
      </div>
    </>
  )
}

function DropdownMenuItem({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        'flex w-full items-center rounded-md px-2 py-1.5 text-sm hover:bg-accent cursor-pointer',
        className
      )}
      {...props}
    />
  )
}

export { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem }
