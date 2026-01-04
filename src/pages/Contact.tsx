import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Send, MapPin, Clock, Mail, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Aloqa - LoveBilda O'quv Markazi</title>
        <meta
          name="description"
          content="LoveBilda o'quv markazi bilan bog'laning. Manzil, telefon, Telegram va ish vaqti haqida ma'lumot."
        />
      </Helmet>

      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground mb-6">
                Biz bilan bog'laning
              </h1>
              <p className="text-xl text-primary-foreground/80">
                Savollaringiz bormi? Biz har doim yordam berishga tayyormiz!
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

        {/* Contact Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Cards */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground mb-8">
                  Bog'lanish uchun ma'lumotlar
                </h2>

                {/* Phone */}
                <a
                  href="tel:+998901234567"
                  className="flex items-start gap-4 bg-card rounded-2xl p-6 shadow-card card-hover group"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-card-foreground mb-1">
                      Telefon
                    </h3>
                    <p className="text-xl font-semibold text-primary">
                      +998 90 123 45 67
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Qo'ng'iroq qiling yoki SMS yuboring
                    </p>
                  </div>
                </a>

                {/* Telegram */}
                <a
                  href="https://t.me/lovebilda_uz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 bg-card rounded-2xl p-6 shadow-card card-hover group"
                >
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Send className="w-7 h-7 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-card-foreground mb-1">
                      Telegram
                    </h3>
                    <p className="text-xl font-semibold text-secondary">
                      @lovebilda_uz
                    </p>
                    <p className="text-sm text-muted-foreground">
                      24/7 xabar yuboring
                    </p>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4 bg-card rounded-2xl p-6 shadow-card">
                  <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center shrink-0">
                    <MapPin className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-card-foreground mb-1">
                      Manzil
                    </h3>
                    <p className="text-card-foreground">
                      Toshkent shahar, Chilonzor tumani
                    </p>
                    <p className="text-card-foreground">
                      Bunyodkor ko'chasi, 15-uy
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Metro: Chilonzor (5 daqiqa yurish)
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4 bg-card rounded-2xl p-6 shadow-card">
                  <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center shrink-0">
                    <Clock className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-card-foreground mb-1">
                      Ish vaqti
                    </h3>
                    <div className="space-y-1">
                      <p className="text-card-foreground">
                        <span className="text-muted-foreground">Dushanba - Juma:</span> 09:00 - 20:00
                      </p>
                      <p className="text-card-foreground">
                        <span className="text-muted-foreground">Shanba:</span> 09:00 - 18:00
                      </p>
                      <p className="text-card-foreground">
                        <span className="text-muted-foreground">Yakshanba:</span> Dam olish kuni
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-hero rounded-2xl p-8 text-center">
                  <h3 className="text-xl font-bold text-primary-foreground mb-3">
                    Bepul konsultatsiya oling
                  </h3>
                  <p className="text-primary-foreground/80 mb-6">
                    Qaysi kursni tanlashni bilmayapsizmi? Biz yordam beramiz!
                  </p>
                  <Link to="/register">
                    <Button variant="cta" size="lg" className="group">
                      Ariza qoldirish
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Map */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground mb-8">
                  Bizning joylashuvimiz
                </h2>
                <div className="bg-card rounded-3xl overflow-hidden shadow-elevated h-[500px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.2584547890354!2d69.20279267606847!3d41.28518627131012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1704364800000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="LoveBilda lokatsiyasi"
                  />
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  Metro Chilonzor bekatidan 5 daqiqa yurish masofasida
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Ko'p so'raladigan savollar
              </h2>
              <div className="space-y-4 text-left">
                {[
                  {
                    q: "Birinchi dars haqiqatan ham bepulmi?",
                    a: "Ha, birinchi sinov darsi butunlay bepul. Siz markazimiz va ustozlarimiz bilan tanishib, qaror qabul qilasiz.",
                  },
                  {
                    q: "Kursga qachon boshlash mumkin?",
                    a: "Yangi guruhlar har oy boshida tashkil etiladi. Shuningdek, mavjud guruhlarga qo'shilish ham mumkin.",
                  },
                  {
                    q: "To'lovni qanday amalga oshirish mumkin?",
                    a: "Naqd pul, bank kartasi, Click yoki Payme orqali to'lash mumkin. Oylik va choraklik to'lov variantlari mavjud.",
                  },
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-2xl p-6 shadow-card"
                  >
                    <h3 className="font-bold text-card-foreground mb-2">
                      {faq.q}
                    </h3>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
