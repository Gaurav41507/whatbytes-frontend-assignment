"use client";

import { Search, ShoppingCart } from 'lucide-react';
import Link from "next/link";
import { useCart } from "@/context/CartContext";


export default function Header() {
    const { totalItems } = useCart();
    return (
        <header className="w-full bg-[#0058B6]">
            <div className="mx-auto flex h-[5.5rem] w-full items-center justify-between px-[4%]">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <h1 className="text-[2.5rem] font-bold leading-none text-white drop-shadow-sm">
                        Logo
                    </h1>
                </div>

                {/* Search */}
                <div className="ml-auto mr-[3rem] hidden md:flex" style={{ width: "clamp(260px, 40%, 560px)" }}>
                    <div className="relative w-full">
                        <Search
                            size={22}
                            className="absolute left-[1.25rem] top-1/2 -translate-y-1/2 text-white/90"
                        />

                        <input
                            type="text"
                            placeholder="Search for products..."
                            className="
                h-[3.75rem]
                w-full
                rounded-[0.875rem]
                border-[2px]
                border-[#5A86C7]
                bg-[#0058B6]
                pl-[3.5rem]
                pr-[1rem]
                text-[1.05rem]
                text-white
                placeholder:text-white/80
                shadow-[inset_0_0_0.5rem_rgba(255,255,255,0.12)]
                outline-none
                transition
                focus:border-white/70
              "
                        />
                    </div>
                </div>

                {/* Cart Button */}
                <div className="flex items-center">
                    <Link
                        href="/cart"
                        className="
    flex
    h-[3.25rem]
    md:h-[3.75rem]
    min-w-[3.25rem]
    md:min-w-[10rem]
    items-center
    justify-center
    gap-[0.65rem]
    rounded-[0.875rem]
    bg-[#002E6D]
    px-[0.9rem]
    md:px-[1.5rem]
    text-white
    transition
    hover:bg-[#01255a]
  "
                    >
                        <div className="relative">
                            <ShoppingCart />

                            {totalItems > 0 && (
                                <span
                                    className="
                absolute
                -right-[0.45rem]
                -top-[0.45rem]
                flex
                h-[1.2rem]
                w-[1.2rem]
                items-center
                justify-center
                rounded-full
                bg-red-500
                text-[0.7rem]
                font-bold
                text-white
            "
                                >
                                    {totalItems}
                                </span>
                            )}
                        </div>

                        <span className="hidden md:block text-[1.3rem] font-semibold">
                            Cart
                        </span>
                    </Link>
                </div>
            </div>

            {/* Mobile Search */}
            <div className="px-[5%] pb-[1rem] md:hidden">
                <div className="relative">
                    <Search
                        size={20}
                        className="absolute left-[1rem] top-1/2 -translate-y-1/2 text-white/80"
                    />

                    <input
                        type="text"
                        placeholder="Search for products..."
                        className="
              h-[3.25rem]
              w-full
              rounded-[0.75rem]
              border
              border-[#5A86C7]
              bg-[#0058B6]
              pl-[3rem]
              pr-[1rem]
              text-white
              placeholder:text-white/80
              outline-none
            "
                    />
                </div>
            </div>
        </header>
    );
}