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
      'Built a clinical terminology service that corrects misheard drug names and assigns SNOMED CT, ICD-10 and RxNorm codes using hybrid search (vector, phonetic, full-text, fuzzy) over 470K+ medical terms, behind a circuit breaker so an outage never blocks note generation.',
      'Built per-clinic medicine matching that corrects misheard drug names in AI prescriptions using PostgreSQL fuzzy + phonetic search (Levenshtein, Double Metaphone), with dose-safety rules and zero extra LLM calls.',
      'Integrated ABHA, India’s national digital health ID (ABDM), including Scan & Share patient onboarding from the ABHA app.',
      'Built Cashfree subscription billing with UPI/eNACH autopay across 7 plans, HMAC-verified webhooks, idempotent processing and hourly reconciliation.',
      'Migrated production from AWS us-east-1 to ap-south-1 (Mumbai) across 3 environments with Terraform and ECS Fargate, pre-provisioning infrastructure so cutover completed in a 5-minute maintenance window.',
      'Built an ophthalmology vitals extraction system that turns images, PDFs and audio into structured records using GPT-4o Vision, Gemini and Whisper, with deduplication across 50+ vital types.',
      'Implemented Auth0 JWT authentication with granular RBAC, and replaced Auth0 default emails with branded SES invitations backed by expiring password-setup links.',
      'Secured delivery of patient images, documents and audio with CloudFront RSA-signed cookies, Origin Access Control and a tenant-scoped S3 hierarchy.',
      'Delivered medical reports over WhatsApp (Twilio) and email (SES) as generated PDFs behind JWT-secured, 24-hour expiring links with OTP fallback.',
      'Set up cross-cloud disaster recovery: scheduled Lambda pg_dump backups to S3, replicated to GCP Storage via EventBridge-triggered transfers.',
    ],
  },
  {
    company: 'ROX Hi-TECH',
    role: 'Integration Engineer (Full Stack)',
    period: 'June 2024 – Oct 2025',
    location: 'Chennai',
    highlights: [
      'Developed a full-stack HR platform (Java, Spring Boot, React) for TNEB, digitising leave, transfer and performance-review requests for 100,000+ employees.',
      'Replaced paper-based approvals with a configurable approval engine across 6+ request types, cutting turnaround by 70% and letting new workflows launch through configuration instead of code changes.',
      'Built Spring Boot REST APIs integrating SAP ERP via OData to sync employee master data, eliminating duplicate data entry.',
      'Implemented role-based access control across 3 user roles with Spring Security, enforcing approvals at the API layer.',
    ],
  },
]
