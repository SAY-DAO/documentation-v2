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
    name: 'index',
    route: '/',
    frontMatter: {
      title: 'React Hooks for Data Fetching'
    }
  }
]
