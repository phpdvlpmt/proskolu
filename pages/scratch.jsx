import React from "react";
import Image from "next/image";
import Link from "next/link";
import ScratchCard from "../components/ScratchCard";
import Scratch from "../lib/scratch.json";

function scratch() {
  return (
    <>
      <div className="grid sm:grid-cols-2 sm:gap-4 md:grid-cols-5 lg:grid-cols-7">
        {Scratch.map((sc) => (
          <ScratchCard
            key={sc.id}
            name={sc.name}
            link={sc.link}
            ext={sc.ext}
            img={sc.img}
          />
        ))}
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col gap-5 mt-4">
          <Link
            href="/scenerie"
            className="hover:underline text-3xl font-bold text-emerald-800"
          >
            Scenérie kok za krokem
          </Link>
          <a
            href="https://scratch.mit.edu/projects/980861696"
            target="_blank"
            rel="noreferrer"
          >
            Scenérie - odkaz na ukázku
            <div className="mt-4">
              <Image
                src="/images/scenerie.png"
                alt="scenérie"
                width="200"
                height="200"
              />
            </div>
          </a>
          <a
            href="https://1drv.ms/b/s!AjRd_veIjzHfhngrXYdgqM6ufdkq?e=VSzRPZ"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            Metodika strana 50
          </a>
        </div>
        <div className="flex flex-col gap-5 mt-4">
          <a
            href="https://scratch.mit.edu/studios/35225695"
            target="_blank"
            rel="noreferrer"
          >
            Studio
            <div className="mt-10">
              <Image
                src="/images/studio.png"
                alt="studio"
                width="200"
                height="200"
              />
            </div>
          </a>
        </div>
        <div className="flex flex-col gap-5 mt-4">
          <a href="/images/m1n1.png" target="_blank" rel="noreferrer">
            Modul 1 - Něco navíc 1
            <div className="mt-10">
              <Image
                src="/images/m1n1.png"
                alt="Něco navíc 1"
                width="200"
                height="200"
                className="object-cover"
              />
            </div>
          </a>
        </div>
        <div className="flex flex-col gap-5 mt-4">
          <a href="/images/m1n2.png" target="_blank" rel="noreferrer">
            Modul 1 - Něco navíc 2
            <div className="mt-10">
              <Image
                src="/images/m1n2.png"
                alt="Něco navíc 2"
                width="200"
                height="200"
                className="object-cover"
              />
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default scratch;
