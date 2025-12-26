import React, { useState, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { toast } from 'sonner';

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

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  


 
  const [errors, setErrors] = useState({
    user_name: "",
    user_email: "",
    user_phoneNumber: "",
    user_message: "",
  });


  const clearError = (field: string) => {
  setErrors(prev => ({
    ...prev,
    [field]: "",
  }));
};


  const validate = () => {
    const tempErrors = {
      user_name: "",
      user_email: "",
      user_phoneNumber: "",
      user_message: "",
    };

    let valid = true;

    if (!form.current?.user_name.value) {
      tempErrors.user_name = "Name is required";
      valid = false;
    }

    if (!form.current?.user_email.value) {
      tempErrors.user_email = "Email is required";
      valid = false;
    }

    if (!form.current?.user_phoneNumber.value) {
      tempErrors.user_phoneNumber = "Phone number is required";
      valid = false;
    }

    if (!form.current?.user_message.value) {
      tempErrors.user_message = "Message cannot be empty";
      valid = false;
    }

    setErrors(tempErrors);
    return valid;
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Please fix the errors before sending ❗");
      return;
    }

    if (!form.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_qm6clfa",
        "template_0yyzdzb",
        form.current,
        "o3Uz6Le-tdvpnfeop"
      )
      .then(() => {
        toast.success("Message sent successfully! 🎉", {
          duration: 2000,
          icon: "📩",
        });

        form.current?.classList.add("animate-pulse");
        setTimeout(() => {
          form.current?.classList.remove("animate-pulse");
        }, 600);

        form.current?.reset();
      })
      .catch(() => {
        toast.error("Failed to send message ❌");
      })
      .finally(() => setLoading(false));
  };

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  return (
    <div
      style={{ fontFamily: "'Montserrat', sans-serif" }}
      className="flex flex-col items-center gap-10">
      <section className="w-full flex flex-col items-center justify-center gap-10">
        <div className="w-[80%] md:w-[60%] flex justify-center items-center flex-col">
          <h1 className="text-[33px] font-extrabold bg-linear-to-r bg-clip-text text-transparent from-[#051E6D] to-[#052EB1]">Contact us</h1>
          <p className="text-center">
            For partnership opportunities, sponsorship inquiries, or any further
            questions, please reach out to us using the contact details provided
            below. We look forward to connecting with you and exploring how we
            can collaborate to make a positive impact together.
          </p>
        </div>


        <form ref={form} onSubmit={sendEmail}
          className="w-[90%] md:w-[75%] flex flex-col items-center justify-center gap-5">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold text-center mb-2">Get in touch</h2>
            <p className="text-center text-gray-500 mb-6">
              Reach out to us via message
            </p>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-5">
            <article className="w-full md:w-[50%] flex flex-col gap-2">
              <h3>Name</h3>
              <input
                type="text"
                placeholder="Your name"
                name="user_name"
                  onChange={() => clearError("user_name")}
                className="bg-[#F3F3FC]  p-3 outline-none rounded-md focus:bg-[#DADAFF]"
              />
              {errors.user_name && (
                <span className="text-red-500 text-sm">{errors.user_name}</span>
              )}
            </article>
            <article className="w-full md:w-[50%] flex flex-col gap-2">
              <h3>Phone Number</h3>
              <input
                type="text"
                placeholder="Phone number"
                name="user_phoneNumber"
                 onChange={() => clearError("user_phoneNumber")}
                className="bg-[#F3F3FC]  p-3 outline-none rounded-md focus:bg-[#DADAFF]"
              />
              {errors.user_phoneNumber && (
                <span className="text-red-500 text-sm">
                  {errors.user_phoneNumber}
                </span>
              )}
            </article>
          </div>
          <article className="flex flex-col gap-2 w-full">
            <h3>Email</h3>
            <input
              type="email"
              placeholder="Email"
              name="user_email"
               onChange={() => clearError("user_email")}
              className="bg-[#F3F3FC]  p-3 outline-none rounded-md focus:bg-[#DADAFF]"
            />
            {errors.user_email && (
              <span className="text-red-500 text-sm">{errors.user_email}</span>
            )}
          </article>
          <article className="flex flex-col gap-2 w-full">
            <textarea
              placeholder="Input your message"
              name="user_message"
              onChange={() => clearError("user_message")}
              className="w-full h-70 bg-[#F3F3FC]  p-3 outline-none rounded-md focus:bg-[#DADAFF]"
            ></textarea>
            {errors.user_message && (
              <span className="text-red-500 text-sm">{errors.user_message}</span>
            )}
          </article>
          <button
            type="submit"
            value="Send"
            className="w-full bg-[#3E6BFF]  text-[#FFFFFF] cursor-pointertext-white py-3 rounded-md font-semibold hover:bg-linear-to-r cursor-pointer  from-[#051E6D] to-[#052EB1]"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </section>

      <section className="w-[90%] md:w-[80%] flex flex-col items-center justify-center pb-8">
        <h3 className="text-center text-xl font-semibold mb-8">
          Frequently Asked Questions
        </h3>

        <div className="flex flex-wrap items-center justify-between gap-4">
          {faqs.map((faq, index) => (
            <div key={index} className="w-full md:w-[48%] pt-3">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between cursor-pointer items-center bg-[#06248B] text-white px-4 py-3 rounded-t-md font-medium hover:bg-[#3F6BFF] transition-colors"
              >
                <span>{faq.question}</span>
                <FaChevronDown
                  className={`transform transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""
                    }`}
                />
              </button>

              {activeIndex === index && (
                <div className="bg-[#021962] border border-t-0 border-gray-300 text-[#FFFFFF] px-4 py-3 rounded-b-md text-sm">
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

