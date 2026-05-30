import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons'
import { personal } from '@/data/personal'

export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-10 px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="font-mono text-sm text-primary">~/mahalingam-r</p>
          <p className="mt-1 font-mono text-xs text-muted-foreground/60">
            built with Next.js & Tailwind CSS
          </p>
        </div>
        <div className="flex items-center gap-5">
          <a href={personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
            className="text-muted-foreground hover:text-primary transition-colors">
            <GithubIcon width={18} height={18} />
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
            className="text-muted-foreground hover:text-primary transition-colors">
            <LinkedinIcon width={18} height={18} />
          </a>
          <a href={"mailto:" + personal.email} aria-label="Email"
            className="text-muted-foreground hover:text-primary transition-colors">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
