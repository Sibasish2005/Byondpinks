import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';
import { ChevronDown } from 'lucide-react';

const NEW_ARRIVALS = [
  {
    id: 7,
    name: 'Bohemian Maxi Dress',
    price: 125.00,
    category: 'New Arrivals',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000&auto=format&fit=crop',
    onSale: false,
    originalPrice: 125.00
  },
  {
    id: 8,
    name: 'Striped Linen Shirt',
    price: 78.00,
    category: 'New Arrivals',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=1000&auto=format&fit=crop',
    onSale: false,
    originalPrice: 78.00
  },
  {
    id: 9,
    name: 'Wide Leg Trousers',
    price: 98.00,
    category: 'New Arrivals',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000&auto=format&fit=crop',
    onSale: false,
    originalPrice: 98.00
  },
  {
    id: 10,
    name: 'Embroidered Blouse',
    price: 89.00,
    category: 'New Arrivals',
    image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=1000&auto=format&fit=crop',
    onSale: false,
    originalPrice: 89.00
  },
];

export default function NewArrivalsPage() {
  return (
    <div className="container-custom py-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 pb-8 border-b border-gray-100">
        <div>
           <nav className="text-xs text-gray-500 mb-2 uppercase tracking-wide">
              Home / New Arrivals
           </nav>
           <h1 className="text-3xl font-bold uppercase tracking-widest">New Arrivals</h1>
           <p className="text-sm text-gray-500 mt-2">Fresh styles just landed</p>
        </div>
        
        <div className="flex items-center gap-4 mt-4 md:mt-0">
           <span className="text-sm text-gray-500">{NEW_ARRIVALS.length} Products</span>
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
            {NEW_ARRIVALS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
