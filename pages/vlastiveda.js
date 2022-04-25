import Link from "next/link";
import Head from "next/head";

function vlastiveda() {
  return (
    <div>
      <Head>
        <title>Vlastivěda</title>
      </Head>
      <ul className="border rounded-md shadow-lg p-4">
        <li>
          <Link
            href="https://rysava.websnadno.cz/Vlastiveda-dejepis-5roc.html"
            passHref
          >
            <a
              className="font-semibold text-lg text-red-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Online testy - dějepisné učivo 5. ročník
            </a>
          </Link>
        </li>
      </ul>
      <div className="flex flex-col sm:flex-row my-5 space-y-5 sm:space-y-0 sm:space-x-5 w-full">
        <ul className="border rounded-md shadow-lg p-4 flex-1">
          <li className="font-bold text-xl text-gray-800">
            Test - DOBA POBĚLOHORSKÁ
          </li>
          <li>
            <Link href="/files/test_1.pdf" passHref>
              <a target="_blank" rel="noopener noreferrer">
                Test - 1
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
        <ul className="border rounded-md shadow-lg p-4 flex-1">
          <li className="font-bold text-xl text-gray-800">
            Test - TGM, ŽIVOT ZA PRVNÍ REPUBLIKY, CESTA K ZÁNIKU ČSR
          </li>
          <li>
            <Link href="/files/test_2.pdf" passHref>
              <a target="_blank" rel="noopener noreferrer">
                Test - 2
              </a>
            </Link>
          </li>
          <li>
            <Link href="/files/test_2_odpovedi.pdf" passHref>
              <a target="_blank" rel="noopener noreferrer">
                Test - odpovědi
              </a>
            </Link>
          </li>
          <li>
            <Link href="/files/test_2_vyplneny.pdf" passHref>
              <a target="_blank" rel="noopener noreferrer">
                Test - vyplněný
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default vlastiveda;
