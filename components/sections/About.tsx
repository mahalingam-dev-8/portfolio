'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { SectionLabel } from '@/components/SectionLabel'
import { personal } from '@/data/personal'

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto grid max-w-6xl items-start gap-14 lg:grid-cols-2">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-7"
        >
          <SectionLabel number="01" label="About Me" />

          <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
            <span className="block">Building</span>
            <span className="text-gradient">systems</span> that
            <span className="block">scale quietly.</span>
          </h2>

          <div className="flex flex-col gap-4">
            {personal.aboutParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={personal.resumeUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="glow-primary inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Download size={17} /> Download Resume
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/50"
            >
              Let&apos;s Talk <ArrowRight size={17} />
            </a>
          </div>
        </motion.div>

        {/* Right — stats + why hire me */}
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-5">
            {personal.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="glass rounded-2xl border border-border p-6 transition-colors hover:border-primary/40"
              >
                <p className="font-mono text-xs text-primary">0{i + 1}</p>
                <p className="mt-6 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">{stat.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="glass rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-secondary/5 p-6"
          >
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Why Hire Me</p>
            <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-[16rem] font-display text-xl font-extrabold leading-tight tracking-tight">
                {personal.whyHireMe.statement}
              </p>
              <div className="flex flex-wrap gap-2 sm:max-w-[14rem] sm:justify-end">
                {personal.whyHireMe.pills.map((pill) => (
                  <span
                    key={pill}
                    className="rounded-md bg-white/5 px-2.5 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
