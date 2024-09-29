import { Line, LineChart } from "recharts";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const STATIC_PATH_NODES = [{ node: 10 }, { node: 17 }, { node: 13 }];
const PATH_LENGTH = 12;
const ACTIVE_PATH_STROKE_WIDTH = 4;
const INACTIVE_PATH_STROKE_WIDTH = 2;
const alternativePathAmount = getNumberFromRange(3, 4);
const changePathButtons = ["Droga numer 1", "Droga numer 2", "Droga numer 3"].slice(0, alternativePathAmount);

function getNumberFromRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateCharConfig(): ChartConfig {
  const chartConfig: Record<string, { label: string; color: string }> = {
    // Static configuration - always present
    node: {
      label: "Node",
      color: "hsl(var(--chart-2))",
    },
  };

  for (let i = 0; i < alternativePathAmount; i++) {
    chartConfig[`alternativePath-${i}`] = {
      label: "",
      color: "lightgray",
    };
  }

  return chartConfig;
}

function generateChartData() {
  const pathNodes = [...STATIC_PATH_NODES];

  for (let i = STATIC_PATH_NODES.length - 1; i < PATH_LENGTH; i++) {
    const isFirstCommonNode = i === STATIC_PATH_NODES.length - 1;

    pathNodes[i] = {
      node: isFirstCommonNode ? pathNodes[i].node : getNumberFromRange(0, 10),
    };

    // Alternative Paths
    for (let j = 0; j < alternativePathAmount; j++) {
      pathNodes[i] = {
        ...pathNodes[i],
        [`alternativePath-${j}`]: isFirstCommonNode ? STATIC_PATH_NODES[i].node : getNumberFromRange(0, 25),
      };
    }
  }

  // Mocked Free Nodes
  for (let i = 0; i < pathNodes.length; i++) {
    for (let j = 0; j < getNumberFromRange(0, 1); j++) {
      let mockedNodeVerticalPosition = pathNodes[i].node;

      while (mockedNodeVerticalPosition - pathNodes[i].node < 5) {
        mockedNodeVerticalPosition = getNumberFromRange(0, 30);
      }

      pathNodes[i] = {
        ...pathNodes[i],
        [`mockedNode-${j}`]: mockedNodeVerticalPosition,
      };
    }
  }

  return pathNodes;
}

export default function Tree() {
  const [activePathIndex, setActivePathIndex] = useState<number>(0);
  const [highlightedPathIndex, setHightlightedPathIndex] = useState<number | null>(null);
  const chartData = useRef(generateChartData());

  function handleHighlightPath(index: number | null) {
    setHightlightedPathIndex(index);
  }

  function handleOnPathChange(index: number) {
    setActivePathIndex(index);
  }

  function generateAlternativePaths() {
    const paths = [];

    for (let i = 1; i < alternativePathAmount; i++) {
      const isHighlighted = highlightedPathIndex === i;

      paths.push(
        <Line
          dataKey={`alternativePath-${i}`}
          type="step"
          className={isHighlighted || activePathIndex === i ? "z-40" : ""}
          stroke={activePathIndex === i ? "rgb(50, 120, 200)" : isHighlighted ? "gray" : "lightgray"}
          onMouseEnter={() => handleHighlightPath(i)}
          onMouseLeave={() => handleHighlightPath(null)}
          strokeWidth={activePathIndex === i ? ACTIVE_PATH_STROKE_WIDTH : INACTIVE_PATH_STROKE_WIDTH}
          dot={{
            r: 15,
          }}
          activeDot={{
            r: 15,
          }}
        />
      );
    }

    return paths;
  }

  function generateMockedNodes() {
    const paths = [];

    for (let i = 0; i < chartData.current.length; i++) {
      paths.push(
        <Line
          dataKey={`mockedNode-${i}`}
          type="step"
          strokeWidth={0}
          dot={{
            r: 15,
            fill: "lightgray",
          }}
          activeDot={{
            r: 15,
          }}
        />
      );
    }

    return paths;
  }

  return (
    <div className="max-w-full">
      <div className="p-4 mx-28 border-b-2 border-blue-800">
        <ToggleGroup variant="outline" type="single">
          {changePathButtons.map((button, index) => (
            <ToggleGroupItem
              className="text-blue-600"
              value={index}
              active={activePathIndex == index}
              onClick={() => handleOnPathChange(index)}
              aria-label={`Toggle ${button}`}
            >
              {button}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      <div className="min-w-full px-12">
        <ChartContainer className="max-h-[600px] w-full" config={generateCharConfig()}>
          <LineChart
            accessibilityLayer
            data={chartData.current}
            margin={{
              top: 24,
              left: 24,
              right: 24,
            }}
          >
            <ChartTooltip
              cursor={false}
              content={
                <Card>
                  <div className="flex items-center justify-center">
                    <CardHeader className="text-2xl py-2">Test</CardHeader>
                    <Badge>Badge</Badge>
                  </div>
                  <CardContent className="w-[300px]">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, optio.
                  </CardContent>
                  <CardHeader className="text-2xl py-2">Test</CardHeader>
                  <CardContent className="w-[300px]">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, optio.
                  </CardContent>
                  <div className="flex items-center gap-2 justify-center">
                    <CardHeader className="text-2xl py-2">Test</CardHeader>
                    <Badge>Badge</Badge>
                  </div>
                  <CardContent className="w-[300px]">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, optio.
                  </CardContent>
                  <div className="flex items-center gap-2 justify-center">
                    <CardHeader className="text-2xl py-2">Test</CardHeader>
                    <Badge>Badge</Badge>
                    <Badge>Badge</Badge>
                  </div>
                  <CardContent className="w-[300px]">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, optio.
                  </CardContent>
                </Card>
              }
            />
            {generateAlternativePaths()}
            {generateMockedNodes()}
            <Line
              dataKey="node"
              type="step"
              strokeWidth={activePathIndex === 0 ? ACTIVE_PATH_STROKE_WIDTH : INACTIVE_PATH_STROKE_WIDTH}
              stroke={activePathIndex === 0 ? "rgb(50, 120, 200)" : "lightgray"}
              className={activePathIndex === 0 ? "z-40" : "-z-10"}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              dot={({ cx, cy, index }: any) => {
                return (
                  <circle
                    className="relative"
                    fill={index < STATIC_PATH_NODES.length ? "rgb(50, 120, 200)" : "white"}
                    stroke="rgb(50, 120, 200)"
                    strokeWidth={2}
                    r={15}
                    cx={cx}
                    cy={cy}
                  ></circle>
                );
              }}
              activeDot={{
                r: 15,
              }}
            ></Line>
          </LineChart>
        </ChartContainer>
      </div>
    </div>
  );
}
