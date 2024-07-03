import Footer from "@/components/footer";
import NavBar from "@/components/nav";
import About from "./pages/about";
import Contact from "./pages/contact";
import HomePage from "./pages/home";
import Project from "./pages/projects";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen flex flex-col gap-10 ">
        <HomePage />
        <About />
        <Project />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
