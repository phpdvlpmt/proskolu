import React from "react";
import Image from "next/image";
import Link from "next/link";
import Malovani from "../lib/malovani.json";
import Malovanicard from "../components/MalovaniCard";

function malovani() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Malovani.map((m) => (
        <Malovanicard key={m.id} name={m.name} link={m.link} />
      ))}
    </div>
  );
}

export default malovani;
