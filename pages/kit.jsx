import React from "react";

const Kit = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <h2 className="text-3xl font-bold">Kódování informace textem</h2>
      <a
        target="_blank"
        href="/images/uc4/10_11.png"
        alt="strany"
        className="hover:underline"
      >
        Kódování pomocí číslic, písmen a znaků (Strany 10 a 11)
      </a>
      <a
        target="_blank"
        href="/images/uc4/12_13.png"
        alt="strany"
        className="hover:underline"
      >
        Kódování pomocí dohodnutých znaků (Strany 12 a 13)
      </a>
      <a
        target="_blank"
        href="/images/sifrovaci_tabulka.png"
        alt="strany"
        className="hover:underline"
      >
        Šifrovací tabulka
      </a>
      <a
        href="https://excalidraw.com/"
        target="_blank"
        rel="noreferrer"
        className="hover:underline"
      >
        Excalidraw
      </a>
      <a
        href="https://www.umimeinformatiku.cz/rozhodovacka-kodovani-textu-1"
        target="_blank"
        rel="noreferrer"
        className="hover:underline"
      >
        Základní kódování textu - online cvičení
      </a>
    </div>
  );
};

export default Kit;
