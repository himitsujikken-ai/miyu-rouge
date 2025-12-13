import Image from "next/image";
import Link from "next/link";

export default function Concept() {
    return (
        <section className="py-32 bg-white">
            <div className="max-w-4xl mx-auto px-6">

                {/* 1. Headline (Interest) */}
                <div className="text-center mb-24">
                    <h2 className="font-serif text-3xl md:text-5xl text-gray-900 font-bold leading-tight mb-8">
                        「頑張ること」に<br className="md:hidden" />疲れてしまったあなたへ。<br />
                        そろそろ、地図を持って<br className="md:hidden" />歩きませんか？
                    </h2>
                </div>

                {/* 2. Empathy (Problem) */}
                <div className="mb-32">
                    <div className="prose prose-lg mx-auto text-gray-600 leading-loose">
                        <p className="mb-6">
                            真面目で責任感が強い人ほど、人生の岐路で立ち止まってしまうことがあります。
                        </p>
                        <div className="bg-sand-beige/20 p-8 rounded-2xl mb-8 font-medium">
                            <ul className="space-y-4 list-none pl-0">
                                <li className="flex items-start">
                                    <span className="text-turquoise mr-3">✔</span>
                                    今の仕事や生き方に、言葉にできない違和感がある
                                </li>
                                <li className="flex items-start">
                                    <span className="text-turquoise mr-3">✔</span>
                                    周囲の期待に応えようとして、自分の本音がわからなくなった
                                </li>
                                <li className="flex items-start">
                                    <span className="text-turquoise mr-3">✔</span>
                                    努力しているのに、なぜか空回りしている気がする
                                </li>
                            </ul>
                        </div>
                        <p>
                            それは、あなたが間違っているからではありません。<br />
                            ただ、<span className="font-bold text-gray-900 bg-yellow-100 px-1">「ご自身の本来の性質」</span>と<span className="font-bold text-gray-900 bg-yellow-100 px-1">「進むべきタイミング」</span>のボタンが、少し掛け違っているだけなのです。
                        </p>
                    </div>
                </div>

                {/* 3. Solution (Maya) */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <h3 className="font-serif text-2xl md:text-3xl text-gray-900 font-bold mb-6">
                            マヤ暦は、あなたの人生を紐解く<br className="md:hidden" />「精密な地図」
                        </h3>
                        {/* Compass Image Placeholder */}
                        <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-12 shadow-md">
                            <Image
                                src="/images/concept_compass.png"
                                alt="Compass and Map"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <p className="text-gray-600 leading-loose text-left md:text-center">
                            古代から伝わるマヤ暦は、単なる占いではありません。<br className="hidden md:block" />
                            それは、あなたが生まれた瞬間のエネルギーから読み解く<br className="hidden md:block" />
                            <span className="font-bold text-gray-900">「人生の戦略書」であり、迷った時に立ち返るべき「羅針盤」</span>です。<br /><br />
                            初めて訪れる土地を、地図なしで歩くのは不安で非効率です。人生も同じです。<br />
                            マヤ暦鑑定では、以下の3つの視点から、あなたの現在地と目的地を明らかにします。
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-sand-beige/10 p-8 rounded-xl text-center">
                            <div className="text-turquoise font-bold text-xl mb-2">The "Who"</div>
                            <h4 className="font-bold text-gray-900 mb-4">本来の役割</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                あなたが生まれ持った才能や、<br />無理なく力を発揮できるポジション。
                            </p>
                        </div>
                        <div className="bg-sand-beige/10 p-8 rounded-xl text-center">
                            <div className="text-turquoise font-bold text-xl mb-2">The "When"</div>
                            <h4 className="font-bold text-gray-900 mb-4">人生のサイクル</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                今は「種をまく時期」なのか、<br />「収穫の時期」なのかという最適なタイミング。
                            </p>
                        </div>
                        <div className="bg-sand-beige/10 p-8 rounded-xl text-center">
                            <div className="text-turquoise font-bold text-xl mb-2">The "With Whom"</div>
                            <h4 className="font-bold text-gray-900 mb-4">関係性の力学</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                周囲の人との相性や、人間関係の<br />ストレスを解消する具体的な関わり方。
                            </p>
                        </div>
                    </div>
                </div>

                {/* 4. Benefit */}
                <div className="mb-32">
                    <h3 className="font-serif text-2xl md:text-3xl text-gray-900 font-bold text-center mb-12">
                        鑑定を通して、<br className="md:hidden" />あなたが手にする「3つの変化」
                    </h3>
                    <p className="text-center text-gray-600 mb-12">
                        私のセッションは「当たっていた」で終わりではありません。<br />
                        そこから「どう生きるか」という現実的な行動指針をお渡しします。
                    </p>

                    <div className="space-y-8">
                        <div className="flex flex-col md:flex-row items-start gap-6 border-b border-gray-100 pb-8">
                            <div className="text-4xl text-turquoise font-serif font-bold opacity-30">01</div>
                            <div>
                                <h4 className="font-bold text-xl text-gray-900 mb-2">迷いが確信に変わる</h4>
                                <p className="text-gray-600 leading-loose">
                                    「この選択で合っているのか？」という不安が消え、「今はこれをやるべき時だ」という根拠のある自信を持って決断できるようになります。
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-start gap-6 border-b border-gray-100 pb-8">
                            <div className="text-4xl text-turquoise font-serif font-bold opacity-30">02</div>
                            <div>
                                <h4 className="font-bold text-xl text-gray-900 mb-2">自己否定からの解放</h4>
                                <p className="text-gray-600 leading-loose">
                                    「なぜできないのか」と自分を責めることがなくなります。自分の凸凹（得意・不得意）を客観的に知ることで、ありのままの自分を許し、愛せるようになります。
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-start gap-6">
                            <div className="text-4xl text-turquoise font-serif font-bold opacity-30">03</div>
                            <div>
                                <h4 className="font-bold text-xl text-gray-900 mb-2">人間関係のストレス激減</h4>
                                <p className="text-gray-600 leading-loose">
                                    苦手なあの人の行動原理が理解できるようになります。「合わない」ではなく「役割が違う」と気づくことで、職場や家庭でのコミュニケーションが驚くほど楽になります。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Reviews (Social Proof) - Placeholder as requested */}
                <div className="mb-32 bg-gray-50 p-8 md:p-12 rounded-2xl">
                    <h3 className="text-center text-sm tracking-widest font-bold text-gray-500 mb-8 uppercase">Reviews</h3>
                    <h4 className="font-serif text-2xl text-center text-gray-900 mb-12">実際に変化を感じたお客様の声</h4>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm">
                            <div className="flex text-yellow-400 mb-4">★★★★★</div>
                            <p className="text-gray-600 text-sm leading-loose mb-4">
                                「今まで自分の性格について悩んでいましたが、マヤ暦で自分の本質を知り、全ての謎が解けました。背負っていた重い荷物を下ろせた気がします。」
                            </p>
                            <p className="text-xs text-gray-400 font-bold text-right">- 30代 女性</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm">
                            <div className="flex text-yellow-400 mb-4">★★★★★</div>
                            <p className="text-gray-600 text-sm leading-loose mb-4">
                                「霧が晴れたように視界がクリアになりました。タイミングを知ることで、焦らずに準備することの大切さを学びました。」
                            </p>
                            <p className="text-xs text-gray-400 font-bold text-right">- 40代 女性</p>
                        </div>
                    </div>
                </div>

                {/* 5. Authority & Trust */}
                <div className="mb-24 text-center">
                    {/* Dawn Image Placeholder */}
                    <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-12 shadow-md">
                        <Image
                            src="/images/concept_sea.png"
                            alt="Dawn"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl text-gray-900 font-bold mb-8">
                        その場しのぎの慰めではなく、<br />人生を変える「視座」を。
                    </h3>
                    <div className="prose prose-lg mx-auto text-gray-600 leading-loose">
                        <p>
                            これまでに多くの方の人生の物語に触れさせていただきました。<br />
                            あなたの人生は、あなただけのものです。<br />
                            誰かの正解を生きるのではなく、<br />
                            <span className="font-bold text-gray-900 text-xl block mt-4 mb-4">「あなたが心から納得できる『あなただけの正解』」</span>
                            を、一緒に見つけに行きませんか？
                        </p>
                    </div>
                </div>

                {/* 6. CTA */}
                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    <Link
                        href="/session"
                        className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-gray-900 rounded-full hover:bg-turquoise focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    >
                        今のモヤモヤを整理し、<br className="md:hidden" />人生の指針を作る（本鑑定へ）
                    </Link>
                    <Link
                        href="/contact"
                        className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-gray-900 transition-all duration-200 bg-white border-2 border-gray-900 rounded-full hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    >
                        まずは「自分の地図」を<br className="md:hidden" />少しだけ覗いてみる
                    </Link>
                </div>

            </div>
        </section>
    );
}
