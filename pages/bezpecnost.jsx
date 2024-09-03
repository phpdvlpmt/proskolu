import Link from "next/link";
import BCard from "../components/BCard";
import bezpecnost from "../lib/bezpecnost.json";
import { useRouter } from "next/router";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";
import { useRef } from "react";
import { useState, useEffect } from "react";

const Bezpecnost = () => {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const controller = useRef();
  const onInitHandler = ({ conductor }) => {
    controller.current = conductor;
  };
  const onShoot = () => {
    controller.current.shoot();
  };
  const onRun = () => {
    controller.current.run({ speed: 3 });
  };
  const onStop = () => {
    controller.current.stop();
  };
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) return null;
  return (
    <div>
      <Fireworks onInit={onInitHandler} />

      <div className="flex">
        <div className="w-1/3 fixed ">
          <ul className="flex flex-col gap-4 text-lg">
            {bezpecnost.map((b, i) => (
              <Link scroll={false} passHref key={i} href={`#${i}`}>
                <li
                  className={`cursor-pointer ${
                    router.asPath === `/bezpecnost#${i}` ? "font-bold" : ""
                  }`}
                >
                  {b.title}
                </li>
              </Link>
            ))}
            <Link scroll={false} passHref href={"#7"}>
              <li
                className={`cursor-pointer ${
                  router.asPath === `/bezpecnost#7` ? "font-bold" : ""
                }`}
              >
                Fejci
              </li>
            </Link>
            <Link scroll={false} passHref href={"#8"}>
              <li
                className={`cursor-pointer ${
                  router.asPath === `/bezpecnost#8` ? "font-bold" : ""
                }`}
              >
                Konec
              </li>
            </Link>
          </ul>
        </div>
        <div className="ml-[360px]">
          <h1 className="text-xl text-center uppercase font-bold mb-8">
            {
              <Link href="/files/nastenka_tisk_final.pdf">
                <a target="_blank">Nástěnka bezpečného internetu</a>
              </Link>
            }
          </h1>
          {bezpecnost.map((b, i) => (
            <BCard key={b.title} bezpecnost={b} id={i} />
          ))}
          <section
            className=" p-4 rounded-lg shadow-md py-4 bg-yellow-100 scroll-mt-16 text-xl"
            id="7"
          >
            <div className="flex flex-col mb-2 py-2">
              <h1 className="text-xl font-bold text-yellow-300">Fejci</h1>
              <h2 className="font-bold">
                Internet je skvělá věc, někteří lidé se ho ale snaží zneužít.
                Třeba sociální sítě, kde si tito lidé vytvářejí falešné profily.
                Víš, jak je poznat?
              </h2>
            </div>
            <div>
              Už dávno <strong>NEPLATÍ</strong>, že falešný profil poznáš podle
              toho, že byl založený nedávno, má málo fotek nebo nemá moc přátel.
            </div>
            <div>
              <strong>TIPY, jak poznat falešné profily:</strong>
            </div>
            <div>
              <strong>VYHLEDEJ</strong> si jeho jméno ve vyhledávači. Každý za
              sebou zanecháváme digitální stopu. Můžeš zjistit více informací.
            </div>
            <div>
              <strong>POROVNEJ</strong> jeho fotky přes různé internetové
              nástroje. Třeba Google obrázky nebo Tineye. Ale pozor, to, že ti
              to nenajde žádný výsledek, neznamená, že je pravý. Tyto nástroje
              neumí vyhledávat v uzamčených profilech, albech nebo soukromé
              komunikaci.
            </div>
            <div>
              Trik s cedulkou. Když si nebudeš jistý, že člověk na druhé straně
              je ten, za koho se vydává, dej mu <strong>ÚKOL</strong>. Ať se ti
              vyfotí do pěti minut s <strong>CEDULKOU</strong> v ruce, na které
              bude napsáno, co chceš. Třeba tvoje jméno a dnešní datum. Jakmile
              se začne vymlouvat, je něco podezřelé. Tuto možnost máme dnes
              každý
            </div>
            <div>
              Asi nejspolehlivější možností, jak si někoho na internetu ověřit,
              je
              <strong> VIDEOHOVOR</strong> . Důležité je, aby byl hovor plynulý,
              nesekal se obraz a byl funkční zvuk.
            </div>
          </section>
          <div className="flex gap-4 my-10" id="8">
            <button
              className="px-3 py-2 bg-green-800 text-green-100 rounded-lg hover:bg-green-800"
              onClick={onRun}
            >
              Oslava
            </button>
            <button
              className="px-3 py-2 bg-red-800 text-red-100 rounded-lg hover:bg-red-800 scroll-mt-16"
              onClick={onStop}
            >
              Stop
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bezpecnost;
