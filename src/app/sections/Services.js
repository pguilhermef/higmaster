import Grid from "@/components/Grid";

function Services() {
  return (
    <div className="flex justify-center items-center text-white sm:w-4/6 max-w-7xl shadow-sm">
      <div>
        <div className="flex justify-center items-center min-h-20 max-w-6xl bg-black font-sans font-medium text-2xl md:text-4xl shadow-2xl">
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