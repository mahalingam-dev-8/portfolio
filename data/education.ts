export type EducationItem = {
  institution: string
  degree: string
  period: string
  score: string
  scoreLabel: string
}

export type Certification = {
  title: string
  issuer: string
  description: string
}

export const education: EducationItem[] = [
  {
    institution: 'SASTRA Deemed University',
    degree: 'B.Tech — Computer Science and Business Systems',
    period: 'Aug 2020 – Jun 2024',
    score: '7.2 / 10',
    scoreLabel: 'CGPA',
  },
  {
    institution: 'Montfort School',
    degree: '12th Standard',
    period: 'Jun 2020',
    score: '8.86 / 10',
    scoreLabel: 'CGPA',
  },
  {
    institution: 'Montfort School',
    degree: '10th Standard',
    period: 'Jun 2018',
    score: '8.91 / 10',
    scoreLabel: 'CGPA',
  },
]

export const certifications: Certification[] = [
  {
    title: 'SAP Certified Development Associate – SAP Integration Suite',
    issuer: 'SAP',
    description: 'Validated skills in designing, developing, and managing integrations using SAP Integration Suite.',
  },
]
