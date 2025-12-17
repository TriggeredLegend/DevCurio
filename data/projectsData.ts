interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'PteroCore',
    description: `We designed PteroCore to be premium, budget-friendly, and suitable for server owners, tech-savvy individuals, and businesses.`,
    imgSrc: '/static/images/pterocore.png',
    href: 'https://pterocore.space/',
  },
]

export default projectsData
