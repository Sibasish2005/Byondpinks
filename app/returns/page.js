import { RotateCcw, CheckCircle, XCircle } from 'lucide-react';

export default function ReturnsPage() {
  return (
    <div className="container-custom py-12">
      <nav className="text-xs text-gray-500 mb-8 uppercase tracking-wide">
        Home / Returns & Exchanges
      </nav>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold uppercase tracking-widest mb-12">Returns & Exchanges</h1>

        <div className="bg-blue-50 border border-blue-200 p-6 mb-12 rounded-sm">
          <h3 className="font-bold text-lg mb-2">30-Day Return Policy</h3>
          <p className="text-gray-700">
            We want you to love your purchase! If you're not completely satisfied, you can return 
            unworn, unwashed items with original tags within 30 days of delivery for a full refund.
          </p>
        </div>

        <div className="space-y-8 text-gray-600">
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">Return Eligibility</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="border border-green-200 bg-green-50 p-4 rounded-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-green-900 mb-2">Returnable Items</h4>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>• Unworn, unwashed items</li>
                      <li>• Original tags attached</li>
                      <li>• Within 30 days of delivery</li>
                      <li>• Original packaging</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border border-red-200 bg-red-50 p-4 rounded-sm">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-red-900 mb-2">Non-Returnable Items</h4>
                    <ul className="text-sm text-red-800 space-y-1">
                      <li>• Final sale items</li>
                      <li>• Worn or washed items</li>
                      <li>• Items without tags</li>
                      <li>• Intimate apparel</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">How to Return</h2>
            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold">1</span>
                <div>
                  <h4 className="font-bold text-black mb-1">Initiate Your Return</h4>
                  <p>Log into your account and select the order you wish to return. Click "Return Items" and select the items you'd like to return.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold">2</span>
                <div>
                  <h4 className="font-bold text-black mb-1">Print Return Label</h4>
                  <p>You'll receive a prepaid return shipping label via email. Print it and attach it to your package.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold">3</span>
                <div>
                  <h4 className="font-bold text-black mb-1">Ship Your Return</h4>
                  <p>Drop off your package at any authorized shipping location. Keep your tracking number for reference.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold">4</span>
                <div>
                  <h4 className="font-bold text-black mb-1">Receive Your Refund</h4>
                  <p>Once we receive and inspect your return, we'll process your refund within 5-7 business days to your original payment method.</p>
                </div>
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">Exchanges</h2>
            <p className="mb-4">
              We currently don't offer direct exchanges. If you need a different size or color, 
              please return your original item and place a new order for the item you'd like.
            </p>
            <p className="text-sm bg-yellow-50 border border-yellow-200 p-4 rounded-sm">
              <strong>Pro Tip:</strong> To ensure you get the size or color you want, place your 
              new order before returning the original item, as popular items sell out quickly!
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">Return Shipping Costs</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Domestic returns: FREE (prepaid label provided)</li>
              <li>International returns: Customer is responsible for return shipping costs</li>
              <li>Defective or incorrect items: We cover all return shipping costs</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">Questions?</h2>
            <p>
              If you have any questions about returns or exchanges, please contact our customer 
              service team at <a href="mailto:support@beyondpink.com" className="text-accent underline">support@beyondpink.com</a> or 
              call us at +1 (555) 123-4567.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
