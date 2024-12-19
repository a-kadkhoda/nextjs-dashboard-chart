import Card from "@/components/Card";
import Link from "next/link";



const CategoryPage = () => {
  return (
    <>
      <main className="min-h-screen my-32 ">
        <div className="container grid grid-cols-6 gap-10 ">
          {products?.map((item) => {
            return (
              <Link
                key={item.id}
                className="flex justify-center"
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

export default CategoryPage;
