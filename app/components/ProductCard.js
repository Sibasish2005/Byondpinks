import Link from 'next/link';
import Image from 'next/image';

const ProductCard = ({ product }) => (
  <Link href={`/product/${product.id}`} className="group block">
    <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
      <Image
        src={product.image}
        alt={product.name}
        fill
        className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
      />
      {product.category === 'Bestseller' && (
         <span className="absolute top-2 left-2 bg-white px-2 py-1 text-[10px] font-bold uppercase tracking-wider">
           Bestseller
         </span>
      )}
      {product.onSale && (
         <span className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-[10px] font-bold uppercase tracking-wider">
           Sale
         </span>
      )}
      <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
         <button className="w-full bg-white/90 backdrop-blur-sm text-black py-3 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
            Quick Add
         </button>
      </div>
    </div>
    <div className="text-center space-y-1">
      <h3 className="text-sm text-gray-900 font-medium group-hover:underline decoration-1 underline-offset-4">{product.name}</h3>
      <div className="flex justify-center gap-2 text-sm">
        {product.onSale ? (
           <>
             <span className="text-red-600 font-semibold">${product.price.toFixed(2)}</span>
             <span className="text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
           </>
        ) : (
             <span className="text-gray-500">${product.price.toFixed(2)}</span>
        )}
      </div>
    </div>
  </Link>
);

export default ProductCard;
