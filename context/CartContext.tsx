"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from "react";

export interface CartItem {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
}

interface CartContextType {
    cartItems: CartItem[];

    addToCart: (product: Omit<CartItem, "quantity">) => void;

    removeFromCart: (id: number) => void;

    increaseQuantity: (id: number) => void;

    decreaseQuantity: (id: number) => void;

    totalItems: number;

    totalPrice: number;
}

const CartContext = createContext<CartContextType | null>(
    null
);

export function CartProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [cartItems, setCartItems] = useState<CartItem[]>(
        []
    );

    // Load Local Storage

    useEffect(() => {
        const storedCart =
            localStorage.getItem("cart");

        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }
    }, []);

    // Save Local Storage

    useEffect(() => {
        localStorage.setItem(
            "cart",
            JSON.stringify(cartItems)
        );
    }, [cartItems]);

    const addToCart = (
        product: Omit<CartItem, "quantity">
    ) => {
        setCartItems((prev) => {
            const existingItem = prev.find(
                (item) => item.id === product.id
            );

            if (existingItem) {
                return prev.map((item) =>
                    item.id === product.id
                        ? {
                            ...item,
                            quantity: item.quantity + 1,
                        }
                        : item
                );
            }

            return [
                ...prev,
                {
                    ...product,
                    quantity: 1,
                },
            ];
        });
    };

    const removeFromCart = (id: number) => {
        setCartItems((prev) =>
            prev.filter((item) => item.id !== id)
        );
    };

    const increaseQuantity = (id: number) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        quantity: item.quantity + 1,
                    }
                    : item
            )
        );
    };

    const decreaseQuantity = (id: number) => {
        setCartItems((prev) =>
            prev
                .map((item) =>
                    item.id === id
                        ? {
                            ...item,
                            quantity: item.quantity - 1,
                        }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    const totalItems = cartItems.reduce(
        (acc, item) => acc + item.quantity,
        0
    );

    const totalPrice = cartItems.reduce(
        (acc, item) =>
            acc + item.price * item.quantity,
        0
    );

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                increaseQuantity,
                decreaseQuantity,
                totalItems,
                totalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error(
            "useCart must be used inside CartProvider"
        );
    }

    return context;
}