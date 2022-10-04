import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import IData from "../lib/data.json";
import DataCard from "../components/DataCard";

export default function Data() {
  return (
    <div>
      <div className="mb-3 px-6 py-4 border rounded-md shadow-lg bg-white">
        <h1 className="text-2xl font-bold">
          <Link href="https://pracesdaty.zcu.cz/">
            <a target="_blank" rel="noopener noreferrer">
              {" "}
              Práce s daty - https://pracesdaty.zcu.cz/
            </a>
          </Link>
        </h1>
        <h2 className="text-sm text italic">
          Níže je výběr cvičení z webu https://pracesdaty.zcu.cz/
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Head>
          <title>Data</title>
        </Head>

        {IData.map((idata) => (
          <div
            key={idata.id}
            className="items-center justify-center bg-white shadow-md rounded-md hover:shadow-lg p-5 overflow-hidden transition-all delay-100"
          >
            <h2 className="text-xl font-semibold">
              <Link href={idata.link}>
                <a target="_blank" rel="noopener noreferrer">
                  {idata.name}
                </a>
              </Link>
            </h2>
            <DataCard name={idata.name} subname={idata.subname} />
          </div>
        ))}
      </div>
    </div>
  );
}
