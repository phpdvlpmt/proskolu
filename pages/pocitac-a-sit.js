import React from "react";
import Head from "next/head";
import Link from "next/link";
import { DesktopComputerIcon, LinkIcon } from "@heroicons/react/solid";
import Accordion from "../components/accordion";

function pocitacasit() {
  return (
    <div className="space-y-3">
      <Head>
        <title>Počítač a síť</title>
      </Head>
      <div className="flex space-x-3 items-center">
        <DesktopComputerIcon className="h-7 w-7" />
        <h1 className="text-3xl font-light">Počítač a síť</h1>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Accordion
            title="Na co se hodí počítač a podobná zařízení? Co na něm kdo dělá?"
            content="
        <div>
        <ul class='list-disc pl-6'>
          <li>K zábavě (hry, videa)</li>
          <li>K práci (komunikace, dokumenty)</li>
          <li>K učení se (videa, články, výukový software).</li>
        </ul>
      </div>"
          />
          <Accordion
            title="V čem se liší a shodují dvojice počítačů (desktop, notebook, tablet a
        chytrý telefon)"
            content="
        <div>
        <ul class='list-disc pl-6'>
          <li>velikost a váha</li>
          <li>počet dílů a kompaktnost</li>
          <li>napájení a výdrž</li>
          <li>přenositelnost</li>
          <li>použitelnost na konkrétní činnosti</li>
        </ul>
      </div>
        "
          />
          <Accordion
            title="Která digitální zařízení máte doma propojena a jak?"
            content="
        <div>
        Například k televizi je připojena herní konzole se senzorem a domácí
        kino. Propojeny jsou kabely (např. HDMI). K notebooku občas připojujeme
        mobilní telefon (pomocí USB kabelu nebo Bluetooth), nebo fotoaparát (USB
        kabel) apod. Některé nové ledničky a pračky mají také NFC předávání
        informací (programů) s chytrým telefonem.
      </div>
        "
          />
          <Accordion
            title="Kolik uživatelů může pracovat na jednom počítači a jak je od sebe počítač rozezná?"
            content="
        <div>
        U notebooků či stolních počítačů je obvyklé, že se na nich vytváří více uživatelských profilů. Mezi jednotlivými profily počítač přepne obvykle po ověření identity
uživatele. Telefon či tablet mívají většinou pouze jeden uživatelský profil.
        </div>
        "
          />
          <Accordion
            title="Způsoby ověření uživatele od nejméně bezpečného po nejbezpečnější"
            content="
        <div>
        <ul class='list-disc pl-6'>
          <li>Bez hesla – Není nijak chráněno. Musel bych mít zařízení stále pod dozorem.</li>
          <li>Rozpoznání obličeje – Velké procento se dá oklamat fotografií</li>
          <li>Gestem – Gesto má omezený počet bodů, ze kterých vybíráme, a dá se
okoukat</li>
          <li>PIN – Dopředu víme, že se skládá jen z čísel. Často bývá pouze 4ciferný</li>
          <li>Heslem – Může používat více znaků a často bývá vyžadováno o délce alespoň 6 znaků. Na druhou stranu uživatelé často dávají jednoduše uhodnutelná hesla</li>
          <li>Otisk prstu – Je unikátní a nedá se okoukat ani uhodnout. Nemůžete ho zapomenout.
</li>
          </ul>
      </div>
        "
          />
          <div>
            <div className="flex space-x-3 items-center">
              <Link
                href="https://www.e-bezpeci.cz/images/schema_site.png"
                passHref
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold"
                >
                  Obrázek sítě
                </a>
              </Link>
              <LinkIcon className="h-5 w-5" />
            </div>
          </div>
          <div className="flex space-x-3 items-center">
            <Link
              href="https://1drv.ms/p/s!AjRd_veIjzHfhGARSetRrfdiZXBM?e=nhOo6Y"
              passHref
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold"
              >
                Cvičení
              </a>
            </Link>
            <LinkIcon className="h-5 w-5" />
          </div>
        </div>

        <div>
          <h2 className="font-bold uppercase">SHRNUTÍ</h2>
          <div>
            Pod zastřešujícím pojmem počítač si můžeme představit několik typů
            zařízení – některé jsou určeny jen pro konkrétní činnost, některé
            jsou univerzálně použitelné. Počítač se dá propojit s jinými
            zařízeními (i jinými počítači) do různě velké soustavy. Každá
            součást i zařízení mají svůj účel a své důležité vlastnosti, podle
            kterých si je vybíráme.
          </div>
        </div>
      </div>
    </div>
  );
}

export default pocitacasit;
