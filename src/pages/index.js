import Head from "next/head"
import About from '../components/About'
import Contact from "../components/Contact"
import ProjectList from '../components/Projects/ProjectList'

export default function IndexPage() {
  return (
    <>
      <About />
      <ProjectList />
      <Contact />
    </>
  )
}