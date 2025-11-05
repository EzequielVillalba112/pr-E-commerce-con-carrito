import { useQuery } from "@tanstack/react-query";
import { ProductsPageTemplate } from "../components/template/ProductsPageTemplate";
import { AllProduct } from "../store/AllProducts";
import { ProductCart } from "../store/ProductCart";
import { useEffect, useState } from "react";
import { useIsMobile } from "../hooks/Resolution";
import { Pay } from "../store/Pay";

export const AllProducts = () => {
  const {
    productsAll,
    productsCategory,
    categories,
    fetchProducts,
    fetchCategories,
    searchProductsByName,
    resultSearch,
    clearSearchResults
  } = AllProduct();

  const { addToCart, cart } = ProductCart();
 
  const [searchText, setSearchText] = useState("");
  const isMobile = useIsMobile();

  useEffect(() => {
    if (searchText != "") {
      searchProductsByName(searchText);
    }else{
      clearSearchResults();
    }
  }, [searchText]);

  const { isLoading, error } = useQuery({
    queryKey: ["all-products"],
    queryFn: async () => {
      const products = await fetchProducts();
      const categories = await fetchCategories();
      return { products, categories };
    },
  });

  return (
    <ProductsPageTemplate
      productsAll={productsAll}
      productsCategory={productsCategory}
      categories={categories}
      addToCart={addToCart}
      searchText={searchText}
      setSearchText={setSearchText}
      resultSearch={resultSearch}
      isMobile={isMobile}
    />
  );
};
