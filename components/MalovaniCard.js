import React from "react";
import Link from "next/link";
import Image from "next/image";

function Malovanicard({ name, link }) {
  return (
    <div>
      <Link href={link}>
        <a target="_blank" rel="noopener noreferrer">
          <Image src={link} width="400" height="300" alt={name} />
        </a>
      </Link>
    </div>
  );
}

export default Malovanicard;
