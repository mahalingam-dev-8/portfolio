'use client'
import { useState, useEffect } from 'react'
import { motion, type Variants } from 'framer-motion'
import { ArrowDownRight, Download, Sparkles, Terminal, Zap, Cloud } from 'lucide-react'
import Link from 'next/link'
import { personal } from '@/data/personal'

const ROLES = personal.roles

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
}

function RoleTypewriter({ roles }: { roles: readonly string[] }) {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'deleting'>('typing')

  useEffect(() => {
    const current = roles[roleIndex]

    if (phase === 'typing') {
      if (displayed.length < current.length) {
        const id = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 55)
        return () => clearTimeout(id)
      }
      const id = setTimeout(() => setPhase('pausing'), 1600)
      return () => clearTimeout(id)
    }

    if (phase === 'pausing') {
      const id = setTimeout(() => setPhase('deleting'), 900)
      return () => clearTimeout(id)
    }

    if (displayed.length > 0) {
      const id = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 28)
      return () => clearTimeout(id)
    }
    setRoleIndex((roleIndex + 1) % roles.length)
    setPhase('typing')
  }, [displayed, phase, roleIndex, roles])

  return (
    <span>
      {displayed}
      <span className="cursor-blink">|</span>
    </span>
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-24 pt-36 lg:pt-32"
    >
      <div aria-hidden="true" className="dot-grid pointer-events-none absolute inset-0 -z-20 opacity-20" />
      <div
        aria-hidden="true"
        className="animate-float-slow pointer-events-none absolute -left-32 top-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-primary/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="animate-float pointer-events-none absolute -right-20 bottom-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-secondary/25 blur-[120px]"
      />

      <motion.div
        className="mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Left column */}
        <div className="flex flex-col items-start gap-7">
          <motion.div
            variants={fadeUp}
            className="glass flex items-center gap-2 rounded-full border border-border px-4 py-2 font-mono text-xs text-muted-foreground"
          >
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            </span>
            <span>{personal.availability}</span>
            <span className="hidden text-border sm:inline">·</span>
            <span className="hidden sm:inline">{personal.location}</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="block text-foreground">Backend &amp; AI</span>
            <span className="block text-foreground">
              Engineer
              <Sparkles className="ml-3 inline-block h-8 w-8 text-primary sm:h-10 sm:w-10" />
            </span>
            <span className="text-gradient block">Building Systems</span>
            <span className="block text-muted-foreground/40">That Scale.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="font-mono text-sm text-primary sm:text-base">
            <span className="mr-2 text-muted-foreground">{'>'}</span>
            <RoleTypewriter roles={ROLES} />
          </motion.p>

          <motion.p variants={fadeUp} className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {personal.about}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="glow-primary inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              View My Work <ArrowDownRight size={17} />
            </Link>
            <a
              href={personal.resumeUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="glass inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/50"
            >
              <Download size={17} /> Download Resume
            </a>
          </motion.div>
        </div>

        {/* Right column — abstract visual */}
        <motion.div variants={fadeUp} className="relative mx-auto hidden aspect-square w-full max-w-md lg:block">
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-[2px]"
          >
            <div className="h-full w-full rounded-full bg-background" />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl"
          />

          <div className="absolute inset-[2px] flex items-center justify-center overflow-hidden rounded-full">
            <div className="dot-grid absolute inset-0 opacity-20" />
            <div className="glass relative w-[72%] rounded-2xl border border-border p-4 font-mono text-[11px] leading-relaxed">
              <div className="mb-3 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-destructive/70" />
                <span className="h-2 w-2 rounded-full bg-accent/70" />
                <span className="h-2 w-2 rounded-full bg-primary/70" />
                <Terminal size={11} className="ml-2 text-muted-foreground/60" />
              </div>
              <p className="text-muted-foreground">
                <span className="text-secondary">const</span> <span className="text-primary">engineer</span> = {'{'}
              </p>
              <p className="pl-3 text-muted-foreground">stack: <span className="text-primary/90">&apos;NestJS · FastAPI&apos;</span>,</p>
              <p className="pl-3 text-muted-foreground">cloud: <span className="text-primary/90">&apos;AWS · Terraform&apos;</span>,</p>
              <p className="pl-3 text-muted-foreground">ai: <span className="text-primary/90">&apos;RAG · LLM pipelines&apos;</span>,</p>
              <p className="text-muted-foreground">{'}'}</p>
            </div>
          </div>

          {/* Floating badges */}
          <div className="glass animate-float absolute -left-4 top-16 rounded-2xl border border-border px-4 py-3">
            <p className="flex items-center gap-1.5 font-mono text-[10px] text-primary">
              <Zap size={11} /> Backend
            </p>
            <p className="mt-0.5 text-sm font-semibold">NestJS + FastAPI</p>
          </div>

          <div className="glass animate-float-slow absolute -right-4 bottom-20 rounded-2xl border border-border px-4 py-3">
            <p className="flex items-center gap-1.5 font-mono text-[10px] text-secondary">
              <Cloud size={11} /> Cloud
            </p>
            <p className="mt-0.5 text-sm font-semibold">AWS + Terraform</p>
          </div>

          <div className="glass absolute right-6 top-6 rounded-full border border-border px-4 py-2 text-xs font-medium">
            Production Grade
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">Scroll</span>
        <div className="h-10 w-px bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  )
}
