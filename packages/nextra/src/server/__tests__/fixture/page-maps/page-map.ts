import type { PageMapItem } from '../../../../types.js'

export const usPageMap: PageMapItem[] = [
  {
    data: {
      index: 'Introduction',
      projects: 'Projects',
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
