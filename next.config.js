/* eslint-disable @typescript-eslint/no-require-imports */
const { withContentlayer } = require('next-contentlayer2')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

// Content Security Policy
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' giscus.app analytics.umami.is;
  style-src 'self' 'unsafe-inline';
  img-src * blob: data:;
  media-src *.s3.amazonaws.com;
  connect-src *;
  font-src 'self';
  frame-src giscus.app;
`.replace(/\n/g, '')

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy,
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
]

const output = process.env.EXPORT ? 'export' : undefined
const basePath = process.env.BASE_PATH || ''

/** @type {import('next').NextConfig} */
module.exports = () => {
  const plugins = [withContentlayer, withBundleAnalyzer]

  return plugins.reduce((acc, next) => next(acc), {
    output,
    basePath,
    reactStrictMode: true,
    trailingSlash: false,
    swcMinify: true,

    // Do not use deprecated `modern` or `legacyBrowsers`
    experimental: {
      serverActions: false, // Set to false or remove until you actually use it
    },

    eslint: {
      dirs: ['app', 'components', 'layouts', 'scripts'],
    },

    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'picsum.photos',
        },
        {
          protocol: 'https',
          hostname: 'cdn.devcurio.com',
        },
      ],
      unoptimized: process.env.UNOPTIMIZED === 'true',
    },

    async headers() {
      return [
        {
          source: '/(.*)\\.js',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
        {
          source: '/(.*)',
          headers: securityHeaders,
        },
      ]
    },

    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      })
      return config
    },
  })
}
