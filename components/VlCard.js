import React from "react";
import Link from "next/link";
import Image from "next/image";

function VlCard({ tests, name }) {
  return (
    <>
      <ul key="name" className="border rounded-md shadow-lg p-4 flex-1">
        <li className="font-bold text-xl text-gray-800">{name}</li>
        {tests.map((t) => (
          <li key={t}>
            <Link href={t.link} passHref>
              <a target="_blank" rel="noopener noreferrer">
                {t.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default VlCard;
