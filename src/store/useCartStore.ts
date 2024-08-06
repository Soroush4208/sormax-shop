import create from "zustand";
import { persist } from "zustand/middleware";

export interface ProductStorType {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartState {
  cart: ProductStorType[];
  total: number;
  addToCart: (product: ProductStorType) => void;
  decreasesFromCart: (product: ProductStorType) => void;
  removeOne: (productId: string) => void;
  clearCart: () => void;
}

const useCartStore = create(
  persist<CartState>(
    (set) => ({
      cart: [],
      total: 0,
      addToCart: (product) =>
        set((state) => {
          const existingProduct = state.cart.find((p) => p._id === product._id);
          let updatedCart;
          if (existingProduct) {
            updatedCart = state.cart.map((p) =>
              p._id === product._id
                ? { ...p, quantity: p.quantity + product.quantity }
                : p
            );
          } else {
            updatedCart = [...state.cart, product];
          }
          const newTotal = updatedCart.reduce(
            (acc, p) => acc + p.price * p.quantity,
            0
          );
          return { cart: updatedCart, total: newTotal };
        }),
      decreasesFromCart: (product) =>
        set((state) => {
          const existingProduct = state.cart.find((p) => p._id === product._id);
          let updatedCart;
          if (existingProduct) {
            if (existingProduct.quantity <= product.quantity) {
              updatedCart = state.cart.filter((p) => p._id !== product._id);
            } else {
              updatedCart = state.cart.map((p) =>
                p._id === product._id
                  ? { ...p, quantity: p.quantity - product.quantity }
                  : p
              );
            }
            const newTotal = updatedCart.reduce(
              (acc, p) => acc + p.price * p.quantity,
              0
            );
            return { cart: updatedCart, total: newTotal };
          } else {
            return state;
          }
        }),
      removeOne: (productId) =>
        set((state) => {
          const updatedCart = state.cart.filter((p) => p._id !== productId);
          const newTotal = updatedCart.reduce(
            (acc, p) => acc + p.price * p.quantity,
            0
          );
          return { cart: updatedCart, total: newTotal };
        }),
      clearCart: () => set({ cart: [], total: 0 }),
    }),
    {
      name: "cart-storage",
    }
  )
);

export default useCartStore;
