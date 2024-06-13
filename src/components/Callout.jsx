import clsx from 'clsx'

import { Icon } from '@/components/Icon'

const styles = {
  note: {
    container: 'bg-[#FFF5E0]',
    title: 'text-neutral-900',
    body: 'text-neutral-800 prose-a:text-sky-900 prose-code:text-sky-900',
  },
  warning: {
    container:
      'bg-[#FAE6E8] dark:bg-neutral-800/60 dark:ring-1 dark:ring-neutral-300/10',
    title: 'text-[#d21220]',
    body: 'text-[#d21220] [--tw-prose-underline:#F3C3C7] [--tw-prose-background: transparent] [--tw-prose-background:transparent] prose-a:text-neutral-900 prose-code:text-neutral-900',
  },
}

const icons = {
  note: (props) => <Icon icon="lightbulb" color="yellow" {...props} />,
  warning: (props) => <Icon icon="warning" color="red" {...props} />,
}

export function Callout({ title, children, type = 'note' }) {
  let IconComponent = icons[type]

  return (
    <div className={clsx('my-8 flex rounded-3xl p-6', styles[type].container)}>
      <IconComponent className="h-8 w-8 flex-none" />
      <div className="ml-4 flex-auto">
        <p className={clsx('m-0 font-display text-xl', styles[type].title)}>
          {title}
        </p>
        <div className={clsx('prose mt-2.5', styles[type].body)}>
          {children}
        </div>
      </div>
    </div>
  )
}
