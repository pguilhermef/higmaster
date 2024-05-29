import Footer from "@/app/sections/Footer";
import Quotation from "@/app/sections/Quotation";
import Services from "@/app/sections/Services";
import Header from "./sections/Header";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-higblue">
      <Header />
      <Services />
      <Quotation />
      <Footer />
    </div>
  );
}