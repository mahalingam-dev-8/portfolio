export type SkillCategory = {
  category: string
  items: string[]
}

export const skills: SkillCategory[] = [
  { category: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'C#', 'SQL', 'C/C++'] },
  { category: 'Backend', items: ['NestJS', 'Node.js', 'FastAPI', 'ASP.NET Core MVC', 'Celery', 'Prisma ORM', 'SQLAlchemy'] },
  { category: 'Databases & Caching', items: ['PostgreSQL', 'pgvector', 'Redis', 'Redis Streams', 'ElastiCache'] },
  { category: 'Cloud & DevOps', items: ['AWS Lambda', 'ECS Fargate', 'ECR', 'S3', 'SES', 'CloudFront', 'ALB', 'Route 53', 'ACM', 'Secrets Manager', 'EventBridge', 'GCP', 'Docker', 'GitHub Actions', 'CI/CD'] },
  { category: 'AI Engineering', items: ['OpenAI GPT-4o', 'Gemini 2.0 Flash', 'Anthropic Claude', 'Whisper', 'RAG', 'pgvector', 'BM25', 'Cross-Encoder Re-ranking', 'RAGAS', 'sentence-transformers', 'fastembed'] },
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Material UI'] },
  { category: 'Auth & Security', items: ['Auth0', 'JWT', 'RBAC', 'RSA-signed cookies', 'OAuth2'] },
  { category: 'Integrations', items: ['Twilio (WhatsApp)', 'Cashfree', 'Zoho Books', 'Stripe', 'SAP Integration Suite', 'PDFKit', 'Sharp', 'FFmpeg'] },
]
