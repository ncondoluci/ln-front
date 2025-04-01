import { BenefitsSection } from "@/components/Benefits/BenefitsSection";
import Navbar from "@/components/NavBar";
import { PromocodeSection } from "@/components/Promocodes/PromocodeSection";
import Slider from "@/components/Slider";

const sliderImages = [
  {
    url: "https://backwebclub-media.glanacion.com/Club.LN-Strapi/mobile_slide_tiendamia_89e30d7454.jpg",
    name: "TIENDA MIA",
    promo: {
      title: "¡Especial!",
      discount: "15%",
      discountType: "OFF",
      shipping: "ENVIO GRATIS",
      shippingDetails: "a todo el país",
    },
  },
  {
    url: "https://backwebclub-media.glanacion.com/Club.LN-Strapi/mobile_slide_samsonite_NF_2248223ccb.jpg",
    name: "SAMSONITE",
    promo: {
      title: "¡Oferta!",
      discount: "20%",
      discountType: "OFF",
      shipping: "ENVIO GRATIS",
      shippingDetails: "a todo el país",
    },
  },
  {
    url: "https://backwebclub-media.glanacion.com/Club.LN-Strapi/mobile_slide_ruta_3a1a985794.jpg",
    name: "RUTATLANTICA",
    promo: {
      title: "¡Exclusivo!",
      discount: "25%",
      discountType: "OFF",
      shipping: "ENVIO GRATIS",
      shippingDetails: "a todo el país",
    },
  },
];

export default async function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Slider images={sliderImages} />
      <main>
        <BenefitsSection />
        <PromocodeSection />
      </main>
    </div>
  );
}
