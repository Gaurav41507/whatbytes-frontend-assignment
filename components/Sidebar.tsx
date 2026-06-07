"use client";

import { useState } from "react";

export default function Sidebar() {
    const [price, setPrice] = useState(0);

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
                            {["All", "Electronics", "Clothing", "Home"].map((item) => (
                                <label
                                    key={item}
                                    className="flex cursor-pointer items-center gap-[0.75rem]"
                                >
                                    <input
                                        type="radio"
                                        name="category1"
                                        defaultChecked={item === "All"}
                                        className="h-[1rem] w-[1rem] accent-white"
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

                        <input
                            type="range"
                            min="0"
                            max="1000"
                            value={price}
                            onChange={(e) => setPrice(Number(e.target.value))}
                            className="custom-range w-full cursor-pointer"
                        />

                        {/* Current Value */}
                        <div className="mt-[0.5rem] flex justify-center">
                            <span className="text-[0.95rem] font-medium">
                                ${price}
                            </span>
                        </div>

                        {/* Min Max */}
                        <div className="mt-[0.35rem] flex justify-between text-[1rem]">
                            <span>0</span>
                            <span>1000</span>
                        </div>
                    </div>
                </div>

                {/* Bottom White Card */}
                <div className="rounded-[0.75rem] bg-white p-[1.25rem] shadow-sm">
                    <h2 className="mb-[1.25rem] text-[1.5rem] font-semibold text-[#1f2937]">
                        Category
                    </h2>

                    <div className="space-y-[0.75rem]">
                        {["All", "Electronics", "Clothing", "Home"].map((item) => (
                            <label
                                key={item}
                                className="flex cursor-pointer items-center gap-[0.75rem]"
                            >
                                <input
                                    type="radio"
                                    name="category2"
                                    defaultChecked={item === "All"}
                                    className="h-[1rem] w-[1rem] accent-blue-600"
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