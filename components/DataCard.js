import React from "react";
import Link from "next/link";

import { QuestionMarkCircleIcon } from "@heroicons/react/solid";

function DataCard({ name, subname }) {
  return (
    <div className="relative">
      {subname.map((sn) => (
        <h3 key={sn.link} className="flex">
          <Link href={sn.link}>
            <a
              className="uppercase transition-all delay-300  hover:font-bold ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
            >
              {sn.name}
            </a>
          </Link>

          {sn.name === "Slovníky" ? (
            <Link href="/files/slovnik.pdf">
              <a
                className="ml-3 flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <QuestionMarkCircleIcon className="h-5 w-5 text-green-400 hover:text-green-600" />
              </a>
            </Link>
          ) : (
            ""
          )}
          {sn.name === "Doplňujeme sportovní tabulku" ? (
            <Link href="/files/vlajky.pdf">
              <a
                className="text-green-600 ml-3 flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <QuestionMarkCircleIcon className="h-5 w-5 text-green-400 hover:text-green-600" />
              </a>
            </Link>
          ) : (
            ""
          )}
        </h3>
      ))}
    </div>
  );
}

export default DataCard;
