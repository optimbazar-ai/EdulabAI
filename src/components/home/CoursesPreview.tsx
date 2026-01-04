import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users, BookOpen } from "lucide-react";

const courses = [
  {
    id: 1,
    emoji: "🤖",
    title: "Prompt Engineering",
    description: "AI-dan foydalanish sirlari va samarali buyruqlar yozishni o'rganing.",
    duration: "1 oy",
    students: "Cheksiz",
    level: "Barcha darajalar",
    price: "250,000",
    popular: true,
  },
  {
    id: 2,
    emoji: "👶",
    title: "AI Bolajonlar uchun",
    description: "Bolalar uchun AI asoslari va sun'iy intellekt bilan rasm chizish darslari.",
    duration: "2 oy",
    students: "Online",
    level: "5-12 yosh",
    price: "200,000",
    popular: false,
  },
  {
    id: 3,
    emoji: "🧠",
    title: "Machine Learning",
    description: "Mashinali o'qitish asoslari va AI modellarini yaratishni o'rganing.",
    duration: "6 oy",
    students: "Online",
    level: "O'rta daraja",
    price: "500,000",
    popular: true,
  },
  {
    id: 4,
    emoji: "🚀",
    title: "AI Dasturchi",
    description: "Python va AI kutubxonalari yordamida real loyihalar yaratish.",
    duration: "4 oy",
    students: "Online",
    level: "Boshlang'ich",
    price: "450,000",
    popular: false,
  },
];

const CoursesPreview = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-4">
              Kurslarimiz
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
              Mashhur <span className="text-gradient">yo'nalishlar</span>
            </h2>
          </div>
          <Link to="/courses">
            <Button variant="outline" className="group">
              Barcha kurslar
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-card card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header with Emoji */}
              <div className="relative h-32 bg-gradient-hero flex items-center justify-center">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {course.emoji}
                </span>
                {course.popular && (
                  <span className="absolute top-3 right-3 px-3 py-1 bg-secondary text-secondary-foreground text-xs font-bold rounded-full">
                    Mashhur
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-card-foreground">
                  {course.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {course.description}
                </p>

                {/* Meta Info */}
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{course.students} kishi</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground col-span-2">
                    <BookOpen className="w-4 h-4" />
                    <span>{course.level}</span>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <p className="text-xs text-muted-foreground">Oylik</p>
                    <p className="text-xl font-bold text-primary">{course.price} <span className="text-sm">so'm</span></p>
                  </div>
                  <Link to="/register">
                    <Button size="sm" variant="default">
                      Yozilish
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesPreview;
