import React from "react";
import Image from "next/image";
import Link from "next/link";

function scratch() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <Link href="https://scratch.mit.edu/projects/765563563">
        <a target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/souradnice.png"
            width="450"
            height="400"
            alt="Souřadnice"
          />
        </a>
      </Link>
    </div>
  );
}

export default scratch;
