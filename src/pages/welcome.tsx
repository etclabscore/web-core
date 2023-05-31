import NewSafe from '@/components/welcome/NewSafe'
import type { NextPage } from 'next'
import Head from 'next/head'

const Welcome: NextPage = () => {
  return (
    <>
      <Head>
        <title>{'Ethereum Classic multisig – Welcome'}</title>
      </Head>

      <NewSafe />
    </>
  )
}

export default Welcome
