import { useGetAllProductsToDashboard } from "@/components/dashboard/hooks";
import Loading from "@/components/shared/loading/Loading";
import * as echarts from "echarts";
import ReactECharts from "echarts-for-react";
import React, { useEffect, useState } from "react";

interface Product {
  category: {
    name: string;
  };
}

interface ChartData {
  name: string;
  value: number;
}

const PieChartComponent: React.FC = () => {
  const { data: products, isLoading } = useGetAllProductsToDashboard();
  const [chartData, setChartData] = useState<ChartData[]>([]);

  useEffect(() => {
    if (products) {
      const categoryCounts = products.reduce<Record<string, number>>(
        (acc, product: Product) => {
          const category = product.category.name;
          if (!acc[category]) {
            acc[category] = 0;
          }
          acc[category]++;
          return acc;
        },
        {}
      );

      const formattedData = Object.entries(categoryCounts).map(
        ([category, count]) => ({
          name: category,
          value: count,
        })
      );

      setChartData(formattedData);
    }
  }, [products]);

  if (isLoading) return <Loading />;

  const option: echarts.EChartsOption = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
    },
    series: [
      {
        name: "Product Categories",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "22px",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: chartData,
      },
    ],
  };

  return (
    <ReactECharts
      option={option}
      style={{ height: "700px", width: "1000px" }}
    />
  );
};

export default PieChartComponent;
