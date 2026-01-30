import Link from 'next/link';
import { Search, ShoppingBag, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="container-custom h-20 flex items-center justify-between">
        {/* Mobile Menu Button (Placeholder) */}
        <div className="md:hidden">
          <button className="p-2">
            <span className="sr-only">Open menu</span>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-2xl font-bold tracking-widest uppercase">
            Beyond Pink
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/new-arrivals" className="text-sm font-medium hover:text-accent transition-colors">
            New Arrivals
          </Link>
          <Link href="/dresses" className="text-sm font-medium hover:text-accent transition-colors">
            Dresses
          </Link>
          <Link href="/bestsellers" className="text-sm font-medium hover:text-accent transition-colors">
            Bestsellers
          </Link>
           <Link href="/sale" className="text-sm font-medium text-red-600 hover:text-red-700 transition-colors">
            Sale
          </Link>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <button className="hover:text-accent transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <Link href="/account" className="hover:text-accent transition-colors">
            <User className="w-5 h-5" />
          </Link>
          <Link href="/cart" className="relative hover:text-accent transition-colors">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
              0
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
