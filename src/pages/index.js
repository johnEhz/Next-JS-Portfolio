import About from "../components/About";
import Contact from "../components/Contact";
import ProjectList from "../components/Projects/ProjectList";
import TechList from "../components/Knowledge/TechList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function IndexPage() {
  return (
    <>
      <ToastContainer />
      <About />
      <TechList />
      <ProjectList />
      <Contact />
    </>
  );
}
