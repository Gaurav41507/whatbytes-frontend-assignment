"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartPage() {
    const {
        cartItems,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        totalPrice,
    } = useCart();

    return (
        <>
            <Header />


            <div className="mt-4 mb-4 px-[4%]">
                <Link
                    href="/"
                    className="
            rounded-md
            border
            border-[#0058B6]
            px-3
            py-1
            text-sm
            text-[#0058B6]
            hover:bg-[#0058B6]
            hover:text-white
            transition
        "
                >
                    ← Back to Products Page
                </Link>
            </div>



            <main className="min-h-screen bg-[#F3F4F6] px-[4%] py-[2rem]">
                <h1 className="mb-[2rem] text-[2.5rem] font-bold text-[#0F2D5C]">
                    Shopping Cart
                </h1>

                {cartItems.length === 0 ? (
                    <div className="rounded-[0.75rem] bg-white p-[2rem] text-center">
                        Your cart is empty.
                    </div>
                ) : (
                    <div className="grid gap-[2rem] lg:grid-cols-[2fr_1fr]">
                        {/* Cart Items */}

                        <div className="space-y-[1rem]">
                            {cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="
                    flex
                    flex-col
                    gap-[1rem]
                    rounded-[0.75rem]
                    bg-white
                    p-[1rem]
                    shadow-sm

                    md:flex-row
                    md:items-center
                  "
                                >
                                    <div className="relative h-[6rem] w-[6rem]">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="text-[1.2rem] font-semibold">
                                            {item.title}
                                        </h3>

                                        <p className="mt-[0.25rem] text-[#0058B6] font-bold">
                                            ${item.price}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-[0.75rem]">
                                        <button
                                            onClick={() =>
                                                decreaseQuantity(item.id)
                                            }
                                            className="rounded bg-gray-200 px-3 py-1"
                                        >
                                            -
                                        </button>

                                        <span>
                                            {item.quantity}
                                        </span>

                                        <button
                                            onClick={() =>
                                                increaseQuantity(item.id)
                                            }
                                            className="rounded bg-gray-200 px-3 py-1"
                                        >
                                            +
                                        </button>
                                    </div>

                                    <button
                                        onClick={() =>
                                            removeFromCart(item.id)
                                        }
                                        className="rounded bg-red-500 px-4 py-2 text-white"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Summary */}

                        <div
                            className="
                h-fit
                rounded-[0.75rem]
                bg-white
                p-[1.5rem]
                shadow-sm
              "
                        >
                            <h2 className="text-[1.5rem] font-semibold">
                                Order Summary
                            </h2>

                            <div className="mt-[1rem] flex justify-between">
                                <span>Total</span>

                                <span className="font-bold">
                                    ${totalPrice}
                                </span>
                            </div>

                            <button
                                className="
                  mt-[1.5rem]
                  w-full
                  rounded-[0.5rem]
                  bg-[#0058B6]
                  py-[0.9rem]
                  text-white
                "
                            >
                                Checkout
                            </button>
                        </div>
                    </div>
                )}
            </main>




            <Footer />
        </>
    );
}