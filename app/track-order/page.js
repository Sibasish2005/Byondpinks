'use client';

import { useState } from 'react';
import { Search, Package, MapPin, Clock } from 'lucide-react';

export default function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState('');
  const [email, setEmail] = useState('');
  const [tracking, setTracking] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock tracking data
    setTracking({
      orderNumber: orderNumber,
      status: 'In Transit',
      estimatedDelivery: 'January 31, 2026',
      timeline: [
        { status: 'Order Placed', date: 'Jan 28, 2026 10:30 AM', completed: true },
        { status: 'Order Processed', date: 'Jan 28, 2026 2:15 PM', completed: true },
        { status: 'Shipped', date: 'Jan 29, 2026 9:00 AM', completed: true },
        { status: 'In Transit', date: 'Jan 30, 2026 6:45 AM', completed: true },
        { status: 'Out for Delivery', date: 'Pending', completed: false },
        { status: 'Delivered', date: 'Pending', completed: false }
      ]
    });
  };

  return (
    <div className="container-custom py-12">
      <nav className="text-xs text-gray-500 mb-8 uppercase tracking-wide">
        Home / Track Your Order
      </nav>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold uppercase tracking-widest mb-12">Track Your Order</h1>

        {!tracking ? (
          <div className="bg-white border border-gray-200 p-8">
            <p className="text-gray-600 mb-6">
              Enter your order number and email address to track your shipment.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Order Number *</label>
                <input
                  type="text"
                  required
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                  className="w-full border border-gray-200 px-4 py-3 focus:outline-none focus:border-black transition-colors"
                  placeholder="e.g., #12345"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email Address *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-200 px-4 py-3 focus:outline-none focus:border-black transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-4 text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
              >
                <Search className="w-4 h-4" />
                Track Order
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="font-bold mb-3">Need Help?</h3>
              <p className="text-sm text-gray-600 mb-4">
                If you're having trouble tracking your order, please contact our customer service team.
              </p>
              <a href="/contact" className="text-sm font-medium underline">Contact Support</a>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <button
              onClick={() => setTracking(null)}
              className="text-sm text-gray-500 hover:text-black underline"
            >
              ← Track Another Order
            </button>

            <div className="bg-white border border-gray-200 p-8">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Order {tracking.orderNumber}</h2>
                  <p className="text-gray-600">Status: <span className="font-medium text-blue-600">{tracking.status}</span></p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Estimated Delivery</span>
                  </div>
                  <p className="font-bold mt-1">{tracking.estimatedDelivery}</p>
                </div>
              </div>

              <div className="space-y-6">
                {tracking.timeline.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        item.completed ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-400'
                      }`}>
                        {item.completed ? (
                          <Package className="w-5 h-5" />
                        ) : (
                          <div className="w-3 h-3 rounded-full bg-gray-400" />
                        )}
                      </div>
                      {index < tracking.timeline.length - 1 && (
                        <div className={`w-0.5 h-16 ${item.completed ? 'bg-green-500' : 'bg-gray-200'}`} />
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <h3 className={`font-bold mb-1 ${item.completed ? 'text-black' : 'text-gray-400'}`}>
                        {item.status}
                      </h3>
                      <p className="text-sm text-gray-500">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200 bg-gray-50 -mx-8 -mb-8 p-8">
                <h3 className="font-bold mb-3">Shipping Address</h3>
                <div className="flex items-start gap-3 text-gray-600">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <p>John Doe</p>
                    <p>123 Main Street, Apt 4B</p>
                    <p>New York, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
