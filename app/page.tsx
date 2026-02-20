import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Nosotros from "@/components/Nosotros";
import Servicios from "@/components/Servicios";
import Contraindicaciones from "@/components/Contraindicaciones";
import InfoPractica from "@/components/InfoPractica";
import Reservas from "@/components/Reservas";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Nosotros />
      <Servicios />
      <Contraindicaciones />
      <InfoPractica />
      <Reservas />
      <CTAFinal />
      <Footer />
    </>
  );
}
