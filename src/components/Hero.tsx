import Image from "next/image";

export default function Hero() {
    return (
        <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <Image
                src="/images/top_hero_clean.png"
                alt="Travel × Maya - Making Life a Journey"
                fill
                className="object-cover"
                priority
                unoptimized
                quality={100}
            />

            {/* Text Overlay */}
            <div className="absolute inset-0 z-10 flex items-center justify-center">
                <h1 className="font-serif text-3xl md:text-5xl text-gray-800 tracking-widest font-medium drop-shadow-sm text-center leading-relaxed">
                    もう一人の自分<br className="md:hidden" />との出会い
                </h1>
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
