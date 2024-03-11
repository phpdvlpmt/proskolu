import Link from "next/link";
import React from "react";

const Hv = () => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <a
          href="https://cs.wikipedia.org/wiki/Bed%C5%99ich_Smetana"
          target="_blank"
          rel="noreferrer"
          className="font-bold text-xl text-gray-900"
        >
          Bedřich Smetana - životopis a dílo
        </a>
        <a
          href="https://www.youtube.com/watch?v=Na6piObEzws"
          target="_blank"
          rel="noreferrer"
          className="font-bold text-xl text-gray-900"
        >
          Bedřich Smetana - Proč bychom se netěšili - Prodaná nevěsta
        </a>
        <a
          href="https://www.youtube.com/watch?v=fYC1fVYpdwA"
          target="_blank"
          rel="noreferrer"
          className="font-bold text-xl text-gray-900"
        >
          Mám ráda kytky - I like the flowers
        </a>
      </div>
    </div>
  );
};

export default Hv;
