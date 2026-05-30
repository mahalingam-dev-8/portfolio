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
    role: 'Software Developer — Backend, AI & Distributed Systems',
    period: 'Oct 2025 – Present',
    location: 'Chennai',
    highlights: [
      'Architected real-time medical transcription pipeline using WebSocket gateways (Soniox STT), Redis Streams with consumer groups for exactly-once processing, and background workers with configurable flush triggers for incremental persistence. Added batch audio processing with FFmpeg and speaker diarization.',
      'Designed provider-agnostic LLM factory with database-seeded primary/fallback configuration per tenant — supporting OpenAI, Gemini, and Anthropic models with automatic failover. Built clinical extraction pipelines via Prisma ORM with transactional bulk upserts.',
      'Engineered ophthalmology vitals extraction system supporting images, PDFs, and audio — GPT-4o Vision, Gemini 2.0 Flash, Whisper. Sharp compression, parallel processing, smart deduplication across 50+ vital types, event-driven non-blocking S3 uploads.',
      'Implemented Auth0 JWT authentication with granular RBAC (role + direct permission aggregation); replaced Auth0 default emails with custom SES-branded invitations backed by Management API password-change tickets (48-hour TTL) and DKIM/SPF/DMARC authentication.',
      'Built subscription billing system integrating Cashfree (webhooks, reconciliation) with Luxon proration engine, 18% GST, Zoho Books API, and Celery + Redis (ElastiCache TLS) workers for license lifecycle management.',
      'Implemented CloudFront CDN with RSA-signed cookies (24-hour expiry), Origin Access Control, and tenant-scoped S3 hierarchy for secure delivery of patient images, documents, and audio — using Secrets Manager and ACM wildcard SSL.',
      'Delivered secure medical report distribution via WhatsApp (Twilio) and Email (SES) with PDFKit PDF generation, encrypted S3 storage, JWT-secured 24-hour expiring links, OTP fallback, and DKIM/SPF/DMARC authentication.',
      'Deployed on ECS Fargate behind ALB; CI/CD via GitHub Actions to ECR with zero-downtime rollouts. Cross-cloud DR via Lambda pg_dump to S3 to GCP Storage Transfer Service (asia-south1) with EventBridge cron.',
    ],
  },
  {
    company: 'ROX Hi-TECH',
    role: 'Full Stack Developer',
    period: 'June 2024 – Oct 2025',
    location: 'Chennai',
    highlights: [
      'Built SAP integrations using SAP Integration Suite — designed iFlows, managed APIs, integrated SAP S/4HANA with internal applications. Earned SAP Certified Development Associate certification.',
      'Developed full-stack HR data management application using ASP.NET Core 8 (MVC) + Razor + PostgreSQL — file upload forms, request-tracking workflow with auto-generated request numbers, and admin approve/reject functionality.',
      'Integrated SAP via OData APIs to fetch HR master data (payroll areas, personnel areas, gender data) into ASP.NET Core backend services, surfaced into MVC views.',
      'Built admin dashboard module enabling master data management — infotype creation, role-based admin assignment, and end-to-end request approval/rejection workflow.',
      'Used AJAX with jQuery for asynchronous POST requests from Razor views to MVC controller actions, enabling seamless form submissions without full page reloads.',
    ],
  },
]
