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
  'introduction': 'مقدمه',
  'need-module': 'ماژول نیاز',
  'dapp': 'دپلیکیشن',
  'children': 'درباره کودکان',
  _2: {
    title: <Separator>گام بعدی</Separator>,
    type: 'separator'
  },
  'blockchain': 'آشنایی با بلاک‌چین',
  'wallet': 'کیف پول',
  'smart-contracts': 'اقتصاد توکنی',
  _3: {
    title: <Separator>منابع</Separator>,
    type: 'separator'
  },
  references: {
    title: 'پیوست‌ها 🐙',
  },
  api: {
    title: 'API 🤖',
    href: 'https://nest.saydao.org/docs'
  },
}
