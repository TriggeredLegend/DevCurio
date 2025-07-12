interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'PteroCore',
    description: `PteroCore is an AI addon for Pterodactyl that lets users manage Minecraft servers using simple text commands—no tech skills needed. Fast, secure, and effortless.`,
    imgSrc: '/static/images/pterocore.png',
    href: 'https://www.devcurio.com/projects',
  },
  {
    title: 'CurioHost',
    description: `CurioHost is a fast and reliable hosting platform built for developers and creators. From game servers to web apps, it offers simple, scalable solutions with full control and no hassle.`,
    imgSrc: '/static/images/curiohost.png',
    href: 'https://host.devcurio.com/',
  },
]

export default projectsData
