import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden bg-gray-100">
      {/* Background Image Placeholder (Ideally dynamic or from assets) */}
      <div className="absolute inset-0 bg-neutral-200">
         <Image 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop"
            alt="Summer collection"
            fill
            className="object-cover object-top opacity-90"
            priority
         />
         <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="relative h-full container-custom flex flex-col justify-center items-center text-center text-white space-y-6">
        <span className="text-sm md:text-base font-medium tracking-[0.2em] uppercase animate-fade-in-up">
          New Collection
        </span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4 animate-fade-in-up delay-100">
          Summer Serene
        </h1>
        <p className="max-w-xl text-lg md:text-xl text-white/90 font-light mb-8 animate-fade-in-up delay-200">
          Discover breathable fabrics and effortless silhouettes designed for the sunny days ahead.
        </p>
        <div className="animate-fade-in-up delay-300">
          <Link 
            href="/products" 
            className="inline-block bg-white text-black px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Shop The Collection
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
