'use client'
import { motion } from 'framer-motion'
import { MapPin, Calendar } from 'lucide-react'
import { experience } from '@/data/experience'

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div>
          <span className="font-mono text-xs text-primary">// experience</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Work Experience</h2>
          <div className="mt-4 h-px w-12 bg-primary" />
        </div>

        <div className="mt-16 space-y-8">
          {experience.map((item, i) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative flex gap-6"
            >
              {/* Timeline dot + line (desktop) */}
              <div className="hidden sm:flex flex-shrink-0 flex-col items-center pt-2">
                <div className="h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-primary/20" />
                {i < experience.length - 1 && (
                  <div className="mt-2 flex-1 w-px bg-gradient-to-b from-primary/40 to-transparent" />
                )}
              </div>

              {/* Card */}
              <div className="flex-1 rounded-xl border border-border/50 border-l-2 border-l-primary/50 bg-card/60 p-5 sm:p-6 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5 hover:border-l-primary transition-all duration-200">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground sm:text-xl">{item.company}</h3>
                    <p className="mt-0.5 text-sm font-medium text-primary sm:text-base">{item.role}</p>
                  </div>
                  <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground sm:mt-0 sm:text-right sm:flex-col sm:items-end">
                    <span className="flex items-center gap-1 font-mono"><Calendar size={11} />{item.period}</span>
                    <span className="flex items-center gap-1"><MapPin size={11} />{item.location}</span>
                  </div>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {item.highlights.map((h, hi) => (
                    <li key={hi} className="flex gap-2.5 text-sm text-muted-foreground leading-relaxed">
                      <span className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full bg-primary/60" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
