import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Award } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-95" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-foreground/5 rounded-full" />
      
      {/* Content */}
      <div className="container-custom relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              <Star className="w-4 h-4 text-secondary fill-secondary" />
              <span className="text-sm font-medium text-primary-foreground">
                Eng yaxshi o'quv markaz 2024
              </span>
            </div>

            {/* Heading */}
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Farzandingiz{" "}
              <span className="relative">
                <span className="relative z-10">kelajagi</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-secondary/40 -z-0" />
              </span>{" "}
              bizning qo'limizda!
            </h1>

            {/* Description */}
            <p 
              className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mx-auto lg:mx-0 animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              Professional ustozlar, zamonaviy metodikalar va individual yondashuv bilan 
              farzandingizni muvaffaqiyatga olib boramiz.
            </p>

            {/* CTA Buttons */}
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Link to="/register">
                <Button variant="cta" size="xl" className="w-full sm:w-auto group">
                  Bepul darsga yoziling
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/courses">
                <Button variant="hero-outline" size="xl" className="w-full sm:w-auto">
                  Kurslarni ko'rish
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div 
              className="flex flex-wrap justify-center lg:justify-start gap-8 pt-8 animate-fade-up"
              style={{ animationDelay: "0.5s" }}
            >
              {[
                { icon: Users, value: "500+", label: "O'quvchilar" },
                { icon: Award, value: "15+", label: "Tajribali ustozlar" },
                { icon: Star, value: "98%", label: "Mamnun mijozlar" },
              ].map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary-foreground">{stat.value}</p>
                    <p className="text-sm text-primary-foreground/60">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Illustration */}
          <div 
            className="relative hidden lg:block animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative">
              {/* Main Card */}
              <div className="bg-card/95 backdrop-blur-xl rounded-3xl p-8 shadow-elevated">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-cta flex items-center justify-center animate-bounce-soft">
                      <span className="text-3xl">📚</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-card-foreground">Kunlik mashg'ulotlar</h3>
                      <p className="text-muted-foreground">Har kuni soat 9:00 - 20:00</p>
                    </div>
                  </div>
                  
                  {/* Course Preview */}
                  {[
                    { emoji: "🇬🇧", name: "Ingliz tili", students: "120" },
                    { emoji: "📐", name: "Matematika", students: "95" },
                    { emoji: "💻", name: "IT va Dasturlash", students: "80" },
                  ].map((course, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{course.emoji}</span>
                        <span className="font-medium text-card-foreground">{course.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{course.students} o'quvchi</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-secondary text-secondary-foreground rounded-2xl px-4 py-3 shadow-lg animate-float">
                <p className="font-bold">🎉 Yangi guruh!</p>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground rounded-2xl px-4 py-3 shadow-lg animate-float" style={{ animationDelay: "1.5s" }}>
                <p className="font-bold">⭐ 5.0 reyting</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
