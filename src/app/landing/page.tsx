import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Reviews from "../../components/Reviews";
import WhyUs from "../../components/WhyUs";

const page = () => {
  return (
    <main className="font(--font-nunito)">
      <Hero />
      <WhyUs />
      <Reviews />
    </main>
  );
};

export default page;
