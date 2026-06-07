import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";

export default function Home() {
  return (
    <>
      <Header />

      <main className="bg-[#FAF9F6]">
        <div className="mx-auto flex flex-col gap-[3rem] px-[4%] py-[1.5rem] lg:flex-row">
          <Sidebar />

          <ProductGrid />
        </div>
      </main>

      <Footer />
    </>
  );
}