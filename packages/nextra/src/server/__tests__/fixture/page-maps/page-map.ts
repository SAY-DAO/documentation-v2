import type { PageMapItem } from '../../../../types.js'

export const usPageMap: PageMapItem[] = [
  {
    data: {
      index: 'Introduction',
      examples: 'Examples',
      blog: 'Blog'
    }
  },
  {
    name: 'blog',
    children: [
      {
        data: {
          'swr-v1': 'Announcing SWR 1.0'
        }
      },
      {
        name: 'swr-v1',
        route: '/blog/swr-v1',
        frontMatter: {
          image:
            'https://assets.vercel.com/image/upload/v1630059453/swr/v1.png',
          description:
            'Almost 2 years ago we open sourced SWR, the tiny data-fetching React library that people love. Today we are reaching another milestone: the 1.0 version of SWR.'
        }
      }
    ],
    route: '/blog'
  },
  {
    name: 'examples',
    children: [
      {
        data: {
          basic: 'Basic Usage',
          auth: 'Authentication',
          'infinite-loading': 'Infinite Loading',
          'error-handling': 'Error Handling',
          ssr: 'Next.js SSR'
        }
      },
      {
        name: 'auth',
        route: '/examples/auth',
        frontMatter: {
          title: 'Authentication'
        }
      },
      {
        name: 'basic',
        route: '/examples/basic',
        frontMatter: {
          title: 'Basic Usage'
        }
      },
      {
        name: 'error-handling',
        route: '/examples/error-handling',
        frontMatter: {
          title: 'Error Handling'
        }
      },
      {
        name: 'infinite-loading',
        route: '/examples/infinite-loading',
        frontMatter: {
          title: 'Infinite Loading'
        }
      },
      {
        name: 'ssr',
        route: '/examples/ssr',
        frontMatter: {
          title: 'Next.js SSR'
        }
      }
    ],
    route: '/examples'
  },
  {
    name: 'index',
    route: '/',
    frontMatter: {
      title: 'React Hooks for Data Fetching'
    }
  }
]
