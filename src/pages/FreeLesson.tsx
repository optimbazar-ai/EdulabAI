import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
    BookOpen,
    CheckCircle,
    MessageSquare,
    ChevronRight,
    Monitor,
    Video
} from "lucide-react";
import { Link } from "react-router-dom";

const FreeLesson = () => {
    return (
        <>
            <Helmet>
                <title>Bepul Dars - EdulabAI</title>
                <meta name="description" content="EdulabAI bepul birinchi darsini ko'ring va sun'iy intellekt dunyosiga qadam qo'ying." />
            </Helmet>

            <Header />

            <main className="min-h-screen pt-24 bg-background">
                {/* Lesson Hero */}
                <section className="py-12 bg-muted/30 border-b border-border">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto space-y-6">
                            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                                <Video className="w-4 h-4" />
                                BEPUL KURS DARS
                            </div>
                            <h1 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
                                Prompt Engineering: Sun'iy Intellekt bilan samarali muloqot
                            </h1>
                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <Monitor className="w-4 h-4" />
                                    <span>Modul 1: Kirish</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <BookOpen className="w-4 h-4" />
                                    <span>12 daqiqa</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Video Player Section */}
                <section className="py-12">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="aspect-video bg-card rounded-3xl border border-border shadow-elevated overflow-hidden relative">
                                <iframe
                                    className="w-full h-full border-0"
                                    src="https://www.youtube.com/embed/wOSq1Ptte-8?autoplay=0&rel=0"
                                    title="EdulabAI Bepul Dars"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>

                            {/* Lesson Description */}
                            <div className="grid md:grid-cols-3 gap-12 mt-16">
                                <div className="md:col-span-2 space-y-8">
                                    <div className="space-y-4">
                                        <h2 className="text-2xl font-bold">Dars haqida</h2>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Ushbu darsda biz sun'iy intellekt (ChatGPT, Claude) bilan muloqot qilishning eng samarali usullarini –
                                            "Prompt Engineering" asoslarini ko'rib chiqamiz. Siz o'z savollaringizni qanday qilib aniq va lutfan
                                            berishni, natijada AI'dan maksimal foyda olishni o'rganasiz.
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-xl font-bold">Darsda o'rganiladi:</h3>
                                        <ul className="space-y-3">
                                            {[
                                                "Prompt nima va u qanday ishlaydi?",
                                                "Natijani 10 barobar yaxshilaydigan 3 ta oltin qoida",
                                                "Rol belgilash (System Prompts) texnikasi",
                                                "AI'ga kontekst xabarini to'g'ri berish"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-center gap-3">
                                                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                                                    <span className="text-foreground">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="space-y-8">
                                    <div className="bg-card rounded-3xl p-8 border border-border shadow-soft flex flex-col items-center text-center">
                                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                                            <MessageSquare className="w-8 h-8 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">Savollaringiz bormi?</h3>
                                        <p className="text-sm text-muted-foreground mb-6">
                                            Dars bo'yicha tushunmovchiliklar bo'lsa, mutaxassisimizga yozing.
                                        </p>
                                        <Button variant="cta" className="w-full rounded-xl">
                                            Konsultatsiya olish
                                        </Button>
                                    </div>

                                    <div className="bg-gradient-hero rounded-3xl p-8 text-white relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 p-4 opacity-10 rotate-12 group-hover:rotate-0 transition-transform">
                                            <BookOpen className="w-24 h-24" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 italic">To'liq kursga yoziling</h3>
                                        <p className="text-sm opacity-80 mb-6">
                                            Barcha darslarga va yopiq guruhga kirish huquqini qo'lga kiriting.
                                        </p>
                                        <Link to="/courses">
                                            <Button variant="secondary" className="w-full rounded-xl text-primary font-bold">
                                                Kurslarni ko'rish
                                                <ChevronRight className="w-4 h-4 ml-2" />
                                            </Button>
                                        </Link>
                                    </div>
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

export default FreeLesson;
