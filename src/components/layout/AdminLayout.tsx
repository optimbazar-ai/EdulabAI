import { Outlet } from "react-router-dom";
import AdminSidebar from "../admin/AdminSidebar";
import { User, Bell } from "lucide-react";

const AdminLayout = () => {
    return (
        <div className="flex min-h-screen bg-muted/30">
            <AdminSidebar />
            <div className="flex-1 flex flex-col">
                {/* Topbar */}
                <header className="h-20 border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40 px-8 flex items-center justify-between">
                    <h2 className="text-xl font-bold text-foreground">Boshqaruv Paneli</h2>

                    <div className="flex items-center gap-4">
                        <button className="p-2 rounded-full hover:bg-muted transition-colors relative">
                            <Bell className="w-5 h-5 text-muted-foreground" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full border-2 border-card" />
                        </button>
                        <div className="flex items-center gap-3 pl-4 border-l border-border">
                            <div className="text-right">
                                <p className="text-sm font-semibold text-foreground">Admin</p>
                                <p className="text-xs text-muted-foreground">Moderator</p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                                <User className="w-6 h-6" />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <main className="p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
