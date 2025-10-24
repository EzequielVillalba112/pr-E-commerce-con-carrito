import { useQuery } from "@tanstack/react-query";
import { ProductsPageTemplate } from "../components/template/ProductsPageTemplate";
import { AllProduct } from "../store/AllProducts";

export const AllProducts = () => {
  const {
    productsAll,
    productsCategory,
    categories,
    fetchProducts,
    fetchCategories,
  } = AllProduct();

  const { isLoading, error } = useQuery({
    queryKey: ["all-products"],
    queryFn: async () => {
      const products = await fetchProducts();
      const categories = await fetchCategories();
      return { products, categories };
    },
  });

  return (
    <ProductsPageTemplate productsAll={productsAll} productsCategory={productsCategory} categories={categories} />
  );
};
