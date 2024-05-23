import SafeCookiePolicy from '@/components/cookie-policy'
import type { NextPage } from 'next'
import Head from 'next/head'

const CookiePolicy: NextPage = () => {
  return (
    <>
      <Head>
        <title>{'Catacomb ETC Wallet – Cookie policy'}</title>
      </Head>

      <main>
        <SafeCookiePolicy />
      </main>
    </>
  )
}

export default CookiePolicy
