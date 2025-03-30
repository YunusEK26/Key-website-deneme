
import Head from 'next/head'
import dynamic from 'next/dynamic'

const KonteynerEvForm = dynamic(() => import('../components/KonteynerEvForm'), { ssr: false })

export default function Home() {
  return (
    <div>
      <Head>
        <title>KEY KEY Makina - Konteyner Ev</title>
      </Head>
      <KonteynerEvForm />
    </div>
  )
}
