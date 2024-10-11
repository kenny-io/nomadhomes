import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What is the minimum stay duration?',
    answer: 'Our minimum stay is typically one month, but we offer flexible leases that can be extended as needed.',
  },
  {
    question: 'Are utilities included in the price?',
    answer: 'Yes, all utilities including electricity, water, and high-speed internet are included in our all-inclusive pricing.',
  },
  {
    question: 'Can I bring pets?',
    answer: 'Some of our properties are pet-friendly. Please inquire about specific properties when booking.',
  },
  {
    question: 'Is there a security deposit?',
    answer: 'Yes, we require a refundable security deposit. The amount varies depending on the property and length of stay.',
  },
  {
    question: 'Do you offer cleaning services?',
    answer: 'Yes, we offer regular cleaning services. The frequency depends on your chosen plan.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left font-semibold p-4 bg-gray-100 hover:bg-gray-200 rounded-lg transition duration-300"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-white">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;