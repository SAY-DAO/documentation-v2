import { SwrIcon } from '@app/_icons'
import type { FC, ReactNode } from 'react'

export const Separator: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex items-center gap-2">
      <SwrIcon height="6" className="shrink-0" />
      {children}
    </div>
  )
}

export default {
  _: {
    title: <Separator>Getting Started</Separator>,
    type: 'separator'
  },
  'introduction': '',
  'dapp': '',
  'children': '',
  'need-module': '',
  _2: {
    title: <Separator>Advanced</Separator>,
    type: 'separator'
  },
  'blockchain': '',
  'wallet': '',
  'smart-contracts': '',
  'references': '',
  github_link: {
    title: 'GitHub 🐙',
    href: 'https://github.com/say-dao'
  },
}
