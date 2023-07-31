import { BsGithub } from "react-icons/bs";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { About, Projects } from "./pages";

function App() {
  const year = new Date().getFullYear();

  return (
    <>
      <Header />
      <main className="container py-12 min-h-[calc(100vh-88.8px)]">
        <Routes>
          <Route index element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      <footer className="container py-2 flex justify-between items-center text-center md:text-left">
        <span className="text-main-400/50 font-source3 select-none">
          <a
            href="https://creativecommons.org/licenses/by-nd/2.0/"
            className="hover:underline underline-offset-2">
            CC BY-ND 2.0
          </a>{" "}
          {year} &copy; Hibatillah Hasanin
        </span>
        <a href="https://github.com/hibatillah/hibatillah.vercel.app">
          <BsGithub size={20} className="text-main-400 hover:text-main-300" />
        </a>
      </footer>
    </>
  );
}

export default App;
