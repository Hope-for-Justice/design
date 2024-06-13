'use client'

import { usePathname } from 'next/navigation'

import { navigation } from '@/lib/navigation'

export function DocsHeader({ title }) {
  let pathname = usePathname()
  let section = navigation.find((section) =>
    section.links.find((link) => link.href === pathname),
  )

  if (!title && !section) {
    return null
  }
  // console.log(section)
  return (
    <header className="mb-5 space-y-1">
      {/* {section && (
        <p className="font-sans text-sm font-bold text-[#d21220]">
          {section.title}
        </p>
      )} */}
      {title && (
        <h1 className="text-normal text-balance font-sans font-bold text-[#d21220] dark:text-white">
          {title}
        </h1>
      )}
    </header>
  )
}
