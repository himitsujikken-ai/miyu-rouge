import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: "Maya Session | 旅するマヤ暦アドバイザー 美優",
    description: "マヤ暦セッションのメニュー詳細。あなたの生まれ持ったエネルギーを読み解き、人生の羅針盤をお渡しします。",
};

export default function SessionPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Header />

            {/* Hero Section */}
            <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 flex items-center justify-center bg-sand-beige text-center">
                <div className="max-w-3xl mx-auto z-10">
                    <div className="relative w-full max-w-2xl mx-auto mb-8">
                        <Image
                            src="/images/session_hero_text.png"
                            alt="マヤ暦セッション"
                            width={600}
                            height={200}
                            className="w-full h-auto object-contain"
                            priority
                        />
                    </div>
                    <p className="font-sans text-gray-600 tracking-widest text-sm md:text-base leading-loose">
                        あなたの中に眠る「答え」を、<br className="md:hidden" />
                        一緒に見つけに行きませんか？
                    </p>
                </div>
            </div>

            {/* Intro */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-full md:w-1/2 aspect-square relative rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2670&auto=format&fit=crop"
                            alt="Session Atmosphere"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                            「自分を知る」ことで、<br />人生はもっと生きやすくなる。
                        </h2>
                        <div className="space-y-6 text-gray-600 leading-loose">
                            <p>
                                マヤ暦（ツォルキン暦）は、古代マヤ文明で使われていた神聖な暦の一つ。
                                あなたが生まれたその日に流れていた「宇宙のエネルギー」を読み解くことで、
                                本来の性格、才能、使命、そして人生のバイオリズムを知ることができます。
                            </p>
                            <p>
                                「なぜか生きづらい」「人間関係で悩み続けている」「自分の進むべき道がわからない」。
                                そんなモヤモヤは、もしかしたら「本来の自分」とズレてしまっているサインかもしれません。
                            </p>
                            <p>
                                セッションでは、あなたの「魂の刻印」を紐解き、
                                あなたらしく輝くためのヒントをお伝えします。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Menu Detail */}
            <section className="py-24 px-6 bg-sand-beige/20">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-serif text-3xl text-center text-gray-900 mb-16">Menu</h2>

                    <div className="grid gap-12">
                        {/* 90min */}
                        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-sand-dark/10 relative overflow-hidden">
                            <div className="absolute top-0 left-0 bg-turquoise text-white text-xs font-bold px-4 py-2">
                                人気 No.1
                            </div>
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b border-gray-100 pb-6">
                                <div>
                                    <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">じっくり深掘りセッション</h3>
                                    <p className="text-gray-500 text-sm">自分自身＋関係性（家族・パートナーなど）＋年回り</p>
                                </div>
                                <div className="mt-4 md:mt-0 text-right">
                                    <p className="text-3xl font-bold text-gray-900 font-serif">¥15,000</p>
                                    <p className="text-sm text-gray-400">90分 / オンライン(Zoom)</p>
                                </div>
                            </div>
                            <p className="text-gray-600 leading-loose mb-8">
                                一番人気のコースです。ご自身の本質や才能はもちろん、気になる方との相性や接し方、
                                そして今年の運気の流れ（年回り）まで、総合的に読み解きます。
                                悩みや迷いがある方、人生の転機を感じている方におすすめです。
                            </p>
                            <Link href="/contact" className="block w-full bg-gray-900 text-white text-center py-4 rounded-full hover:bg-turquoise transition-colors duration-300 font-bold tracking-widest text-sm shadow-md hover:shadow-lg">
                                申し込む
                            </Link>
                        </div>

                        {/* 60min */}
                        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-sand-dark/10">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b border-gray-100 pb-6">
                                <div>
                                    <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">ベーシックセッション</h3>
                                    <p className="text-gray-500 text-sm">自分自身の本質・才能・使命</p>
                                </div>
                                <div className="mt-4 md:mt-0 text-right">
                                    <p className="text-3xl font-bold text-gray-900 font-serif">¥10,000</p>
                                    <p className="text-sm text-gray-400">60分 / オンライン(Zoom)</p>
                                </div>
                            </div>
                            <p className="text-gray-600 leading-loose mb-8">
                                まずは自分のことを知りたい！という方のためのコース。
                                生まれ持ったエネルギー（KINナンバー）を中心に、
                                あなたの強みや向いていること、魂の方向性をお伝えします。
                            </p>
                            <Link href="/contact" className="block w-full border border-gray-900 text-gray-900 text-center py-4 rounded-full hover:bg-gray-900 hover:text-white transition-colors duration-300 font-bold tracking-widest text-sm">
                                申し込む
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Flow */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-serif text-3xl text-center text-gray-900 mb-16">Data</h2>
                    <div className="space-y-8">
                        <div className="flex gap-6 items-start">
                            <div className="w-12 h-12 rounded-full bg-sand-beige flex items-center justify-center flex-shrink-0 font-serif font-bold text-gray-900">
                                1
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-2">お申し込み</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    お問い合わせフォーム（公式LINEまたはDM）より、ご希望のコースと日時をお送りください。
                                    生年月日が必要となります。（関係性を知りたい方はお相手の生年月日も）
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-6 items-start">
                            <div className="w-12 h-12 rounded-full bg-sand-beige flex items-center justify-center flex-shrink-0 font-serif font-bold text-gray-900">
                                2
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-2">日程調整・お支払い</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    日時を決定し、セッション料金の事前お振り込みをお願いいたします。
                                    ご入金確認後、Zoomリンクをお送りします。
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-6 items-start">
                            <div className="w-12 h-12 rounded-full bg-sand-beige flex items-center justify-center flex-shrink-0 font-serif font-bold text-gray-900">
                                3
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-2">セッション当日</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    リラックスしてご参加ください。
                                    鑑定書（PDF）はセッション後にお送りいたします。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
