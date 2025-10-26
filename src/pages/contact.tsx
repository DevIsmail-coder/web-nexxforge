import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What are the requirements to join Nexxforge?",
    answer: "You must have a passion for tech and basic computer literacy.",
  },
  {
    question: "Do you have weekend classes?",
    answer: "Yes, we offer flexible weekend classes for working individuals.",
  },
  {
    question: "How do I apply for the training?",
    answer:
      "You can fill out the application form on our website or contact us directly.",
  },
  {
    question: "When are your training days?",
    answer:
      "Our classes typically hold Monday to Friday, with weekend options available.",
  },
  {
    question: "Where is your location?",
    answer:
      "We are located in Lagos, Nigeria. Online sessions are also available.",
  },
  {
    question: "How long is the training?",
    answer:
      "The training duration varies from 6 weeks to 3 months depending on the course.",
  },
  {
    question: "Is your program online?",
    answer: "Yes, we have both online and physical learning options.",
  },
];

const Contact: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center bg-gray-50 text-gray-800">
      {/* Contact Form */}
      <section className="w-full max-w-3xl p-6 mt-10">
        <div className="w-full h-30 bg-gray flex justify-center items-center flex-col mb-10">
          <h1 className="text-blue-800 text-4xl font-extrabold">Contact us</h1>
          <p className="text-center">
            For partnership opportunities, sponsorship inquiries, or any further
            questions, please reach out to us using the contact details provided
            below. We look forward to connecting with you and exploring how we
            can collaborate to make a positive impact together.
          </p>
        </div>
        <h2 className="text-2xl font-bold text-center mb-2">Get in touch</h2>
        <p className="text-center text-gray-500 mb-6">
          Reach out to us via message
        </p>

        <form className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Your name"
              className="flex-1   bg-gray-300  p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Phone number"
              className="flex-1   bg-gray-300  p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <textarea
            placeholder="Input your message"
            className="w-full   bg-gray-300 p-3 h-62 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600  cursor-pointertext-white py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
          >
            Send now
          </button>
        </form>
      </section>

      {/* FAQ Section */}
      <section className="w-full max-w-4xl mt-12 mb-16">
        <h3 className="text-center text-xl font-semibold mb-8">
          Frequently Asked Questions
        </h3>

        <div className="grid sm:grid-cols-2 gap-4">
          {faqs.map((faq, index) => (
            <div key={index} className="relative">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between cursor-pointer items-center bg-blue-950 text-white px-4 py-3 rounded-md font-medium hover:bg-blue-800 transition-colors"
              >
                <span>{faq.question}</span>
                <FaChevronDown
                  className={`transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {activeIndex === index && (
                <div className="bg-gray-100 border border-t-0 border-gray-300 text-gray-700 px-4 py-3 rounded-b-md text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;
