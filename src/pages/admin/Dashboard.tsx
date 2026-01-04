import { Helmet } from "react-helmet-async";
import {
    Users,
    BookOpen,
    TrendingUp,
    Clock,
    CheckCircle2,
    AlertCircle
} from "lucide-react";

const stats = [
    { label: "Jami Arizalar", value: "148", icon: Users, color: "bg-blue-500/10 text-blue-500", trend: "+12%" },
    { label: "Faol Kurslar", value: "5", icon: BookOpen, color: "bg-purple-500/10 text-purple-500", trend: "Stabill" },
    { label: "Yangi Arizalar", value: "24", icon: AlertCircle, color: "bg-orange-500/10 text-orange-500", trend: "Bugun" },
    { label: "O'qitilganlar", value: "1,240", icon: CheckCircle2, color: "bg-green-500/10 text-green-500", trend: "+5%" },
];

const Dashboard = () => {
    return (
        <>
            <Helmet>
                <title>Dashboard - EdulabAI Admin</title>
            </Helmet>

            <div className="space-y-8">
                {/* Welcome */}
                <div>
                    <h1 className="text-2xl font-bold text-foreground">Xush kelibsiz, Admin! 👋</h1>
                    <p className="text-muted-foreground">Bugungi qisqacha statistika va yangiliklar.</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-card p-6 rounded-3xl border border-border shadow-soft hover:shadow-glow transition-all duration-300">
                            <div className="flex items-start justify-between">
                                <div className={`p-4 rounded-2xl ${stat.color}`}>
                                    <stat.icon className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-semibold px-2 py-1 bg-muted rounded-full text-muted-foreground">
                                    {stat.trend}
                                </span>
                            </div>
                            <div className="mt-4">
                                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                                <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Recent Activity (Placeholder) */}
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 bg-card rounded-3xl border border-border p-8">
                        <h3 className="text-lg font-bold mb-6">So'nggi Arizalar</h3>
                        <div className="space-y-4">
                            {[1, 2, 3, 4, 5].map((item) => (
                                <div key={item} className="flex items-center justify-between p-4 rounded-2xl hover:bg-muted/50 transition-colors border border-transparent hover:border-border">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                                            A{item}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-foreground">Azizbek Rahmonov</p>
                                            <p className="text-xs text-muted-foreground">Prompt Engineering • 2 soat avval</p>
                                        </div>
                                    </div>
                                    <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-xs font-bold">
                                        Kutilmoqda
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-card rounded-3xl border border-border p-8">
                        <h3 className="text-lg font-bold mb-6">Tezkor Ma'lumot</h3>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <TrendingUp className="w-8 h-8 text-green-500" />
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Haftalik o'sish</p>
                                    <p className="text-xl font-bold text-foreground">+18.5%</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Clock className="w-8 h-8 text-blue-500" />
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">O'rtacha javob vaqti</p>
                                    <p className="text-xl font-bold text-foreground">14 daqiqa</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-border">
                            <p className="text-sm text-muted-foreground mb-4 font-medium italic">
                                "AI darslarni yangilash vaqti keldi! Midjourney v6 bo'yicha yangi materillar tayyor."
                            </p>
                            <p className="text-xs font-bold text-primary">— AI Tizim Xabari</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
