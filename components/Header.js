import Link from "next/link";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();

  return (
    <div className="p-4 bg-slate-800 text-white">
      <ul className="flex space-x-5">
        <li className={router.pathname == "/" ? " font-bold" : ""}>
          <Link href="/"> Domů</Link>
        </li>
        <li className={router.pathname == "/vlastiveda" ? "font-bold" : ""}>
          <Link href="/vlastiveda">Vlastivěda</Link>
        </li>
        <li className={router.pathname == "/informatika" ? "font-bold" : ""}>
          <Link href="/informatika">Informatika</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
