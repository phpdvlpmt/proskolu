import React from "react";
import Image from "next/image";
import Link from "next/link";
import ScratchCard from "../components/ScratchCard";
import Scratch from "../lib/scratch.json";

function scratch() {
  return (
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
  );
}

export default scratch;
