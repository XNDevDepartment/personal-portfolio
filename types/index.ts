export interface Project {
  id: string
  title: string
  category: string
  summary: string
  highlights: string[]
  tags: string[]
  metric: string
  metricLabel: string
  color: string
}

export interface ExperienceEntry {
  role: string
  company: string
  period: string
  location: string
  description: string
  highlights: string[]
}

export interface SkillGroup {
  title: string
  icon: string
  skills: string[]
}

export interface Stat {
  value: number
  suffix: string
  label: string
}

export interface Award {
  placement: string
  title: string
  event: string
  year: string
}

export interface Language {
  name: string
  level: string
  proficiency: number
}

export interface NavLink {
  label: string
  href: string
}

export interface EnterpriseProject {
  id: string
  title: string
  type: string
  problem: string
  contribution: string
  outcome: string
  image: string
}
