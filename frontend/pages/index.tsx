import Navbar from '@/components/navbar'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Hubla</title>
        <meta name="description" content="Hubla" />
      </Head>
      <Navbar />
      <main>
        Index
      </main>
    </>
  )
}
