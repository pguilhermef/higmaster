import Quotation from "@/sections/Quotation";
import Services from "@/sections/Services";

export default function Home() {
  return (
    <div className="flex flex-col justify-center bg-slate-500 min-h-screen">
      <Services />
      <Quotation />
    </div>
  );
}