import Link from "next/link";
import Header from "./Header";
import Head from "next/head";
function Layout({ children }) {
  return (
    <div className=" min-h-screen bg-slate-50">
      <Head>
        <title>Layout</title>
      </Head>
      <Header />
      <div className="container mx-auto p-6">{children}</div>
      <div></div>
    </div>
  );
}

export default Layout;
