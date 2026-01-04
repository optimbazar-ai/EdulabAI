import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Lock, User, ArrowRight } from "lucide-react";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { toast } = useToast();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Kirish logikasi (Hozircha simulatsiya)
        setTimeout(() => {
            if (username === "admin" && password === "admin123") {
                toast({
                    title: "Xush kelibsiz!",
                    description: "Admin paneliga kirish muvaffaqiyatli amalga oshirildi.",
                });
                navigate("/admin/dashboard");
            } else {
                toast({
                    variant: "destructive",
                    title: "Xatolik!",
                    description: "Login yoki parol noto'g'ri.",
                });
            }
            setIsLoading(false);
        }, 1000);
    };

    return (
        <>
            <Helmet>
                <title>Admin Kirish - EdulabAI</title>
            </Helmet>
            <div className="min-h-screen flex items-center justify-center bg-gradient-hero p-4">
                <div className="w-full max-w-md">
                    <div className="bg-card rounded-3xl p-8 shadow-elevated border border-border/50 backdrop-blur-sm">
                        <div className="text-center mb-8">
                            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                <img src="/logo.png" alt="Logo" className="w-14 h-14 object-contain" />
                            </div>
                            <h1 className="text-2xl font-bold text-foreground">EdulabAI Admin</h1>
                            <p className="text-muted-foreground mt-1 text-sm">Tizimga kirish uchun ma'lumotlarni kiriting</p>
                        </div>

                        <form onSubmit={handleLogin} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="username">Login</Label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                    <Input
                                        id="username"
                                        placeholder="Loginni kiriting"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        className="pl-12 h-12"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="password">Parol</Label>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="Parolni kiriting"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="pl-12 h-12"
                                        required
                                    />
                                </div>
                            </div>

                            <Button
                                type="submit"
                                variant="cta"
                                size="xl"
                                className="w-full group"
                                disabled={isLoading}
                            >
                                {isLoading ? "Kirilmoqda..." : (
                                    <>
                                        Kirish
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
