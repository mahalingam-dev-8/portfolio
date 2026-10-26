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
    description: 'RAG system for medical document Q&A. Hybrid search (pgvector + Postgres full-text) fused via Reciprocal Rank Fusion, cross-encoder re-ranking of the top-20 candidates down to the top-5, and grounded, cited Gemini answers streamed over SSE on a 512 MB instance using ONNX embeddings. RAGAS evaluation: 0.93 context recall, 0.86 faithfulness.',
    tech: ['Python', 'FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'pgvector', 'fastembed (ONNX)', 'Gemini', 'RAGAS', 'Tailwind', 'shadcn/ui'],
    liveUrl: 'https://medrag-frontend-lilac.vercel.app',
    githubUrl: 'https://github.com/mahalingam-dev-8/medrag-backend',
  },
  {
    name: 'Shoppy',
    description: 'E-commerce platform with a Spring Boot backend and Next.js 14 frontend. Spring Security + JWT with RBAC, Stripe with signature-verified, idempotent webhooks for exactly-once order creation, live product updates over WebSockets (STOMP), and 54 automated tests (JUnit 5, Mockito, Testcontainers) at ~80% coverage, run in CI on every push.',
    tech: ['Java', 'Spring Boot', 'Next.js 14', 'PostgreSQL', 'Stripe', 'AWS', 'WebSockets (STOMP)', 'JUnit 5', 'Testcontainers', 'GitHub Actions', 'MUI'],
    liveUrl: 'https://shopping-frontend-ebon.vercel.app',
    githubUrl: 'https://github.com/mahalingam-dev-8/shoppy-backend',
  },
]
