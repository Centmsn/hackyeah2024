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
      <section className="content">
        <div className="title">UMIEJĘTNOŚCI</div>
        <div className="progressBars">
          <Progress value={41} className="bg-[#282828]" />
          <Progress value={63} className="bg-[#282828]" />
          <Progress value={52} className="bg-[#282828]" />
        </div>
      </section>
      <section>
        <img src={pic} width="300px" />
        <div></div>
      </section>
    </main>
  );
};

export default App;
