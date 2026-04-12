import {
  Smartphone,
  Laptop,
  Globe,
  AppWindow,
  Cloud,
  Gamepad2,
  Home,
  Mail,
  Globe2,
  Share2,
  ShieldAlert,
} from 'lucide-react'

export default function CategoryIcon({
  name,
  className,
}: {
  name: string
  className?: string
}) {
  switch (name) {
    case 'Smartphone':
      return <Smartphone className={className} />
    case 'Laptop':
      return <Laptop className={className} />
    case 'Globe':
      return <Globe className={className} />
    case 'Globe2':
      return <Globe2 className={className} />
    case 'AppWindow':
      return <AppWindow className={className} />
    case 'Cloud':
      return <Cloud className={className} />
    case 'Gamepad2':
      return <Gamepad2 className={className} />
    case 'Home':
      return <Home className={className} />
    case 'Mail':
      return <Mail className={className} />
    case 'Share2':
      return <Share2 className={className} />
    case 'ShieldAlert':
      return <ShieldAlert className={className} />
    default:
      return <Smartphone className={className} />
  }
}
