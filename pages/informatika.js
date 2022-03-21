import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

function Informatika() {
  return (
    <div>
      <Head>
        <title>Informatika</title>
      </Head>
      <ul className="grid place-items-center  grid-cols-1  gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-4xl mx-auto w-full">
        <li className="p-2 border bg-white rounded-md shadow-md hover:shadow-xl hover:skew-y-3">
          <Link href="/files/diplom_1.pdf" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <Image
                width="250"
                height="250"
                src="/images/diplom_1.png"
                alt="image"
              />
            </a>
          </Link>
        </li>
        <li className="p-2 border bg-white rounded-md shadow-md hover:shadow-xl hover:skew-y-3">
          <Link href="/files/diplom_2.pdf" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <Image
                width="250"
                height="250"
                src="/images/diplom_2.png"
                alt="image"
              />
            </a>
          </Link>
        </li>
        <li className="p-2 border bg-white rounded-md shadow-md hover:shadow-xl hover:skew-y-3">
          <Link href="/files/diplom_3.pdf" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <Image
                width="250"
                height="250"
                src="/images/diplom_3.png"
                alt="image"
              />
            </a>
          </Link>
        </li>
        <li className="p-2 border bg-white rounded-md shadow-md hover:shadow-xl hover:skew-y-3">
          <Link href="/files/sudoku.pdf" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <Image
                width="250"
                height="250"
                src="/images/sudoku.png"
                alt="image"
              />
            </a>
          </Link>
        </li>
        <li className="p-2 border bg-white rounded-md shadow-md hover:shadow-xl hover:skew-y-3">
          <Link href="/files/recept.pdf" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <Image
                width="250"
                height="250"
                src="/images/recept.png"
                alt="image"
              />
            </a>
          </Link>
        </li>
        <li className="p-2 border bg-white rounded-md shadow-md hover:shadow-xl hover:skew-y-3">
          <Link href="/files/jidelni_listek.pdf" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <Image
                width="250"
                height="250"
                src="/images/jidelni_listek.png"
                alt="image"
              />
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Informatika;
