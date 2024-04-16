import React from "react";

const Pmz = () => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-2xl font-bold text-left">
        Pojmová mapa - Co si utrhnu na zahradě
      </h3>
      <h2 className="font-bold text-xl">Ovoce</h2>

      <ul>
        <li>roste ze země - jahody, maliny</li>
        <li>roste na stromech - jablka, švestky</li>
      </ul>
      <h2 className="font-bold text-xl">Zelenina</h2>

      <ul>
        <li>hrášek, mrkev, kedlubna, cibule</li>
      </ul>
      <h2 className="font-bold text-xl">Květiny do vázy</h2>

      <ul>
        <li>květiny - růže, narcisy, tulipány</li>
        <li>kvetoucí keře - šeřík, zlatý déšť</li>
      </ul>
      <h2 className="font-bold text-xl">Bylinky</h2>

      <ul>
        <li>na čaj - máta, meduňka, kopřiva</li>
        <li>do kuchyně - petržel, pažitka</li>
      </ul>
      <a
        href="https://excalidraw.com/"
        target="_blank"
        rel="noreferrer"
        className="hover:underline text-green-700 font-bold text-xl"
      >
        Použijeme Excalidraw - modelování online
      </a>
    </div>
  );
};

export default Pmz;
