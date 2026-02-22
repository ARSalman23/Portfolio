import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_86zn228",
        "template_1c1my5c",
        form.current,
        "xcaKWOPyHTqIk1rSG"
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-[5vw] md:px-[10vw] lg:px-[15vw] font-sans"
    >
      <ToastContainer />

      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wider uppercase">CONTACT</h2>
        <div className="w-24 h-1 bg-[#38e14e] mx-auto mt-4 rounded-full shadow-[0_0_10px_#38e14e]"></div>
        <p className="text-gray-400 mt-6 text-lg font-medium">
          I’d love to hear from you reach out for any opportunities or questions!
        </p>
      </div>

      <div className="flex justify-center">
        <div className="w-full max-w-2xl bg-[#0a0a0a] backdrop-blur-md px-8 py-10 rounded-3xl border border-[#1a1a1a] 
              shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] hover:border-[#38e14e]/40 hover:shadow-[0_0_30_rgba(56,225,78,0.1)] 
              transition-all duration-500">

          <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full p-4 rounded-xl bg-[#111111] text-gray-300 border border-gray-800 focus:outline-none focus:border-[#38e14e] focus:bg-[#38e14e]/5 transition-all duration-300"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full p-4 rounded-xl bg-[#111111] text-gray-300 border border-gray-800 focus:outline-none focus:border-[#38e14e] focus:bg-[#38e14e]/5 transition-all duration-300"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full p-4 rounded-xl bg-[#111111] text-gray-300 border border-gray-800 focus:outline-none focus:border-[#38e14e] focus:bg-[#38e14e]/5 transition-all duration-300"
            />

            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              required
              className="w-full p-4 rounded-xl bg-[#111111] text-gray-300 border border-gray-800 focus:outline-none focus:border-[#38e14e] focus:bg-[#38e14e]/5 transition-all duration-300 resize-none"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#38e14e] hover:bg-[#2eb93f] text-black font-bold py-4 rounded-2xl shadow-[0_0_20px_rgba(56,225,78,0.2)] hover:shadow-[0_0_30px_rgba(56,225,78,0.4)] transition-all duration-300 transform active:scale-95"
            >
            Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;