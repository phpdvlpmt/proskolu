import React from "react";
import Link from "next/link";
import Image from "next/image";

function InfCard({ link, img }) {
  return (
    <div className="relative">
      <Link href={link} passHref>
        <a target="_blank" rel="noopener noreferrer">
          <Image
            width="250"
            height="250"
            src={img}
            alt="image"
            className="hover:scale-110 cursor-pointer"
          />
        </a>
      </Link>
    </div>
  );
}

export default InfCard;
