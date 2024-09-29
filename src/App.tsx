import { Navigation } from "./components/Navigation/Navigation.js";
import { Progress } from "@/components/ui/progress";
import "./App.css";

export const App = () => {
  return (
    <main className="w-full">
      <header className="header">
        <Navigation />
      </header>
      <section className="content">
        <div className="progressBars">
          <Progress value={41} />
          <Progress value={63} />
          <Progress value={52} />
        </div>
      </section>
    </main>
  );
};

export default App;
