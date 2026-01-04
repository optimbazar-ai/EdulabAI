import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users, BookOpen } from "lucide-react";

const courses = [
  {
    id: 1,
    emoji: "🇬🇧",
    title: "Ingliz tili",
    description: "Boshlang'ich darajadan IELTS tayyorlovgacha. Native ustozlar bilan amaliyot.",
    duration: "3-12 oy",
    students: "8-10",
    level: "Barcha darajalar",
    price: "400,000",
    popular: true,
  },
  {
    id: 2,
    emoji: "📐",
    title: "Matematika",
    description: "Maktab dasturi, olimpiada tayyorlovi va DTM tayyorlash kurslari.",
    duration: "4-9 oy",
    students: "6-8",
    level: "1-11 sinf",
    price: "350,000",
    popular: false,
  },
  {
    id: 3,
    emoji: "💻",
    title: "IT va Dasturlash",
    description: "Python, JavaScript, Web Development va mobil dasturlash asoslari.",
    duration: "6-12 oy",
    students: "8-10",
    level: "Boshlang'ich",
    price: "500,000",
    popular: true,
  },
  {
    id: 4,
    emoji: "🎨",
    title: "Maktabga tayyorlov",
    description: "O'qish, yozish, hisoblash va ijtimoiy ko'nikmalar. 5-7 yosh bolalar uchun.",
    duration: "9 oy",
    students: "6-8",
    level: "5-7 yosh",
    price: "300,000",
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
