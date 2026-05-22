import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import TrustBar from "@/components/TrustBar";
import InquiryForm from "@/components/InquiryForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <TrustBar />
        <InquiryForm />
      </main>
      <Footer />
    </>
  );
}
