'use client'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { GithubIcon } from '@/components/icons'
import { projects } from '@/data/projects'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div>
          <span className="font-mono text-xs text-primary">{'// projects'}</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Projects</h2>
          <div className="mt-4 h-px w-12 bg-primary" />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col rounded-xl border border-border/60 bg-card/80 overflow-hidden hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              {/* Terminal chrome */}
              <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border/60 bg-muted/30">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
                <span className="ml-3 font-mono text-xs text-muted-foreground/60">
                  ~/{project.name.toLowerCase().replace(/\s+/g, '-')}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6 gap-5">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{project.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <Badge
                      key={t}
                      variant="secondary"
                      className="font-mono text-xs rounded-md bg-muted/60 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
                <div className="mt-auto flex gap-3">
                  <Button size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={14} className="mr-1.5" />Live Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
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
