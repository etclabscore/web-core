import SafeImprint from '@/components/imprint'
import type { NextPage } from 'next'
import Head from 'next/head'

const Imprint: NextPage = () => {
  return (
    <>
      <Head>
        <title>{'Catacomb ETC Wallet – Imprint'}</title>
      </Head>

      <main>
        <SafeImprint />
      </main>
    </>
  )
}

export default Imprint
