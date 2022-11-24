import React from "react";
import Link from "next/link";
import Image from "next/image";

function HryZdroje({ name, link, trida }) {
  return (
    <div className="mb-3 px-6 py-4 border rounded-md shadow-lg bg-white hover:bg-orange-400 transition-all delay-150">
      <Link href={link}>
        <a target="_blank" rel="noopener noreferrer">
          {name} - {trida}. třída
        </a>
      </Link>
    </div>
  );
}

export default HryZdroje;
