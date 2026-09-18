'use client'
import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons'
import { personal } from '@/data/personal'

const items = [
  { href: personal.github, label: 'GitHub', Icon: GithubIcon, external: true },
  { href: personal.linkedin, label: 'LinkedIn', Icon: LinkedinIcon, external: true },
  { href: `mailto:${personal.email}`, label: 'Email', Icon: Mail, external: false },
]

export function SocialRail() {
  return (
    <div className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-4 xl:flex">
      <div className="glass flex flex-col items-center gap-1 rounded-full border border-border p-2">
        {items.map(({ href, label, Icon, external }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            className="flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-white/10 hover:text-primary"
          >
            <Icon width={17} height={17} size={17} />
          </a>
        ))}
      </div>
      <div className="h-24 w-px bg-gradient-to-b from-border to-transparent" />
    </div>
  )
}
