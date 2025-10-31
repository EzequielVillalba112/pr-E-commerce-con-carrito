import { create } from "zustand";

export const ProductCart = create((set, get) => ({
  cart: JSON.parse(localStorage.getItem("cart")) || [],

  addToCart: (product) => {
    set((state) => {
      const existingProduct = state.cart.find((item) => item.id === product.id);

      let updatedCart;
      if (existingProduct) {
        updatedCart = state.cart.map((item) =>
          item.id === product.id ? { ...item, lot: item.lot + 1 } : item
        );
      } else {
        updatedCart = [...state.cart, { ...product, lot: 1 }];
      }

      localStorage.setItem("cart", JSON.stringify(updatedCart));

      return { cart: updatedCart };
    });
  },
  updateLot: (productId, action) => {
    set((state) => {
      const updatedCart = state.cart.map((item) => {
        if (item.id === productId) {
          const newLot = action === "increment" ? item.lot + 1 : item.lot - 1;
          return { ...item, lot: Math.max(1, newLot) };
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { cart: updatedCart };
    });
  },
  removeFromCart: (productId) => {
    set((state) => {
      const updatedCart = state.cart.filter((item) => item.id !== productId);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { cart: updatedCart };
    });
  },
  clearCart: () => {
    set({ cart: [] });
    localStorage.removeItem("cart");
  },
}));
