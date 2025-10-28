import { useQuery } from "@tanstack/react-query";
import { ProductsPageTemplate } from "../components/template/ProductsPageTemplate";
import { AllProduct } from "../store/AllProducts";
import { ProductCart } from "../store/ProductCart";

export const AllProducts = () => {
  const {
    productsAll,
    productsCategory,
    categories,
    fetchProducts,
    fetchCategories,
  } = AllProduct();

  const { addToCart, cart } = ProductCart();

  const { isLoading, error } = useQuery({
    queryKey: ["all-products"],
    queryFn: async () => {
      const products = await fetchProducts();
      const categories = await fetchCategories();
      return { products, categories };
    },
  });

  console.log(cart);
  

  return (
    <ProductsPageTemplate
      productsAll={productsAll}
      productsCategory={productsCategory}
      categories={categories}
      addToCart={addToCart}
    />
  );
};
