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
import { Banner, Head, Search, GoogleAnalytic } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import type { FC, ReactNode } from 'react'
import { getDictionary, getDirection } from '../_dictionaries/get-dictionary'
import './styles.css'

export const metadata: Metadata = {
  description:
    'The Say DAO (Decentralized Autonomous Organization) is a decentralized structure that enables collective decision-making and the transparent management of resources dedicated to supporting children. Within this framework, all transactions and contributions are recorded in a decentralized manner, ensuring they are fully traceable and verifiable.',
  title: {
    absolute: '',
    template: '%s | SAY-DAO'
  },
  metadataBase: new URL('https://saydao.org'),
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

  // const banner = (
  //   <Banner storageKey="SAY-DAO-2">
  //     SAY-DAO 2.0 is out! <Link href="#">Read more →</Link>
  //   </Banner>
  // )
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
    // chatLink="https://discord.com"
    >
      <LocaleSwitch lite />
    </Navbar>
  )
  const footer = (
    <Footer>
      <a
        rel="noreferrer"
        target="_blank"
        className="focus-visible:nextra-focus flex items-center gap-2 font-semibold"
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
      <GoogleAnalytic />
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
          // banner={banner}
          navbar={navbar}
          footer={footer}
          docsRepositoryBase="https://github.com/SAY-DAO/documentation-v2"
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
            title: dictionary.title,
            // extraContent: (
            // eslint-disable-next-line @next/next/no-img-element -- we can't use with external urls
            // <img alt="placeholder cat" src="https://placecats.com/300/201" />
            // )
          }}
          search={<Search placeholder={dictionary.search} />}
          // feedback={{
          //   content: dictionary.feedback,
          // }}
          editLink={dictionary.editPage}
          pageMap={pageMap}
          nextThemes={{ defaultTheme: 'light' }}
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
    </html >
  )
}

export default RootLayout
