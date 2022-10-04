import React from "react";
import Image from "next/image";
import Link from "next/link";

function malovani() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div>
        <Link href="/images/brouk.png">
          <a target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/brouk.png"
              width="400"
              height="300"
              alt="brouk"
            />
          </a>
        </Link>
      </div>
      <div>
        <Link href="/images/mrak.png">
          <a target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/mrak.png"
              width="400"
              height="300"
              alt="brouk"
            />
          </a>
        </Link>
      </div>
      <div>
        <Link href="/images/jezek.png">
          <a target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/jezek.png"
              width="400"
              height="300"
              alt="brouk"
            />
          </a>
        </Link>
      </div>
      <div>
        <Link href="/images/zatacka.png">
          <a target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/zatacka.png"
              width="400"
              height="300"
              alt="brouk"
            />
          </a>
        </Link>
      </div>
    </div>
  );
}

export default malovani;
