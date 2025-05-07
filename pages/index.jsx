import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <div className=" flex  justify-center items-center flex-1">
      <Head>
        <title>Domů</title>
      </Head>
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-extralight text-6xl">
          Disciplíny olympijského víceboje
        </h1>
        <div className="bg-gray-50">
          <a
            href="https://www.olympijskyviceboj.cz/olympijsky-diplom/discipliny"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={"/newlogo.svg"}
              width={300}
              height={150}
              alt="logo"
              className="justify-center"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
