// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Projects from "./projects";
import Team from "./team";
import ContactForm from "./contact-form";
import Services from "./services";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Team />
      <ContactForm />
      <Footer />
    </>
  );
}
