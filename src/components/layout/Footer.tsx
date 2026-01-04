import { Link } from "react-router-dom";
import { Brain, Phone, Mail, MapPin, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/20 transition-all duration-300">
                <Brain className="w-7 h-7 text-primary" />
              </div>
              <div>
                <span className="text-xl font-bold text-primary-foreground">EdulabAI</span>
                <p className="text-xs text-primary-foreground/60 -mt-1">AI bilan ta'lim</p>
              </div>
            </Link>
            <p className="text-primary-foreground/70 leading-relaxed">
              Darslar faqat sun'iy intellekt tomonidan o'qitiladigan innovatsion platforma.
              Kelajak bilimlarini EdulabAI bilan egallang!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Sahifalar</h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Bosh sahifa" },
                { href: "/about", label: "Biz haqimizda" },
                { href: "/courses", label: "Kurslar" },
                { href: "/register", label: "Ro'yxatdan o'tish" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-bold mb-4">Kurslarimiz</h3>
            <ul className="space-y-3">
              {["Prompt Engineering", "AI Coding", "Machine Learning", "AI for Business"].map(
                (course) => (
                  <li key={course}>
                    <span className="text-primary-foreground/70">{course}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Bog'lanish</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <span className="text-primary-foreground/70">+998 90 123 45 67</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Send className="w-5 h-5 text-primary" />
                </div>
                <span className="text-primary-foreground/70">@edulabai_uz</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <span className="text-primary-foreground/70">Toshkent shahar</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-primary-foreground/50">
          <p>© 2024 EdulabAI.uz - Sun'iy intellekt ta'limi. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
