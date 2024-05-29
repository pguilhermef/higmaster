import Grid from "@/components/Grid";

function Services() {
  return (
    <div className="flex justify-center items-center text-white sm:w-4/6 max-w-6xl shadow-2xl shadow-black">
      <div>
        <div className="flex justify-center items-center min-h-20 max-w-6xl bg-black font-sans font-medium text-2xl md:text-4xl shadow-2xl shadow-black">
          NOSSOS SERVIÇOS
        </div>
        <div>
          <Grid />
        </div>
      </div>
    </div>
  );
}

export default Services