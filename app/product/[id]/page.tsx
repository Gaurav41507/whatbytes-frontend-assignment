import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import ProductDetails from "@/components/ProductDetails";

export default async function ProductPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    return (
        <>
            <Header />

            <main className="bg-[#F3F4F6]">
                <div className="mx-auto flex flex-col gap-[3rem] px-[4%] py-[1.5rem] lg:flex-row">
                    <Sidebar />

                    <ProductDetails id={Number(id)} />
                </div>
            </main>

            <Footer />
        </>
    );
}