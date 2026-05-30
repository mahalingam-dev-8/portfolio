'use client'
import { motion } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'
import { education, certifications } from '@/data/education'

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div>
          <span className="font-mono text-xs text-primary">// education</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Education & Certifications</h2>
          <div className="mt-4 h-px w-12 bg-primary" />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2">
          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap size={16} className="text-primary" />
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Education</p>
            </div>
            <div className="space-y-4">
              {education.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="rounded-lg border border-border/50 bg-card/50 p-5 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
                >
                  <h3 className="font-semibold text-foreground">{item.institution}</h3>
                  <p className="mt-1 text-sm text-primary">{item.degree}</p>
                  <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                    <span>{item.period}</span>
                    <span className="font-medium">{item.scoreLabel}: {item.score}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Award size={16} className="text-primary" />
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Certifications</p>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="rounded-lg border border-border/50 bg-card/50 p-5 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
                >
                  <h3 className="font-semibold text-foreground leading-snug">{cert.title}</h3>
                  <p className="mt-1 text-sm text-primary">{cert.issuer}</p>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
