'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { motion } from 'framer-motion'
import { Mail, Send, MapPin, ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons'
import { SectionLabel } from '@/components/SectionLabel'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { personal } from '@/data/personal'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})
type FormValues = z.infer<typeof schema>

const directLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/mahalingam-dev',
    href: personal.linkedin,
    external: true,
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'github.com/mahalingam-dev-8',
    href: personal.github,
    external: true,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: personal.location,
    href: null,
  },
]

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: data.name,
          email: data.email,
          message: data.message,
          subject: 'Portfolio Contact from ' + data.name,
        }),
      })
      if (res.ok) {
        toast.success("Message sent! I'll get back to you soon.")
        reset()
      } else {
        toast.error('Something went wrong. Please email me directly.')
      }
    } catch {
      toast.error('Something went wrong. Please email me directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-5">
          <SectionLabel number="06" label="Contact" />
          <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
            Let&apos;s <span className="text-gradient">Get in Touch</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Left panel — info */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div>
              <p className="text-muted-foreground leading-relaxed">
                Open to any software engineering role — backend, full-stack, AI, or platform engineering. Drop a message or reach out directly.
              </p>
              <p className="mt-3 text-sm text-muted-foreground/70">
                {personal.availability}
              </p>
            </div>

            <div className="space-y-3">
              {directLinks.map(({ icon: Icon, label, value, href, external }) => {
                const inner = (
                  <div className="glass flex items-center gap-4 rounded-xl border border-border px-4 py-3.5 group hover:border-primary/40 transition-all duration-200">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 text-primary">
                      <Icon width={16} height={16} size={16} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-muted-foreground/60 uppercase tracking-wide font-medium">{label}</p>
                      <p className="text-sm text-foreground truncate mt-0.5">{value}</p>
                    </div>
                    {external && (
                      <ArrowUpRight size={14} className="flex-shrink-0 text-muted-foreground/40 group-hover:text-primary transition-colors" />
                    )}
                  </div>
                )

                if (!href) return <div key={label}>{inner}</div>
                return (
                  <a
                    key={label}
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                  >
                    {inner}
                  </a>
                )
              })}
            </div>
          </motion.div>

          {/* Right panel — form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-2xl border border-border p-8">
              <h3 className="text-lg font-semibold mb-6">Send a message</h3>
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" {...register('name')} />
                    {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" {...register('email')} />
                    {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" rows={5} placeholder="What's on your mind?" {...register('message')} />
                  {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
                </div>
                <Button
                  type="submit"
                  className="w-full gap-2 bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90"
                  disabled={isSubmitting}
                >
                  <Send size={15} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
