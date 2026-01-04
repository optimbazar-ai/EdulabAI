import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { blogPosts } from "@/data/blog-posts";
import { Calendar, User, Tag, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BlogPost = () => {
    const { slug } = useParams();
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return <Navigate to="/404" replace />;
    }

    return (
        <>
            <Helmet>
                <title>{post.title} - EdulabAI Blog</title>
                <meta name="description" content={post.excerpt} />
                <meta name="author" content={post.author} />
                <meta name="keywords" content={post.tags.join(", ")} />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="article" />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.excerpt} />
                <meta property="og:image" content={post.image} />
                <meta property="og:url" content={`https://edulabai.uz/blog/${post.slug}`} />
                <meta property="article:published_time" content={post.date} />
                <meta property="article:author" content={post.author} />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={post.title} />
                <meta name="twitter:description" content={post.excerpt} />
                <meta name="twitter:image" content={post.image} />

                <link rel="canonical" href={`https://edulabai.uz/blog/${post.slug}`} />
            </Helmet>

            <Header />

            <main className="min-h-screen bg-background pt-24 pb-16">
                <article className="container-custom max-w-4xl">
                    <Link to="/blog">
                        <Button variant="ghost" className="mb-8 hover:bg-white/5">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Blogga qaytish
                        </Button>
                    </Link>

                    <header className="mb-10 text-center">
                        <div className="flex justify-center gap-2 mb-6">
                            {post.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium border border-primary/20"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex items-center justify-center gap-6 text-muted-foreground text-sm">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {post.date}
                            </div>
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                {post.author}
                            </div>
                        </div>
                    </header>

                    <div className="relative aspect-video rounded-3xl overflow-hidden mb-12 border border-border shadow-elevated">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div
                        className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary hover:prose-a:underline prose-strong:text-foreground"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <hr className="my-12 border-border" />

                    <div className="bg-card border border-border rounded-3xl p-8 flex flex-col md:flex-row items-center gap-6">
                        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                            <User className="w-8 h-8" />
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="text-lg font-bold text-foreground mb-1">Muallif: {post.author}</h3>
                            <p className="text-muted-foreground text-sm">EdulabAI jamoasi a'zosi. Sun'iy intellekt va ta'lim texnologiyalari bo'yicha ekspert.</p>
                        </div>
                    </div>
                </article>
            </main>

            <Footer />
        </>
    );
};

export default BlogPost;
