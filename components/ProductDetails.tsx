"use client";

import { products } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

interface ProductDetailsProps {
    id: number;
}

export default function ProductDetails({
    id,
}: ProductDetailsProps) {
    const product = products.find(
        (item) => item.id === id
    );

    if (!product) {
        return (
            <div className="flex min-h-[60vh] flex-1 items-center justify-center">
                Product Not Found
            </div>
        );
    }

    return (
        <section className="flex-1">
            <Link
                href="/"
                className="mb-[1.5rem] inline-block text-[#0058B6]"
            >
                ← Back To Products
            </Link>

            <div
                className="
          rounded-[0.75rem]
          bg-white
          p-[1.5rem]
          shadow-sm

          lg:flex
          lg:gap-[3rem]
        "
            >
                {/* Image */}
                <div
                    className="
            relative
            mx-auto
            h-[22rem]
            w-full
            max-w-[22rem]
            flex-shrink-0

            lg:h-[28rem]
            lg:max-w-[28rem]
          "
                >
                    <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-contain"
                    />
                </div>

                {/* Details */}
                <div className="mt-[2rem] flex-1 lg:mt-0">
                    <h1
                        className="
              text-[2rem]
              font-bold
              text-[#111827]

              lg:text-[2.8rem]
            "
                    >
                        {product.title}
                    </h1>

                    <p
                        className="
              mt-[1rem]
              text-[2rem]
              font-bold
              text-[#0058B6]
            "
                    >
                        ${product.price}
                    </p>

                    {/* Rating */}
                    <div className="mt-[1rem] flex gap-[0.25rem]">
                        {[...Array(product.rating)].map(
                            (_, index) => (
                                <Star
                                    key={index}
                                    size={22}
                                    fill="#1D4ED8"
                                    className="text-[#1D4ED8]"
                                />
                            )
                        )}
                    </div>

                    <p
                        className="
              mt-[1.5rem]
              max-w-[35rem]
              text-[1rem]
              leading-[1.8]
              text-[#4B5563]
            "
                    >
                        {product.description}
                    </p>

                    <div className="mt-[1.5rem]">
                        <p className="font-semibold">
                            Category
                        </p>

                        <p className="text-[#4B5563]">
                            {product.category}
                        </p>
                    </div>

                    {/* Quantity */}
                    <div className="mt-[1.5rem]">
                        <label className="font-semibold">
                            Quantity
                        </label>

                        <input
                            type="number"
                            min="1"
                            defaultValue="1"
                            className="
                mt-[0.5rem]
                block
                w-[6rem]
                rounded-md
                border
                border-gray-300
                px-[0.75rem]
                py-[0.5rem]
              "
                        />
                    </div>

                    <button
                        className="
              mt-[2rem]
              rounded-[0.5rem]
              bg-[#0058B6]
              px-[2rem]
              py-[0.9rem]
              text-white
              transition
              hover:bg-[#00489A]
            "
                    >
                        Add To Cart
                    </button>
                </div>
            </div>
        </section>
    );
}