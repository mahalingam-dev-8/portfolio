'use client'
import { motion } from 'framer-motion'
import { MapPin, Calendar } from 'lucide-react'
import { SectionLabel } from '@/components/SectionLabel'
import { experience } from '@/data/experience'

const TECH_TERMS = [
  'WebSocket gateways', 'Redis Streams', 'Soniox STT', 'FFmpeg', 'speaker diarization',
  'GPT-4o Vision', 'Gemini 2.0 Flash', 'Whisper', 'OpenAI', 'Gemini', 'Anthropic',
  'LLM factory', 'Prisma ORM', 'NestJS EventEmitter',
  'Auth0', 'JWT', 'RBAC', 'DKIM/SPF/DMARC', 'SES',
  'Cashfree', 'Zoho Books', 'Celery', 'ElastiCache TLS', 'ElastiCache',
  'CloudFront', 'RSA-signed cookies', 'Secrets Manager', 'ACM',
  'ECS Fargate', 'GitHub Actions', 'ECR', 'EventBridge', 'Lambda',
  'SAP Integration Suite', 'SAP S/4HANA', 'OData APIs',
  'PostgreSQL', 'Redis', 'Twilio', 'PDFKit', 'Sharp',
  'S3', 'ALB', 'Route 53', 'GCP Storage Transfer Service',
  'ASP.NET Core 8', 'ASP.NET Core', 'Razor', 'AJAX',
]

function HighlightedText({ text }: { text: string }) {
  try {
    const sorted = [...TECH_TERMS].sort((a, b) => b.length - a.length)
    const escaped = sorted.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    const regex = new RegExp(`(${escaped.join('|')})`, 'g')
    const parts = text.split(regex)

    return (
      <>
        {parts.map((part, i) =>
          TECH_TERMS.includes(part) ? (
            <span key={i} className="font-medium text-primary/90">{part}</span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </>
    )
  } catch {
    return <span>{text}</span>
  }
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-5">
          <SectionLabel number="02" label="Experience" />
          <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
            Where I&apos;ve <span className="text-gradient">Built</span>
          </h2>
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
              {/* Timeline dot + line */}
              <div className="hidden sm:flex flex-shrink-0 flex-col items-center pt-2">
                <div className="h-3 w-3 rounded-full bg-gradient-to-br from-primary to-secondary ring-4 ring-primary/15" />
                {i < experience.length - 1 && (
                  <div className="mt-2 flex-1 w-px bg-gradient-to-b from-primary/40 via-secondary/20 to-transparent" />
                )}
              </div>

              {/* Card */}
              <div className="glass flex-1 rounded-2xl border border-border border-l-2 border-l-primary/50 p-5 sm:p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-l-primary hover:shadow-lg hover:shadow-primary/10">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground sm:text-xl">{item.company}</h3>
                    <p className="mt-0.5 text-sm font-medium text-primary sm:text-base">{item.role}</p>
                  </div>
                  <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground sm:mt-0 sm:flex-col sm:items-end">
                    <span className="flex items-center gap-1 font-mono"><Calendar size={11} />{item.period}</span>
                    <span className="flex items-center gap-1"><MapPin size={11} />{item.location}</span>
                  </div>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {item.highlights.map((h, hi) => (
                    <li key={hi} className="flex gap-2.5 text-sm text-muted-foreground leading-relaxed">
                      <span className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full bg-gradient-to-br from-primary to-secondary" />
                      <span><HighlightedText text={h} /></span>
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
