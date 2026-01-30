export default function TermsPage() {
  return (
    <div className="container-custom py-12">
      <nav className="text-xs text-gray-500 mb-8 uppercase tracking-wide">
        Home / Terms of Service
      </nav>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold uppercase tracking-widest mb-6">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-12">Last Updated: January 30, 2026</p>

        <div className="prose prose-lg max-w-none space-y-8 text-gray-600">
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing and using Beyond Pink's website, you accept and agree to be bound by 
              the terms and provision of this agreement. If you do not agree to abide by the above, 
              please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials on Beyond Pink's 
              website for personal, non-commercial transitory viewing only. This is the grant of a 
              license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or proprietary notations from the materials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">3. Product Information</h2>
            <p>
              We strive to provide accurate product descriptions and imagery. However, we do not 
              warrant that product descriptions, colors, or other content available on the site 
              are accurate, complete, reliable, current, or error-free.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">4. Pricing and Availability</h2>
            <p>
              All prices are subject to change without notice. We reserve the right to modify or 
              discontinue products without notice. We shall not be liable to you or any third party 
              for any modification, price change, suspension, or discontinuance of products.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">5. Account Terms</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account and password. 
              You agree to accept responsibility for all activities that occur under your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">6. Privacy Policy</h2>
            <p>
              Your use of Beyond Pink is also governed by our Privacy Policy. Please review our 
              Privacy Policy, which also governs the site and informs users of our data collection 
              practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">7. Limitation of Liability</h2>
            <p>
              In no event shall Beyond Pink or its suppliers be liable for any damages (including, 
              without limitation, damages for loss of data or profit, or due to business interruption) 
              arising out of the use or inability to use the materials on Beyond Pink's website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws 
              of the United States and you irrevocably submit to the exclusive jurisdiction of the 
              courts in that location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">9. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 mt-3 rounded-sm">
              <p className="font-medium">Beyond Pink</p>
              <p>Email: legal@beyondpink.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
