export type ExperienceItem = {
  company: string
  role: string
  period: string
  location: string
  highlights: string[]
}

export const experience: ExperienceItem[] = [
  {
    company: 'Ekko Medical Solutions Pvt Ltd',
    role: 'Software Developer (Backend)',
    period: 'Oct 2025 – Present',
    location: 'Chennai',
    highlights: [
      'Cut AI clinical-note generation time by ~50% (≈50 s → ≈25 s) by routing transcript refinement to a lightweight LLM (16–35 s → 2–4 s) and generating secondary note sections asynchronously via an event-driven pipeline (NestJS).',
      'Built a horizontally scalable real-time transcription microservice (WebSockets, Redis, PostgreSQL) delivering sub-second live transcripts for sessions up to 5 hours, with automatic recovery on disconnect.',
      'Designed a provider-agnostic LLM layer across OpenAI, Gemini and Anthropic powering 15+ AI tasks, routing each task to the best-fit model with same-request failover to a backup provider.',
      'Built per-clinic medicine matching that corrects misheard drug names in AI prescriptions using PostgreSQL fuzzy + phonetic search (Levenshtein, Double Metaphone), with dose-safety rules and zero extra LLM calls.',
      'Built Cashfree subscription billing with UPI/eNACH autopay across 7 plans, HMAC-verified webhooks, idempotent processing and hourly reconciliation.',
      'Migrated production from AWS us-east-1 to ap-south-1 (Mumbai) across 3 environments with Terraform and ECS Fargate in a 1-hour window, with GitHub Actions CI/CD.',
      'Built an ophthalmology vitals extraction system that turns images, PDFs and audio into structured records using GPT-4o Vision, Gemini and Whisper, with deduplication across 50+ vital types.',
      'Implemented Auth0 JWT authentication with granular RBAC, and replaced Auth0 default emails with branded SES invitations backed by expiring password-setup links.',
      'Secured delivery of patient images, documents and audio with CloudFront RSA-signed cookies, Origin Access Control and a tenant-scoped S3 hierarchy.',
      'Delivered medical reports over WhatsApp (Twilio) and email (SES) as generated PDFs behind JWT-secured, 24-hour expiring links with OTP fallback.',
      'Set up cross-cloud disaster recovery: scheduled Lambda pg_dump backups to S3, replicated to GCP Storage via EventBridge-triggered transfers.',
    ],
  },
  {
    company: 'ROX Hi-TECH',
    role: 'Full Stack Developer',
    period: 'June 2024 – Oct 2025',
    location: 'Chennai',
    highlights: [
      'Built an end-to-end HR workflow platform serving 100,000+ users for leave, transfer and review requests.',
      'Designed a configurable approval engine across 6+ request types, letting new workflows launch without code changes.',
      'Integrated SAP ERP via OData APIs to sync HR master data, eliminating dual data entry.',
      'Implemented role-based access control (RBAC) across 3 user roles, enforced at the backend.',
    ],
  },
]
