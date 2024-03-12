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
      <div className="flex flex-col gap-5 mt-4">
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
        Metodika strana 50
      </div>
    </>
  );
}

export default scratch;
