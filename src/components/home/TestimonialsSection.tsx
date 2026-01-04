import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Dilnoza Karimova",
    role: "O'quvchi onasi",
    avatar: "👩",
    rating: 5,
    text: "Farzandim 6 oyda ingliz tilida erkin gaplasha boshladi! Ustozlar juda mehribon va professional. Rahmat LoveBilda jamoasiga!",
  },
  {
    id: 2,
    name: "Sardor Aliyev",
    role: "O'quvchi otasi",
    avatar: "👨",
    rating: 5,
    text: "Matematika kursidan juda mamnunmiz. O'g'lim olimpiadada 2-o'rin oldi. Ustozlarning mehnatiga katta rahmat!",
  },
  {
    id: 3,
    name: "Mohira Rustamova",
    role: "O'quvchi",
    avatar: "👧",
    rating: 5,
    text: "IT kursida ko'p narsa o'rgandim. Endi o'zim veb-sayt yarata olaman! Darslar juda qiziqarli o'tadi.",
  },
  {
    id: 4,
    name: "Aziz Normatov",
    role: "O'quvchi otasi",
    avatar: "👨‍💼",
    rating: 5,
    text: "Maktabga tayyorlov kursi ajoyib! Qizim maktabga tayyor ravishda bordi. Harflarni biladi, hisoblay oladi.",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
            Fikrlar
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            O'quvchilar va ota-onalar <span className="text-gradient">fikrlari</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Minglab mamnun oilalar bizga ishonch bildirishdi
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Card */}
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-elevated relative overflow-hidden">
            {/* Quote Icon */}
            <Quote className="absolute top-8 right-8 w-16 h-16 text-primary/10" />

            {/* Content */}
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-secondary fill-secondary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-xl md:text-2xl text-card-foreground font-medium leading-relaxed mb-8">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-hero flex items-center justify-center text-3xl">
                  {testimonials[currentIndex].avatar}
                </div>
                <div>
                  <p className="text-lg font-bold text-card-foreground">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-xl bg-card shadow-card flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-xl bg-card shadow-card flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
