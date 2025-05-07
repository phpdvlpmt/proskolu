import Link from "next/link";
import Header from "./Header";
import Head from "next/head";
function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col flex-1">
      <Head>
        <title>Pro školu</title>
      </Head>
      <Header />
      <div className="flex container mx-auto p-6 flex-1">{children}</div>
    </div>
  );
}

export default Layout;
