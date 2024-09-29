import { useState } from "react";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart";
import { DotProps, Line, LineChart, TooltipProps, XAxis } from "recharts";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import * as LucideIcons from "lucide-react";
import { ChevronRight } from "lucide-react";
import { Navigation } from "@/components/Navigation/Navigation";

const chartData = [
  {
    month: "Zaliczony dział",
    desktop: 2,
    materials: [
      { text: "Start of your journey", color: "#00ff91" },
      { text: "Start of your journey", color: "#00ff91" },
      { text: "Start of your journey", color: "#00ff91" },
      { text: "Start of your journey", color: "#00ff91" },
    ],
  },
  {
    month: "Inny zaliczony dział",
    desktop: 5,
    materials: [
      { text: "Start of your journey", color: "#00ff91" },
      { text: "Start of your journey", color: "#00ff91" },
      { text: "Start of your journey", color: "#00ff91" },
      { text: "Start of your journey", color: "#00ff91" },
    ],
  },
  {
    month: "Aktualny dział",
    desktop: 3,
    materials: [
      { text: "Start of your journey", color: "#00ff91" },
      { text: "Start of your journey", color: "#fc005b" },
      { text: "Start of your journey", color: "#00ff91" },
      { text: "Start of your journey", color: "#fc005b" },
    ],
  },
  {
    month: "Następny dział",
    desktop: 5,
    materials: [
      { text: "Start of your journey", color: "#fc005b" },
      { text: "Start of your journey", color: "#fc005b" },
      { text: "Start of your journey", color: "#fc005b" },
      { text: "Start of your journey", color: "#fc005b" },
    ],
  },
  {
    month: "Przyszły dział",
    desktop: 5,
    materials: [
      { text: "Start of your journey", color: "#fc005b" },
      { text: "Start of your journey", color: "#fc005b" },
      { text: "Start of your journey", color: "#fc005b" },
      { text: "Start of your journey", color: "#fc005b" },
    ],
  },
  {
    month: "Przyszły dział",
    desktop: 3,
    materials: [
      { text: "Start of your journey", color: "#fc005b" },
      { text: "Start of your journey", color: "#fc005b" },
      { text: "Start of your journey", color: "#fc005b" },
      { text: "Start of your journey", color: "#fc005b" },
    ],
  },
  {
    month: "Przyszły dział",
    desktop: 4,
    materials: [
      { text: "Start of your journey", color: "#fc005b" },
      { text: "Start of your journey", color: "#fc005b" },
      { text: "Start of your journey", color: "#fc005b" },
      { text: "Start of your journey", color: "#fc005b" },
    ],
  },
  {
    month: "Przyszły dział",
    desktop: 2,
    materials: [
      { text: "Start of your journey", color: "#fc005b" },
      { text: "Start of your journey", color: "#fc005b" },
      { text: "Start of your journey", color: "#fc005b" },
      { text: "Start of your journey", color: "#fc005b" },
    ],
  },
  {
    month: "Przyszły dział",
    desktop: 5,
    materials: [
      { text: "Start of your journey", color: "#fc005b" },
      { text: "Start of your journey", color: "#fc005b" },
      { text: "Start of your journey", color: "#fc005b" },
      { text: "Start of your journey", color: "#fc005b" },
    ],
  },
  {
    month: "Przyszły dział",
    desktop: 3,
    materials: [
      { text: "Start of your journey", color: "#fc005b" },
      { text: "Start of your journey", color: "#fc005b" },
      { text: "Start of your journey", color: "#fc005b" },
      { text: "Start of your journey", color: "#fc005b" },
    ],
  },
];

export default function Learning() {
  const [activeDot, setActiveDot] = useState<number>(0);
  const [activeDotTitle, setActiveDotTitle] = useState<string>(
    chartData[2].month
  );

  const chartConfig: ChartConfig = {
    desktop: {
      label: "Desktop",
      color: "#8884d8",
    },
  } satisfies ChartConfig;

  const customDot = (props: DotProps & { index?: number }) => {
    const { cx, cy, index } = props as {
      cx: number;
      cy: number;
      index: number;
    };
    let fill = "#fff";
    let stroke = "#fff";
    let hoverFill = fill;
    let hoverStroke = "#00ff91";

    if (index === 0 || index === 1) {
      fill = "#000";
      stroke = "#000";
      hoverFill = "#4f4f4f";
      hoverStroke = "#4f4f4f";
    } else if (index === 2) {
      fill = "#1139ff";
      stroke = "#1139ff";
      hoverFill = "#00ff91";
      hoverStroke = "#00ff91";
    } else if (index > 2) {
      stroke = "#1139ff";
    }

    return (
      <circle
        r={30}
        cx={cx}
        cy={cy}
        fill={fill}
        stroke={stroke}
        strokeWidth={4}
        style={{
          transition: "all 300ms ease-in-out",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.setAttribute("r", "30");
          e.currentTarget.setAttribute("stroke-width", "6");
          e.currentTarget.setAttribute("fill", hoverFill);
          e.currentTarget.setAttribute("stroke", hoverStroke);
        }}
        onClick={() => {
          setActiveDot(index);
          setActiveDotTitle(chartData[index].month);
        }}
        onMouseLeave={(e) => {
          e.currentTarget.setAttribute("r", "30");
          e.currentTarget.setAttribute("stroke-width", "4");
          e.currentTarget.setAttribute("fill", fill);
          e.currentTarget.setAttribute("stroke", stroke);
        }}
      />
    );
  };

  const CustomTooltip = ({
    active,
    payload,
    label,
  }: TooltipProps<ValueType, NameType>) => {
    const dataPoint = chartData.find((item) => item.month === label);

    if (active && payload && payload.length && dataPoint) {
      return (
        <div className="bg-green-custom-light p-2 border border-gray-300 rounded shadow">
          <p className="font-bold text-black mb-4 text-base uppercase">
            {label}
          </p>
          {dataPoint.materials.map((material, index) => (
            <p
              key={index}
              className="text-sm font-bold uppercase"
              style={{ color: material.color }}
            >
              {material.text}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const generateRandomCards = (seed: number) => {
    const iconNames = Object.keys(LucideIcons);
    const lorem =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    return Array.from({ length: 6 }, (_, i) => {
      const randomIconName =
        iconNames[Math.floor((seed * (i + 1) * 13) % iconNames.length)];
      const IconComponent = LucideIcons[
        randomIconName as keyof typeof LucideIcons
      ] as React.ComponentType<LucideIcons.LucideProps>;
      const title = `Materiały szkoleniowe`;
      const content = lorem.slice(Math.floor(Math.random() * 100));

      return (
        <Card
          key={`${seed}-${i}`}
          className="w-[450px] group rounded-xl hover:bg-green-custom-light"
        >
          <CardHeader className="uppercase flex flex-row group-hover:text-black text-white bg-blue-custom group-hover:bg-green-custom h-10 items-center gap-2">
            <IconComponent className="w-8 h-8" />
            <CardTitle className="text-base">{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-left p-6 uppercase text-sm">{content}</p>
          </CardContent>
        </Card>
      );
    });
  };

  return (
    <>
      <Navigation />
      <div className="flex mt-12 flex-col gap-4 gap-y-12 w-screen overflow-hidden ">
        <div className="flex pl-32">
          <section className="flex items-center justify-center">
            <div className="flex gap-4 items-center">
              <div className="w-[1400px] h-[145px] overflow-x-scroll scrollbar-none">
                <ChartContainer
                  className="w-[2400px] h-[145px]"
                  config={chartConfig}
                >
                  <LineChart
                    accessibilityLayer
                    data={chartData}
                    margin={{
                      left: 32,
                      right: 12,
                    }}
                  >
                    <ChartTooltip cursor={false} content={<CustomTooltip />} />
                    <XAxis dataKey="month" hide />
                    <Line
                      dataKey="desktop"
                      type="monotone"
                      stroke="black"
                      strokeWidth={4}
                      dot={customDot}
                      fill="#222"
                      r={30}
                    />
                  </LineChart>
                </ChartContainer>
              </div>
            </div>
          </section>
        </div>
        <div className="flex gap-4 items-center pl-32 w-full ">
          <ChevronRight className="w-12 h-12 text-blue-custom" />
          <h2 className="text-2xl text-nowrap text-blue-custom font-bold">
            {activeDotTitle}
          </h2>
        </div>
        <section className="flex flex-wrap pl-32  gap-12">
          {generateRandomCards(activeDot)}
        </section>
      </div>
    </>
  );
}
