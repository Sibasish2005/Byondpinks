import { Truck, Package, Clock, MapPin } from 'lucide-react';

export default function ShippingPage() {
  return (
    <div className="container-custom py-12">
      <nav className="text-xs text-gray-500 mb-8 uppercase tracking-wide">
        Home / Shipping Policy
      </nav>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold uppercase tracking-widest mb-12">Shipping Policy</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gray-50 p-6">
            <Truck className="w-8 h-8 mb-3" />
            <h3 className="font-bold text-lg mb-2">Free Standard Shipping</h3>
            <p className="text-sm text-gray-600">On all orders over $150</p>
          </div>
          <div className="bg-gray-50 p-6">
            <Clock className="w-8 h-8 mb-3" />
            <h3 className="font-bold text-lg mb-2">Fast Processing</h3>
            <p className="text-sm text-gray-600">Orders ship within 1-2 business days</p>
          </div>
          <div className="bg-gray-50 p-6">
            <Package className="w-8 h-8 mb-3" />
            <h3 className="font-bold text-lg mb-2">Secure Packaging</h3>
            <p className="text-sm text-gray-600">All items carefully packaged</p>
          </div>
          <div className="bg-gray-50 p-6">
            <MapPin className="w-8 h-8 mb-3" />
            <h3 className="font-bold text-lg mb-2">Track Your Order</h3>
            <p className="text-sm text-gray-600">Real-time tracking information</p>
          </div>
        </div>

        <div className="space-y-8 text-gray-600">
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">Domestic Shipping (US)</h2>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-bold">Shipping Method</th>
                    <th className="px-6 py-3 text-left text-sm font-bold">Delivery Time</th>
                    <th className="px-6 py-3 text-left text-sm font-bold">Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4">Standard Shipping</td>
                    <td className="px-6 py-4">5-7 business days</td>
                    <td className="px-6 py-4">$15 (Free over $150)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Express Shipping</td>
                    <td className="px-6 py-4">2-3 business days</td>
                    <td className="px-6 py-4">$25</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Overnight Shipping</td>
                    <td className="px-6 py-4">1 business day</td>
                    <td className="px-6 py-4">$45</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">International Shipping</h2>
            <p className="mb-4">
              We currently ship to select countries worldwide. International shipping rates and 
              delivery times vary by destination. Customs fees and import duties may apply and 
              are the responsibility of the customer.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Canada: 7-10 business days, starting at $20</li>
              <li>UK & Europe: 10-14 business days, starting at $30</li>
              <li>Australia: 12-16 business days, starting at $35</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">Order Processing</h2>
            <p>
              Orders are processed Monday through Friday, excluding holidays. Orders placed after 
              2 PM EST will be processed the next business day. You will receive a confirmation 
              email once your order has been placed, and a shipping confirmation with tracking 
              information once your order has shipped.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">Tracking Your Order</h2>
            <p>
              Once your order ships, you'll receive an email with tracking information. You can 
              also track your order by logging into your account or using the tracking link 
              provided in your shipping confirmation email.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
