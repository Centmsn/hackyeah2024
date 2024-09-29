import { Navigation } from "./components/Navigation/Navigation.js";
import { Progress } from "@/components/ui/progress";
import "./App.css";
import pic from "./components/Picture/chemik.png";
import { useEffect, useState } from "react";
import Badge from "/badge.png";
import Badge1 from "/badge1.png";
import { ChevronRight } from "lucide-react";

export const App = () => {
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [progress3, setProgress3] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setProgress1(41);
    }, 500);
    setTimeout(() => {
      setProgress2(63);
    }, 700);
    setTimeout(() => {
      setProgress3(52);
    }, 900);
  }, []);
  return (
    <main className="w-full">
      <header className="header">
        <Navigation />
      </header>
      <div className="wrapper pt-32 w-10/12 mx-auto grid grid-cols-3 h-[700px]">
        <section className="flex flex-col justify-between">
          <div className="flex flex-col gap-y-4">
            <p className="text-black text-2xl font-bold">
              ŚCIEŻKA SZALONY CHEMIK
            </p>
            <p className="text-black text-xl">UMIEJĘTNOŚCI</p>
            <div className="progressBars">
              <Progress
                value={progress1}
                className="bg-[#282828] h-8 [&_span]:left-6"
              />
              <Progress
                value={progress2}
                className="bg-[#282828] h-8 [&_span]:left-6"
              />
              <Progress
                value={progress3}
                className="bg-[#282828] h-8 [&_span]:left-6"
              />
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div className="flex">
              <ChevronRight className="w-10 h-10 text-black" />
              <p className="text-xl flex items-center uppercase  text-black">
                Wychowawca
              </p>
            </div>
            <div className="flex">
              <ChevronRight className="w-10 h-10 text-black" />
              <p className="text-xl flex items-center uppercase  text-black">
                Mentor Kierunkowy
              </p>
            </div>
            <div className="flex">
              <ChevronRight className="w-10 h-10 text-black" />
              <p className="text-xl flex items-center uppercase  text-black">
                Talenty/predyspozycje
              </p>
            </div>
          </div>
        </section>

        <section className="flex w-full justify-end">
          <img
            src={pic}
            width="500px"
            className="absolute top-[-2%] left-[46%] "
          />
        </section>

        <section className="z-10 pt-12 w-full flex  items-end gap-y-6  flex-col">
          <div className="flex  items-center gap-x-6">
            <span className="text-xl uppercase  text-black">
              Odznaka za osiągnięcie
            </span>
            <img src={Badge} className="h-12 w-12" />
          </div>
          <div className="flex  items-center gap-x-6">
            <span className="text-xl uppercase  text-black">
              Odznaka za osiągnięcie
            </span>
            <img src={Badge} className="h-12 w-12" />
          </div>
          <div className="flex  items-center gap-x-6">
            <span className="text-xl uppercase  text-black">
              Odznaka za osiągnięcie
            </span>
            <img src={Badge1} className="h-12 w-12" />
          </div>
        </section>
      </div>
    </main>
  );
};

export default App;
