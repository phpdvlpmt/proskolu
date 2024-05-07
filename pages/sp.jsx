import Link from "next/link";
import React from "react";

const Sp = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl font-bold">Stolní počítač</h2>

          <a
            href="/images/uc4/20_21.png"
            target="_blank"
            className="text-xl hover:underline"
          >
            Stolní počítač, opakování základů
          </a>
          <a
            href="/images/uc4/22_23.png"
            target="_blank"
            className="text-xl hover:underline"
          >
            Notebook, přídavná zařízení
          </a>
          <h2 className="text-4xl font-bold">
            Využití digitálních technologií
          </h2>
          <a
            href="/images/uc4/22_23.png"
            target="_blank"
            className="text-xl hover:underline"
          >
            Využití digitálních technologií
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sp;
