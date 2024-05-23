import AddressBookTable from '@/components/address-book/AddressBookTable'
import type { NextPage } from 'next'
import Head from 'next/head'

const AddressBook: NextPage = () => {
  return (
    <>
      <Head>
        <title>{'Catacomb ETC Wallet – Address book'}</title>
      </Head>

      <AddressBookTable />
    </>
  )
}

export default AddressBook
