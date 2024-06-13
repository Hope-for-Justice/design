import { Callout } from '@/components/Callout'
import { Colours } from '@/components/Colours'
import { QuickLink, QuickLinks } from '@/components/QuickLinks'
import { TypeExamples } from '@/components/TypeExamples'
import { Button } from '@/components/Button'

const tags = {
  callout: {
    attributes: {
      title: { type: String },

      type: {
        type: String,
        default: 'note',
        matches: ['note', 'warning'],
        errorLevel: 'critical',
      },
    },
    render: Callout,
  },
  button: {
    attributes: {
      href: { type: String },
      className: { type: String },
      variant: {
        type: String,
        default: 'primary',
        matches: ['primary', 'secondary'],
      },
    },
    render: Button,
  },
  'type-examples': {
    selfClosing: true,
    attributes: {
      type: {
        type: String,
        default: 'canela',
        matches: ['canela', 'fk'],
      },
    },
    render: TypeExamples,
  },
  figure: {
    selfClosing: true,
    attributes: {
      src: { type: String },
      alt: { type: String },
      caption: { type: String },
    },
    render: ({ src, alt = '', caption }) => (
      <figure>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} />
        <figcaption>{caption}</figcaption>
      </figure>
    ),
  },
  'quick-links': {
    render: QuickLinks,
  },
  'quick-link': {
    selfClosing: true,
    render: QuickLink,
    attributes: {
      title: { type: String },
      description: { type: String },
      icon: { type: String },
      href: { type: String },
    },
  },
  colours: {
    render: Colours,
    selfClosing: true,
  },
}

export default tags
