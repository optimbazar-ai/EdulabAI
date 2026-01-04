import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Clock, Users, BookOpen, CheckCircle, ArrowRight } from "lucide-react";

const courses = [
  {
    id: 1,
    emoji: "🇬🇧",
    title: "Ingliz tili",
    subtitle: "Boshlang'ichdan IELTS gacha",
    description: "Zamonaviy metodikalar va native speakerlar bilan amaliyot. Grammatika, speaking, listening va writing bo'yicha to'liq tayyorlov.",
    duration: "3-12 oy",
    students: "8-10",
    levels: ["Beginner", "Elementary", "Intermediate", "Advanced", "IELTS"],
    features: [
      "Native speakerlar bilan amaliyot",
      "Cambridge va Oxford kitoblari",
      "Online platforma kirish huquqi",
      "Haftalik speaking club",
      "Shaxsiy mentor",
    ],
    price: "400,000",
    schedule: "Dushanba-Juma",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    emoji: "📐",
    title: "Matematika",
    subtitle: "1-11 sinf va DTM tayyorlash",
    description: "Maktab dasturi, olimpiada tayyorlovi va DTM tayyorlash. Individual va guruh darslari mavjud.",
    duration: "4-9 oy",
    students: "6-8",
    levels: ["1-4 sinf", "5-8 sinf", "9-11 sinf", "DTM", "Olimpiada"],
    features: [
      "Shaxsiy o'quv rejasi",
      "DTM test materiallari",
      "Olimpiada tayyorlovi",
      "Haftalik nazorat testlari",
      "Ota-onalar uchun hisobot",
    ],
    price: "350,000",
    schedule: "Dushanba-Shanba",
    color: "from-purple-500 to-purple-600",
  },
  {
    id: 3,
    emoji: "💻",
    title: "IT va Dasturlash",
    subtitle: "Web, Mobile va Python",
    description: "Zamonaviy texnologiyalar va real loyihalar bilan ishlash tajribasi. Portfoilo yaratish imkoniyati.",
    duration: "6-12 oy",
    students: "8-10",
    levels: ["Kompyuter savodxonligi", "Python", "Web Development", "Mobile Apps"],
    features: [
      "Real loyihalar ustida ishlash",
      "GitHub portfoilo",
      "Hackathon ishtirok etish",
      "Freelance tayyorlash",
      "Ishga joylashish yordami",
    ],
    price: "500,000",
    schedule: "Seshanba-Shanba",
    color: "from-teal-500 to-teal-600",
  },
  {
    id: 4,
    emoji: "🎨",
    title: "Maktabga tayyorlov",
    subtitle: "5-7 yosh bolalar uchun",
    description: "O'qish, yozish, hisoblash va ijtimoiy ko'nikmalar. Bolangizni maktabga tayyor qiling.",
    duration: "9 oy",
    students: "6-8",
    levels: ["5 yosh", "6 yosh", "7 yosh"],
    features: [
      "O'qish va yozish asoslari",
      "Matematik tafakkur",
      "Niqtoq motorika",
      "Ijodiy mashg'ulotlar",
      "Ijtimoiy ko'nikmalar",
    ],
    price: "300,000",
    schedule: "Dushanba-Juma",
    color: "from-orange-500 to-orange-600",
  },
  {
    id: 5,
    emoji: "🔬",
    title: "Fizika",
    subtitle: "7-11 sinf va DTM",
    description: "Nazariy bilimlar va amaliy tajribalar. Olimpiada va DTM tayyorlash.",
    duration: "6-9 oy",
    students: "6-8",
    levels: ["7-8 sinf", "9-11 sinf", "DTM", "Olimpiada"],
    features: [
      "Laboratoriya mashg'ulotlari",
      "Video darslar",
      "DTM test materiallari",
      "Olimpiada tayyorlovi",
      "Individual yondashuv",
    ],
    price: "380,000",
    schedule: "Dushanba-Shanba",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    id: 6,
    emoji: "🧪",
    title: "Kimyo",
    subtitle: "8-11 sinf va DTM",
    description: "Organik va anorganik kimyo. Laboratoriya ishlari va DTM tayyorlash.",
    duration: "6-9 oy",
    students: "6-8",
    levels: ["8-9 sinf", "10-11 sinf", "DTM", "Olimpiada"],
    features: [
      "Laboratoriya mashg'ulotlari",
      "Interaktiv darslar",
      "DTM test materiallari",
      "Formulalar to'plami",
      "Nazorat testlari",
    ],
    price: "380,000",
    schedule: "Seshanba-Shanba",
    color: "from-green-500 to-green-600",
  },
];

const Courses = () => {
  return (
    <>
      <Helmet>
        <title>Kurslar - LoveBilda O'quv Markazi</title>
        <meta
          name="description"
          content="LoveBilda o'quv markazi kurslari - Ingliz tili, Matematika, IT, Fizika, Kimyo va Maktabga tayyorlov. Professional ustozlar bilan sifatli ta'lim."
        />
      </Helmet>

      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground mb-6">
                Bizning kurslar
              </h1>
              <p className="text-xl text-primary-foreground/80">
                Har bir yosh va daraja uchun maxsus tayyorlangan ta'lim dasturlari
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
              {courses.map((course, index) => (
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
                      <p className="text-sm text-muted-foreground mb-2">Oylik to'lov</p>
                      <p className="text-4xl font-extrabold text-primary mb-1">
                        {course.price}
                      </p>
                      <p className="text-muted-foreground mb-6">so'm</p>
                      <Link to="/register" className="w-full">
                        <Button variant="cta" size="lg" className="w-full group">
                          Ro'yxatdan o'tish
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                      <p className="text-xs text-muted-foreground mt-4">
                        Birinchi dars BEPUL!
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
