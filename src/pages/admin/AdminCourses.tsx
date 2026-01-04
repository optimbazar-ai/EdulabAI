import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
    Plus,
    Search,
    Edit2,
    Trash2,
    Eye,
    LayoutGrid,
    List,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

const initialCourses = [
    { id: 1, title: "Prompt Engineering", students: 450, price: "250,000", status: "Faol", color: "from-blue-500 to-blue-600", link: "https://edulabai.uz/courses/prompt-engineering" },
    { id: 2, title: "AI Coding & Dev", students: 320, price: "350,000", status: "Faol", color: "from-purple-500 to-purple-600", link: "https://edulabai.uz/courses/ai-coding" },
    { id: 3, title: "AI Design (Midjourney)", students: 280, price: "300,000", status: "Faol", color: "from-pink-500 to-pink-600", link: "https://edulabai.uz/courses/ai-design" },
    { id: 4, title: "AI for Business", students: 190, price: "400,000", status: "Yangi", color: "from-emerald-500 to-emerald-600", link: "https://edulabai.uz/courses/ai-business" },
];

const AdminCourses = () => {
    const [data, setData] = useState(initialCourses);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editingCourse, setEditingCourse] = useState<any>(null);
    const [newCourse, setNewCourse] = useState({ title: "", price: "", color: "from-blue-500 to-blue-600", link: "" });
    const { toast } = useToast();

    const handleDelete = (id: number) => {
        setData(data.filter(c => c.id !== id));
        toast({
            title: "O'chirildi",
            description: "Kurs muvaffaqiyatli o'chirildi.",
        });
    };

    const handleAdd = () => {
        if (!newCourse.title || !newCourse.price) return;

        const course = {
            id: Date.now(),
            title: newCourse.title,
            price: newCourse.price,
            link: newCourse.link || "#",
            students: 0,
            status: "Yangi",
            color: newCourse.color
        };

        setData([...data, course]);
        setNewCourse({ title: "", price: "", color: "from-blue-500 to-blue-600", link: "" });
        setIsAddModalOpen(false);
        toast({
            title: "Qo'shildi",
            description: "Yangi kurs muvaffaqiyatli qo'shildi.",
        });
    };

    const openEditModal = (course: any) => {
        setEditingCourse({ ...course });
        setIsEditModalOpen(true);
    };

    const handleUpdate = () => {
        if (!editingCourse.title || !editingCourse.price) return;

        setData(data.map(c => c.id === editingCourse.id ? editingCourse : c));
        setIsEditModalOpen(false);
        toast({
            title: "Yangilandi",
            description: "Kurs ma'lumotlari muvaffaqiyatli saqlandi.",
        });
    };

    return (
        <>
            <Helmet>
                <title>Kurslar - EdulabAI Admin</title>
            </Helmet>

            <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-foreground">Kurslar Boshqaruvi</h1>
                        <p className="text-muted-foreground">Mavjud kurslarni tahrirlash va yangilarini qo'shish.</p>
                    </div>

                    <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
                        <DialogTrigger asChild>
                            <Button variant="cta" size="lg" className="rounded-2xl">
                                <Plus className="w-5 h-5 mr-2" />
                                Yangi Kurs
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md bg-card rounded-3xl border border-border">
                            <DialogHeader>
                                <DialogTitle className="text-2xl font-bold">Yangi kurs qo'shish</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4 py-4">
                                <div className="space-y-2">
                                    <Label htmlFor="title">Kurs nomi</Label>
                                    <Input
                                        id="title"
                                        placeholder="Masalan: Advanced Prompting"
                                        value={newCourse.title}
                                        onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="price">Narxi (so'mda)</Label>
                                    <Input
                                        id="price"
                                        placeholder="Masalan: 500,000"
                                        value={newCourse.price}
                                        onChange={(e) => setNewCourse({ ...newCourse, price: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="link">Platforma Linki</Label>
                                    <Input
                                        id="link"
                                        placeholder="https://..."
                                        value={newCourse.link}
                                        onChange={(e) => setNewCourse({ ...newCourse, link: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label>Rangi (Gradient)</Label>
                                    <div className="flex gap-2">
                                        {["blue", "purple", "pink", "emerald", "orange"].map((c) => (
                                            <button
                                                key={c}
                                                onClick={() => setNewCourse({ ...newCourse, color: `from-${c}-500 to-${c}-600` })}
                                                className={`w-8 h-8 rounded-full bg-${c}-500 border-2 ${newCourse.color.includes(c) ? "border-white" : "border-transparent"}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <DialogFooter>
                                <Button variant="ghost" className="rounded-xl" onClick={() => setIsAddModalOpen(false)}>Bekor qilish</Button>
                                <Button variant="cta" className="rounded-xl" onClick={handleAdd}>Qo'shish</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>

                {/* Edit Modal */}
                <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
                    <DialogContent className="sm:max-w-md bg-card rounded-3xl border border-border">
                        <DialogHeader>
                            <DialogTitle className="text-2xl font-bold">Kursni tahrirlash</DialogTitle>
                        </DialogHeader>
                        {editingCourse && (
                            <div className="space-y-4 py-4">
                                <div className="space-y-2">
                                    <Label htmlFor="edit-title">Kurs nomi</Label>
                                    <Input
                                        id="edit-title"
                                        value={editingCourse.title}
                                        onChange={(e) => setEditingCourse({ ...editingCourse, title: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="edit-price">Narxi (so'mda)</Label>
                                    <Input
                                        id="edit-price"
                                        value={editingCourse.price}
                                        onChange={(e) => setEditingCourse({ ...editingCourse, price: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="edit-link">Platforma Linki</Label>
                                    <Input
                                        id="edit-link"
                                        value={editingCourse.link || ""}
                                        onChange={(e) => setEditingCourse({ ...editingCourse, link: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label>Rangi (Gradient)</Label>
                                    <div className="flex gap-2">
                                        {["blue", "purple", "pink", "emerald", "orange"].map((c) => (
                                            <button
                                                key={c}
                                                onClick={() => setEditingCourse({ ...editingCourse, color: `from-${c}-500 to-${c}-600` })}
                                                className={`w-8 h-8 rounded-full bg-${c}-500 border-2 ${editingCourse.color.includes(c) ? "border-white" : "border-transparent"}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                        <DialogFooter>
                            <Button variant="ghost" className="rounded-xl" onClick={() => setIsEditModalOpen(false)}>Bekor qilish</Button>
                            <Button variant="cta" className="rounded-xl" onClick={handleUpdate}>Saqlash</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

                <div className="grid lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-3 relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                            placeholder="Kurs nomini qidiring..."
                            className="pl-12 h-12 rounded-2xl bg-card border-border shadow-soft"
                        />
                    </div>
                    <div className="flex items-center gap-2 p-1 bg-card rounded-2xl border border-border shadow-soft">
                        <Button variant="ghost" className="flex-1 rounded-xl bg-muted h-10">
                            <LayoutGrid className="w-4 h-4 mr-2" />
                            Grid
                        </Button>
                        <Button variant="ghost" className="flex-1 rounded-xl h-10">
                            <List className="w-4 h-4 mr-2" />
                            List
                        </Button>
                    </div>
                </div>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
                    {data.map((course) => (
                        <div key={course.id} className="bg-card rounded-3xl border border-border shadow-soft overflow-hidden group hover:shadow-glow transition-all duration-300">
                            <div className="p-1">
                                <div className={`h-24 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <h3 className="text-xl font-bold text-white relative z-10">{course.title}</h3>
                                </div>
                            </div>
                            <div className="p-6 space-y-4">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="text-center">
                                        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">O'quvchilar</p>
                                        <p className="font-bold text-foreground">{course.students}</p>
                                    </div>
                                    <div className="text-center border-x border-border">
                                        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Narxi</p>
                                        <p className="font-bold text-foreground">{course.price}</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Status</p>
                                        <span className="text-xs font-bold text-green-500">{course.status}</span>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-border flex items-center justify-between gap-3">
                                    <div className="flex items-center gap-2">
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="h-10 w-10 rounded-xl hover:bg-muted"
                                            onClick={() => {
                                                if (course.link) window.open(course.link, '_blank');
                                                else toast({ title: "Xatolik", description: "Link belgilanmagan." });
                                            }}
                                        >
                                            <Eye className="w-4 h-4" />
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="h-10 w-10 rounded-xl hover:bg-primary/10 hover:text-primary"
                                            onClick={() => openEditModal(course)}
                                        >
                                            <Edit2 className="w-4 h-4" />
                                        </Button>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        className="text-destructive hover:bg-destructive/10 hover:text-destructive rounded-xl px-4 h-10"
                                        onClick={() => handleDelete(course.id)}
                                    >
                                        <Trash2 className="w-4 h-4 mr-2" />
                                        O'chirish
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AdminCourses;
