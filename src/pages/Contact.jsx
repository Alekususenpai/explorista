import React, { useRef, useState, useEffect } from "react";
import { illustration } from "../assets/index";
import emailjs from "@emailjs/browser";

const ToastMessage = ({ isSent }) => {
  let message;
  if (isSent) {
    message = "Thank you for your message.";
  } else {
    message = "Something went wrong. Please try again.";
  }
  return (
    <div
      className="my-8 py-2.5 md:px-10 px-2 border border-white border-dashed items-center text-indigo-100 leading-none rounded-[10px] flex justify-center"
      role="alert"
    >
      <svg
        class="w-10 h-5 text-blue-600 dark:text-blue-500 rotate-45"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 18 20"
      >
        <path
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"
        />
      </svg>
      <span class="text-md mx-1 text-center md:text-left font-bold">
        {message}
      </span>
    </div>
  );
};

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, [showToast]);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Aleksandra Jovanovska",
          from_email: form.email,
          to_email: "aleksandrajovanovska218@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setShowToast(true);
          setIsSent(true);
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          setShowToast(true);
          console.error(error);
        }
      );
  };

  return (
    <div
      className={`py-32 flex md:flex-row flex-col-reverse items-center justify-center gap-[100px]`}
    >
      <div className="w-full md:w-[400px] p-8 rounded-2xl bg-primary">
        {/* <p className="text-white font-bold text-2xl">Get in touch.</p>
        <h3 className="text-white font-bold text-xl">Contact.</h3> */}
        {showToast && <ToastMessage isSent={isSent} />}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-7 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-2.5 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className="bg-tertiary py-2 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={4}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="How can we help you?"
              className="bg-tertiary py-2 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-2 px-6 rounded-xl border border-white/60 w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
      <div className="shadow-2xl shadow-pink-100">
        <p className="text-4xl my-7 font-bold text-gray-900 text-center">
        Get in touch. Contact us.

        </p>
        <img
          src={illustration}
          alt="Travel illustrations by Storyset"
          className="mx-auto w-[480px]"
        />
      </div>
    </div>
  );
};

export default Contact;
