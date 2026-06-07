"use client";

import {
    createContext,
    useContext,
    useState,
    ReactNode,
} from "react";

interface FilterContextType {
    search: string;
    setSearch: (value: string) => void;

    category: string;
    setCategory: (value: string) => void;

    maxPrice: number;
    setMaxPrice: (value: number) => void;
}

const FilterContext = createContext<
    FilterContextType | undefined
>(undefined);

export function FilterProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [maxPrice, setMaxPrice] = useState(1000);

    return (
        <FilterContext.Provider
            value={{
                search,
                setSearch,
                category,
                setCategory,
                maxPrice,
                setMaxPrice,
            }}
        >
            {children}
        </FilterContext.Provider>
    );
}

export function useFilters() {
    const context = useContext(FilterContext);

    if (!context) {
        throw new Error(
            "useFilters must be used inside FilterProvider"
        );
    }

    return context;
}