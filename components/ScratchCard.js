import React from "react";
import Link from "next/link";
import Image from "next/image";

function ScratchCard({ name, link, ext, img }) {
  return (
    <div className="">
      <h1 className="text-lg font-semibold">{name}</h1>
      <Link href={link}>
        <a target="_blank" rel="noopener noreferrer">
          <Image src={img} width="300" height="400" alt="Souřadnice" />
        </a>
      </Link>
    </div>
  );
}

export default ScratchCard;
