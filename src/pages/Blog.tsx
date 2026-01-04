import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { blogPosts } from "@/data/blog-posts";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
    return (
        <>
            <Helmet>
                <title>Blog - EdulabAI yangiliklari va maqolalari</title>
                <meta
                    name="description"
                    content="Sun'iy intellekt, dasturlash va zamonaviy ta'lim haqidagi eng so'nggi yangiliklar, qo'llanmalar va tahliliy maqolalar."
                />
                <meta name="keywords" content="blog, ai yangiliklar, edulabai blog, maqolalar, texnologiya" />
                <link rel="canonical" href="https://edulabai.uz/blog" />
            </Helmet>

            <Header />

            <main className="min-h-screen bg-background pt-24 pb-16">
                {/* Hero Section */}
                <section className="container-custom mb-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 animate-fade-up">
                        Bizning <span className="text-primary-gradient">Blog</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
                        Texnologiya olamidagi so'nggi yangiliklar va foydali ma'lumotlar bilan tanishing.
                    </p>
                </section>

                {/* Blog Grid */}
                <section className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <article
                                key={post.id}
                                className="group bg-card border border-border rounded-3xl overflow-hidden hover:shadow-elevated transition-all duration-300 animate-fade-up"
                                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                            >
                                <div className="aspect-video overflow-hidden relative">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4 flex gap-2">
                                        {post.tags.map(tag => (
                                            <span key={tag} className="bg-background/80 backdrop-blur-sm text-foreground text-xs px-2 py-1 rounded-full border border-border">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3.5 h-3.5" />
                                            {post.date}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <User className="w-3.5 h-3.5" />
                                            {post.author}
                                        </div>
                                    </div>

                                    <h2 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                                        <Link to={`/blog/${post.slug}`}>
                                            {post.title}
                                        </Link>
                                    </h2>

                                    <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <Link to={`/blog/${post.slug}`}>
                                        <Button variant="link" className="p-0 h-auto text-primary group-hover:translate-x-1 transition-transform">
                                            Batafsil o'qish <ArrowRight className="w-4 h-4 ml-1" />
                                        </Button>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Blog;
