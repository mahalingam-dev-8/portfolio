'use client'
import { motion } from 'framer-motion'
import {
  SiTypescript, SiJavascript, SiPython,
  SiNestjs, SiNodedotjs, SiFastapi, SiDotnet, SiCelery, SiPrisma,
  SiPostgresql, SiRedis, SiDocker,
  SiGooglecloud, SiGithubactions,
  SiOpenai, SiReact, SiNextdotjs, SiTailwindcss, SiMui,
  SiAuth0, SiStripe, SiTwilio, SiSap, SiFfmpeg,
} from 'react-icons/si'
import type { IconType } from 'react-icons'
import { SectionLabel } from '@/components/SectionLabel'
import { skills } from '@/data/skills'
import { Badge } from '@/components/ui/badge'

const iconMap: Record<string, IconType> = {
  'TypeScript': SiTypescript,
  'JavaScript': SiJavascript,
  'Python': SiPython,
  'NestJS': SiNestjs,
  'Node.js': SiNodedotjs,
  'FastAPI': SiFastapi,
  'ASP.NET Core MVC': SiDotnet,
  'Celery': SiCelery,
  'Prisma ORM': SiPrisma,
  'PostgreSQL': SiPostgresql,
  'Redis': SiRedis,
  'Docker': SiDocker,
  'GCP': SiGooglecloud,
  'GitHub Actions': SiGithubactions,
  'OpenAI GPT-4o': SiOpenai,
  'React': SiReact,
  'Next.js': SiNextdotjs,
  'Tailwind CSS': SiTailwindcss,
  'Material UI': SiMui,
  'Auth0': SiAuth0,
  'Stripe': SiStripe,
  'Twilio (WhatsApp)': SiTwilio,
  'SAP Integration Suite': SiSap,
  'FFmpeg': SiFfmpeg,
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-5">
          <SectionLabel number="04" label="Skills" />
          <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
            Tools I <span className="text-gradient">Work With</span>
          </h2>
          <p className="max-w-xl text-sm text-muted-foreground">
            A mix of backend frameworks, cloud infrastructure, AI engineering, and the frontend
            and integration tools that ship production features end to end.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="glass rounded-2xl border border-border p-5 transition-all duration-200 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
            >
              <p className="mb-4 font-mono text-xs font-semibold text-primary/90">{cat.category}</p>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => {
                  const Icon = iconMap[item]
                  return (
                    <Badge
                      key={item}
                      variant="secondary"
                      className="flex items-center gap-1.5 rounded-md bg-muted/60 font-mono text-xs font-normal text-foreground/70 transition-colors hover:bg-primary/10 hover:text-primary"
                    >
                      {Icon && <Icon size={11} className="flex-shrink-0 opacity-80" />}
                      {item}
                    </Badge>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
