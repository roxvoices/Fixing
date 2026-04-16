'use client'
import * as React from 'react'
import { cn } from '@/lib/utils'

interface TabsContextValue {
  value: string
  onValueChange: (v: string) => void
}
const TabsContext = React.createContext<TabsContextValue>({ value: '', onValueChange: () => {} })

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: string
  value?: string
  onValueChange?: (v: string) => void
}
function Tabs({ defaultValue = '', value, onValueChange, className, ...props }: TabsProps) {
  const [internal, setInternal] = React.useState(defaultValue)
  const current = value ?? internal
  const set = onValueChange ?? setInternal
  return (
    <TabsContext.Provider value={{ value: current, onValueChange: set }}>
      <div className={cn('flex flex-col gap-2', className)} {...props} />
    </TabsContext.Provider>
  )
}

function TabsList({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('inline-flex items-center justify-center rounded-lg bg-muted p-1', className)}
      {...props}
    />
  )
}

interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
}
function TabsTrigger({ value, className, ...props }: TabsTriggerProps) {
  const { value: current, onValueChange } = React.useContext(TabsContext)
  const active = current === value
  return (
    <button
      onClick={() => onValueChange(value)}
      className={cn(
        'inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium transition-all',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        'disabled:pointer-events-none disabled:opacity-50',
        active
          ? 'bg-background text-foreground shadow-sm'
          : 'text-muted-foreground hover:text-foreground',
        className
      )}
      {...props}
    />
  )
}

interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}
function TabsContent({ value, className, ...props }: TabsContentProps) {
  const { value: current } = React.useContext(TabsContext)
  if (current !== value) return null
  return <div className={cn('mt-2', className)} {...props} />
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
