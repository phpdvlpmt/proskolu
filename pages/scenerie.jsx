import Image from "next/image";

const Scenerie = () => {
  return (
    <div className="w-full text-center">
      <h2 className="text-xl font-semibold text-center mb-5">Senérie</h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="w-full">
          <h2 className="text-xl font-semibold text-center">Čtverec</h2>
          <div className="relative w-full h-full">
            <Image src="/images/ctverec.png" layout="fill" alt="ctverec" />
          </div>
        </div>
        <div className="w-full">
          <h2 className="text-xl font-semibold text-center">Střecha</h2>
          <div className="relative w-full h-full">
            <Image src="/images/strecha.png" layout="fill" alt="ctverec" />
          </div>
        </div>
        <div className="w-full">
          <h2 className="text-xl font-semibold text-center">Domeček</h2>
          <div className="relative w-full h-full">
            <Image src="/images/domecek.png" layout="fill" alt="ctverec" />
          </div>
        </div>
        <div className="w-full">
          <h2 className="text-xl font-semibold text-center">Strom</h2>

          <Image
            src="/images/strom.png"
            width="300"
            height="380"
            alt="ctverec"
          />
        </div>
        <div className="w-full">
          <h2 className="text-xl font-semibold text-center">Hříbek</h2>

          <Image
            src="/images/hribek.png"
            width="400"
            height="380"
            alt="ctverec"
          />
        </div>
        <div className="w-full">
          <h2 className="text-xl font-semibold text-center">Hvězdy</h2>

          <Image
            src="/images/hvezdy.png"
            width="300"
            height="380"
            alt="ctverec"
          />
        </div>
        <div className="w-full relative">
          <h2 className="text-xl font-semibold text-center">
            Náhodná tloušťka
          </h2>

          <Image
            src="/images/nahodna_tloustka_pera.png"
            layout="fill"
            alt="nahodná tloušťka pera"
            className="object-contain"
          />
        </div>
        <div className="w-full relative">
          <h2 className="text-xl font-semibold text-center">
            Náhodné umístění domečků
          </h2>

          <Image
            src="/images/nahodne_umisteni_domecku.png"
            layout="fill"
            alt="nahodné umístění"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Scenerie;
