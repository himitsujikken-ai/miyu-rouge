import Link from "next/link";
import Image from "next/image";
import { getBlogPosts, Blog } from "@/lib/cms";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Revalidate every 60 seconds
export const revalidate = 60;

export const metadata = {
    title: "Blog | 旅するマヤ暦アドバイザー 美優",
    description: "美優の公式ブログ。マヤ暦のエネルギー予報、旅の記録、日々の気づきを綴ります。",
};

export default async function BlogArchivePage() {
    const { contents } = await getBlogPosts({ limit: 20 }); // Get recent 20 posts

    // Helper to safe category
    const getCategory = (cat: any) => {
        if (!cat) return "JOURNAL";
        if (typeof cat === "string") return cat;
        if (Array.isArray(cat) && cat.length > 0) return typeof cat[0] === "string" ? cat[0] : cat[0].name || "JOURNAL";
        if (typeof cat === "object") return cat.name || "JOURNAL";
        return "JOURNAL";
    };

    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Header />

            {/* Hero Section */}
            <div className="pt-32 pb-16 px-6 bg-sand-beige text-center">
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Blog
                </h1>
                <p className="font-sans text-gray-600 tracking-wider text-sm">
                    マヤ暦と旅の記録
                </p>
            </div>

            {/* Blog List */}
            <section className="py-20 px-6 max-w-7xl mx-auto w-full">
                {contents.length === 0 ? (
                    <div className="text-center text-gray-500 py-10">
                        記事がまだありません。
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
                        {contents.map((post: Blog) => (
                            <article key={post.id} className="group cursor-pointer flex flex-col h-full">
                                <Link href={`/blog/${post.id}`} className="block h-full flex flex-col">
                                    <div className="relative aspect-[1.618] overflow-hidden rounded-sm mb-6">
                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300 z-10" />
                                        {/* Category Chip */}
                                        <span className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold tracking-wider text-gray-900 shadow-sm">
                                            {getCategory(post.categoly)}
                                        </span>
                                        {/* Image */}
                                        {post.iCatch ? (
                                            <Image
                                                src={post.iCatch.url}
                                                alt={post.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                                                No Image
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-col flex-grow">
                                        <time className="text-xs text-gray-400 font-medium mb-3 block">
                                            {new Date(post.publishedAt).toLocaleDateString("ja-JP", { year: 'numeric', month: 'long', day: 'numeric' })}
                                        </time>
                                        <h2 className="font-serif text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-turquoise transition-colors line-clamp-2">
                                            {post.title}
                                        </h2>
                                        {/* Excerpt if needed, currently just title is clean */}
                                        <div className="mt-auto pt-4 flex items-center text-xs font-bold tracking-widest text-gray-900 group-hover:translate-x-2 transition-transform duration-300">
                                            READ MORE <span className="ml-2">→</span>
                                        </div>
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </div>
                )}
            </section>

            <Footer />
        </main>
    );
}
