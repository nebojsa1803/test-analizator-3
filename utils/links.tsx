import { FilePlus2, BookOpenText, Bolt, Archive } from 'lucide-react'
import React from 'react'

type NavLink = {
  href: string
  label: string
  icon: React.ReactNode
}

const links: NavLink[] = [
  {
    href: '/new-analysis/general-data',
    label: 'Нова анализа',
    icon: <FilePlus2 />,
  },
  {
    href: '/about',
    label: 'О програму',
    icon: <BookOpenText />,
  },
  {
    href: '/instruction',
    label: 'Упутство',
    icon: <Bolt />,
  },
  {
    href: '/archive',
    label: 'Архива',
    icon: <Archive />,
  },
]

export default links
