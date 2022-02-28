import Link from "next/link"
import Image from "next/image"
const informatika = () => {
  return (
    <div className="container p-20">
    
    <ul className="flex space-x-4">
     <li><Link href="files/diplom_1.pdf" passHref><a target="_blank" rel="noopener noreferrer"><Image width="200" height="200" src="/images/diplom_1.png" /> </a></Link></li> 
     <li><Link href="files/diplom_2.pdf" passHref><a target="_blank" rel="noopener noreferrer"><Image width="200" height="200" src="/images/diplom_2.png" /> </a></Link></li>
     <li><Link href="files/diplom_3.pdf" passHref><a target="_blank" rel="noopener noreferrer"><Image width="200" height="200" src="/images/diplom_3.png" /> </a></Link></li>
     <li><Link href="files/sudoku.pdf" passHref><a target="_blank" rel="noopener noreferrer"><Image width="200" height="200" src="/images/sudoku.png" /> </a></Link></li>
     </ul>
    </div>
  )
}

export default informatika