import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "@/components/ui/button";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
} from "recharts";
import { ChartConfig } from "./components/ui/chart";

function App() {
  const [count, setCount] = useState(0);

  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ];

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#2563eb",
    },
    mobile: {
      label: "Mobile",
      color: "#60a5fa",
    },
  } satisfies ChartConfig;

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Button variant="ghost" onClick={() => setCount((count) => count + 1)}>
          Click me
        </Button>
        <Button
          variant="destructive"
          onClick={() => setCount((count) => count + 1)}
        >
          Click me
        </Button>
        <RadarChart width={500} height={400} data={chartData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="month" />
          <PolarRadiusAxis />
          <Radar
            name={chartConfig.desktop.label}
            dataKey="desktop"
            stroke={chartConfig.desktop.color}
            fill={chartConfig.desktop.color}
            fillOpacity={0.6}
          />
          <Radar
            name={chartConfig.mobile.label}
            dataKey="mobile"
            stroke={chartConfig.mobile.color}
            fill={chartConfig.mobile.color}
            fillOpacity={0.6}
          />
          <Legend />
        </RadarChart>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
