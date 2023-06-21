import SafePrivacyPolicy from '@/components/privacy'
import type { NextPage } from 'next'
import Head from 'next/head'

const PrivacyPolicy: NextPage = () => {
  return (
    <>
      <Head>
        <title>{'Catacomb ETC Wallet – Privacy policy'}</title>
      </Head>

      <main>
        <SafePrivacyPolicy />
      </main>
    </>
  )
}

export default PrivacyPolicy
