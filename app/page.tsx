import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Nosotros from "@/components/Nosotros";
import ServiciosDestacados from "@/components/ServiciosDestacados";
import GuiaTratamientos from "@/components/GuiaTratamientos";
import Servicios from "@/components/Servicios";
import Testimonios from "@/components/Testimonios";
import FAQ from "@/components/FAQ";
import InfoPractica from "@/components/InfoPractica";
import Reservas from "@/components/Reservas";
import AgendarOnline from "@/components/AgendarOnline";
import Contraindicaciones from "@/components/Contraindicaciones";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Nosotros />
      <ServiciosDestacados />
      <GuiaTratamientos />
      <Servicios />
      <Testimonios />
      <FAQ />
      <InfoPractica />
      <Reservas />
      <AgendarOnline />
      <Contraindicaciones />
      <CTAFinal />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
