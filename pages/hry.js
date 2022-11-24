import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import HryCard from "../components/HryZdroje";
import HryOnline from "../lib/hry.json";
import { LinkIcon } from "@heroicons/react/solid";

export default function Hry() {
  return (
    <div className="">
      <Head>
        <title>Hry</title>
      </Head>
      <div className="mb-3 px-6 py-4 border rounded-md shadow-lg bg-orange-200 flex space-x-3 items-center">
        <h1 className="text-3xl font-thin">Hry online</h1>
        <LinkIcon className="h-7 w-7" />
      </div>
      <div className="grid sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        {HryOnline.map((ho) => (
          <HryCard key={ho.id} name={ho.name} link={ho.link} trida={ho.trida} />
        ))}
      </div>
    </div>
  );
}
