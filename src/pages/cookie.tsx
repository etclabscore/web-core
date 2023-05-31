import SafeCookiePolicy from '@/components/cookie-policy'
import type { NextPage } from 'next'
import Head from 'next/head'

const CookiePolicy: NextPage = () => {
  return (
    <>
      <Head>
        <title>{'Ethereum Classic multisig – Cookie policy'}</title>
      </Head>

      <main>
        <SafeCookiePolicy />
      </main>
    </>
  )
}

export default CookiePolicy
