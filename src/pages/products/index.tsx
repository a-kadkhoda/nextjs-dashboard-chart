import Card from "@/components/Card";
import { logMaker } from "@/queries/logger";
import { getProducts } from "@/queries/product";
import {
  productBaseUrl,
  productsUrl,
} from "@/shared/consts";
import { Logger, ProductItems } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useSWR from "swr";

const ProductsPage = () => {
  
  const pathename = usePathname()

  const body: Logger = {
    endpoint :`${productBaseUrl}${productsUrl}` ,
    date: new Date().toISOString(),
    url: `${pathename}`,
  };

  const {data:products} = useSWR<ProductItems[]>(["/products"],getProducts,{
    onSuccess: ()=>{
      logMaker(body)
    }
  })


  return (
    <>
      <main className="min-h-screen my-32 ">
        <div className="container grid grid-cols-6 gap-10 ">
          {products?.map((item: ProductItems) => {
            return (
              <Link
                key={item.id}
                className="flex justify-cente"
                href={`/products/${item.category}/${item.id}`}
              >
                <Card {...item} />
              </Link>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default ProductsPage;
