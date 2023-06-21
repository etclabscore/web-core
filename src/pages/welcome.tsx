import NewSafe from '@/components/welcome/NewSafe'
import type { NextPage } from 'next'
import Head from 'next/head'

const Welcome: NextPage = () => {
  return (
    <>
      <Head>
        <title>{'Catacomb ETC Wallet – Welcome'}</title>
      </Head>

      <NewSafe />
    </>
  )
}

export default Welcome
