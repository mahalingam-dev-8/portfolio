'use client'
import { useState, useEffect } from 'react'
import { motion, type Variants } from 'framer-motion'
import { MapPin, Mail, ArrowDown, Download } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { GithubIcon, LinkedinIcon } from '@/components/icons'
import { personal } from '@/data/personal'

const TAGLINE = personal.tagline

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
}

function Typewriter({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    const delay = setTimeout(() => {
      const id = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(id)
          setDone(true)
        }
      }, 22)
      return () => clearInterval(id)
    }, 600)
    return () => clearTimeout(delay)
  }, [text])

  return (
    <span>
      {displayed}
      {!done && <span className="cursor-blink text-primary">▋</span>}
    </span>
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24 text-center"
    >
      {/* Dot grid background */}
      <div aria-hidden="true" className="terminal-grid pointer-events-none absolute inset-0 -z-10 opacity-40" />

      {/* Radial fade overlay so grid fades at edges */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,transparent_40%,hsl(var(--background))_100%)]"
      />

      {/* Green glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_40%_at_50%_-10%,hsl(142_71%_55%/0.12),transparent)]"
      />

      <motion.div
        className="flex max-w-3xl flex-col items-center gap-6"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Location + status */}
        <motion.div variants={fadeUp} className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
          <span className="text-primary">~/</span>
          <MapPin size={12} />
          <span>{personal.location}</span>
          <span className="text-border">·</span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            {personal.availability}
          </span>
        </motion.div>

        {/* Name */}
        <motion.div variants={fadeUp}>
          <h1 className="bg-gradient-to-br from-foreground via-foreground to-primary bg-clip-text text-transparent text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            {personal.name}
          </h1>
        </motion.div>

        {/* Typewriter tagline */}
        <motion.p
          variants={fadeUp}
          className="font-mono text-sm text-muted-foreground sm:text-base leading-relaxed max-w-xl"
        >
          <span className="text-primary">{'// '}</span>
          <Typewriter text={TAGLINE} />
        </motion.p>

        {/* About */}
        <motion.p variants={fadeUp} className="max-w-2xl text-sm text-muted-foreground leading-relaxed">
          {personal.about}
        </motion.p>

        {/* CTAs */}
        <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="#projects">
              View Projects <ArrowDown size={16} className="ml-2" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href={personal.resumeUrl} download target="_blank" rel="noopener noreferrer">
              <Download size={16} className="mr-2" /> Download Resume
            </a>
          </Button>
        </motion.div>

        {/* Social icons */}
        <motion.div variants={fadeUp} className="flex items-center gap-6">
          <a href={personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
            <GithubIcon width={20} height={20} />
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
            <LinkedinIcon width={20} height={20} />
          </a>
          <a href={"mailto:" + personal.email} aria-label="Email" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail size={20} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
