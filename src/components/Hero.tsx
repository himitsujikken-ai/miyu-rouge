import Image from "next/image";

export default function Hero() {
    return (
        <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero.jpg"
                    alt="Travel × Maya - Making Life a Journey"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Overlay removed as per request to show designed image clearly */}
            </div>

            {/* Content - Positioned to coordinate with the image art */}
            <div className="relative z-10 w-full px-4 text-center pb-20 md:pb-32">
                <h1 className="font-serif text-3xl md:text-5xl lg:text-5xl font-bold text-gray-800 drop-shadow-sm leading-tight tracking-[0.2em] mb-8">
                    “もうひとりの自分”<br className="md:hidden" /> との出会い
                </h1>
                <p className="font-sans text-sm md:text-base tracking-widest leading-loose text-gray-700 font-medium max-w-4xl mx-auto drop-shadow-sm">
                    マヤ暦という地図が指し示すのは、<br className="md:hidden" />あなたがまだ知らない、可能性に満ちた<br />
                    「もうひとりの自分」。<br className="md:hidden" />それは、あなたの最も純粋で、パワフルな姿です。<br />
                    この出会いが、<br className="md:hidden" />あなたの物語を大きく動かし始めます。
                </p>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/80">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </div>
    );
}
