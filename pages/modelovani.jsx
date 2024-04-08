import React from "react";

const Modelovani = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-center pb-8">Modelování</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2 w-full">
          <h3 className="text-2xl font-bold text-left">Pojmová mapa</h3>
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
        <div className="flex flex-col gap-2 w-full">
          <h3 className="text-2xl font-bold text-left">Myšlenková mapa</h3>
          <a
            target="_blank"
            href="/images/uc5/22_23.png"
            alt="strany"
            className="hover:underline"
          >
            Příklady a cvičení (Strany 22 a 23)
          </a>
          <a
            target="_blank"
            href="/images/myslenkova_mapa.png"
            alt="strany"
            className="hover:underline"
          >
            Příklad: Co dělám v neděli
          </a>
          <a
            href="https://excalidraw.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            Excalidraw - modelování online
          </a>
        </div>
      </div>
    </>
  );
};

export default Modelovani;
