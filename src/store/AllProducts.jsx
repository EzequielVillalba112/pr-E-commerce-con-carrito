import { create } from "zustand";

export const AllProduct = create((set, get) => ({
  productsAll: [],
  categories:[],
  productsCategory: [],
  fetchProducts: async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      set({ productsAll: data });
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  },
  fetchCategories: async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products/categories");
      const data = await res.json();
      set({ categories: data });
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  },
  setProductsByCategory: (category) => {
    const allProducts = get().productsAll;
    const filteredProducts = allProducts.filter(
      (product) => product.category === category
    );
    set({ productsCategory: filteredProducts });
  }
}));
