import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Banner from "./components/Banner";
export default function Home() {
  return (
    <main className="w-full" >
		    <Hero />
			<About />
			<Projects />
			<Services />
			<Banner />
			<Contact />
		
     </main>
  );
}



 
 