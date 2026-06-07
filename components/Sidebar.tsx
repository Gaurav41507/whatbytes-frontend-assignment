"use client";

import { useState } from "react";
import { useFilters } from "@/context/FilterContext";
import { Range } from "react-range";
import {
    useRouter,
    useSearchParams,
} from "next/navigation";

import { useEffect } from "react";

export default function Sidebar() {
    const {
        category,
        setCategory,
        minPrice,
        maxPrice,
        setMinPrice,
        setMaxPrice,
    } = useFilters();
    const router = useRouter();
    const searchParams = useSearchParams();
    useEffect(() => {
        const urlCategory =
            searchParams.get("category");

        const urlPrice =
            searchParams.get("price");

        if (urlCategory) {
            setCategory(urlCategory);
        }

        if (urlPrice) {
            setMaxPrice(Number(urlPrice));
        }
    }, [searchParams, setCategory, setMaxPrice]);

    return (
        <aside className="w-full lg:max-w-[16rem]">
            <div className="flex flex-col gap-[1.25rem]">
                {/* Top Filter Card */}
                <div className="rounded-[0.75rem] bg-[#0058B6] p-[1.25rem] text-white shadow-sm">
                    <h2 className="mb-[1.25rem] text-[1.75rem] font-semibold">
                        Filters
                    </h2>

                    {/* Category */}
                    <div>
                        <h3 className="mb-[0.75rem] text-[1.15rem] font-medium">
                            Category
                        </h3>

                        <div className="space-y-[0.75rem]">
                            {["All", "Electronics", "Clothing", "Accessories"].map((item) => (
                                <label
                                    key={item}
                                    className="flex cursor-pointer items-center gap-[0.75rem]"
                                >
                                    <input
                                        type="radio"
                                        name="category1"
                                        checked={category === item}
                                        onChange={() => {
                                            setCategory(item);

                                            router.push(
                                                `/?category=${item}&price=${maxPrice}`
                                            );
                                        }} className="
                                            h-[1.25rem]
                                            w-[1.25rem]
                                            appearance-none
                                            rounded-full
                                            border-1
                                            border-white
                                            bg-transparent
                                            checked:border-[4px]
                                            checked:border-white"
                                    />

                                    <span className="text-[1rem]">{item}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Price */}
                    <div className="mt-[2rem]">
                        <h3 className="mb-[1rem] text-[1.15rem] font-medium">
                            Price
                        </h3>

                        <Range
                            step={10}
                            min={0}
                            max={1000}
                            values={[minPrice, maxPrice]}
                            onChange={(values) => {
                                setMinPrice(values[0]);
                                setMaxPrice(values[1]);

                                router.push(
                                    `/?category=${category}&price=${values[1]}`
                                );
                            }}
                            renderTrack={({ props, children }) => (
                                <div
                                    {...props}
                                    className="h-[4px] w-full rounded-full bg-white/40"
                                >
                                    {children}
                                </div>
                            )}
                            renderThumb={({ props: { key, ...props } }) => (
                                <div
                                    key={key}
                                    {...props}
                                    className="h-5 w-5 rounded-full border-2 border-white bg-white shadow"
                                />
                            )}
                        />

                        <div className="mt-4 flex justify-between text-[1rem]">
                            <span>${minPrice}</span>
                            <span>${maxPrice}</span>
                        </div>
                    </div>
                </div>

                {/* Bottom White Card */}
                <div className="rounded-[0.75rem] bg-white p-[1.25rem] shadow-sm">
                    <h2 className="mb-[1.25rem] text-[1.5rem] font-semibold text-[#1f2937]">
                        Category
                    </h2>

                    <div className="space-y-[0.75rem]">
                        {["All", "Electronics", "Clothing", "Accessories"].map((item) => (
                            <label
                                key={item}
                                className="flex cursor-pointer items-center gap-[0.75rem]"
                            >
                                <input
                                    type="radio"
                                    name="category2"
                                    checked={category === item}
                                    onChange={() => setCategory(item)}
                                    className="
                                        h-[1.35rem]
                                        w-[1.35rem]
                                        appearance-none
                                        rounded-full
                                        border-2
                                        border-[#2563EB]
                                        bg-white
                                        checked:border-[5px]
                                        checked:border-[#2563EB]"
                                />

                                <span className="text-[1rem] text-[#374151]">
                                    {item}
                                </span>
                            </label>
                        ))}
                    </div>

                    <div className="mt-[2rem]">
                        <h3 className="mb-[0.75rem] text-[1.15rem] font-medium text-[#1f2937]">
                            Price
                        </h3>

                        <select className="w-full rounded-[0.5rem] border border-gray-300 px-[0.75rem] py-[0.6rem] text-[0.95rem] outline-none">
                            <option>5000</option>
                            <option>10000</option>
                            <option>15000</option>
                            <option>20000</option>
                        </select>
                    </div>
                </div>
            </div>
        </aside>
    );
}