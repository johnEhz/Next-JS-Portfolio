import About from "../components/About";
import Contact from "../components/Contact";
import ProjectList from "../components/Projects/ProjectList";
import TechList from "../components/Knowledge/TechList";
import { ToastContainer } from "react-toastify";
import Head from "next/head";
import "react-toastify/dist/ReactToastify.css";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>John Hernandez</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Portafolio personal de John Echeverry Hernandez"
        />
        <meta name="author" content="John Hernandez" />
        <link rel="icon" href="/images/dev.png"></link>
      </Head>
      <ToastContainer position="top-right" closeOnClick theme="dark" />
      <About />
      <TechList />
      <ProjectList />
      <Contact />
    </>
  );
}
