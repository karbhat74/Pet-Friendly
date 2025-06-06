import "./App.css";
import PawDrawLine from "./components/customui/PawDrawLine/PawDrawLine";
import PawAdopt from "./components/customui/PawAdopt";
import PawDonate from "./components/customui/PawDonate";
import PawHarm from "./components/customui/PawHarm";
import PawHeader from "./components/customui/PawHeader";
import PawIntro from "./components/customui/PawIntro";
import PawProgress from "./components/customui/PawProgress";
import AnimalsGrid from "./components/customui/grid-skins/AnimalsGrid";

function App() {
  return (
    <>
      <PawProgress />
      <PawHeader />
      <div className="h-auto bg-[#f5f5f5] flex flex-col justify-center items-center font-prata">
        <PawIntro />
        <PawHarm />
        <PawDrawLine />
        <AnimalsGrid />
        <PawAdopt />
        <PawDonate />
      </div>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-900 text-gray-50">
        <p className="text-xs text-gray-400">
          © 2024 Making Cities Paw-some!. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Built by Karthik
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            CollegeTips.in
          </a>
        </nav>
      </footer>
    </>
  );
}

export default App;
