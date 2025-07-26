import meta from '../en/_meta'

export default {
  index: meta.index,
  docs: {
    ...meta.docs,
    title: 'مستندات'
  },

  about: {
    ...meta.about,
    type: 'menu',
    title: 'درباره',

  },
}
