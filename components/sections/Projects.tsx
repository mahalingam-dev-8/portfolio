'use client'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { GithubIcon } from '@/components/icons'
import { SectionLabel } from '@/components/SectionLabel'
import { projects } from '@/data/projects'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-5">
          <SectionLabel number="03" label="Selected Work" />
          <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
            Things I&apos;ve <span className="text-gradient">Shipped</span>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass group flex flex-col overflow-hidden rounded-2xl border border-border transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
            >
              {/* Terminal chrome */}
              <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
                <span className="ml-3 font-mono text-xs text-muted-foreground/60">
                  ~/{project.name.toLowerCase().replace(/\s+/g, '-')}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col gap-5 p-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{project.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <Badge
                      key={t}
                      variant="secondary"
                      className="rounded-md bg-muted/60 font-mono text-xs text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
                <div className="mt-auto flex gap-3">
                  <Button
                    size="sm"
                    asChild
                    className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90"
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={14} className="mr-1.5" />Live Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild className="border-border">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={project.githubUrl === '#' ? 'Coming soon' : undefined}
                    >
                      <GithubIcon width={14} height={14} className="mr-1.5" />GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
