import Background from "../pages/Background";
import "../pages/style.css";
import { FloatingNavDemo } from "../pages/Navbar";
import About from "../pages/About";
import Services from "../pages/Services";
import Team from "../pages/Team";

export default function Home() {
  return (
    <div className="home">
      <Background />
      <FloatingNavDemo />
      <About />
      <Services />
      <Team />
    </div>
  );
}
