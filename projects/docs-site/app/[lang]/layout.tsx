/* eslint-env node */
import { VercelIcon } from '@app/_icons'
import type { Metadata } from 'next'
import {
  Footer,
  LastUpdated,
  Layout,
  Link,
  LocaleSwitch,
  Navbar
} from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import type { FC, ReactNode } from 'react'
import { getDictionary, getDirection } from '../_dictionaries/get-dictionary'
import './styles.css'

export const metadata: Metadata = {
  description:
    'SAY-DAO is a React Hooks library for data fetching. SAY-DAO first returns the data from cache (stale), then sends the fetch request (revalidate), and finally comes with the up-to-date data again.',
  title: {
    absolute: '',
    template: '%s | SAY-DAO'
  },
  metadataBase: new URL('https://saydao.org'),
  openGraph: {
    images:
      'https://assets.vercel.com/image/upload/v1572282926/swr/twitter-card.jpg'
  },
  twitter: {
    site: '@vercel'
  },
  appleWebApp: {
    title: 'SAY-DAO'
  },
  other: {
    'msapplication-TileColor': '#fff'
  }
}

type LayoutProps = Readonly<{
  children: ReactNode
  params: Promise<{
    lang: string
  }>
}>

const RootLayout: FC<LayoutProps> = async ({ children, params }) => {
  const { lang } = await params
  const dictionary = await getDictionary(lang)
  let pageMap = await getPageMap(`/${lang}`)

  const banner = (
    <Banner storageKey="SAY-DAO-2">
      SAY-DAO 2.0 is out! <Link href="#">Read more →</Link>
    </Banner>
  )
  const navbar = (
    <Navbar
      logo={
        <>
          <span
            id="say-logo"
            title={`SAY: ${dictionary.logo.title}`}
          >
            SAY DAO
          </span>
        </>
      }
      projectLink="https://github.com/say-dao"
      chatLink="https://discord.com"
    >
      <LocaleSwitch lite />
    </Navbar>
  )
  const footer = (
    <Footer>
      <a
        rel="noreferrer"
        target="_blank"
        className="x:focus-visible:nextra-focus flex items-center gap-2 font-semibold"
        href={dictionary.link.vercel}
      >
        {dictionary.poweredBy}
        <span
          id="say-logo"
          title={`SAY: ${dictionary.logo.title}`}
        >
          SAY DAO
        </span>
      </a>
    </Footer>
  )
  return (
    <html lang={lang} dir={getDirection(lang)} suppressHydrationWarning>
      <Head
        backgroundColor={{
          dark: 'rgb(15,23,42)',
          light: 'rgb(247, 241, 236)'
        }}
        color={{
          hue: { dark: 178, light: 28 },
          saturation: { dark: 61, light: 85 }
        }}
      />
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          footer={footer}
          docsRepositoryBase="https://github.com/SAY-DAO/documentation-v2/tree/main/projects/docs-site"
          i18n={[
            { locale: 'en', name: 'English' },
            { locale: 'ir', name: 'فارسی' },
          ]}
          sidebar={{
            defaultMenuCollapseLevel: 1,
            autoCollapse: true
          }}
          toc={{
            backToTop: dictionary.backToTop,
            // extraContent: (
            // eslint-disable-next-line @next/next/no-img-element -- we can't use with external urls
            // <img alt="placeholder cat" src="https://placecats.com/300/201" />
            // )
          }}
          editLink={dictionary.editPage}
          pageMap={pageMap}
          nextThemes={{ defaultTheme: 'dark' }}
          lastUpdated={<LastUpdated>{dictionary.lastUpdated}</LastUpdated>}
          themeSwitch={{
            dark: dictionary.dark,
            light: dictionary.light,
            system: dictionary.system
          }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}

export default RootLayout
