import Link from "next/link";
function Layout({ children }) {
  return (
    <div className="container mx-auto p-4">
      <div>
        <ul className="flex space-x-5">
          <li>
            <Link href="/"> Domů</Link>
          </li>
          <li>
            <Link href="/vlastiveda">Vlastivěda</Link>
          </li>
          <li>
            <Link href="/informatika">Informatika</Link>
          </li>
        </ul>
      </div>
      <div>{children}</div>
      <div>Patička</div>
    </div>
  );
}

export default Layout;
