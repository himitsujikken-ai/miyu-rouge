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

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/80">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </div>
    );
}
