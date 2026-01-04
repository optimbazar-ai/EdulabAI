import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Clock, Users, BookOpen, CheckCircle, ArrowRight, Play } from "lucide-react";

const courses = [
  {
    id: 1,
    emoji: "🤖",
    title: "Prompt Engineering",
    subtitle: "AI bilan muloqot san'ati",
    description: "ChatGPT, Claude va boshqa AI modellari bilan samarali ishlash, murakkab buyruqlar (prompts) yozish va ishingizni 10 barobar tezlashtirishni o'rganing.",
    duration: "1 oy",
    students: "Cheksiz",
    levels: ["Boshlang'ich", "O'rta", "Professional"],
    features: [
      "Murakkab promptlar yaratish",
      "AI agentlarni sozlash",
      "Ish jarayonini avtomatlashtirish",
      "Amaliy loyihalar to'plami",
      "Sertifikat",
    ],
    price: "250,000",
    schedule: "Online / Istalgan vaqtda",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    emoji: "👶",
    title: "AI Bolajonlar uchun",
    subtitle: "Kichik yoshdagi AI tadqiqotchilari",
    description: "Farzandingizga AI yordamida rasm chizish, hikoyalar yozish va mantiqiy fikrlashni o'rgating. Kelajak texnologiyalari bilan tanishuv.",
    duration: "2 oy",
    students: "Online",
    levels: ["5-7 yosh", "8-12 yosh"],
    features: [
      "AI bilan rasm chizish",
      "Sehrli ertaklar yaratish",
      "Mantiqiy o'yinlar",
      "Xavfsiz AI muhiti",
      "Ota-onalar uchun nazorat",
    ],
    price: "200,000",
    schedule: "Haftada 3 kun",
    color: "from-orange-500 to-orange-600",
  },
  {
    id: 3,
    emoji: "🧠",
    title: "Machine Learning",
    subtitle: "AI modellarini yaratish",
    description: "Ma'lumotlar bilan ishlash, algoritmlar va bashorat qiluvchi AI modellarini noldan yaratish darslari. Matematika va Python asoslari.",
    duration: "6 oy",
    students: "Online",
    levels: ["Python asoslari", "Data Science", "Deep Learning"],
    features: [
      "Python dasturlash tili",
      "Matematik modellashtirish",
      "Real ma'lumotlar bilan ishlash",
      "Kaggle musobaqalari",
      "Portfolio yaratish",
    ],
    price: "500,000",
    schedule: "Dushanba-Juma",
    color: "from-purple-500 to-purple-600",
  },
  {
    id: 4,
    emoji: "🚀",
    title: "AI Dasturchi",
    subtitle: "AI integratsiyalashgan ilovalar",
    description: "Veb-sayt va mobil ilovalarga AI funksiyalarini (chatbotlar, analizatorlar) qo'shishni o'rganing. API lar bilan ishlash tajribasi.",
    duration: "4 oy",
    students: "Online",
    levels: ["Web Dev", "AI API", "Deployment"],
    features: [
      "OpenAI API integratsiyasi",
      "Chatbotlar yaratish",
      "Next.js va AI",
      "Real startap loyihalar",
      "Ishga joylashish bo'yicha maslahat",
    ],
    price: "450,000",
    schedule: "Seshanba-Shanba",
    color: "from-teal-500 to-teal-600",
  },
  {
    id: 5,
    emoji: "🎨",
    title: "AI Dizayn",
    subtitle: "Vizual san'at va AI",
    description: "Midjourney, DALL-E va Stable Diffusion orqali professional dizaynlar yaratish, logotiplar va illyustratsiyalar generatsiya qilish.",
    duration: "2 oy",
    students: "Online",
    levels: ["Grafik dizayn", "AI Generatsiyasi", "Post-production"],
    features: [
      "Midjourney sirlari",
      "Fotorealistik tasvirlar",
      "Brand identika",
      "Dizaynni tahrirlash",
      "Freelance bo'yicha master-klass",
    ],
    price: "300,000",
    schedule: "Haftada 2 kun",
    color: "from-pink-500 to-pink-600",
  },
  {
    id: 6,
    emoji: "📊",
    title: "AI Business",
    subtitle: "Biznesni AI bilan avtomatlashtirish",
    description: "Kichik va o'rta biznes jarayonlarini AI yordamida optimallashtirish, mijozlar bilan muloqot va hisobotlarni avtomatlashtirish.",
    duration: "2 oy",
    students: "Guruh / Individual",
    levels: ["CRM AI", "Marketologlar uchun AI", "Avtomatizatsiya"],
    features: [
      "Kontent-plan generatsiyasi",
      "AI-chatbotlar sozlash",
      "Ma'lumotlar tahlili",
      "Zamanaviy marketing",
      "Amaliy keyslar",
    ],
    price: "400,000",
    schedule: "Shanba-Yaxshanba",
    color: "from-green-500 to-green-600",
  },
];

const Courses = () => {
  return (
    <>
      <Helmet>
        <title>Kurslar - EdulabAI</title>
        <meta
          name="description"
          content="EdulabAI kurslari - Prompt Engineering, Machine Learning, AI Dasturchi va biznes uchun AI. Kelajak bilimlarini biz bilan o'rganing."
        />
      </Helmet>

      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground mb-6">
                Bizning AI Kurslar
              </h1>
              <p className="text-xl text-primary-foreground/80">
                Lirik va texnik bilimlarni sun'iy intellekt yordamida yuqori darajada o'rganing
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none">
              <path
                d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H0Z"
                fill="hsl(var(--background))"
              />
            </svg>
          </div>
        </section>

        {/* Courses List */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid gap-8">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="bg-card rounded-3xl shadow-card overflow-hidden card-hover"
                >
                  <div className="grid lg:grid-cols-3">
                    {/* Left - Course Info */}
                    <div className="lg:col-span-2 p-8">
                      <div className="flex items-start gap-6">
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-4xl shrink-0`}>
                          {course.emoji}
                        </div>
                        <div className="flex-1">
                          <h2 className="text-2xl font-bold text-card-foreground mb-1">
                            {course.title}
                          </h2>
                          <p className="text-primary font-medium mb-3">
                            {course.subtitle}
                          </p>
                          <p className="text-muted-foreground mb-4">
                            {course.description}
                          </p>

                          {/* Meta */}
                          <div className="flex flex-wrap gap-4 mb-6">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Clock className="w-4 h-4" />
                              <span>{course.duration}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Users className="w-4 h-4" />
                              <span>{course.students} kishi</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <BookOpen className="w-4 h-4" />
                              <span>{course.schedule}</span>
                            </div>
                          </div>

                          {/* Levels */}
                          <div className="flex flex-wrap gap-2 mb-6">
                            {course.levels.map((level, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground"
                              >
                                {level}
                              </span>
                            ))}
                          </div>

                          {/* Features */}
                          <div className="grid sm:grid-cols-2 gap-2">
                            {course.features.map((feature, i) => (
                              <div key={i} className="flex items-center gap-2 text-sm">
                                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                                <span className="text-card-foreground">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right - Price & CTA */}
                    <div className="bg-muted/30 p-8 flex flex-col justify-center items-center text-center">
                      <p className="text-sm text-muted-foreground mb-2">Platforma to'lovi</p>
                      <p className="text-4xl font-extrabold text-primary mb-1">
                        {course.price}
                      </p>
                      <p className="text-muted-foreground mb-6">so'm</p>
                      <Link to="/register" className="w-full">
                        <Button variant="cta" size="lg" className="w-full group mb-3">
                          Kursni boshlash
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform ml-2" />
                        </Button>
                      </Link>
                      <Link to="/free-lesson" className="w-full">
                        <Button variant="outline" size="lg" className="w-full border-primary/20 hover:bg-primary/5">
                          <Play className="w-4 h-4 mr-2 text-primary" />
                          1-darsni bepul ko'rish
                        </Button>
                      </Link>
                      <p className="text-xs text-muted-foreground mt-4">
                        Darslar AI tomonidan o'tiladi
                      </p>
                    </div>
                  </div>
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

export default Courses;
