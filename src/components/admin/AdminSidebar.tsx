import { Link, useLocation, useNavigate } from "react-router-dom";
import {
    LayoutDashboard,
    Users,
    BookOpen,
    Settings,
    LogOut,
    ChevronRight,
    Brain,
    GraduationCap
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/admin/dashboard" },
    { icon: Users, label: "Arizalar", href: "/admin/applications" },
    { icon: GraduationCap, label: "Kurslar", href: "/admin/courses" },
    { icon: BookOpen, label: "Blog", href: "/admin/blog" },
    { icon: Settings, label: "Sozlamalar", href: "/admin/settings" },
];

const AdminSidebar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { toast } = useToast();

    const handleLogout = () => {
        toast({
            title: "Xayr!",
            description: "Tizimdan muvaffaqiyatli chiqdingiz.",
        });
        navigate("/admin/login");
    };

    return (
        <div className="w-64 bg-card border-r border-border h-screen sticky top-0 flex flex-col">
            <div className="p-6 border-b border-border">
                <Link to="/" className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg">
                        <Brain className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-bold text-xl text-foreground">EdulabAI</span>
                </Link>
            </div>

            <nav className="flex-1 p-4 space-y-2">
                {menuItems.map((item) => {
                    const isActive = location.pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            to={item.href}
                            className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group ${isActive
                                ? "bg-primary text-primary-foreground shadow-lg"
                                : "hover:bg-muted text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <item.icon className="w-5 h-5" />
                                <span className="font-medium">{item.label}</span>
                            </div>
                            <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? "rotate-90" : "group-hover:translate-x-1"}`} />
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-border">
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-all duration-200"
                >
                    <LogOut className="w-5 h-5" />
                    <span className="font-medium">Chiqish</span>
                </button>
            </div>
        </div>
    );
};

export default AdminSidebar;
