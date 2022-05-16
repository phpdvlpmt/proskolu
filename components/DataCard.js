import React from "react";
import Link from "next/link";
import Image from "next/image";

function DataCard({ name, subname }) {
  return (
    <div className="relative">
      {subname.map((sn) => (
        <h3 key={sn.link}>
          <Link href={sn.link}>
            <a className="uppercase" target="_blank" rel="noopener noreferrer">
              {sn.name}
            </a>
          </Link>
        </h3>
      ))}
    </div>
  );
}

export default DataCard;
