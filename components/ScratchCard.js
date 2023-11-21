import React from "react";
import Link from "next/link";
import Image from "next/image";

function ScratchCard({ name, link, ext, img }) {
  return (
    <div>
      <h1 className="text-base ">{name}</h1>
      <div className="border-2 rounded-md overflow-hidden border-gray-300 mt-3 w-full pt-[100%] relative">
        <Link href={link}>
          <a target="_blank" rel="noopener noreferrer">
            <Image src={img} objectFit="cover" layout="fill" alt="obrázek" />
          </a>
        </Link>
      </div>
    </div>
  );
}

export default ScratchCard;
