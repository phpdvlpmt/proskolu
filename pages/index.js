import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'


export default function Home() {
  return (
    <div className="container p-20 flex space-x-4">
      <Head>
        <title>proskolu</title>
        <meta name="description" content="proskolu" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      <ul>
     <li><Link href="files/test_1.pdf" passHref><a target="_blank" rel="noopener noreferrer">Test  </a></Link></li> 
     <li><Link href="files/test_1_odpovedi.pdf" passHref><a target="_blank" rel="noopener noreferrer">Test - odpovědi  </a></Link></li>
     <li><Link href="files/test_1_vyplneny.pdf" passHref><a target="_blank" rel="noopener noreferrer">Test - vyplněný  </a></Link></li> 
     </ul>
      <ul className="flex space-x-4">
     <li><Link href="files/diplom_1.pdf" passHref><a target="_blank" rel="noopener noreferrer"><Image width="200" height="200" src="/images/diplom_1.png" alt="image" /> </a></Link></li> 
     <li><Link href="files/diplom_2.pdf" passHref><a target="_blank" rel="noopener noreferrer"><Image width="200" height="200" src="/images/diplom_2.png" alt="image" /> </a></Link></li>
     <li><Link href="files/diplom_3.pdf" passHref><a target="_blank" rel="noopener noreferrer"><Image width="200" height="200" src="/images/diplom_3.png" alt="image"/> </a></Link></li>
     <li><Link href="files/sudoku.pdf" passHref><a target="_blank" rel="noopener noreferrer"><Image width="200" height="200" src="/images/sudoku.png"  alt="image"/> </a></Link></li>
     </ul>
    
    </div>
  )
}
