import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main className="bg-[#F3F4F6]">
        <div className="mx-auto flex flex-col gap-[1.5rem] px-[4%] py-[1.5rem] lg:flex-row">
          <Sidebar />

          <div className="flex-1">
            <h1 className="text-[2rem] font-bold">
              Product Listing
            </h1>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}