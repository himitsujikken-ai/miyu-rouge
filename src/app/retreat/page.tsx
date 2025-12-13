import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: "Retreat & Travel | 旅するマヤ暦アドバイザー 美優",
    description: "美優と行く、リトリートの旅。ハワイ、国内のパワースポットを巡り、心身ともに再生する時間を。",
};

export default function RetreatPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Header />

            {/* Hero Section */}
            <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 flex items-center justify-center bg-sand-beige text-center">
                <div className="max-w-3xl mx-auto z-10">
                    <div className="relative w-full max-w-2xl mx-auto mb-8">
                        <Image
                            src="/images/service_retreat.png"
                            alt="リトリート・旅企画"
                            width={600}
                            height={200}
                            className="w-full h-auto object-contain"
                            priority
                        />
                    </div>
                    <p className="font-sans text-gray-600 tracking-widest text-sm md:text-base leading-loose">
                        日常を離れ、<br className="md:hidden" />
                        本来の自分に還る場所へ。
                    </p>
                </div>
            </div>

            {/* Intro */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg mb-12">
                        <Image
                            src="https://images.unsplash.com/photo-1542259646-642d31e01768?q=80&w=2670&auto=format&fit=crop" // Hawaii/Nature
                            alt="Retreat Landscape"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                            心と体が目覚める、<br />特別な時間を共有しませんか？
                        </h2>
                        <div className="space-y-6 text-gray-600 leading-loose text-left md:text-center">
                            <p>
                                雄大な自然の中に身を置くと、私たちは自然と「OFF」のスイッチが入ります。
                                思考のノイズが消え、五感が研ぎ澄まされていく感覚。
                            </p>
                            <p>
                                美優のリトリートでは、ただ観光するだけではありません。
                                土地のエネルギーを感じ、マヤ暦のワークで内観し、参加者同士で語り合う。
                                そんな濃密な時間を共に過ごします。
                            </p>
                            <p>
                                帰る頃には、きっと新しい自分に出会えているはずです。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Plans */}
            <section className="py-24 px-6 bg-sand-beige/20">
                <div className="max-w-6xl mx-auto">
                    <h2 className="font-serif text-3xl text-center text-gray-900 mb-16">Concept</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Hawaii */}
                        <div className="bg-white rounded-2xl shadow-sm border border-sand-dark/10 overflow-hidden group">
                            <div className="relative h-72">
                                <div className="absolute top-0 left-0 bg-turquoise text-white text-xs font-bold px-4 py-2 z-10">
                                    SPECIAL
                                </div>
                                <Image
                                    src="https://images.unsplash.com/photo-1549488391-2f78b97d8482?q=80&w=2670&auto=format&fit=crop"
                                    alt="Hawaii Retreat"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">ハワイリトリート</h3>
                                <p className="text-gray-600 leading-loose mb-6">
                                    ハワイ島・マウイ島などを巡る、大自然と繋がる旅。
                                    （不定期開催）
                                </p>
                                <ul className="text-sm text-gray-500 mb-8 space-y-2">
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-turquoise rounded-full" /> パワースポット巡り
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-turquoise rounded-full" /> サンセット瞑想
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-turquoise rounded-full" /> マヤ暦ワークショップ
                                    </li>
                                </ul>
                                <Link href="/contact" className="inline-block text-sm font-bold border-b border-gray-900 pb-1 hover:text-turquoise hover:border-turquoise transition-colors">
                                    開催情報を問い合わせる
                                </Link>
                            </div>
                        </div>

                        {/* Domestic */}
                        <div className="bg-white rounded-2xl shadow-sm border border-sand-dark/10 overflow-hidden group">
                            <div className="relative h-72">
                                <Image
                                    src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=2670&auto=format&fit=crop" // Japan/Mountin
                                    alt="Domestic Retreat"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">国内リトリート</h3>
                                <p className="text-gray-600 leading-loose mb-6">
                                    神社仏閣巡りや、自然豊かな場所でのリフレッシュ旅。
                                    日帰り〜1泊2日で気軽に参加できます。
                                </p>
                                <ul className="text-sm text-gray-500 mb-8 space-y-2">
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-turquoise rounded-full" /> 神社参拝ツアー
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-turquoise rounded-full" /> 温泉＆グループセッション
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-turquoise rounded-full" /> 美味しい食事会
                                    </li>
                                </ul>
                                <Link href="/contact" className="inline-block text-sm font-bold border-b border-gray-900 pb-1 hover:text-turquoise hover:border-turquoise transition-colors">
                                    開催情報を問い合わせる
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
