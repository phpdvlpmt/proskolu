import Link from "next/link";
import Head from "next/head";

function vlastiveda() {
  return (
    <div>
      <Head>
        <title>Vlastivěda</title>
      </Head>
      <ul>
        <li>
          <Link href="/files/test_1.pdf" passHref>
            <a target="_blank" rel="noopener noreferrer">
              Test
            </a>
          </Link>
        </li>
        <li>
          <Link href="/files/test_1_odpovedi.pdf" passHref>
            <a target="_blank" rel="noopener noreferrer">
              Test - odpovědi
            </a>
          </Link>
        </li>
        <li>
          <Link href="/files/test_1_vyplneny.pdf" passHref>
            <a target="_blank" rel="noopener noreferrer">
              Test - vyplněný
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default vlastiveda;
