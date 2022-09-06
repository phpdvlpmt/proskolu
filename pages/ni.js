import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function Ni() {
  return (
    <div>
      <Head>
        <title>Data</title>
      </Head>
      <div className="mb-3 px-6 py-4 border rounded-md shadow-lg bg-white">
        <h1 className="text-3xl font-thin">Nová informatika</h1>
      </div>
      <div className="mb-3 px-6 py-4 border rounded-md shadow-lg bg-white">
        <Link href="https://www.imysleni.cz/images/SVP/SVP1_opatrne-vpred_v20220425.pdf">
          <a target="_blank" rel="noopener noreferrer">
            {" "}
            ŠVP
          </a>
        </Link>
      </div>
      <div className="mb-3 px-6 py-4 border rounded-md shadow-lg bg-white">
        <Link href="https://imysleni.cz/images/vzdelavaci_materialy/Inf/NS-Zaklady-informatiky.pdf">
          <a target="_blank" rel="noopener noreferrer">
            {" "}
            Základy informatiky pro 1. stupeň ZŠ
          </a>
        </Link>
      </div>
    </div>
  );
}
