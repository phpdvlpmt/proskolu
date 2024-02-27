import Image from "next/image";
import React from "react";

const Mg = () => {
  return (
    <div>
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
              Základy informatiky pro 1. stupeň ZŠ (strana 29 - 32 grafové
              modely)
            </p>
          </a>
        </div>
        <div>
          <a
            href="https://www.umimeinformatiku.cz/cviceni-modelovani-grafy-5-trida"
            target="_blank"
            rel="noreferrer"
          >
            Modelování pomocí grafů – 5. třída (5. ročník)
          </a>
        </div>
      </div>
    </div>
  );
};

export default Mg;
