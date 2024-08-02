import Loading from "@/components/shared/loading/Loading";
import ReactECharts from "echarts-for-react";
import React, { useEffect, useState } from "react";
import { useGetAllProductsToDashboard } from "@/components/dashboard/hooks/index";

interface Product {
  category: {
    name: string;
  };
}

interface ChartData {
  name: string;
  count: number;
}

const AreaChartComponent: React.FC = () => {
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
          count: count,
        })
      );

      setChartData(formattedData);
    }
  }, [products]);

  if (isLoading) return <Loading />;

  const option = {
    title: {
      text: "Category Count",
    },
    tooltip: {
      trigger: "axis" as const,
    },
    xAxis: {
      type: "category" as const,
      data: chartData.map((item) => item.name),
    },
    yAxis: {
      type: "value" as const,
    },
    series: [
      {
        data: chartData.map((item) => item.count),
        type: "line" as const,
        smooth: true,
        areaStyle: {},
      },
    ],
  };

  return (
    <ReactECharts
      option={option}
      style={{ height: "600px", width: "1000px" }}
    />
  );
};

export default AreaChartComponent;
