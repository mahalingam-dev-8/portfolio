export type SkillCategory = {
  category: string
  items: string[]
}

export const skills: SkillCategory[] = [
  { category: 'Languages', items: ['Java', 'TypeScript', 'JavaScript', 'Python', 'SQL'] },
  { category: 'Backend', items: ['Node.js', 'NestJS', 'Spring Boot', 'FastAPI', 'REST APIs', 'WebSockets', 'SSE', 'Celery'] },
  { category: 'Databases', items: ['PostgreSQL', 'pgvector', 'Redis', 'Prisma ORM'] },
  { category: 'Cloud', items: ['AWS ECS Fargate', 'ALB', 'Lambda', 'S3', 'CloudFront', 'SES', 'VPC', 'Secrets Manager', 'GCP'] },
  { category: 'DevOps', items: ['Terraform', 'Docker', 'GitHub Actions', 'CI/CD'] },
  { category: 'AI Engineering', items: ['OpenAI', 'Gemini', 'Anthropic Claude', 'RAG', 'Cross-Encoder Re-ranking', 'RAGAS', 'fastembed'] },
  { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'Material UI'] },
  { category: 'Auth & Integrations', items: ['Auth0', 'JWT', 'RBAC', 'Stripe', 'Cashfree', 'Twilio (WhatsApp)', 'FFmpeg'] },
]
