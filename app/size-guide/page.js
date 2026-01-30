import Image from 'next/image';

export default function SizeGuidePage() {
  return (
    <div className="container-custom py-12">
      <nav className="text-xs text-gray-500 mb-8 uppercase tracking-wide">
        Home / Size Guide
      </nav>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold uppercase tracking-widest mb-12">Size Guide</h1>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-6">Women's Clothing</h2>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-bold">Size</th>
                    <th className="px-6 py-3 text-left text-sm font-bold">US</th>
                    <th className="px-6 py-3 text-left text-sm font-bold">Bust (in)</th>
                    <th className="px-6 py-3 text-left text-sm font-bold">Waist (in)</th>
                    <th className="px-6 py-3 text-left text-sm font-bold">Hips (in)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">XS</td>
                    <td className="px-6 py-4">0-2</td>
                    <td className="px-6 py-4">31-32</td>
                    <td className="px-6 py-4">24-25</td>
                    <td className="px-6 py-4">34-35</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">S</td>
                    <td className="px-6 py-4">4-6</td>
                    <td className="px-6 py-4">33-34</td>
                    <td className="px-6 py-4">26-27</td>
                    <td className="px-6 py-4">36-37</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">M</td>
                    <td className="px-6 py-4">8-10</td>
                    <td className="px-6 py-4">35-36</td>
                    <td className="px-6 py-4">28-29</td>
                    <td className="px-6 py-4">38-39</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">L</td>
                    <td className="px-6 py-4">12-14</td>
                    <td className="px-6 py-4">37-39</td>
                    <td className="px-6 py-4">30-32</td>
                    <td className="px-6 py-4">40-42</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">XL</td>
                    <td className="px-6 py-4">16-18</td>
                    <td className="px-6 py-4">40-42</td>
                    <td className="px-6 py-4">33-35</td>
                    <td className="px-6 py-4">43-45</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">How to Measure</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6">
                <h3 className="font-bold mb-3">Bust</h3>
                <p className="text-sm text-gray-600">
                  Measure around the fullest part of your bust, keeping the tape parallel to the floor.
                </p>
              </div>
              <div className="bg-gray-50 p-6">
                <h3 className="font-bold mb-3">Waist</h3>
                <p className="text-sm text-gray-600">
                  Measure around the narrowest part of your natural waistline, above your belly button.
                </p>
              </div>
              <div className="bg-gray-50 p-6">
                <h3 className="font-bold mb-3">Hips</h3>
                <p className="text-sm text-gray-600">
                  Measure around the fullest part of your hips, approximately 8 inches below your waist.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Fit Tips</h2>
            <div className="bg-blue-50 border border-blue-200 p-6 space-y-3 text-gray-700">
              <p>• If you're between sizes, we recommend sizing up for a more comfortable fit.</p>
              <p>• Check individual product pages for specific fit notes (e.g., "runs small" or "oversized fit").</p>
              <p>• For the most accurate measurements, have someone help you measure.</p>
              <p>• Use a soft measuring tape and keep it snug but not tight against your body.</p>
              <p>• Measure over lightweight clothing or undergarments for best results.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Still Unsure?</h2>
            <p className="text-gray-600 mb-4">
              Our customer service team is here to help! Contact us with any sizing questions, 
              and we'll be happy to provide personalized recommendations based on the specific 
              item you're interested in.
            </p>
            <a href="/contact" className="inline-block bg-black text-white px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
              Contact Us
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
