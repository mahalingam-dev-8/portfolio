'use client'
import { motion } from 'framer-motion'
import { skills } from '@/data/skills'
import { Badge } from '@/components/ui/badge'

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div>
          <span className="font-mono text-xs text-primary">// skills</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Technical Skills</h2>
          <div className="mt-4 h-px w-12 bg-primary" />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="rounded-xl border border-border/50 bg-card/50 p-5 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 transition-all duration-200"
            >
              <p className="mb-4 font-mono text-xs font-semibold text-primary/80">
                <span className="opacity-50">// </span>{cat.category}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <Badge
                    key={item}
                    variant="secondary"
                    className="font-mono text-xs rounded-md font-normal bg-muted/60 text-foreground/70 hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
