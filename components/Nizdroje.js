import React from "react";
import Link from "next/link";
import Image from "next/image";

function Nizdroje({ name, link, ext, color }) {
  return (
    <div
      className={`${
        color === "orange"
          ? "bg-orange-500 hover:bg-orange-400"
          : "bg-slate-800 hover:bg-slate-700"
      } mb-3 px-6 py-4 border rounded-md shadow-lg  text-white bg-slate-800  transition-all delay-150`}
    >
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
