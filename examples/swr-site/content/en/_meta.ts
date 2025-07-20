export default {
  index: {
    type: 'page',
    display: 'hidden',
    theme: {
      typesetting: 'article',
      toc: false
    }
  },
  docs: {
    type: 'page',
    title: 'Documentation'
  },
  about: {
    type: 'menu',
    title: 'About',
    items: {
      contributors: {
        href: 'https://github.com/vercel/swr/graphs/contributors'
      },
      team: '',
      changelog: ''
    }
  },
  nextra_link: {
    type: 'page',
    title: 'Website',
    href: 'https://saydao.org'
  }
}
