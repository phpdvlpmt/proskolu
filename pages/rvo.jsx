import React from "react";

const Rvo = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <h2 className="text-3xl font-bold">Rastrové a vektorové obrázky</h2>
      <a
        target="_blank"
        href="/images/uc4/14_15.png"
        alt="rastr"
        className="hover:underline"
      >
        Kapitola 9 - Rastrové a vektorové obrázky (Strany 14 a 15)
      </a>
      <a
        target="_blank"
        href="/images/uc4/16_17.png"
        alt="rastr"
        className="hover:underline"
      >
        Kapitola 9 - Rozlišení rastrového obrázku (Strany 16 a 17)
      </a>
      <a
        target="_blank"
        href="https://www.umimeinformatiku.cz/rozhodovacka-bitmapova-grafika-1"
        alt="rastr"
        className="hover:underline"
        rel="noreferrer"
      >
        Bitmapová grafika - cvičení online
      </a>
      <a
        target="_blank"
        href="https://www.informatikaprozs.cz/kodovani-vektorovych-obrazku"
        alt="vektor"
        className="hover:underline"
        rel="noreferrer"
      >
        Vektorová grafika - cvičení online
      </a>
      <a
        target="_blank"
        href="https://www.informatikaprozs.cz/data/kodovani_vektorovych_obrazku/11_%C3%BAse%C4%8Dky_dome%C4%8Dek.pdf"
        alt="vektor"
        className="hover:underline"
        rel="noreferrer"
      >
        Vektorová grafika - práce s úsečkami
      </a>
    </div>
  );
};

export default Rvo;
