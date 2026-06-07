"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { Product } from "@/types/product";

interface FeaturedPhoneCardProps {
    product: Product;
}

export default function FeaturedPhoneCard({
    product,
}: FeaturedPhoneCardProps) {
    return (
        <div
            className="
              w-full
    min-h-[30rem]
    rounded-[0.75rem]
    bg-white
    p-[1rem]
    shadow-sm
    md:p-[1.25rem]
            "
        >
            <div
                className="
      flex
      flex-col
      items-start
      gap-[0.8rem]

      md:flex-row
      md:items-start
    "
            >
                {/* Phone Image */}
                <div
                    className="
        relative
        mx-auto
        h-[16rem]
        w-[10rem]
        flex-shrink-0

        md:mx-0
        md:h-[22rem]
        md:w-[15rem]
      "
                >
                    <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

                {/* Content */}
                <div className="flex w-full flex-1 flex-col justify-center">
                    <h2
                        className="
          text-[1.8rem]
          font-bold
          text-[#111827]

          md:text-[2.2rem]
        "
                    >
                        {product.title}
                    </h2>

                    <p
                        className="
          mt-[0.5rem]
          text-[1.8rem]
          font-bold
          text-[#111827]
        "
                    >
                        ${product.price}
                    </p>

                    {/* Rating */}
                    <div className="mt-[0.75rem] flex gap-[0.25rem]">
                        {[1, 2, 3, 4].map((star) => (
                            <Star
                                key={star}
                                size={20}
                                fill="#1D4ED8"
                                className="text-[#1D4ED8]"
                            />
                        ))}

                        <Star
                            size={20}
                            fill="#D1D5DB"
                            className="text-[#D1D5DB]"
                        />
                    </div>

                    <p
                        className="
          mt-[1rem]
          max-w-[24rem]
          text-[1rem]
          leading-[1.8]
          text-[#4B5563]
        "
                    >
                        Lorem ipsum dolor amet, consectetur
                        euisagend.
                    </p>

                    <div className="mt-[1.25rem]">
                        <p className="text-[1rem] text-[#6B7280]">
                            Category
                        </p>

                        <p
                            className="
            mt-[0.25rem]
            text-[1.1rem]
            font-medium
            text-[#111827]
          "
                        >
                            {product.category}
                        </p>
                    </div>

                    <button
                        className="
              mt-[5.5rem]
              w-full
              rounded-[0.5rem]
              bg-[#0058B6]
              py-[0.9rem]
              text-[1.2rem]
              font-medium
              text-white
              transition
              hover:bg-[#00489A]
              md:max-w-[18rem]
            "
                    >
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    );
}