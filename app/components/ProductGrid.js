import Link from 'next/link';
import Image from 'next/image';

// Placeholder data - in a real app this would come from props or API
const PRODUCTS = [
  {
    id: 1,
    name: 'Floral Midi Dress',
    price: 89.00,
    category: 'Dresses',
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Satin Slip Dress',
    price: 110.00,
    category: 'Party Wear',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Linen Summer Set',
    price: 145.00,
    category: 'Sets',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Classic White Shirt',
    price: 65.00,
    category: 'Tops',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1000&auto=format&fit=crop'
  }
];

import ProductCard from './ProductCard';

const ProductGrid = ({ title, products = PRODUCTS }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest mb-3">{title}</h2>
          <div className="h-1 w-20 bg-primary mx-auto opacity-20"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link href="/products" className="inline-block border-b-2 border-black pb-1 text-sm font-semibold uppercase tracking-widest hover:text-accent hover:border-accent transition-colors">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
