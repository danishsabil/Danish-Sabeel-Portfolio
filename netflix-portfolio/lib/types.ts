export interface Metric {
  label: string
  value: string
}

export interface Episode {
  title: string
  thumb: string
  description: string
  metrics: Metric[]
}

export interface Link {
  label: string
  href: string
}

export interface Experience {
  slug: string
  title: string
  role: string
  period: string
  location: string
  poster: string
  backdrop: string
  logo: string
  summary: string
  skills: string[]
  links: Link[]
  episodes: Episode[]
}

export interface Owner {
  name: string
  tagline: string
  avatar: string
}

export interface PortfolioData {
  owner: Owner
  experiences: Experience[]
}
