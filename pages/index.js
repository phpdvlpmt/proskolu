import Link from 'next/link'
import Head from 'next/head'


export default function Home() {
  return (
    <div className="container p-20 flex space-x-4">
      <Head>
        <title>proskolu</title>
        <meta name="description" content="proskolu" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      <Link href="/vlastiveda" className="text-3xl" className="container p-20">
        Vlastivěda
      </Link> 
      <Link href="/informatika" className="text-3xl" className="container p-20">
       Informatika
      </Link> 
    
    </div>
  )
}
