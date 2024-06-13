import { Fragment } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { Button } from '@/components/Button'
import { HeroBackground } from '@/components/HeroBackground'
import blurCyanImage from '@/images/blur-cyan.png'
import freedomWall from '@/images/hug-image.jpg'
import Vimeo from '@u-wave/react-vimeo'

export function Hero() {
  return (
    <div className="overflow-hidden bg-[#212322] dark:-mb-32 dark:mt-[-4.75rem] dark:pb-32 dark:pt-[4.75rem]">
      <div className="pb-16 pt-14 sm:px-2 lg:relative lg:px-0 lg:pb-20 lg:pt-16">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 lg:max-w-8xl lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12">
          <div className="relative z-10 md:text-center lg:text-left">
            <Image
              className="absolute bottom-full right-full -mb-56 -mr-72 opacity-50"
              src={blurCyanImage}
              alt=""
              width={860}
              height={500}
              unoptimized
              priority
            />
            <div className="relative">
              <h1 className="inline bg-gradient-to-r from-[#fcf4f5] to-white bg-clip-text font-fk text-8xl uppercase tracking-normal text-transparent">
                Our Brand
              </h1>
              <p className="text-white-200 mt-3 text-2xl text-gray-200">
                Learn how to use the Hope for Justice brand.
              </p>
              <div className="mt-8 flex gap-4 md:justify-center lg:justify-start">
                <Button href="/">Download logo assets</Button>
                {/* <Button href="/" variant="secondary">
                  Secondary button
                </Button> */}
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <Vimeo
              video="957607096"
              width="auto"
              height="auto"
              className="aspect-video w-full overflow-hidden rounded-xl bg-neutral-600 [&>iframe]:h-full [&>iframe]:w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
