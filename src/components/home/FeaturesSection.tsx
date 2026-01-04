import { GraduationCap, Users, Clock, Award, Heart, Lightbulb } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Tajribali ustozlar",
    description: "10+ yillik tajribaga ega, sertifikatlangan professional o'qituvchilar.",
    color: "bg-primary",
  },
  {
    icon: Users,
    title: "Kichik guruhlar",
    description: "Har bir guruhda 8-10 nafar o'quvchi – shaxsiy yondashuv kafolati.",
    color: "bg-secondary",
  },
  {
    icon: Clock,
    title: "Qulay jadval",
    description: "Ertalabdan kechgacha turli vaqtlarda darslar. O'zingizga mosini tanlang.",
    color: "bg-accent",
  },
  {
    icon: Award,
    title: "Kafolatlangan natija",
    description: "O'quvchilarimizning 95% dan ko'prog'i yaxshi natijalarga erishadilar.",
    color: "bg-primary",
  },
  {
    icon: Heart,
    title: "Qulay muhit",
    description: "Zamonaviy jihozlangan xonalar va do'stona atmosfera.",
    color: "bg-secondary",
  },
  {
    icon: Lightbulb,
    title: "Zamonaviy metodlar",
    description: "Interaktiv darslar, online platformalar va real loyihalar.",
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
            LoveBilda o'quv markazida farzandingiz uchun eng yaxshi ta'lim muhitini yaratdik
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
