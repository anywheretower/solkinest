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

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Solkinest",
  description:
    "Centro de estética profesional en Talca. Tratamientos corporales y faciales con aparatología de vanguardia y dermocosméticos profesionales.",
  url: "https://www.solkinest.cl",
  telephone: "+56957394822",
  image: "https://www.solkinest.cl/logo-solkinest.png",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Las Rastras 1285, Centro Pichimapu, Piso 8, Of. 808",
    addressLocality: "Talca",
    addressRegion: "Maule",
    addressCountry: "CL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -35.4264,
    longitude: -71.6554,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "11:00",
      closes: "15:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "16:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tratamientos Estéticos",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tratamiento Full Reductivo",
          description:
            "Moldea y reafirma tu silueta corporal. Sesión de 50 minutos con aparatología profesional.",
        },
        price: "35000",
        priceCurrency: "CLP",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Depilación Triláser Soprano Ice",
          description:
            "Eliminación de vello indolora con tecnología de tres longitudes de onda. Apta para todo tipo de piel y vello.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Rejuvenecimiento Facial",
          description:
            "Reduce arrugas y revitaliza la piel del rostro. Sesión de 50 minutos.",
        },
        price: "35000",
        priceCurrency: "CLP",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Masaje de Relajación",
          description:
            "Alivia tensiones musculares y renuévate de energías. Sesiones de 25 o 50 minutos.",
        },
        price: "15000",
        priceCurrency: "CLP",
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Los tratamientos duelen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Nuestros tratamientos son no invasivos y están diseñados para ser cómodos. La depilación láser Soprano Ice cuenta con sistema de enfriamiento que hace la sesión prácticamente indolora.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuántas sesiones necesito para ver resultados?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende del tratamiento y la zona. En general, los resultados comienzan a notarse desde la primera sesión, pero recomendamos un mínimo de 6 sesiones para resultados óptimos. En depilación láser se recomiendan 6 sesiones, una por cada ciclo de crecimiento del vello.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo reservo mi hora?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Escríbenos por WhatsApp al +56 9 5739 4822. La sesión se confirma con pago anticipado por transferencia bancaria o efectivo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo cancelar mi reserva?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, hasta 3 horas antes de tu hora agendada. Las reservas no canceladas dentro del plazo no son reembolsables.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo realizarme tratamientos si estoy embarazada o amamantando?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los tratamientos con aparatología no se realizan durante el embarazo ni la lactancia. El tratamiento reductivo post parto puede comenzarse a los 2 meses de un parto normal o 3 meses de cesárea, y una vez finalizada la lactancia.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo combinar zonas en una misma sesión?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. En el tratamiento full reductivo puedes agendar hasta 3 zonas en el mismo día. También puedes distribuir las sesiones de un pack entre distintas zonas según tus objetivos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa si llego tarde a mi sesión?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El tiempo de retraso se descuenta de tu sesión. Te recomendamos llegar con unos minutos de anticipación.",
      },
    },
    {
      "@type": "Question",
      name: "¿La depilación láser funciona en todo tipo de piel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. El equipo Soprano Ice Triláser combina tres longitudes de onda que lo hacen efectivo en todo tipo de pieles y vellos, incluyendo vellos finos y claros.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <ServiciosDestacados />
        <GuiaTratamientos />
        <Nosotros />
        <Servicios />
        <Testimonios />
        <FAQ />
        <InfoPractica />
        <Reservas />
        <AgendarOnline />
        <Contraindicaciones />
        <CTAFinal />
        <Footer />
      </main>
      <WhatsAppButton />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}
