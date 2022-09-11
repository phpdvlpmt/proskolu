import Link from "next/link";
import { useRouter } from "next/router";
import { PuzzleIcon } from "@heroicons/react/solid";

function Header() {
  const router = useRouter();

  return (
    <div className="py-4 px-6 bg-slate-800 text-white sticky top-0 z-10">
      <ul className="flex items-center space-x-5">
        <li>
          <PuzzleIcon className="h-5 w-5 text-green-500" />
        </li>
        <li className={router.pathname == "/" ? " font-bold" : ""}>
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
        </li>
      </ul>
    </div>
  );
}

export default Header;
