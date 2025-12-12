import { getBlogPost } from "@/lib/microcms";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

// Force dynamic rendering if not using generateStaticParams (User didn't ask for SSG specifically, but SSR/ISR is fine. Standard dynamic route)
export const dynamic = 'force-dynamic';

type Props = {
    params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    try {
        const post = await getBlogPost(id);
        return {
            title: `${post.title} | 旅するマヤ暦アドバイザー`,
            description: post.excerpt || post.title,
        };
    } catch (error) {
        return {
            title: "Article Not Found",
        };
    }
}

export default async function BlogDetailPage({ params }: Props) {
    const { id } = await params;
    let post;
    try {
        post = await getBlogPost(id);
    } catch (error) {
        notFound();
    }

    // Helper to safe category
    const getCategory = (cat: any) => {
        if (!cat) return "JOURNAL";
        if (typeof cat === "string") return cat;
        if (Array.isArray(cat) && cat.length > 0) return typeof cat[0] === "string" ? cat[0] : cat[0].name || "JOURNAL";
        if (typeof cat === "object") return cat.name || "JOURNAL";
        return "JOURNAL";
    };

    return (
        <main className="bg-white min-h-screen pb-24">
            {/* Header Spacer since header is fixed */}
            <div className="h-20" />

            {/* Hero / Eyecatch Section */}
            <div className="relative w-full h-[50vh] min-h-[400px]">
                {post.iCatch ? (
                    <Image
                        src={post.iCatch.url}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                ) : (
                    <div className="w-full h-full bg-sand-beige flex items-center justify-center text-gray-500">
                        No Image
                    </div>
                )}
                <div className="absolute inset-0 bg-black/30" />

                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 text-white max-w-5xl mx-auto">
                    <span className="inline-block bg-turquoise px-3 py-1 text-xs font-bold tracking-wider uppercase mb-4 shadow-sm text-gray-900 border border-white/20">
                        {getCategory(post.categoly)}
                    </span>
                    <h1 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-4 drop-shadow-md">
                        {post.title}
                    </h1>
                    <time className="block text-sm opacity-90 font-medium tracking-wide">
                        {new Date(post.publishedAt).toLocaleDateString("ja-JP", { year: 'numeric', month: 'long', day: 'numeric' })}
                    </time>
                </div>
            </div>

            {/* Content Section */}
            <article className="max-w-3xl mx-auto px-6 py-16">
                <div
                    className="prose prose-lg prose-slate max-w-none 
          prose-headings:font-serif prose-headings:font-bold prose-headings:text-gray-900
          prose-p:text-gray-700 prose-p:leading-loose
          prose-img:rounded-md prose-img:shadow-md
          prose-a:text-turquoise prose-a:no-underline hover:prose-a:underline"
                    dangerouslySetInnerHTML={{ __html: post.body }}
                />
            </article>

            {/* Footer Navigation */}
            <div className="border-t border-gray-100 mt-12 py-12 text-center">
                <Link
                    href="/#blog"
                    className="inline-block border border-gray-900 px-8 py-3 text-sm tracking-widest hover:bg-gray-900 hover:text-white transition-colors duration-300"
                >
                    BACK TO LIST
                </Link>
            </div>
        </main>
    );
}
