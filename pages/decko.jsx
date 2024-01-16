import React from "react";

const Decko = () => {
  return (
    <div className="space-y-5">
      <a
        href="https://decko.ceskatelevize.cz/cms/datova-lhota/docs/ML_02_Ja_a_pocitacovy_svet_final.pdf"
        target="_blank"
        rel="noreferrer"
      >
        <h1 className="text-3xl font-extrabold">Já a počítačový svět</h1>
      </a>
      <a
        href="https://decko.ceskatelevize.cz/datova-lhota"
        target="_blank"
        rel="noreferrer"
      >
        <h1 className="text-xl font-semibold">5 Kde to vázne?</h1>
      </a>
      <table className="table-auto border-spacing-2 border text-lg">
        <thead className="font-bold">
          <tr className="border">
            <th className="p-3 border-r">OTÁZKY</th>
            <th className="p-3">ODPOVĚDI</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border">
            <td className="p-3 border-r">
              Díky čemu si mezi sebou mohou dva počítače posílat data, i když
              jsou na opačném konci světa?
            </td>
            <td className="p-3">
              Díky internetu. Pozn.: Na blízko to jde třeba pomocí Bluetooth, na
              dálku třeba přes SMS.
            </td>
          </tr>
          <tr className="border">
            <td className="p-3 border-r">
              Jak se dají fotky, videa, texty, hudba atd. nazvat jedním slovem?
            </td>
            <td className="p-3">Data.</td>
          </tr>
          <tr className="border">
            <td className="p-3 border-r">
              Která z těchto věcí bývá nejmenší a která největší? Fotka, text,
              video.
            </td>
            <td className="p-3">Video bývá největší, text nejmenší.</td>
          </tr>
          <tr className="border">
            <td className="p-3 border-r">Proč probíhá šifrování?</td>
            <td className="p-3">
              Kvůli tomu, aby se na data nemohl dívat nikdo cizí, a také proto,
              aby data nemohl někdo zaměnit.
            </td>
          </tr>
          <tr className="border">
            <td className="p-3 border-r">
              Proč se Kubovo video nahrávalo nejdéle?
            </td>
            <td className="p-3">Bylo příliš velké/největší.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Decko;
