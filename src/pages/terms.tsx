import SafeTerms from '@/components/terms'
import type { NextPage } from 'next'
import Head from 'next/head'

const Imprint: NextPage = () => {
  return (
    <>
      <Head>
        <title>{'Catacomb ETC Wallet – Terms'}</title>
      </Head>

      <main>
        <SafeTerms />
      </main>
    </>
  )
}

export default Imprint
