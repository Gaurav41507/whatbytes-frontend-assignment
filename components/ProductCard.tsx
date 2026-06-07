"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({
    product,
}: ProductCardProps) {
    const { addToCart } = useCart();

    return (
        <div
            className="
        rounded-[0.5rem]
        bg-white
        p-[0.75rem]
        shadow-sm
        transition
        hover:shadow-md
      "
        >
            <Link href={`/product/${product.id}`}>
                <div className="relative mb-[0.75rem] h-[12rem] w-full">
                    <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-contain"
                    />
                </div>

                <h3
                    className="
            min-h-[3rem]
            text-[1.15rem]
            font-semibold
            text-[#1f2937]
          "
                >
                    {product.title}
                </h3>

                <p
                    className="
            mt-[0.25rem]
            text-[1.4rem]
            font-bold
            text-[#1f2937]
          "
                >
                    ${product.price}
                </p>
            </Link>

            <button
                onClick={() =>

                    addToCart({
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        image: product.image,
                    })
                }
                className="
      mt-[0.75rem]
      w-full
      rounded-[0.5rem]
      bg-[#0058B6]
      py-[0.65rem]
      text-[1.2rem]
      font-medium
      text-white
      transition
      hover:bg-[#00479a]
    "
            >
                Add To Cart
            </button>
        </div>
    );
}