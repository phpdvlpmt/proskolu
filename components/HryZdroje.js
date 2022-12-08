import React from "react";
import Link from "next/link";
import Image from "next/image";

function HryZdroje({ name, link, trida }) {
  return (
    <div
      className={
        trida == 5
          ? "mb-3 px-6 py-4 border rounded-md shadow-lg text-white bg-orange-700 hover:bg-orange-400 transition-all delay-150"
          : "mb-3 px-6 py-4 border rounded-md shadow-lg text-white bg-slate-800 hover:bg-slate-700 transition-all delay-150"
      }
    >
      <Link href={link}>
        <a target="_blank" rel="noopener noreferrer">
          {name} - {trida}. třída
        </a>
      </Link>
    </div>
  );
}

export default HryZdroje;
