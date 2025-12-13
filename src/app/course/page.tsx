import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: "Maya Course | 旅するマヤ暦アドバイザー 美優",
    description: "マヤ暦を学ぶ講座メニュー。自分で運気を読み解きたい方、アドバイザーとして活動したい方へ。",
};

export default function CoursePage() {
    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Header />

            {/* Hero Section */}
            <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 flex items-center justify-center bg-sand-beige text-center">
                <div className="max-w-3xl mx-auto z-10">
                    <span className="text-turquoise text-sm tracking-widest uppercase font-bold mb-4 block">
                        Maya Calendar Course
                    </span>
                    <h1 className="font-serif text-3xl md:text-5xl font-bold text-gray-900 mb-6 mobile:leading-tight">
                        マヤ暦講座
                    </h1>
                    <p className="font-sans text-gray-600 tracking-widest text-sm md:text-base leading-loose">
                        学ぶほどに、人生が深まる。<br className="md:hidden" />
                        古代の叡智を、あなたの手に。
                    </p>
                </div>
            </div>

            {/* Intro */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-full md:w-1/2 md:order-2 aspect-square relative rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src="https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=2670&auto=format&fit=crop"
                            alt="Study Maya"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="w-full md:w-1/2 md:order-1">
                        <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                            自分で読み解く喜びを。
                        </h2>
                        <div className="space-y-6 text-gray-600 leading-loose">
                            <p>
                                セッションを受けるだけでなく、「自分でマヤ暦を見れるようになりたい」という方のための講座です。
                            </p>
                            <p>
                                マヤ暦を学ぶと、自分自身のことはもちろん、家族や友人のことも深く理解できるようになります。
                                「あの人がなぜあんな行動をするのか？」その理由が腑に落ちることで、人間関係の悩みは驚くほど軽くなります。
                            </p>
                            <p>
                                初めての方から、プロのアドバイザーを目指す方まで。
                                段階に合わせて学べるコースをご用意しています。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Menu Detail */}
            <section className="py-24 px-6 bg-sand-beige/20">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-serif text-3xl text-center text-gray-900 mb-16">Curriculum</h2>

                    <div className="grid gap-12">
                        {/* Startup */}
                        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-sand-dark/10">
                            <div className="mb-6 border-b border-gray-100 pb-6">
                                <span className="text-turquoise font-bold text-xs tracking-widest mb-1 block">STEP 01</span>
                                <h3 className="font-serif text-2xl font-bold text-gray-900">スタートアップ講座</h3>
                                <p className="text-sm text-gray-400 mt-2">（全4回 / 各4時間）</p>
                            </div>
                            <p className="text-gray-600 leading-loose mb-8">
                                マヤ暦の基礎を学ぶ入門コースです。<br />
                                ・20の紋章、13の音の意味とキーワード<br />
                                ・関係性（類似・神秘・反対・ガイド）の出し方<br />
                                ・基本的な読み解き方<br />
                                受講後には、自分や周りの人の基本的な性質を読み解けるようになります。
                            </p>
                            <div className="bg-gray-50 p-6 rounded-lg mb-8 text-sm">
                                <p className="font-bold text-gray-900 mb-2">料金</p>
                                <p>¥44,000 + テキスト代 ¥2,200（税込）</p>
                            </div>
                            <Link href="/contact" className="block w-full border border-gray-900 text-gray-900 text-center py-4 rounded-lg hover:bg-gray-50 transition-colors duration-300 font-bold tracking-widest text-sm">
                                お問い合わせ
                            </Link>
                        </div>

                        {/* Basic */}
                        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-sand-dark/10">
                            <div className="mb-6 border-b border-gray-100 pb-6">
                                <span className="text-turquoise font-bold text-xs tracking-widest mb-1 block">STEP 02</span>
                                <h3 className="font-serif text-2xl font-bold text-gray-900">ベーシック講座</h3>
                                <p className="text-sm text-gray-400 mt-2">（全4回 / 各4時間）</p>
                            </div>
                            <p className="text-gray-600 leading-loose mb-8">
                                さらに深くマヤ暦の叡智を学ぶコースです。<br />
                                ・チャクラ、鏡の向こう、絶対反対キン<br />
                                ・13年サイクルの読み方<br />
                                ・人生の年表作り<br />
                                自分の人生のバイオリズムを知り、未来をデザインする力を養います。
                                スタートアップ講座修了者が対象です。
                            </p>
                            <div className="bg-gray-50 p-6 rounded-lg mb-8 text-sm">
                                <p className="font-bold text-gray-900 mb-2">料金</p>
                                <p>¥44,000 + 追補資料代（税込）</p>
                            </div>
                            <Link href="/contact" className="block w-full border border-gray-900 text-gray-900 text-center py-4 rounded-lg hover:bg-gray-50 transition-colors duration-300 font-bold tracking-widest text-sm">
                                お問い合わせ
                            </Link>
                        </div>

                        {/* Advisor */}
                        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-sand-dark/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-gray-900 text-white text-xs font-bold px-4 py-2">
                                Certification
                            </div>
                            <div className="mb-6 border-b border-gray-100 pb-6">
                                <span className="text-turquoise font-bold text-xs tracking-widest mb-1 block">STEP 03</span>
                                <h3 className="font-serif text-2xl font-bold text-gray-900">アドバイザー認定試験対策</h3>
                                <p className="text-sm text-gray-400 mt-2">（試験対策・認定試験）</p>
                            </div>
                            <p className="text-gray-600 leading-loose mb-8">
                                プロのマヤ暦アドバイザーとして活動したい方のための認定試験コースです。
                                試験合格後は、アドバイザーとしてセッションや講座（入門編）を開講できるようになります。
                            </p>
                            <Link href="/contact" className="block w-full bg-gray-900 text-white text-center py-4 rounded-lg hover:bg-turquoise transition-colors duration-300 font-bold tracking-widest text-sm">
                                詳細を聞く
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
