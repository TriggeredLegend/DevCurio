/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'DevCurio - Learn, Build, Innovate',
  author: 'DevCurio',
  headerTitle: 'DevCurio',
  description: 'Learn, Build, Innovate with DevCurio — Developer blogs, guides, and tools.',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://devcurio.com',
  siteRepo: 'https://github.com/TriggeredLegend/DevCurio',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  mastodon: 'https://mastodon.social/@mastodonuser',
  email: 'contact@devcurio.com',
  github: 'https://github.com/TriggeredLegend',
  x: 'https://x.com/_0xTriggered_',
  facebook: 'https://facebook.com',
  youtube: 'https://www.youtube.com/@DevCurio',
  linkedin: 'https://www.linkedin.com',
  instagram: 'https://www.instagram.com',
  medium: 'https://medium.com',
  locale: 'en-US',
  // set to true if you want a navbar fixed to the top
  stickyNav: false,
  analytics: {
    umamiAnalytics: {
      umamiWebsiteId: process.env.NEXT_UMAMI_ID,
    },
  },
  newsletter: {
    provider: 'buttondown',
  },
  comments: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'preferred_color_scheme',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
    },
  },
  search: {
    provider: 'kbar',
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
}

module.exports = siteMetadata
