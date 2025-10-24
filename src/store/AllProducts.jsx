import { create } from "zustand";

export const AllProduct = create((set, get) => ({
  products: [],
  categories:[],
  fetchProducts: async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      set({ products: data });
      return data;
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  },
  fetchCategories: async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products/categories");
      const data = await res.json();
      set({ categories: data });
      return data;
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  },
}));
