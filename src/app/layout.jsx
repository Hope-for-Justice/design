import localFont from 'next/font/local'
import clsx from 'clsx'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

const canela = localFont({
  src: '../fonts/Canela-Medium.woff2',
  variable: '--font-canela',
})

const fk = localFont({
  src: '../fonts/FKScreamerLegacy-Upright.woff2',
  variable: '--font-fk',
})

const apercu = localFont({
  src: [
    {
      path: '../fonts/apercu-regular-pro.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/apercu-italic-pro.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../fonts/apercu-bold-pro.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-apercu',
})

export const metadata = {
  title: {
    // template: '%s - Docs',
    default: 'Hope for Justice Design',
  },
  description: 'Hope for Justice brand guide.',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full antialiased',
        apercu.variable,
        canela.variable,
        fk.variable,
      )}
      suppressHydrationWarning
    >
      <body className="flex min-h-full bg-white">
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  )
}
