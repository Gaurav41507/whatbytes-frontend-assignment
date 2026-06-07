"use client";

import ProductCard from "@/components/ProductCard";
import FeaturedPhoneCard from "@/components/FeaturedPhoneCard";
import { products } from "@/data/products";
import { useFilters } from "@/context/FilterContext";

export default function ProductGrid() {
    const { search } = useFilters();

    const filteredProducts = products.filter((product) =>
        product.title
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    const normalProducts = filteredProducts.slice(0, 7);
    const phone = filteredProducts.find(
        (product) => product.title === "Smartphone"
    );

    return (
        <section className="flex-[1.2]">
            <h1 className="mb-[1.5rem] text-[2.25rem] font-bold text-[#0F2D5C]">
                Product Listing
            </h1>

            {filteredProducts.length === 0 ? (
                <div className="rounded-lg bg-white p-8 text-center shadow-sm">
                    No products found.
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 gap-[3rem] sm:grid-cols-2 lg:grid-cols-3">
                        {normalProducts.slice(0, 6).map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>

                    {normalProducts.length > 6 && phone && (
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
                                items-start
                            "
                        >
                            <ProductCard product={normalProducts[6]} />

                            <div className="lg:col-span-2">
                                <FeaturedPhoneCard product={phone} />
                            </div>
                        </div>
                    )}
                </>
            )}
        </section>
    );
}