import { Navigation } from "./components/Navigation/Navigation.js";
import { Progress } from "@/components/ui/progress";
import { Navigation } from "./components/Navigation/Navigation.js";
import { Progress } from "@/components/ui/progress";
import "./App.css";
import pic from "./components/Picture/chemik.png";

export const App = () => {
  return (
    <main className="w-full">
      <header className="header">
        <Navigation />
      </header>
      <div className="wrapper">
        <section className="column column--1">
          <div className="title">UMIEJĘTNOŚCI</div>
          <div className="progressBars">
            <Progress value={41} className="bg-[#282828]" />
            <Progress value={63} className="bg-[#282828]" />
            <Progress value={52} className="bg-[#282828]" />
          </div>
        </section>

        <section className="column column--2">
          <img src={pic} width="300px" />
          <div className="title">ŚCIEŻKA SZALONY CHEMIK</div>
        </section>

        <section className="column column--3">
          <div className="title">AKTUALNE ZADANIA</div>

          <div className="zadania">ZADANIE</div>
          <div className="zadania">ZADANIE</div>
          <div className="zadania">ZADANIE</div>
        </section>
      </div>
    </main>
  );
};

export default App;
