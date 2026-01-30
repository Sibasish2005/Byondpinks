export default function AboutPage() {
  return (
    <div className="container-custom py-12">
      <nav className="text-xs text-gray-500 mb-8 uppercase tracking-wide">
        Home / About Us
      </nav>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold uppercase tracking-widest mb-6">About Beyond Pink</h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-gray-600">
          <p className="text-xl leading-relaxed">
            Classy. Elegant. Sophisticated.
          </p>
          
          <p>
            Beyond Pink is more than just a fashion brand—it's a celebration of contemporary femininity. 
            Founded with a vision to redefine modern elegance, we curate collections that empower women 
            to express their unique style with confidence.
          </p>

          <h2 className="text-2xl font-bold text-black mt-12 mb-4">Our Story</h2>
          <p>
            Established in 2020, Beyond Pink emerged from a simple belief: that every woman deserves 
            to feel beautiful, confident, and empowered in what she wears. Our journey began with a 
            small collection of carefully crafted pieces, each designed to transcend fleeting trends 
            and become timeless staples in your wardrobe.
          </p>

          <h2 className="text-2xl font-bold text-black mt-12 mb-4">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="bg-gray-50 p-6">
              <h3 className="font-bold text-lg mb-2">Quality First</h3>
              <p className="text-sm">Premium fabrics and meticulous craftsmanship in every piece.</p>
            </div>
            <div className="bg-gray-50 p-6">
              <h3 className="font-bold text-lg mb-2">Sustainable Fashion</h3>
              <p className="text-sm">Committed to ethical production and environmental responsibility.</p>
            </div>
            <div className="bg-gray-50 p-6">
              <h3 className="font-bold text-lg mb-2">Timeless Design</h3>
              <p className="text-sm">Creating pieces that remain relevant season after season.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-black mt-12 mb-4">Join Our Community</h2>
          <p>
            Follow us on social media to stay updated with our latest collections, styling tips, 
            and exclusive behind-the-scenes content. We're building a community of confident, 
            stylish women who inspire each other every day.
          </p>
        </div>
      </div>
    </div>
  );
}
