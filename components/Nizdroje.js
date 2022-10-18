import React from "react";
import Link from "next/link";
import Image from "next/image";

function Nizdroje({ name, link, ext }) {
  return (
    <div className="mb-3 px-6 py-4 border rounded-md shadow-lg bg-white hover:bg-orange-400 transition-all delay-150">
      <Link href={link}>
        {ext === 1 ? (
          <a target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        ) : (
          <a>{name}</a>
        )}
      </Link>
    </div>
  );
}

export default Nizdroje;
