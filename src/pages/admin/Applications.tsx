import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
    Search,
    Filter,
    Eye,
    CheckCircle,
    XCircle,
    Trash2,
    Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

const initialApplications = [
    { id: 1, name: "Azizbek Rahmonov", phone: "+998 90 123 45 67", course: "Prompt Engineering", date: "2024-01-04", status: "New" },
    { id: 2, name: "Malika Yusupova", phone: "+998 93 456 78 90", course: "AI coding & Dev", date: "2024-01-03", status: "Contacted" },
    { id: 3, name: "Jasur Olimov", phone: "+998 97 789 45 61", course: "AI for Business", date: "2024-01-03", status: "Registered" },
    { id: 4, name: "Dilshod Karimov", phone: "+998 91 111 22 33", course: "AI Design", date: "2024-01-02", status: "Rejected" },
    { id: 5, name: "Nigora Shokirova", phone: "+998 99 999 88 77", course: "Prompt Engineering", date: "2024-01-02", status: "Registered" },
];

const getStatusStyle = (status: string) => {
    switch (status) {
        case "New": return "bg-blue-500/10 text-blue-500 border-blue-500/20";
        case "Contacted": return "bg-orange-500/10 text-orange-500 border-orange-500/20";
        case "Registered": return "bg-green-500/10 text-green-500 border-green-500/20";
        case "Rejected": return "bg-destructive/10 text-destructive border-destructive/20";
        default: return "bg-muted text-muted-foreground border-border";
    }
};

const Applications = () => {
    const [data, setData] = useState(initialApplications);
    const [search, setSearch] = useState("");
    const [selectedApp, setSelectedApp] = useState<typeof initialApplications[0] | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const { toast } = useToast();

    const handleDelete = (id: number) => {
        setData(data.filter(app => app.id !== id));
        toast({
            title: "O'chirildi",
            description: "Ariza muvaffaqiyatli o'chirildi.",
        });
    };

    const updateStatus = (id: number, newStatus: string) => {
        setData(data.map(app => app.id === id ? { ...app, status: newStatus } : app));
        toast({
            title: "Status yangilandi",
            description: `Ariza holati "${newStatus}" ga o'zgartirildi.`,
        });
    };

    const filteredData = data.filter(app =>
        app.name.toLowerCase().includes(search.toLowerCase()) ||
        app.phone.includes(search)
    );

    return (
        <>
            <Helmet>
                <title>Arizalar - EdulabAI Admin</title>
            </Helmet>

            <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-foreground">Arizalar Boshqaruvi</h1>
                        <p className="text-muted-foreground">O'quvchilardan kelgan barcha murojaatlarni boshqarish.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button variant="outline" className="rounded-xl">
                            <Filter className="w-4 h-4 mr-2" />
                            Saralash
                        </Button>
                        <Button
                            variant="cta"
                            className="rounded-xl"
                            onClick={() => toast({ title: "Eksport boshlandi", description: "Excel fayli tayyorlanmoqda..." })}
                        >
                            Eksport (Excel)
                        </Button>
                    </div>
                </div>

                {/* Search & Stats */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-3">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input
                                placeholder="Ism yoki telefon raqam orqali qidiring..."
                                className="pl-12 h-12 rounded-2xl bg-card border-border shadow-soft"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="bg-card px-6 py-3 rounded-2xl border border-border flex items-center justify-between shadow-soft">
                        <span className="text-sm font-medium text-muted-foreground">Jami:</span>
                        <span className="text-xl font-bold text-foreground">{filteredData.length} та</span>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-card rounded-3xl border border-border shadow-soft overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-muted/50 border-b border-border">
                                    <th className="px-6 py-4 text-sm font-bold text-foreground">T/r</th>
                                    <th className="px-6 py-4 text-sm font-bold text-foreground">Ism-familya</th>
                                    <th className="px-6 py-4 text-sm font-bold text-foreground">Telefon</th>
                                    <th className="px-6 py-4 text-sm font-bold text-foreground">Kurs</th>
                                    <th className="px-6 py-4 text-sm font-bold text-foreground">Sana</th>
                                    <th className="px-6 py-4 text-sm font-bold text-foreground">Status</th>
                                    <th className="px-6 py-4 text-sm font-bold text-foreground text-center">Amallar</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                {filteredData.map((app) => (
                                    <tr key={app.id} className="hover:bg-muted/30 transition-colors">
                                        <td className="px-6 py-4 text-sm text-foreground">#{app.id}</td>
                                        <td className="px-6 py-4 font-semibold text-foreground">{app.name}</td>
                                        <td className="px-6 py-4 text-sm text-muted-foreground">{app.phone}</td>
                                        <td className="px-6 py-4">
                                            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">
                                                {app.course}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-muted-foreground">{app.date}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-3 py-1 rounded-full border text-xs font-bold ${getStatusStyle(app.status)}`}>
                                                {app.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-center gap-2">
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-8 w-8 hover:bg-primary/10 hover:text-primary"
                                                    onClick={() => {
                                                        setSelectedApp(app);
                                                        setIsDialogOpen(true);
                                                    }}
                                                >
                                                    <Eye className="w-4 h-4" />
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-8 w-8 hover:bg-green-500/10 hover:text-green-500"
                                                    onClick={() => updateStatus(app.id, "Registered")}
                                                >
                                                    <CheckCircle className="w-4 h-4" />
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-8 w-8 hover:bg-orange-500/10 hover:text-orange-500"
                                                    onClick={() => updateStatus(app.id, "Contacted")}
                                                >
                                                    <Clock className="w-4 h-4" />
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-8 w-8 hover:bg-destructive/10 hover:text-destructive"
                                                    onClick={() => handleDelete(app.id)}
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {filteredData.length === 0 && (
                        <div className="p-12 text-center">
                            <p className="text-muted-foreground italic">Hech qanday ariza topilmadi...</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Application Details Modal */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle>Ariza Tafsilotlari #{selectedApp?.id}</DialogTitle>
                        <DialogDescription>
                            O'quvchi tomonidan yuborilgan ma'lumotlar.
                        </DialogDescription>
                    </DialogHeader>
                    {selectedApp && (
                        <div className="space-y-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <span className="font-bold text-sm text-right">F.I.O:</span>
                                <span className="col-span-3 text-sm">{selectedApp.name}</span>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <span className="font-bold text-sm text-right">Telefon:</span>
                                <span className="col-span-3 text-sm font-mono">{selectedApp.phone}</span>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <span className="font-bold text-sm text-right">Kurs:</span>
                                <div className="col-span-3">
                                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                                        {selectedApp.course}
                                    </Badge>
                                </div>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <span className="font-bold text-sm text-right">Sana:</span>
                                <span className="col-span-3 text-sm text-muted-foreground">{selectedApp.date}</span>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <span className="font-bold text-sm text-right">Status:</span>
                                <div className="col-span-3">
                                    <span className={`px-2 py-1 rounded text-xs font-bold ${getStatusStyle(selectedApp.status)}`}>
                                        {selectedApp.status}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}
                    <DialogFooter className="sm:justify-between gap-2">
                        <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => {
                                if (selectedApp) handleDelete(selectedApp.id);
                                setIsDialogOpen(false);
                            }}
                        >
                            <Trash2 className="w-4 h-4 mr-2" />
                            O'chirish
                        </Button>
                        <div className="flex gap-2">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setIsDialogOpen(false)}
                            >
                                Yopish
                            </Button>
                            {selectedApp?.status !== "Registered" && (
                                <Button
                                    className="bg-green-600 hover:bg-green-700"
                                    size="sm"
                                    onClick={() => {
                                        if (selectedApp) {
                                            updateStatus(selectedApp.id, "Registered");
                                            setIsDialogOpen(false);
                                        }
                                    }}
                                >
                                    <CheckCircle className="w-4 h-4 mr-2" />
                                    Qabul qilish
                                </Button>
                            )}
                        </div>
                    </DialogFooter>
                </DialogContent>
            </Dialog >
        </>
    );
};

export default Applications;
