import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import VlCard from "../components/VlCard";
import vl from "../lib/vl.json";

function vlastiveda() {
  return (
    <div>
      <Head>
        <title>Vlastivěda</title>
      </Head>
      <ul className="border rounded-md shadow-lg p-4">
        <li>
          <a
            className="font-semibold text-lg text-red-700"
            href="https://kvizy.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vlastivědné kvízy
          </a>
        </li>
        <li>
          <a
            className="font-semibold text-lg text-red-700"
            href="https://nxtjs14js-9m3g.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vlastivědné kvízy - alternativní odkaz
          </a>
        </li>
        <li>
          <Link href="/hry">
            <a className="font-semibold text-lg text-red-700">Online hry</a>
          </Link>
        </li>
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
        {vl.map((v) => (
          <VlCard key={v.id} tests={v.links} name={v.name} />
        ))}
      </div>

      <div className="flex flex-col sm:flex-row my-5 space-y-5 sm:space-y-0 sm:space-x-5 w-full">
        <ul className="border rounded-md shadow-lg p-4 flex-1 flex flex-col items-center justify-center">
          <li className="font-bold text-xl text-gray-800 mb-5 ">
            Časová přímka - 4. ročník
          </li>
          <li>
            <Link href="/images/casova_primka_1.jpg" passHref>
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/casova_primka_1.jpg"
                  alt="přímka"
                  width={500}
                  height={300}
                />
              </a>
            </Link>
          </li>
        </ul>
        <ul className="border rounded-md shadow-lg p-4 flex-1 flex flex-col items-center justify-center">
          <li className="font-bold text-xl text-gray-800 mb-5 ">
            Časová přímka - 5. ročník
          </li>
          <li>
            <Link href="/images/casova_primka_2.jpg" passHref>
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/casova_primka_2.jpg"
                  alt="přímka"
                  width={500}
                  height={300}
                />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default vlastiveda;
