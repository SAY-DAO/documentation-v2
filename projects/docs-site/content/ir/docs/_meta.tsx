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
    title: <Separator>اولین قدم</Separator>,
    type: 'separator'
  },
  'introduction': '',
  'need-module': '',
  'dapp': '',
  'children': '',
  _2: {
    title: <Separator>گام بعدی</Separator>,
    type: 'separator'
  },
  'blockchain': '',
  'wallet': '',
  'smart-contracts': '',
  references: {
    title: 'منابع 🐙',
    href: 'https://github.com/say-dao'
  },
}
