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
        <title>EdulabAI - Sun'iy intellekt orqali online ta'lim</title>
        <meta
          name="description"
          content="EdulabAI o'quv platformasi - barcha darslar sun'iy intellekt tomonidan o'qitiladi. Kelajak texnologiyalarini bugun o'rganing."
        />
        <meta
          name="keywords"
          content="EdulabAI, ai ta'lim, sun'iy intellekt kurslari, prompt engineering, machine learning online"
        />
        <meta property="og:title" content="EdulabAI - Sun'iy intellekt orqali online ta'lim" />
        <meta property="og:description" content="O'zbekistondagi birinchi AI mentorlar tomonidan o'qitiladigan online platforma." />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://edulabai.uz" />
        <link rel="canonical" href="https://edulabai.uz" />
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
