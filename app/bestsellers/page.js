import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';
import { ChevronDown } from 'lucide-react';

const BESTSELLERS = [
  {
    id: 1,
    name: 'Floral Midi Dress',
    price: 89.00,
    category: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1000&auto=format&fit=crop',
    onSale: false,
    originalPrice: 89.00
  },
  {
    id: 3,
    name: 'Linen Summer Set',
    price: 145.00,
    category: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop',
    onSale: false,
    originalPrice: 145.00
  },
  {
    id: 4,
    name: 'Classic White Shirt',
    price: 65.00,
    category: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1000&auto=format&fit=crop',
    onSale: false,
    originalPrice: 65.00
  },
  {
    id: 6,
    name: 'Silk Blouse',
    price: 120.00,
    category: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=1000&auto=format&fit=crop',
    onSale: true,
    originalPrice: 180.00
  },
];

export default function BestsellersPage() {
  return (
    <div className="container-custom py-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 pb-8 border-b border-gray-100">
        <div>
           <nav className="text-xs text-gray-500 mb-2 uppercase tracking-wide">
              Home / Bestsellers
           </nav>
           <h1 className="text-3xl font-bold uppercase tracking-widest">Bestsellers</h1>
           <p className="text-sm text-gray-500 mt-2">Customer favorites you'll love</p>
        </div>
        
        <div className="flex items-center gap-4 mt-4 md:mt-0">
           <span className="text-sm text-gray-500">{BESTSELLERS.length} Products</span>
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
            {BESTSELLERS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
