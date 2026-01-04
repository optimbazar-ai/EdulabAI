import { GraduationCap, Users, Clock, Award, Heart, Lightbulb } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "AI Mentorlar",
    description: "Darslar dunyodagi eng ilg'or sun'iy intellekt modellari tomonidan o'tiladi.",
    color: "bg-primary",
  },
  {
    icon: Users,
    title: "Shaxsiy yondashuv",
    description: "AI algoritmi har bir o'quvchining o'zlashtirish tezligiga moslashadi.",
    color: "bg-secondary",
  },
  {
    icon: Clock,
    title: "24/7 Darslar",
    description: "Online darslarni o'zingizga qulay vaqtda, istalgan joyda ko'rishingiz mumkin.",
    color: "bg-accent",
  },
  {
    icon: Award,
    title: "Kafolatlangan bilim",
    description: "AI tomonidan tuzilgan testlar va amaliy topshiriqlar natijani kafolatlaydi.",
    color: "bg-primary",
  },
  {
    icon: Heart,
    title: "AI Kurslar",
    description: "Barcha o'quv materiallari muntazam ravishda AI tomonidan yangilanib boriladi.",
    color: "bg-secondary",
  },
  {
    icon: Lightbulb,
    title: "AI-generatsiya darslar",
    description: "Har darsda interaktiv AI vositalari va real AI loyihalar bilan ishlaysiz.",
    color: "bg-accent",
  },
];

const FeaturesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            Nega aynan biz?
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Bizning <span className="text-gradient">afzalliklarimiz</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            LoveBilda o'quv markazida AI texnologiyalari yordamida eng zamonaviy bilimlarni egallang
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-card card-hover cursor-pointer"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div
                className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
