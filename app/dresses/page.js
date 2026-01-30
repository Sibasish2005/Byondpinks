import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';
import { ChevronDown } from 'lucide-react';

const DRESSES = [
  {
    id: 1,
    name: 'Floral Midi Dress',
    price: 89.00,
    category: 'Dresses',
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1000&auto=format&fit=crop',
    onSale: false,
    originalPrice: 89.00
  },
  {
    id: 2,
    name: 'Satin Slip Dress',
    price: 110.00,
    category: 'Dresses',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop',
    onSale: true,
    originalPrice: 140.00
  },
  {
    id: 7,
    name: 'Bohemian Maxi Dress',
    price: 125.00,
    category: 'Dresses',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000&auto=format&fit=crop',
    onSale: false,
    originalPrice: 125.00
  },
  {
    id: 11,
    name: 'Wrap Dress',
    price: 95.00,
    category: 'Dresses',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1000&auto=format&fit=crop',
    onSale: false,
    originalPrice: 95.00
  },
  {
    id: 12,
    name: 'A-Line Sundress',
    price: 75.00,
    category: 'Dresses',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop',
    onSale: false,
    originalPrice: 75.00
  },
];

export default function DressesPage() {
  return (
    <div className="container-custom py-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 pb-8 border-b border-gray-100">
        <div>
           <nav className="text-xs text-gray-500 mb-2 uppercase tracking-wide">
              Home / Dresses
           </nav>
           <h1 className="text-3xl font-bold uppercase tracking-widest">Dresses</h1>
           <p className="text-sm text-gray-500 mt-2">Elegant styles for every occasion</p>
        </div>
        
        <div className="flex items-center gap-4 mt-4 md:mt-0">
           <span className="text-sm text-gray-500">{DRESSES.length} Products</span>
           <div className="relative group">
              <button className="flex items-center gap-2 text-sm font-medium hover:text-gray-600">
                 Sort By <ChevronDown className="w-4 h-4" />
              </button>
           </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        <FilterSidebar />
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {DRESSES.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
