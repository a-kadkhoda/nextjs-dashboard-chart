import Link from "next/link";

const DashboardNavbar = () => {
  return (
    <>
      <nav className="fixed w-full top-0 left-0 right-0 h-24 bg-slate-800 border-b shadow z-50">
        <div className="container h-full grid grid-cols-2">
          <div className="flex justify-start items-center gap-x-7 text-white child-hover:text-orange-800 child-hover:transition-colors">
            <Link href="/dashboard/products-chart">ProductsChart</Link>
          </div>
          <div className="text-white flex justify-end items-center child-hover:text-orange-800 child-hover:transition-colors">
            <Link className="text-xl" href="/">
              Home
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};



export default DashboardNavbar