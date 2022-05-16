import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import IData from "../pages/data.json";
import DataCard from "../components/DataCard";

export default function Data() {
  return (
    <div>
      <Head>
        <title>Data</title>
      </Head>
      <div>
        <h1 className="text-3xl font-bold">
          <Link href="https://pracesdaty.zcu.cz/">
            <a target="_blank" rel="noopener noreferrer">
              {" "}
              Práce s daty
            </a>
          </Link>
        </h1>
      </div>

      {IData.map((idata) => (
        <div
          key={idata.id}
          className="items-center justify-center bg-white shadow-md hover:shadow-lg p-5 overflow-hidden"
        >
          <h2 className="text-xl font-semibold">{idata.name}</h2>
          <DataCard name={idata.name} subname={idata.subname} />
        </div>
      ))}
    </div>
  );
}
