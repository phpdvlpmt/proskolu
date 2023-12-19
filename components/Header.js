import Link from "next/link";
import { useRouter } from "next/router";
import { PuzzleIcon } from "@heroicons/react/solid";
import navLinks from "../lib/nav-links";

function Header() {
  const router = useRouter();

  return (
    <div className="flex flex-col md:flex-row py-4 px-6 space-x-0 md:space-x-3 bg-slate-800 text-white sticky top-0 z-10 w-full overflow-x-hidden md:justify-start justify-center">
      <div className="flex justify-center items-center">
        <PuzzleIcon className="h-5 w-5 text-green-500 " />
      </div>
      <ul className="flex flex-col justify-center   items-center sm:flex-row md:space-x-3">
        {/* <li className={router.pathname == "/" ? " font-bold" : ""}>
          <Link href="/"> Domů</Link>
        </li>
        <li className={router.pathname == "/vlastiveda" ? "font-bold" : ""}>
          <Link href="/vlastiveda">Vlastivěda</Link>
        </li>
        <li className={router.pathname == "/informatika" ? "font-bold" : ""}>
          <Link href="/informatika">Informatika</Link>
        </li>
        <li className={router.pathname == "/ni" ? "font-bold" : ""}>
          <Link href="/ni">Nová informatika</Link>
        </li>
        <li className={router.pathname == "/data" ? "font-bold" : ""}>
          <Link href="/data">Práce s daty</Link>
        </li> */}
        {navLinks.map((nav, index) => (
          <li
            key={index}
            className={router.pathname === nav.link ? "font-bold " : ""}
          >
            <Link href={nav.link}>{nav.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;
