import BarChart from "@/components/BarChart";
import { getLogs } from "@/queries/product";
import { ChartData, ChartOptions } from "chart.js";
import React from "react";
import useSWR from "swr";


const ProductsChartPage: React.FC = () => {
  const { data: logs } = useSWR("logs", getLogs);

  const reverseLogs = Object.fromEntries(Object.entries(logs).reverse());
  const labels =Object.keys(reverseLogs) as string[]
  const numbersReq = Object.values(reverseLogs) as number[]
  const data: ChartData<"bar"> = {
    labels: labels,
    datasets: [
      {
        label: "products",
        data: numbersReq,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "requests per day",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <>
      <div className="bg-black" style={{ height: "calc(100vh - 88px - 96px)" }}>
        <div className="container mt-24 flex justify-center items-center h-full">
          <div className="w-[500px]">
            <BarChart data={data} options={options} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsChartPage;
