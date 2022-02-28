import Link from "next/link";
import Image from "next/image";

function informatika() {
  return (
    <div>
      <ul className="flex space-x-4">
        <li>
          <Link href="files/diplom_1.pdf" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <Image
                width="200"
                height="200"
                src="/images/diplom_1.png"
                alt="image"
              />
            </a>
          </Link>
        </li>
        <li>
          <Link href="files/diplom_2.pdf" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <Image
                width="200"
                height="200"
                src="/images/diplom_2.png"
                alt="image"
              />
            </a>
          </Link>
        </li>
        <li>
          <Link href="files/diplom_3.pdf" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <Image
                width="200"
                height="200"
                src="/images/diplom_3.png"
                alt="image"
              />
            </a>
          </Link>
        </li>
        <li>
          <Link href="files/sudoku.pdf" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <Image
                width="200"
                height="200"
                src="/images/sudoku.png"
                alt="image"
              />
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default informatika;
