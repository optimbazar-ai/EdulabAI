import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Target, Eye, Heart, Award, Users, BookOpen } from "lucide-react";

const team = [
  {
    name: "GPT-4o",
    role: "Bosh Mentor",
    experience: "Keng qamrovli bilim",
    avatar: "🤖",
    bio: "Dunyodagi eng ilg'or til modeli. Barcha sohalarda mukammal bilimga ega.",
  },
  {
    name: "Claude 3.5 Sonnet",
    role: "Ijodiy Mentor",
    experience: "Yuqori mantiq",
    avatar: "🧠",
    bio: "Murakkab muammolarni yechish va kod yozishda mutaxassis AI.",
  },
  {
    name: "Midjourney",
    role: "Dizayn Mentori",
    experience: "Cheksiz tasavvur",
    avatar: "🎨",
    bio: "Tasvirlar yaratish va vizual san'at bo'yicha eng ilg'or AI.",
  }
];

const values = [
  {
    icon: Target,
    title: "Innovatsiya",
    description: "Eng so'nggi AI texnologiyalarini ta'limga tatbiq etish.",
  },
  {
    icon: Eye,
    title: "Kelajak",
    description: "Sizni kelajak kasblariga tayyorlash va AI bilan ishlashni o'rgatish.",
  },
  {
    icon: Heart,
    title: "Missiya",
    description: "Ta'limni AI yordamida tezkor, samarali va qiziqarli qilish.",
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>Biz haqimizda - EdulabAI</title>
        <meta
          name="description"
          content="EdulabAI - dunyodagi birinchi to'liq sun'iy intellekt tomonidan boshqariladigan ta'lim platformasi."
        />
      </Helmet>

      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
          <div className="absolute inset-0 bg-foreground/10" />
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground mb-6">
                Biz haqimizda
              </h1>
              <p className="text-xl text-primary-foreground/80">
                2024 yildan beri ta'lim tizimini sun'iy intellekt yordamida inqilob qilmoqdamiz
              </p>
            </div>
          </div>
          {/* Wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none">
              <path
                d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H0Z"
                fill="hsl(var(--background))"
              />
            </svg>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                  Bizning hikoyamiz
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
                  Kelajak avlodni <span className="text-gradient">tayyorlash</span> yo'lida
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  EdulabAI kelajak ta'limini bugun yaratmoqda. Biz dars berish jarayonini
                  inson faktoridan xoli qilib, eng ilg'or AI algoritmlariga topshirdik.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Bizning maqsadimiz – har bir o'quvchiga 100% individual yondashadigan, uning qiziqishlari
                  va o'zlashtirish tezligiga qarab dars o'tadigan AI tizimini taqdim etishdir.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-6">
                  {[
                    { value: "100%", label: "AI Mentorlar" },
                    { value: "Online", label: "Ta'lim formati" },
                    { value: "24/7", label: "Darslar" },
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <p className="text-3xl font-extrabold text-primary">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image/Illustration */}
              <div className="relative">
                <div className="bg-gradient-hero rounded-3xl p-8 aspect-square flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Award, label: "Sifat" },
                      { icon: Users, label: "AI Jamoa" },
                      { icon: BookOpen, label: "Bilim" },
                      { icon: Heart, label: "Mehr" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center"
                      >
                        <item.icon className="w-10 h-10 text-secondary mx-auto mb-2" />
                        <p className="text-primary-foreground font-semibold">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                Bizning <span className="text-gradient">qadriyatlarimiz</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-8 shadow-card text-center card-hover"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-hero flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-4">
                Bizning jamoa
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                <span className="text-gradient">AI Mentorlar</span> jamoasi
              </h2>
              <p className="text-lg text-muted-foreground">
                Eng ilg'or sun'iy intellekt modellari xizmatingizda
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 shadow-card card-hover text-center"
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-hero flex items-center justify-center mx-auto mb-4 text-5xl">
                    {member.avatar}
                  </div>
                  <h3 className="text-lg font-bold text-card-foreground">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-2">
                    {member.role}
                  </p>
                  <p className="text-xs text-secondary font-semibold mb-3">
                    {member.experience}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
