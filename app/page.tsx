import Hero from "@/components/home/Hero";
import FeaturedTemplates from "@/components/home/FeaturedTemplates";
import Categories from "@/components/home/Categories";
import Newsletter from "@/components/home/Newsletter";
import FAQ from "@/components/home/FAQ";

export const metadata = {
  title: "Moldes Escolares | 5000+ Moldes para Atividades Escolares",
  description:
    "Portal com moldes escolares para todas as atividades: Festa Junina, Natal, Páscoa, Artes, Educação Infantil e muito mais!",
};

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedTemplates />
      <Categories />
      <Newsletter />
      <FAQ />
    </>
  );
}
