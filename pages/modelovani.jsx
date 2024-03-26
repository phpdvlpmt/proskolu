import React from "react";

const Modelovani = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <h2 className="text-3xl font-bold">Modelování</h2>
      <a
        target="_blank"
        href="/images/uc5/18_19.png"
        alt="strany"
        className="hover:underline"
      >
        Schéma (Strany 18 a 19)
      </a>
      <a
        href="https://excalidraw.com/"
        target="_blank"
        rel="noreferrer"
        className="hover:underline"
      >
        Excalidraw - modelování online
      </a>
      <a
        target="_blank"
        href="/images/uc5/20_21.png"
        alt="strany"
        className="hover:underline"
      >
        Pojmová mapa (Strany 20 a 21)
      </a>
      <a
        target="_blank"
        href="/images/uc5/pojmova_mapa.png"
        alt="strany"
        className="hover:underline"
      >
        Pojmová mapa - cvičení (pokusíme se vytvořit v Excalidraw)
      </a>
      <a
        target="_blank"
        href="/files/pojmova_mapa.pdf"
        alt="strany"
        className="hover:underline"
      >
        Pojmová mapa - řešení
      </a>
    </div>
  );
};

export default Modelovani;
