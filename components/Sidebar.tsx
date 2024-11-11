'use client'
import Logo from '@/assets/logo.svg'
import links from '@/utils/links'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <aside className='py-4 px-8 bg-muted h-full'>
      <Image src={Logo} alt='logo' className='mx-auto' priority />
      <div className='flex flex-col mt-20 gap-y-4'>
        {links.map((link) => {
          return (
            <Button
              asChild
              key={link.href}
              variant={pathname === link.href ? 'default' : 'link'}
            >
              <Link
                href={link.href}
                className='flex flex-row items-center justify-stretch gap-x-2 '
              >
                {link.icon}
                <span className=''>{link.label}</span>
              </Link>
            </Button>
          )
        })}
      </div>
    </aside>
  )
}

export default Sidebar
