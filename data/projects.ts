export type Project = {
  name: string
  description: string
  tech: string[]
  liveUrl: string
  githubUrl: string
}

export const projects: Project[] = [
  {
    name: 'MedRAG Assistant',
    description: 'Production-grade RAG system for medical document Q&A. Hybrid retrieval (BM25 + pgvector semantic search) merged via Reciprocal Rank Fusion, cross-encoder re-ranking lifting precision from top-20 to top-5, multi-turn query rewriting, and SSE streaming. RAGAS evaluation: 0.93 context recall, 0.86 faithfulness.',
    tech: ['FastAPI', 'Python', 'React', 'TypeScript', 'PostgreSQL', 'pgvector', 'fastembed', 'Groq LLaMA 3.3 70B', 'RAGAS', 'Tailwind', 'shadcn/ui'],
    liveUrl: 'https://medrag-frontend-lilac.vercel.app',
    githubUrl: 'https://github.com/mahalingam-dev-8/medrag-backend',
  },
  {
    name: 'Shoppy',
    description: 'Production-grade e-commerce platform. Next.js 14 App Router + NestJS backend on AWS. JWT auth with HttpOnly cookies, RBAC, Stripe webhook-driven orders, S3 image uploads, Socket.io real-time updates, CloudFront edge caching.',
    tech: ['Next.js 14', 'NestJS', 'TypeScript', 'PostgreSQL', 'Prisma', 'Stripe', 'AWS', 'Socket.io', 'Tailwind', 'MUI'],
    liveUrl: 'https://shopping-frontend-ebon.vercel.app',
    githubUrl: 'https://github.com/mahalingam-dev-8/shopping-backend',
  },
]
