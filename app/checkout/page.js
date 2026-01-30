'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CreditCard, Lock, ChevronRight } from 'lucide-react';

export default function CheckoutPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Shipping
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
    // Payment
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    // Billing same as shipping
    billingSameAsShipping: true
  });

  // Mock cart items
  const cartItems = [
    {
      id: 1,
      name: 'Floral Midi Dress',
      price: 89.00,
      image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1000&auto=format&fit=crop',
      size: 'M',
      quantity: 1
    },
    {
      id: 2,
      name: 'Satin Slip Dress',
      price: 110.00,
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop',
      size: 'S',
      quantity: 2
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 150 ? 0 : 15;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Process order
      alert('Order placed successfully!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        <div className="mb-8">
          <Link href="/cart" className="text-sm text-gray-500 hover:text-black">
            ← Back to Cart
          </Link>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 1 ? 'bg-black text-white' : 'bg-gray-200 text-gray-500'} font-bold`}>
              1
            </div>
            <span className={`ml-2 text-sm font-medium ${step >= 1 ? 'text-black' : 'text-gray-400'}`}>Shipping</span>
          </div>
          <div className={`w-16 h-0.5 mx-4 ${step >= 2 ? 'bg-black' : 'bg-gray-200'}`} />
          <div className="flex items-center">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 2 ? 'bg-black text-white' : 'bg-gray-200 text-gray-500'} font-bold`}>
              2
            </div>
            <span className={`ml-2 text-sm font-medium ${step >= 2 ? 'text-black' : 'text-gray-400'}`}>Payment</span>
          </div>
          <div className={`w-16 h-0.5 mx-4 ${step >= 3 ? 'bg-black' : 'bg-gray-200'}`} />
          <div className="flex items-center">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 3 ? 'bg-black text-white' : 'bg-gray-200 text-gray-500'} font-bold`}>
              3
            </div>
            <span className={`ml-2 text-sm font-medium ${step >= 3 ? 'text-black' : 'text-gray-400'}`}>Review</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 shadow-sm">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Shipping Information */}
                {step === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold">Shipping Information</h2>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full border border-gray-200 px-4 py-3 focus:outline-none focus:border-black transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">First Name *</label>
                        <input
                          type="text"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full border border-gray-200 px-4 py-3 focus:outline-none focus:border-black transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Last Name *</label>
                        <input
                          type="text"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full border border-gray-200 px-4 py-3 focus:outline-none focus:border-black transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Address *</label>
                      <input
                        type="text"
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full border border-gray-200 px-4 py-3 focus:outline-none focus:border-black transition-colors"
                        placeholder="Street address"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Apartment, suite, etc. (optional)</label>
                      <input
                        type="text"
                        name="apartment"
                        value={formData.apartment}
                        onChange={handleInputChange}
                        className="w-full border border-gray-200 px-4 py-3 focus:outline-none focus:border-black transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">City *</label>
                        <input
                          type="text"
                          name="city"
                          required
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-full border border-gray-200 px-4 py-3 focus:outline-none focus:border-black transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">State *</label>
                        <select
                          name="state"
                          required
                          value={formData.state}
                          onChange={handleInputChange}
                          className="w-full border border-gray-200 px-4 py-3 focus:outline-none focus:border-black transition-colors"
                        >
                          <option value="">Select</option>
                          <option value="NY">New York</option>
                          <option value="CA">California</option>
                          <option value="TX">Texas</option>
                          {/* Add more states */}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">ZIP Code *</label>
                        <input
                          type="text"
                          name="zipCode"
                          required
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          className="w-full border border-gray-200 px-4 py-3 focus:outline-none focus:border-black transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full border border-gray-200 px-4 py-3 focus:outline-none focus:border-black transition-colors"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Payment Information */}
                {step === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold">Payment Information</h2>
                    
                    <div className="bg-blue-50 border border-blue-200 p-4 rounded-sm flex items-center gap-2">
                      <Lock className="w-5 h-5 text-blue-600" />
                      <span className="text-sm text-blue-900">Your payment information is secure and encrypted</span>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Card Number *</label>
                      <div className="relative">
                        <input
                          type="text"
                          name="cardNumber"
                          required
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          className="w-full border border-gray-200 px-4 py-3 focus:outline-none focus:border-black transition-colors"
                          placeholder="1234 5678 9012 3456"
                          maxLength="19"
                        />
                        <CreditCard className="absolute right-4 top-3.5 w-5 h-5 text-gray-400" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Cardholder Name *</label>
                      <input
                        type="text"
                        name="cardName"
                        required
                        value={formData.cardName}
                        onChange={handleInputChange}
                        className="w-full border border-gray-200 px-4 py-3 focus:outline-none focus:border-black transition-colors"
                        placeholder="Name on card"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Expiry Date *</label>
                        <input
                          type="text"
                          name="expiryDate"
                          required
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          className="w-full border border-gray-200 px-4 py-3 focus:outline-none focus:border-black transition-colors"
                          placeholder="MM/YY"
                          maxLength="5"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">CVV *</label>
                        <input
                          type="text"
                          name="cvv"
                          required
                          value={formData.cvv}
                          onChange={handleInputChange}
                          className="w-full border border-gray-200 px-4 py-3 focus:outline-none focus:border-black transition-colors"
                          placeholder="123"
                          maxLength="4"
                        />
                      </div>
                    </div>

                    <div className="pt-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          name="billingSameAsShipping"
                          checked={formData.billingSameAsShipping}
                          onChange={handleInputChange}
                          className="w-4 h-4 rounded border-gray-300"
                        />
                        <span className="text-sm">Billing address same as shipping</span>
                      </label>
                    </div>
                  </div>
                )}

                {/* Step 3: Review Order */}
                {step === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold">Review Your Order</h2>
                    
                    <div className="border border-gray-200 p-6 space-y-4">
                      <div>
                        <h3 className="font-bold mb-2">Shipping Address</h3>
                        <p className="text-sm text-gray-600">
                          {formData.firstName} {formData.lastName}<br />
                          {formData.address} {formData.apartment}<br />
                          {formData.city}, {formData.state} {formData.zipCode}<br />
                          {formData.phone}
                        </p>
                      </div>
                      <div className="border-t border-gray-200 pt-4">
                        <h3 className="font-bold mb-2">Payment Method</h3>
                        <p className="text-sm text-gray-600">
                          Card ending in {formData.cardNumber.slice(-4)}
                        </p>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-sm">
                      <p className="text-sm text-yellow-900">
                        By placing this order, you agree to our Terms of Service and Privacy Policy.
                      </p>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex gap-4 mt-8">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={() => setStep(step - 1)}
                      className="flex-1 border border-gray-300 text-black py-4 text-sm font-bold uppercase tracking-widest hover:bg-gray-50 transition-colors"
                    >
                      Back
                    </button>
                  )}
                  <button
                    type="submit"
                    className="flex-1 bg-black text-white py-4 text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                  >
                    {step === 3 ? 'Place Order' : 'Continue'}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 shadow-sm sticky top-8">
              <h3 className="text-lg font-bold mb-6">Order Summary</h3>
              
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative w-16 h-20 bg-gray-100 flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                      <span className="absolute -top-2 -right-2 bg-gray-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium">{item.name}</h4>
                      <p className="text-xs text-gray-500">Size: {item.size}</p>
                      <p className="text-sm font-medium mt-1">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-2 flex justify-between text-base font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
