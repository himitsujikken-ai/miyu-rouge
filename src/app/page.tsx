import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Profile from "@/components/Profile";
import Concept from "@/components/Concept";
import ServiceSection from "@/components/ServiceSection";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const revalidate = 60;

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Introduction />
      <Profile />
      <Concept />
      <ServiceSection />
      <BlogSection />
      <CTASection />
      <Footer />
    </main>
  );
}
