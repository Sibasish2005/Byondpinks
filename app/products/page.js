import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';
import { ChevronDown } from 'lucide-react';

// Enhanced mock data
const PRODUCTS = [
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
    category: 'Party Wear',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop',
    onSale: true,
    originalPrice: 140.00
  },
  {
    id: 3,
    name: 'Linen Summer Set',
    price: 145.00,
    category: 'Sets',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop',
    onSale: false,
    originalPrice: 145.00
  },
  {
    id: 4,
    name: 'Classic White Shirt',
    price: 65.00,
    category: 'Tops',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1000&auto=format&fit=crop',
    onSale: false,
    originalPrice: 65.00
  },
   {
    id: 5,
    name: 'Pleated Maxi Skirt',
    price: 95.00,
    category: 'Bottoms',
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=1000&auto=format&fit=crop',
    onSale: false,
    originalPrice: 95.00
  },
   {
    id: 6,
    name: 'Silk Blouse',
    price: 120.00,
    category: 'Tops',
    image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=1000&auto=format&fit=crop',
    onSale: true,
    originalPrice: 180.00
  },
];

export default function ProductsPage({ searchParams }) {
  // logic for filters would go here
  
  return (
    <div className="container-custom py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 pb-8 border-b border-gray-100">
        <div>
           <nav className="text-xs text-gray-500 mb-2 uppercase tracking-wide">
              Home / Products
           </nav>
           <h1 className="text-3xl font-bold uppercase tracking-widest">All Products</h1>
        </div>
        
        <div className="flex items-center gap-4 mt-4 md:mt-0">
           <span className="text-sm text-gray-500">{PRODUCTS.length} Products</span>
           <div className="relative group">
              <button className="flex items-center gap-2 text-sm font-medium hover:text-gray-600">
                 Sort By <ChevronDown className="w-4 h-4" />
              </button>
              {/* Dropdown would go here */}
           </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar */}
        <FilterSidebar />

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {/* Pagination Placeholder */}
          <div className="mt-16 text-center">
             <div className="inline-flex gap-2">
                <button className="w-10 h-10 flex items-center justify-center border border-black bg-black text-white text-sm font-medium">1</button>
                <button className="w-10 h-10 flex items-center justify-center border border-gray-200 text-gray-600 hover:border-black text-sm font-medium transition-colors">2</button>
                <button className="w-10 h-10 flex items-center justify-center border border-gray-200 text-gray-600 hover:border-black text-sm font-medium transition-colors">3</button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
