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
    FileText,
    Image as ImageIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; // Assuming we have this, or use Input
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
import { blogPosts, BlogPost } from "@/data/blog-posts";

const AdminBlog = () => {
    const [data, setData] = useState<BlogPost[]>(blogPosts);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
    const [newPost, setNewPost] = useState<Partial<BlogPost>>({
        title: "", excerpt: "", content: "", author: "Admin", image: "", tags: []
    });
    const { toast } = useToast();

    const handleDelete = (id: number) => {
        setData(data.filter(p => p.id !== id));
        toast({
            title: "O'chirildi",
            description: "Maqola muvaffaqiyatli o'chirildi.",
        });
    };

    const handleAdd = () => {
        if (!newPost.title || !newPost.content) return;

        const post: BlogPost = {
            id: Date.now(),
            title: newPost.title || "Untitled",
            excerpt: newPost.excerpt || "",
            content: newPost.content || "",
            author: newPost.author || "Admin",
            date: new Date().toISOString().split('T')[0],
            image: newPost.image || "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800",
            tags: newPost.tags || ["General"],
            slug: (newPost.title || "untitled").toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "")
        };

        setData([...data, post]);
        setNewPost({ title: "", excerpt: "", content: "", author: "Admin", image: "", tags: [] });
        setIsAddModalOpen(false);
        toast({
            title: "Qo'shildi",
            description: "Yangi maqola muvaffaqiyatli qo'shildi.",
        });
    };

    const openEditModal = (post: BlogPost) => {
        setEditingPost({ ...post });
        setIsEditModalOpen(true);
    };

    const handleUpdate = () => {
        if (!editingPost || !editingPost.title) return;

        setData(data.map(p => p.id === editingPost.id ? editingPost : p));
        setIsEditModalOpen(false);
        toast({
            title: "Yangilandi",
            description: "Maqola yangilandi.",
        });
    };

    return (
        <>
            <Helmet>
                <title>Blog - EdulabAI Admin</title>
            </Helmet>

            <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-foreground">Blog Boshqaruvi</h1>
                        <p className="text-muted-foreground">Maqolalarni tahrirlash va yangilarini qo'shish.</p>
                    </div>

                    <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
                        <DialogTrigger asChild>
                            <Button variant="cta" size="lg" className="rounded-2xl">
                                <Plus className="w-5 h-5 mr-2" />
                                Yangi Maqola
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-2xl bg-card rounded-3xl border border-border max-h-[90vh] overflow-y-auto">
                            <DialogHeader>
                                <DialogTitle className="text-2xl font-bold">Yangi maqola yozish</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4 py-4">
                                <div className="space-y-2">
                                    <Label htmlFor="title">Sarlavha</Label>
                                    <Input
                                        id="title"
                                        placeholder="Maqola mavzusi"
                                        value={newPost.title}
                                        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="excerpt">Qisqacha tavsif (Excerpt)</Label>
                                    <Input
                                        id="excerpt"
                                        placeholder="Qiziqtiruvchi qisqa matn..."
                                        value={newPost.excerpt}
                                        onChange={(e) => setNewPost({ ...newPost, excerpt: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="image">Rasm Linki</Label>
                                    <div className="flex gap-2">
                                        <Input
                                            id="image"
                                            placeholder="https://..."
                                            value={newPost.image}
                                            onChange={(e) => setNewPost({ ...newPost, image: e.target.value })}
                                        />
                                        <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center overflow-hidden border border-border">
                                            {newPost.image ? <img src={newPost.image} className="w-full h-full object-cover" /> : <ImageIcon className="w-5 h-5 opacity-50" />}
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="content">Asosiy Matn (HTML mumkin)</Label>
                                    <textarea
                                        id="content"
                                        className="flex min-h-[200px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="<p>Maqola matni...</p>"
                                        value={newPost.content}
                                        onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="author">Muallif</Label>
                                    <Input
                                        id="author"
                                        value={newPost.author}
                                        onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
                                    />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button variant="ghost" className="rounded-xl" onClick={() => setIsAddModalOpen(false)}>Bekor qilish</Button>
                                <Button variant="cta" className="rounded-xl" onClick={handleAdd}>Chop etish</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>

                {/* Edit Modal */}
                <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
                    <DialogContent className="sm:max-w-2xl bg-card rounded-3xl border border-border max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                            <DialogTitle className="text-2xl font-bold">Maqolani tahrirlash</DialogTitle>
                        </DialogHeader>
                        {editingPost && (
                            <div className="space-y-4 py-4">
                                <div className="space-y-2">
                                    <Label htmlFor="edit-title">Sarlavha</Label>
                                    <Input
                                        id="edit-title"
                                        value={editingPost.title}
                                        onChange={(e) => setEditingPost({ ...editingPost, title: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="edit-excerpt">Qisqacha tavsif</Label>
                                    <Input
                                        id="edit-excerpt"
                                        value={editingPost.excerpt}
                                        onChange={(e) => setEditingPost({ ...editingPost, excerpt: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="edit-image">Rasm Linki</Label>
                                    <Input
                                        id="edit-image"
                                        value={editingPost.image}
                                        onChange={(e) => setEditingPost({ ...editingPost, image: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="edit-content">Matn</Label>
                                    <textarea
                                        id="edit-content"
                                        className="flex min-h-[200px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        value={editingPost.content}
                                        onChange={(e) => setEditingPost({ ...editingPost, content: e.target.value })}
                                    />
                                </div>
                            </div>
                        )}
                        <DialogFooter>
                            <Button variant="ghost" className="rounded-xl" onClick={() => setIsEditModalOpen(false)}>Bekor qilish</Button>
                            <Button variant="cta" className="rounded-xl" onClick={handleUpdate}>Saqlash</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {data.map((post) => (
                        <div key={post.id} className="bg-card rounded-3xl border border-border shadow-soft overflow-hidden group hover:shadow-glow transition-all duration-300 flex flex-col">
                            <div className="aspect-video relative overflow-hidden">
                                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute top-2 right-2 flex gap-1">
                                    <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm" onClick={() => openEditModal(post)}>
                                        <Edit2 className="w-4 h-4" />
                                    </Button>
                                    <Button size="icon" variant="destructive" className="h-8 w-8 rounded-full" onClick={() => handleDelete(post.id)}>
                                        <Trash2 className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                            <div className="p-5 flex-1 flex flex-col">
                                <span className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
                                    <FileText className="w-3 h-3" /> {post.date}
                                </span>
                                <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">{post.title}</h3>
                                <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">{post.excerpt}</p>
                                <div className="pt-4 border-t border-border flex justify-between items-center">
                                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-md">{post.author}</span>
                                    <Button variant="ghost" size="sm" className="text-xs" onClick={() => window.open(`/blog/${post.slug}`, '_blank')}>
                                        Ko'rish <Eye className="w-3 h-3 ml-1" />
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

export default AdminBlog;
