'use client';

import { useState } from 'react';
import { User, Package, Heart, MapPin, CreditCard, LogOut } from 'lucide-react';

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="container-custom py-12">
      <nav className="text-xs text-gray-500 mb-8 uppercase tracking-wide">
        Home / Account
      </nav>

      <h1 className="text-3xl font-bold uppercase tracking-widest mb-8">My Account</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 p-6 space-y-2">
            <button
              onClick={() => setActiveTab('profile')}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors ${
                activeTab === 'profile' ? 'bg-black text-white' : 'hover:bg-gray-100'
              }`}
            >
              <User className="w-4 h-4" />
              Profile
            </button>
            <button
              onClick={() => setActiveTab('orders')}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors ${
                activeTab === 'orders' ? 'bg-black text-white' : 'hover:bg-gray-100'
              }`}
            >
              <Package className="w-4 h-4" />
              Orders
            </button>
            <button
              onClick={() => setActiveTab('wishlist')}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors ${
                activeTab === 'wishlist' ? 'bg-black text-white' : 'hover:bg-gray-100'
              }`}
            >
              <Heart className="w-4 h-4" />
              Wishlist
            </button>
            <button
              onClick={() => setActiveTab('addresses')}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors ${
                activeTab === 'addresses' ? 'bg-black text-white' : 'hover:bg-gray-100'
              }`}
            >
              <MapPin className="w-4 h-4" />
              Addresses
            </button>
            <button
              onClick={() => setActiveTab('payment')}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors ${
                activeTab === 'payment' ? 'bg-black text-white' : 'hover:bg-gray-100'
              }`}
            >
              <CreditCard className="w-4 h-4" />
              Payment Methods
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium hover:bg-gray-100 text-red-600">
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          {activeTab === 'profile' && (
            <div className="bg-white border border-gray-100 p-8">
              <h2 className="text-xl font-bold mb-6">Profile Information</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input type="text" className="w-full border border-gray-200 px-4 py-2 focus:outline-none focus:border-black" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input type="text" className="w-full border border-gray-200 px-4 py-2 focus:outline-none focus:border-black" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" className="w-full border border-gray-200 px-4 py-2 focus:outline-none focus:border-black" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input type="tel" className="w-full border border-gray-200 px-4 py-2 focus:outline-none focus:border-black" placeholder="+1 234 567 8900" />
                </div>
                <button type="submit" className="bg-black text-white px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
                  Save Changes
                </button>
              </form>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="bg-white border border-gray-100 p-8">
              <h2 className="text-xl font-bold mb-6">Order History</h2>
              <div className="space-y-4">
                <div className="border border-gray-100 p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="font-medium">Order #12345</p>
                      <p className="text-sm text-gray-500">Placed on January 15, 2026</p>
                    </div>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">Delivered</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">3 items • $234.00</p>
                  <button className="text-sm font-medium underline">View Details</button>
                </div>
                <div className="border border-gray-100 p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="font-medium">Order #12344</p>
                      <p className="text-sm text-gray-500">Placed on January 10, 2026</p>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">In Transit</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">2 items • $189.00</p>
                  <button className="text-sm font-medium underline">Track Order</button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'wishlist' && (
            <div className="bg-white border border-gray-100 p-8">
              <h2 className="text-xl font-bold mb-6">My Wishlist</h2>
              <p className="text-gray-500">Your wishlist is empty. Start adding items you love!</p>
            </div>
          )}

          {activeTab === 'addresses' && (
            <div className="bg-white border border-gray-100 p-8">
              <h2 className="text-xl font-bold mb-6">Saved Addresses</h2>
              <button className="border-2 border-dashed border-gray-300 w-full py-8 text-gray-500 hover:border-black hover:text-black transition-colors">
                + Add New Address
              </button>
            </div>
          )}

          {activeTab === 'payment' && (
            <div className="bg-white border border-gray-100 p-8">
              <h2 className="text-xl font-bold mb-6">Payment Methods</h2>
              <button className="border-2 border-dashed border-gray-300 w-full py-8 text-gray-500 hover:border-black hover:text-black transition-colors">
                + Add Payment Method
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
