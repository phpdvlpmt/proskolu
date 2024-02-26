import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoLogoWindows } from "react-icons/io5";

const Kio = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <h2 className="text-3xl font-bold">Kódování informace obrázkem</h2>
      <a target="_blank" href="/images/uc4/4_5.png" alt="strany">
        Kapitola 1 - kódování informace a přenos dat (Strany 4 a 5)
      </a>
      <a target="_blank" href="/images/uc4/6_7.png" alt="strany">
        Co je kódování (Strany 6 a 7)
      </a>
      <div className="flex gap-2">
        <a target="_blank" href="/images/uc4/8_9.png" alt="strany">
          Emoji (😁 😋 😂), kódování vlastními obrázky (Strany 8 a 9).
        </a>
        Ve windows použijeme zkratku win + tečka (<IoLogoWindows /> + .)
      </div>
      <div>
        <p> Zkuste najít názvy zakódovaných pohádek.</p>
        <a href="/images/kodovani.png" target="_blank" rel="noreferrer">
          <Image
            src="/images/kodovani.png"
            alt="pohádky"
            width="149"
            height="218"
            className="rounded-md"
          />
        </a>
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <Image
            src="https://imysleni.cz/components/com_rsdirectory/files/cache/330x460/f8d958945d69a7615d434b74d870df07.jpg"
            alt="učebnice"
            width="100"
            height="160"
            className="rounded-md"
          />
          <a
            href="https://imysleni.cz/images/vzdelavaci_materialy/Inf/NS-Zaklady-informatiky.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <p className="font-semibold">
              Základy informatiky pro 1. stupeň ZŠ (strana 8)
            </p>
          </a>
        </div>
      </div>
      <div>
        <a
          href="https://www.umimeinformatiku.cz/cviceni-kodovani-informaci-obrazkem"
          target="_blank"
          rel="noreferrer"
          className="font-semibold"
        >
          Kódování informací obrázkem (https://www.umimeinformatiku.cz/)
        </a>
      </div>
    </div>
  );
};

export default Kio;
