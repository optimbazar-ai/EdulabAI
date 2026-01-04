import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import CoursesPreview from "@/components/home/CoursesPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>LoveBilda O'quv Markazi - Sifatli ta'lim, yorqin kelajak</title>
        <meta
          name="description"
          content="LoveBilda o'quv markazi - Ingliz tili, Matematika, IT va Maktabga tayyorlov kurslari. Professional ustozlar, zamonaviy metodlar va kafolatlangan natija."
        />
        <meta
          name="keywords"
          content="o'quv markazi, ingliz tili kurslari, matematika, IT kurslari, maktabga tayyorlov, Toshkent"
        />
      </Helmet>

      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <CoursesPreview />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
