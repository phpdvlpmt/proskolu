import React from "react";
import Link from "next/link";
import Image from "next/image";

function NiCard({ name, link, ext, color }) {
  return (
    <div>
      {ext === 1 ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <div
            className={`${
              color == "orange"
                ? "bg-orange-500 hover:bg-orange-400"
                : "bg-slate-800 hover:bg-slate-700"
            } mb-3 px-6 py-4 border rounded-md shadow-lg  text-white transition-all delay-150 h-full cursor-pointer`}
          >
            {name}
          </div>
        </a>
      ) : (
        <Link href={link} passHref>
          <div
            className={`${
              color == "orange"
                ? "bg-orange-500 hover:bg-orange-400"
                : "bg-slate-800 hover:bg-slate-700"
            } mb-3 px-6 py-4 border rounded-md shadow-lg  text-white transition-all delay-150 h-full cursor-pointer`}
          >
            {name}
          </div>
        </Link>
      )}
    </div>
  );
}

export default NiCard;
