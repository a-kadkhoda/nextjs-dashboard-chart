import DashboardLayout from "@/components/DashboardLayout";
import Layout from "@/components/Layout";
import ProductLayout from "@/components/ProductLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { usePathname } from "next/navigation";
import { FC } from "react";

type LayoutComponent = FC<{ children: React.ReactNode }>;


export default function App({ Component, pageProps }: AppProps) {

const path:string = usePathname()


  const getLayout = () :LayoutComponent=>{
    if (path === "/dashboard" || path === "/dashboard/products-chart") {
      return DashboardLayout;
    }
    if (path === "/") {
      return Layout;
    }
    return ProductLayout;

  }
  const GetLayout = getLayout()
  return (

        <GetLayout>
            <Component {...pageProps} />
        </GetLayout>

  );
}
