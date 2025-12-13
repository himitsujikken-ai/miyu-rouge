import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: "About Me | 旅するマヤ暦アドバイザー 美優",
    description: "美優（Miyu）のプロフィールとストーリー。マヤ暦と旅を通じて見つけた自分らしい生き方。",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen flex flex-col bg-sand-beige/10">
            <Header />

            {/* Hero Section */}
            <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 flex items-center justify-center bg-sand-beige text-center">
                <div className="max-w-3xl mx-auto z-10">
                    <h1 className="font-serif text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        The Journey to<br />
                        <span className="text-turquoise">Self-Love.</span>
                    </h1>
                    <p className="font-sans text-gray-600 tracking-widest text-sm md:text-base">
                        旅とマヤ暦が教えてくれた、<br className="md:hidden" />
                        私らしい生き方。
                    </p>
                </div>
                {/* Decorative Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-turquoise rounded-full blur-[100px]" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-sand-dark rounded-full blur-[100px]" />
                </div>
            </div>

            {/* Mission Section */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-sm font-bold tracking-widest uppercase text-turquoise mb-8">
                        Vision
                    </h2>
                    <p className="font-serif text-2xl md:text-3xl text-gray-900 leading-relaxed mb-10">
                        「誰か」になる必要はない。<br />
                        あなたは、あなたのままで素晴らしい。
                    </p>
                    <p className="text-gray-600 leading-loose text-justify md:text-center max-w-2xl mx-auto">
                        私たちは日々の生活の中で、つい「こうあるべき」という社会の物差しで自分を測ってしまいがちです。
                        でも、本来のあなたはもっと自由で、もっと輝いています。<br /><br />
                        マヤ暦は、あなたが生まれ持った「魂の刻印」を思い出させてくれる地図。
                        そして旅は、固まった心を優しく解き放ってくれる魔法。<br /><br />
                        自分を知り、認め、愛すること。
                        そこから、本当の人生の旅が始まります。
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-24 px-6 bg-sand-beige/20">
                <div className="max-w-5xl mx-auto">
                    <h2 className="font-serif text-3xl text-center text-gray-900 mb-16">My Story</h2>

                    <div className="space-y-12 relative">
                        {/* Vertical Line */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 -translate-x-1/2" />

                        {/* Episode 1 */}
                        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                            <div className="w-full md:w-1/2 text-right md:pr-8 order-2 md:order-1">
                                <span className="inline-block text-xs font-bold text-gray-400 mb-2">PAST</span>
                                <h3 className="font-serif text-xl font-bold text-gray-800 mb-4">自信が持てなかった日々</h3>
                                <p className="text-gray-600 leading-loose text-sm">
                                    かつての私は、常に周りの目を気にして生きていました。
                                    「自分には何もない」「誰かに認められないと価値がない」。
                                    そんな不安から、資格取得やスキルアップに必死になり、
                                    いつの間にか自分自身の本当の気持ちを見失っていたのです。
                                </p>
                            </div>
                            <div className="w-full md:w-1/2 md:pl-8 order-1 md:order-2 flex justify-center md:justify-start">
                                <div className="w-4 h-4 rounded-full bg-gray-300 relative z-10 outline outline-4 outline-white hidden md:block -ml-[40px]" />
                                {/* Placeholder Image */}
                                <div className="w-full max-w-sm aspect-video bg-gray-200 rounded-lg shadow-sm overflow-hidden relative">
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs">Image: Past</div>
                                </div>
                            </div>
                        </div>

                        {/* Episode 2 */}
                        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                            <div className="w-full md:w-1/2 md:pr-8 order-1 md:order-1 flex justify-center md:justify-end">
                                <div className="w-full max-w-sm aspect-video bg-turquoise/10 rounded-lg shadow-sm overflow-hidden relative">
                                    <div className="absolute inset-0 flex items-center justify-center text-turquoise/50 text-xs">Image: Maya</div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 text-left md:pl-8 order-2 md:order-2 relative">
                                <div className="w-4 h-4 rounded-full bg-turquoise relative z-10 outline outline-4 outline-white hidden md:block absolute top-[20px] -left-[40px]" />
                                <span className="inline-block text-xs font-bold text-turquoise mb-2">TURNING POINT 01</span>
                                <h3 className="font-serif text-xl font-bold text-gray-800 mb-4">マヤ暦との出会い</h3>
                                <p className="text-gray-600 leading-loose text-sm">
                                    ある日出会った「マヤ暦」。そこで自分の生まれ持った性質を知り、衝撃を受けました。
                                    「私は私のままでよかったんだ」。
                                    自分の強みも弱みも、すべてが意味のあるギフトだと知った瞬間、
                                    肩の荷が降りていくのを感じました。
                                </p>
                            </div>
                        </div>

                        {/* Episode 3 */}
                        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                            <div className="w-full md:w-1/2 text-right md:pr-8 order-2 md:order-1">
                                <span className="inline-block text-xs font-bold text-turquoise mb-2">TURNING POINT 02</span>
                                <h3 className="font-serif text-xl font-bold text-gray-800 mb-4">世界への旅とセルフラブ</h3>
                                <p className="text-gray-600 leading-loose text-sm">
                                    自分の心に従って旅に出るようになりました。
                                    特にハワイの雄大な自然は、私に「委ねる」ことの大切さを教えてくれました。
                                    完璧でなくてもいい。ただ、この瞬間の自分を愛すること。
                                    それが「セルフラブ」への目覚めでした。
                                </p>
                            </div>
                            <div className="w-full md:w-1/2 md:pl-8 order-1 md:order-2 flex justify-center md:justify-start">
                                <div className="w-4 h-4 rounded-full bg-turquoise relative z-10 outline outline-4 outline-white hidden md:block -ml-[40px]" />
                                <div className="w-full max-w-sm aspect-video bg-sand-dark/20 rounded-lg shadow-sm overflow-hidden relative">
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-xs">Image: Travel</div>
                                </div>
                            </div>
                        </div>

                        {/* Episode 4 */}
                        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                            <div className="w-full md:w-1/2 md:pr-8 order-1 md:order-1 flex justify-center md:justify-end">
                                {/* Use existing Hero image if appropriate or placeholder */}
                                <div className="w-full max-w-sm aspect-video relative rounded-lg shadow-sm overflow-hidden">
                                    <Image src="/images/hero.png" alt="Present" fill className="object-cover" />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 text-left md:pl-8 order-2 md:order-2 relative">
                                <div className="w-4 h-4 rounded-full bg-sand-dark relative z-10 outline outline-4 outline-white hidden md:block absolute top-[20px] -left-[40px]" />
                                <span className="inline-block text-xs font-bold text-sand-dark mb-2">PRESENT</span>
                                <h3 className="font-serif text-xl font-bold text-gray-800 mb-4">旅するマヤ暦アドバイザーへ</h3>
                                <p className="text-gray-600 leading-loose text-sm">
                                    現在は「旅するマヤ暦アドバイザー」として活動しています。
                                    場所にとらわれず、好きな場所で、好きな人たちと笑い合う。
                                    そんな私のライフスタイルを通して、
                                    「あなたも、もっと自由に生きていいんだよ」というメッセージを伝えていきたい。
                                    それが私の願いです。
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Profile Details */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-full md:w-1/3 aspect-[3/4] relative bg-gray-100">
                        <Image
                            src="/images/profile_v2.jpg"
                            alt="Miyu Profile"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="w-full md:w-2/3">
                        <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">美優（Miyu）</h2>
                        <div className="space-y-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-6">
                            <div className="grid grid-cols-[100px_1fr] gap-4">
                                <span className="font-bold text-gray-400">ROLE</span>
                                <span>旅するマヤ暦アドバイザー</span>
                            </div>
                            <div className="grid grid-cols-[100px_1fr] gap-4">
                                <span className="font-bold text-gray-400">LOCATION</span>
                                <span>東京 / ハワイ / 世界中</span>
                            </div>
                            <div className="grid grid-cols-[100px_1fr] gap-4">
                                <span className="font-bold text-gray-400">LIKES</span>
                                <span>海、空、美味しいコーヒー、神社巡り</span>
                            </div>
                            <div className="grid grid-cols-[100px_1fr] gap-4">
                                <span className="font-bold text-gray-400">MESSAGE</span>
                                <span>
                                    人生は一度きり。自分の心の声を羅針盤に、<br />
                                    あなただけの物語を紡いでいきましょう。
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Area */}
            <section className="py-20 bg-sand-beige text-center px-6">
                <h2 className="font-serif text-2xl font-bold text-gray-900 mb-8">
                    あなたの物語を、ここから始めよう。
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/#service" className="inline-block bg-white text-gray-900 px-8 py-4 text-sm tracking-widest hover:bg-turquoise hover:text-white transition-all duration-300 shadow-md">
                        サービス一覧を見る
                    </Link>
                    <Link href="/contact" className="inline-block border border-gray-900 text-gray-900 px-8 py-4 text-sm tracking-widest hover:bg-gray-900 hover:text-white transition-all duration-300">
                        お問い合わせ
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
