import { create } from "zustand";

export const ProductCart = create((set, get) => {
  return {
    cart: JSON.parse(localStorage.getItem("cart")) || [],
    addToCart: (product) => {
      set((state) => {
        const existingProduct = state.cart.find(
          (item) => item.id === product.id
        );
        if (existingProduct) {
          return {
            cart: state.cart.map((item) =>
              item.id === product.id ? { ...item, lot: item.lot + 1 } : item
            ),
          };
        }
        addLot(product);
        return set({ cart: [...get().cart, product] });
      });
      localStorage.setItem("cart", JSON.stringify(get().cart));
    },
    clearCart: () => {
      set({ cart: [] });
      localStorage.removeItem("cart");
    },
  };
});
