import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FaLine, FaInstagram } from "react-icons/fa";

export const metadata = {
    title: "Contact | 旅するマヤ暦アドバイザー 美優",
    description: "お問い合わせはこちらから。公式LINE、Instagram DMにて受け付けています。",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Header />

            {/* Hero Section */}
            <div className="pt-32 pb-16 px-6 bg-sand-beige text-center">
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Contact
                </h1>
                <p className="font-sans text-gray-600 tracking-wider text-sm">
                    お問い合わせ
                </p>
            </div>

            {/* Content Section */}
            <section className="py-20 px-6 max-w-2xl mx-auto w-full flex-grow">
                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 text-center">
                    <p className="text-gray-700 leading-loose mb-10">
                        セッション、講座、リトリートに関するお問い合わせ・お申し込みは、<br className="hidden md:inline" />
                        <span className="font-bold text-turquoise">公式LINE</span> にて受け付けております。<br /><br />
                        「どのメニューがいいか迷っている」<br />
                        「マヤ暦について少し聞いてみたい」<br />
                        など、まずはお気軽にご連絡ください。
                    </p>

                    <div className="space-y-6">
                        {/* Official LINE Button */}
                        <a
                            href="https://line.me/R/ti/p/@785mkoru"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative block w-full bg-[#06C755] text-white font-bold py-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                        >
                            <div className="flex items-center justify-center gap-3 relative z-10">
                                <FaLine className="text-2xl" />
                                <span className="tracking-widest">公式LINEで問い合わせる</span>
                            </div>
                        </a>

                        {/* Instagram DM Button */}
                        <a
                            href="https://www.instagram.com/miyu_stagram72/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white font-bold py-5 rounded-xl shadow-md hover:opacity-90 transition-all duration-300"
                        >
                            <div className="flex items-center justify-center gap-3">
                                <FaInstagram className="text-2xl" />
                                <span className="tracking-widest">Instagram DMで送る</span>
                            </div>
                        </a>
                    </div>

                    <p className="mt-10 text-xs text-gray-400">
                        ※ お問い合わせ内容によっては、回答にお時間をいただく場合がございます。<br />
                        ※ 営業・勧誘等のご連絡はお断りしております。
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
