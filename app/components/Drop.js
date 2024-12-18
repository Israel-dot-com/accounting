"use client"
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div 
      className="bg-white shadow-sm border border-gray-100 rounded-lg mb-6"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center p-4 cursor-pointer space-y-2">
        <h3 className="text-[#050430] text-xl font-medium">{question}</h3>
        <ChevronDown 
          className={`transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </div>
      
      <div
        className="overflow-hidden transition-all duration-1000 ease-in-out"
        style={{
          height: `${height}px`,
          opacity: isOpen ? 1 : 0
        }}
      >
        <div 
          ref={contentRef} 
          className="p-4 pt-0 text-gray-600"
        >
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQAccordion = ({ faqs }) => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      {faqs.map((faq, index) => (
        <FAQItem 
          key={index}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </div>
  );
};

// Example usage
const App = () => {
  const sampleFAQs = [
    {
      question: "What services do you provide?",
      answer: "We offer a range of services, including taxation, bookkeeping, payroll management, financial advisory, and audit and assurance. For a detailed breakdown, visit our Services page."
    },
    {
      question: "How can I schedule a consultation?",
      answer: "You can schedule a consultation by clicking on the 'Book a Consultation' button on our homepage or by reaching out through our Contact Us page."
    },
    {
      question: "What industries do you serve?",
      answer: "We work with clients across various industries, including retail, healthcare, technology, and manufacturing. Whether you're an individual or a business, we tailor our services to meet your specific needs."
    },
    {
      question: "How secure is my financial information with you?",
      answer: " We take data security very seriously and use industry-leading tools and protocols to ensure your information remains confidential and secure."
    },
    {
      question: "How much do your services cost?",
      answer: "Our pricing depends on the scope and complexity of the services you require. Please contact us for a customized quote.."
    },
    {
      question: "Are your services available remotely?",
      answer: "Yes, we offer both in-person and remote services to accommodate your preferences and needs."
    },
    {
      question: "How do I know if I need an audit?",
      answer: " If your business requires compliance with statutory or regulatory standards, or you want an in-depth evaluation of your operations, an audit can be beneficial. Contact us to discuss your specific requirements."
    }
  ];

  return <FAQAccordion faqs={sampleFAQs} />;
};

export default App;