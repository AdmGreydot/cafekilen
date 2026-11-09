import CustomizationSection from "@/components/CustomizationSection";
import Hero from "@/components/Hero";
import OrderForm from "@/components/OrderForm";

export default function Home() {
  return (
    <div>
        <Hero />
        <CustomizationSection/>
        <OrderForm />
    </div>
  );
}
