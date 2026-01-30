import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';
import { ChevronDown } from 'lucide-react';

const SALE_ITEMS = [
  {
    id: 2,
    name: 'Satin Slip Dress',
    price: 110.00,
    category: 'Sale',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop',
    onSale: true,
    originalPrice: 140.00
  },
  {
    id: 6,
    name: 'Silk Blouse',
    price: 120.00,
    category: 'Sale',
    image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=1000&auto=format&fit=crop',
    onSale: true,
    originalPrice: 180.00
  },
  {
    id: 13,
    name: 'Knit Cardigan',
    price: 65.00,
    category: 'Sale',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=1000&auto=format&fit=crop',
    onSale: true,
    originalPrice: 95.00
  },
  {
    id: 14,
    name: 'Pleated Skirt',
    price: 55.00,
    category: 'Sale',
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=1000&auto=format&fit=crop',
    onSale: true,
    originalPrice: 85.00
  },
];

export default function SalePage() {
  return (
    <div className="container-custom py-12">
      {/* Sale Banner */}
      <div className="bg-red-600 text-white text-center py-8 mb-8 rounded-sm">
        <h2 className="text-4xl font-bold uppercase tracking-widest mb-2">Summer Sale</h2>
        <p className="text-lg">Up to 40% off selected items</p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mb-8 pb-8 border-b border-gray-100">
        <div>
           <nav className="text-xs text-gray-500 mb-2 uppercase tracking-wide">
              Home / Sale
           </nav>
           <h1 className="text-3xl font-bold uppercase tracking-widest">Sale</h1>
           <p className="text-sm text-gray-500 mt-2">Limited time offers</p>
        </div>
        
        <div className="flex items-center gap-4 mt-4 md:mt-0">
           <span className="text-sm text-gray-500">{SALE_ITEMS.length} Products</span>
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
            {SALE_ITEMS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
