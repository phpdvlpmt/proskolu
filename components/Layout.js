import Link from "next/link";
import Header from "./Header";
function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="container mx-auto p-3">{children}</div>
      <div></div>
    </div>
  );
}

export default Layout;
