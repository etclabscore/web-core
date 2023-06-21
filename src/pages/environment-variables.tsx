import EnvironmentVariables from '@/components/settings/EnvironmentVariables'
import type { NextPage } from 'next'
import Head from 'next/head'

const EnvironmentVariablesPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>{'Catacomb ETC Wallet – Environment variables'}</title>
      </Head>

      <main>
        <EnvironmentVariables />
      </main>
    </>
  )
}

export default EnvironmentVariablesPage
