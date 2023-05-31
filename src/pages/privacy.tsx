import SafePrivacyPolicy from '@/components/privacy'
import type { NextPage } from 'next'
import Head from 'next/head'

const PrivacyPolicy: NextPage = () => {
  return (
    <>
      <Head>
        <title>{'Ethereum Classic multisig – Privacy policy'}</title>
      </Head>

      <main>
        <SafePrivacyPolicy />
      </main>
    </>
  )
}

export default PrivacyPolicy
