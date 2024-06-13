import Link from 'next/link'
import clsx from 'clsx'

const variantStyles = {
  primary:
    'rounded-full bg-[#d21220] py-4 px-6 text-lg font-semibold text-white hover:bg-[#BA051D] focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d21220] active:bg-[#d21220]',
  secondary:
    'rounded-full bg-neutral-800 py-3 px-5 text-normal font-medium text-white hover:bg-neutral-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-neutral-400',
}

export function Button({ variant = 'primary', className, ...props }) {
  className = clsx(variantStyles[variant], className)

  return typeof props.href === 'undefined' ? (
    <button className={`${className} not-prose`} {...props} />
  ) : (
    <Link className={`${className} not-prose`} {...props} />
  )
}
