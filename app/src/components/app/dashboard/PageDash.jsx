import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";

const PageDash = () => {
  const chartSetting = {
    yAxis: [
      {
        label: "quantidade (un)",
      },
    ],
    width: 1000,
    height: 500,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: "translate(-20px, 0)",
      },
    },
  };
  const dataset = [
    {
      tarefas: 59,
      month: "Jan",
    },
    {
      tarefas: 49,
      month: "Fev",
    },
    {
      tarefas: 40,
      month: "Mar",
    },
    {
      tarefas: 54,
      month: "Abr",
    },
    {
      tarefas: 27,
      month: "Mai",
    },
    {
      tarefas: 60,
      month: "Jun",
    },
    {
      tarefas: 15,
      month: "Jul",
    },
    {
      tarefas: 65,
      month: "Ago",
    },
    {
      tarefas: 51,
      month: "Set",
    },
    {
      tarefas: 60,
      month: "Out",
    },
    {
      tarefas: 67,
      month: "Nov",
    },
    {
      tarefas: 61,
      month: "Dez",
    },
  ];

  const valueFormatter = (value) => `${value}`;

  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: "band", dataKey: "month" }]}
      series={[
        { dataKey: "tarefas", label: "Tarefas", valueFormatter },
      ]}
      {...chartSetting}
      style={{ fontWeight: "bold"}}
    />
  );
};

export default PageDash;