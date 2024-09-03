import React from "react";

const BCard = ({ bezpecnost, id }) => {
  return (
    <section
      id={id}
      className=" p-4 rounded-lg shadow-md py-4 mb-5 scroll-mt-16 text-xl"
      style={{ backgroundColor: bezpecnost.bgcolor }}
    >
      <div className="flex flex-col mb-2 py-2">
        <h1 className="text-xl font-bold" style={{ color: bezpecnost.color }}>
          {bezpecnost.title}
        </h1>
        <h2 className="font-bold">{bezpecnost.subtitle}</h2>
      </div>
      <ul className="flex flex-col gap-2 text-xl">
        {bezpecnost.lists.map((b, i) => (
          <li className="list-disc list-inside" key={i}>
            {b.li}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BCard;
