import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle, Gift, Clock, Users } from "lucide-react";

const courses = [
  { id: "english", name: "Ingliz tili" },
  { id: "math", name: "Matematika" },
  { id: "it", name: "IT va Dasturlash" },
  { id: "preschool", name: "Maktabga tayyorlov" },
  { id: "physics", name: "Fizika" },
  { id: "chemistry", name: "Kimyo" },
];

const Register = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (in production, connect to Telegram bot or email)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Murojaatingiz qabul qilindi!",
      description: "Tez orada siz bilan bog'lanamiz.",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (isSubmitted) {
    return (
      <>
        <Helmet>
          <title>Ro'yxatdan o'tish - LoveBilda O'quv Markazi</title>
        </Helmet>
        <Header />
        <main className="min-h-screen flex items-center justify-center bg-muted/30 pt-20">
          <div className="container-custom py-16">
            <div className="max-w-lg mx-auto text-center">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-primary" />
              </div>
              <h1 className="text-3xl font-extrabold text-foreground mb-4">
                Murojaatingiz qabul qilindi!
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Tez orada administratorimiz siz bilan bog'lanadi va bepul sinov darsiga
                taklif qiladi.
              </p>
              <Button
                variant="default"
                size="lg"
                onClick={() => setIsSubmitted(false)}
              >
                Yana ro'yxatdan o'tish
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Ro'yxatdan o'tish - LoveBilda O'quv Markazi</title>
        <meta
          name="description"
          content="LoveBilda o'quv markaziga ro'yxatdan o'ting. Birinchi dars bepul! Ingliz tili, Matematika, IT va boshqa yo'nalishlar bo'yicha kurslar."
        />
      </Helmet>

      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-6">
                <Gift className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium text-primary-foreground">
                  Birinchi dars BEPUL!
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground mb-6">
                Ro'yxatdan o'tish
              </h1>
              <p className="text-xl text-primary-foreground/80">
                Formani to'ldiring va bepul sinov darsiga keling
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

        {/* Form Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Form */}
              <div className="bg-card rounded-3xl p-8 shadow-elevated">
                <h2 className="text-2xl font-bold text-card-foreground mb-6">
                  Ma'lumotlaringizni kiriting
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ismingiz *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="To'liq ismingiz"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon raqamingiz *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+998 90 123 45 67"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="course">Kurs tanlang *</Label>
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      required
                      className="flex h-12 w-full rounded-xl border border-input bg-background px-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Kursni tanlang</option>
                      {courses.map((course) => (
                        <option key={course.id} value={course.id}>
                          {course.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Qo'shimcha izoh</Label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Savollaringiz yoki qo'shimcha ma'lumot..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="flex w-full rounded-xl border border-input bg-background px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="cta"
                    size="xl"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Yuborilmoqda..."
                    ) : (
                      <>
                        Yuborish
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    Yuborish tugmasini bosish orqali siz shaxsiy ma'lumotlaringizni 
                    qayta ishlashga rozilik bildirasiz
                  </p>
                </form>
              </div>

              {/* Benefits */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Nima uchun ro'yxatdan o'tish kerak?
                  </h3>
                  <p className="text-muted-foreground mb-8">
                    Formani to'ldirganingizdan so'ng, administratorimiz 24 soat ichida 
                    siz bilan bog'lanadi va qulay vaqtni belgilaydi.
                  </p>
                </div>

                {[
                  {
                    icon: Gift,
                    title: "Birinchi dars bepul",
                    description: "Markazimiz bilan tanishing va ustozlarimiz bilan uchrashing – bu sizga hech narsa turmaydi.",
                  },
                  {
                    icon: Clock,
                    title: "Qulay jadval",
                    description: "Siz uchun eng mos vaqtni birgalikda tanlaymiz. Ertalab, kunduzi yoki kechqurun – tanlov sizniki.",
                  },
                  {
                    icon: Users,
                    title: "Kichik guruhlar",
                    description: "Har bir o'quvchiga alohida e'tibor. Guruhda 8-10 dan ortiq o'quvchi bo'lmaydi.",
                  },
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="flex gap-4 bg-card rounded-2xl p-6 shadow-card"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center shrink-0">
                      <benefit.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-card-foreground mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Contact Info */}
                <div className="bg-muted/50 rounded-2xl p-6">
                  <p className="text-sm text-muted-foreground mb-2">
                    Savollaringiz bormi? Bizga qo'ng'iroq qiling:
                  </p>
                  <a
                    href="tel:+998901234567"
                    className="text-2xl font-bold text-primary hover:underline"
                  >
                    +998 90 123 45 67
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Register;
