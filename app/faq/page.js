'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-gray-100 py-6">
    <button
      onClick={onClick}
      className="w-full flex justify-between items-start text-left gap-4 group"
    >
      <span className="font-medium text-lg group-hover:text-accent transition-colors">{question}</span>
      {isOpen ? <ChevronUp className="w-5 h-5 flex-shrink-0 mt-1" /> : <ChevronDown className="w-5 h-5 flex-shrink-0 mt-1" />}
    </button>
    {isOpen && (
      <div className="mt-4 text-gray-600 leading-relaxed">
        {answer}
      </div>
    )}
  </div>
);

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is your shipping policy?",
      answer: "We offer free standard shipping on all orders over $150. Standard shipping typically takes 5-7 business days. Express shipping (2-3 business days) is available for an additional fee. International shipping is available to select countries."
    },
    {
      question: "What is your return policy?",
      answer: "We accept returns within 30 days of purchase for unworn, unwashed items with original tags attached. Returns are free for domestic orders. Please visit our Returns & Exchanges page for detailed instructions on how to initiate a return."
    },
    {
      question: "How do I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can also track your order by logging into your account and viewing your order history. If you checked out as a guest, use the tracking link in your shipping confirmation email."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay, and Google Pay. All transactions are secure and encrypted."
    },
    {
      question: "How do I know what size to order?",
      answer: "We provide detailed size guides for each product category. You can find the size guide link on every product page. If you're between sizes, we generally recommend sizing up. Our customer service team is also happy to help with sizing questions."
    },
    {
      question: "Can I modify or cancel my order?",
      answer: "Orders can be modified or cancelled within 1 hour of placement. After that, orders are processed and shipped quickly, so we're unable to make changes. Please contact us immediately if you need to modify your order."
    },
    {
      question: "Do you offer gift wrapping?",
      answer: "Yes! We offer complimentary gift wrapping on all orders. Simply select the gift wrap option at checkout and include a personalized message if desired."
    },
    {
      question: "How can I contact customer service?",
      answer: "You can reach our customer service team via email at support@beyondpink.com, by phone at +1 (555) 123-4567 (Mon-Fri, 9AM-6PM EST), or through our Contact Us page. We typically respond to emails within 24 hours."
    }
  ];

  return (
    <div className="container-custom py-12">
      <nav className="text-xs text-gray-500 mb-8 uppercase tracking-wide">
        Home / FAQ
      </nav>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold uppercase tracking-widest mb-4">Frequently Asked Questions</h1>
        <p className="text-gray-600 mb-12">Find answers to common questions about orders, shipping, returns, and more.</p>

        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>

        <div className="mt-12 bg-gray-50 p-8 text-center">
          <h2 className="text-xl font-bold mb-3">Still have questions?</h2>
          <p className="text-gray-600 mb-6">Our customer service team is here to help!</p>
          <a href="/contact" className="inline-block bg-black text-white px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
