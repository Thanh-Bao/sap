import { Hero } from "@/components/Hero";
import { Product } from "@/types";

type Props = {
  products: Product[];
  categories: string[];
};

export default function Home({ products, categories }: Props) {
console.log(products)
  return (
    <Hero categories={categories}
          products={products} />
       
  );
  
}




