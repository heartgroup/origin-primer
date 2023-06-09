import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'inline-flex justify-center rounded-md py-1 px-4 text-base font-semibold tracking-tight shadow-sm focus:outline-none',
  outline:
    'inline-flex justify-center rounded-md border py-[calc(theme(spacing.1)-1px)] px-[calc(theme(spacing.4)-1px)] text-base font-semibold tracking-tight focus:outline-none',
}

const variantStyles = {
  solid: {
    slate:
      'bg-zinc-900 text-white hover:bg-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 active:bg-zinc-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-zinc-900',
    red:
      'bg-red-900 text-white hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-900 active:bg-red-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-red-900',
    blue: 'bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-blue-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-blue-600',
    white:
      'bg-white text-red-800 hover:text-red-900 focus-visible:text-red-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-red-50 active:text-red-900/80 disabled:opacity-40 disabled:hover:text-red-600',
  },
  outline: {
    slate:
      'border-zinc-200 text-zinc-900 hover:border-zinc-300 hover:bg-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600 active:border-zinc-200 active:bg-zinc-50 active:text-zinc-900/70 disabled:opacity-40 disabled:hover:border-zinc-200 disabled:hover:bg-transparent',
    blue: 'border-blue-300 text-blue-600 hover:border-blue-400 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:text-blue-600/70 disabled:opacity-40 disabled:hover:border-blue-300 disabled:hover:bg-transparent',
    red: 'border-red-800 text-zinc-600 hover:border-red-700 hover:bg-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 active:text-zinc-600/70 disabled:opacity-40 disabled:hover:border-red-600 disabled:hover:bg-transparent',

  },
}

export function Button({
  variant = 'solid',
  color = 'slate',
  className,
  href,
  ...props
}) {
  className = clsx(
    baseStyles[variant],
    variantStyles[variant][color],
    className
  )

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  )
}
