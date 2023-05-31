import SafeLicenses from '@/components/licenses'
import type { NextPage } from 'next'
import Head from 'next/head'

const Imprint: NextPage = () => {
  return (
    <>
      <Head>
        <title>{'Ethereum Classic multisig – Licenses'}</title>
      </Head>

      <main>
        <SafeLicenses />
      </main>
    </>
  )
}

export default Imprint
