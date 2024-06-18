import { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import style from "./PageDash.module.css";

const PageDash = () => {
  const chartRef = useRef(null);
  const [tabSemana, setTabSemana] = useState(true);
  const [data, setData] = useState([]);
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    if (tabSemana) {
      try {
        const fetchTasks = async () => {
          const user = JSON.parse(localStorage.getItem("user"));
          const response = await fetch(
            `http://localhost:4000/api/tasks/dash/${user._id}?tipo=semana`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const data = await response.json();
          if (response.ok) {
            setLabels([
              "Segunda",
              "Terça",
              "Quarta",
              "Quinta",
              "Sexta",
              "Sábado",
              "Domingo",
            ]);
            setData(data);
            console.log(data);
          } else {
            console.log("Erro ao buscar tarefas");
          }
        };
        fetchTasks();
      } catch (error) {
        console.log("Erro ao buscar tarefas");
      }
    }
  }, [tabSemana]);

  useEffect(() => {
    const ctx = document.getElementById("myChart");
    chartRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Tarefas",
            data: data,
            fill: "var(--azul-cerceta)",
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      },
      options: {
        responsive: true,
        animation: {
          duration: 2000,
        },
        elements: {
          bar: {
            backgroundColor: "#511abe",
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 1,
            },
          },
        },
      }
    });

    return () => {
      chartRef.current.destroy();
    };
  }, [data, labels]);

  return (
    <div className={style.body}>
      {
        <div className={style.container}>
          <div className={style.header}>
            <h1 className={style.title}>Dashboard semanal</h1>
          </div>
          <canvas id="myChart"></canvas>
        </div>
      }
    </div>
  );
};

export default PageDash;
