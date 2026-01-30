import ProductGallery from '../../components/ProductGallery';
import ProductInfo from '../../components/ProductInfo';

// Mock data fetcher
async function getProduct(id) {
  // In a real app, fetch from API/DB
  return {
    id: id,
    name: 'Floral Midi Dress',
    price: 89.00,
    category: 'Dresses',
    onSale: false,
    images: [
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000&auto=format&fit=crop', // placeholder variant
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1000&auto=format&fit=crop', // placeholder variant
    ]
  };
}

export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = await getProduct(id);

  return (
    <div className="container-custom py-12">
       <nav className="text-xs text-gray-500 mb-8 uppercase tracking-wide">
          Home / Products / <span className="text-black font-medium">{product.name}</span>
       </nav>

       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <ProductGallery images={product.images} />
          <ProductInfo product={product} />
       </div>
    </div>
  );
}
