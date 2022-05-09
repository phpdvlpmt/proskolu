import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Products from "../pages/products.json";
import InfCard from "../components/InfCard";

function Informatika() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <Head>
        <title>Informatika</title>
      </Head>

      {Products.map((product) => (
        <div
          className="flex  items-center justify-center bg-white shadow-md hover:shadow-lg p-5 overflow-hidden"
          key={product.link}
        >
          <InfCard link={product.link} img={product.img} />
        </div>
      ))}
    </div>
  );
}

export default Informatika;
