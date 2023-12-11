import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Nizdroje from "../lib/nizdroje.json";
import { LinkIcon } from "@heroicons/react/solid";
import NiCard from "../components/NiCard";

export default function Ni() {
  return (
    <div className="">
      <Head>
        <title>Data</title>
      </Head>
      <div className="mb-3 px-6 py-4 border rounded-md shadow-lg bg-orange-200 flex space-x-3 items-center">
        <h1 className="text-3xl font-thin">Nová informatika</h1>
        <LinkIcon className="h-7 w-7" />
      </div>
      <div className="grid sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        {Nizdroje.map((ni) => (
          <NiCard
            key={ni.id}
            name={ni.name}
            link={ni.link}
            ext={ni.ext}
            color={ni.color}
          />
        ))}
      </div>
    </div>
  );
}
