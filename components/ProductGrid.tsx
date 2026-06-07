import ProductCard from "@/components/ProductCard";
import FeaturedPhoneCard from "@/components/FeaturedPhoneCard";
import { products } from "@/data/products";

export default function ProductGrid() {
    const normalProducts = products.slice(0, 7);
    const phone = products[7];

    return (
        <section className="flex-[1.2]">
            <h1 className="mb-[1.5rem] text-[2.25rem] font-bold text-[#0F2D5C]">
                Product Listing
            </h1>

            {/* First 6 Products */}
            <div className="grid grid-cols-1 gap-[3rem] sm:grid-cols-2 lg:grid-cols-3">
                {normalProducts.slice(0, 6).map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>

            {/* Last Row */}
            <div
                className="
                  mt-[2.5rem]
    grid
    grid-cols-1
    gap-y-[2rem]
    gap-x-[2rem]
    lg:grid-cols-3
    lg:gap-x-[2.5rem]
    mb-[2.5rem]
                "
            >
                <ProductCard product={normalProducts[6]} />

                <div className="lg:col-span-2 gap-[2rem]">
                    <FeaturedPhoneCard product={phone} />
                </div>
            </div>
        </section>
    );
}