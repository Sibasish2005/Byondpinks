import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <ProductGrid title="Bestsellers" />
      
      {/* Featured Section / Second Banner */}
      <section className="relative w-full h-[400px] bg-red-50 flex items-center justify-center my-12 overflow-hidden">
         <div className="absolute inset-0 bg-neutral-900/10"></div>
         <div className="relative z-10 text-center space-y-4 px-4">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-black">
               The Vacation Edit
            </h2>
            <p className="text-lg text-gray-700 max-w-lg mx-auto">
               Pack your bags with our curated selection of resort-ready styles.
            </p>
            <button className="bg-black text-white px-8 py-3 uppercase tracking-widest text-sm font-semibold hover:bg-gray-800 transition-colors">
               Explore
            </button>
         </div>
      </section>

      <ProductGrid title="New Arrivals" />
    </div>
  );
}
