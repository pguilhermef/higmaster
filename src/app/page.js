import Footer from "@/app/sections/Footer";
import Quotation from "@/app/sections/Quotation";
import Services from "@/app/sections/Services";

export default function Home() {
  return (
    <div className="flex flex-col justify-center bg-higblue min-h-screen">
      <Services />
      <Quotation />
      <Footer />
    </div>
  );
}