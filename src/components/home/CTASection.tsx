import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Clock, Gift } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-hero relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-8">
            <Gift className="w-5 h-5 text-secondary" />
            <span className="text-sm font-medium text-primary-foreground">
              Birinchi dars BEPUL!
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-6">
            Farzandingizni muvaffaqiyatga <br className="hidden md:block" />
            <span className="text-secondary">birinchi qadam</span> qo'ying!
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Hoziroq ro'yxatdan o'ting va birinchi bepul darsda markazimiz bilan 
            tanishing. Qaror qilish oson bo'ladi!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/register">
              <Button variant="cta" size="xl" className="w-full sm:w-auto group">
                Bepul darsga yozilish
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="tel:+998901234567">
              <Button variant="hero-outline" size="xl" className="w-full sm:w-auto">
                <Phone className="w-5 h-5" />
                Qo'ng'iroq qilish
              </Button>
            </a>
          </div>

          {/* Info Cards */}
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: Phone, text: "+998 90 123 45 67" },
              { icon: Clock, text: "Dushanba - Shanba, 9:00 - 20:00" },
              { icon: Gift, text: "Birinchi dars bepul" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-xl px-4 py-3"
              >
                <item.icon className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium text-primary-foreground">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
