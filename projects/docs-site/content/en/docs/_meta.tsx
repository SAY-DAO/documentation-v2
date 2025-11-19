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
  'need-module': '',
  'dapp': '',
  'children': '',
  _2: {
    title: <Separator>Advanced</Separator>,
    type: 'separator'
  },
  'blockchain': '',
  'wallet': '',
  'smart-contracts': 'Token-economics',
  _3: {
    title: <Separator>References</Separator>,
    type: 'separator'
  },
  references: {
    title: 'Appendices 🐙',
  },
  api: {
    title: 'API 🤖',
    href: 'https://nest.saydao.org/docs'
  },
}
