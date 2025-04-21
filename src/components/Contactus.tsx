import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    user_whatsapp: "",
    message: "",
  });

  const validate = () => {
    const formData = new FormData(form.current!);
    let hasError = false;
    const newErrors: any = {};

    const name = formData.get("user_name") as string;
    const email = formData.get("user_email") as string;
    const phone = formData.get("user_phone") as string;
    const whatsapp = formData.get("user_whatsapp") as string;
    const message = formData.get("message") as string;

    if (!name || name.trim().length < 2) {
      newErrors.user_name =
        "Name is required and must be at least 2 characters.";
      hasError = true;
    }

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.user_email = "Enter a valid email address.";
      hasError = true;
    }

    if (phone && !/^\d{10}$/.test(phone)) {
      newErrors.user_phone = "Phone number must be 10 digits.";
      hasError = true;
    }

    if (whatsapp && !/^\d{10}$/.test(whatsapp)) {
      newErrors.user_whatsapp = "WhatsApp number must be 10 digits.";
      hasError = true;
    }

    if (!message || message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
      hasError = true;
    }

    setErrors(newErrors);
    return !hasError;
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    emailjs
      .sendForm(
        "letsmovesolution",
        "template_3bjkjac",
        form.current!,
        "7L_7VrI_K-gSbQ_BD"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current?.reset();
          setErrors({
            user_name: "",
            user_email: "",
            user_phone: "",
            user_whatsapp: "",
            message: "",
          });
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <div
      id="contact-form"
      className="max-w-xl mx-auto bg-black p-6 rounded shadow-md mt-10"
    >
      <h2 className="text-2xl font-bold mb-4 text-center text-white">
        Contact Us
      </h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        {/** Name */}
        <div>
          <label className="block font-medium text-white">Name</label>
          <input
            type="text"
            name="user_name"
            className="w-full border px-3 py-2 rounded bg-gray-800 text-white"
          />
          {errors.user_name && (
            <p className="text-red-400 text-sm">{errors.user_name}</p>
          )}
        </div>

        {/** Email */}
        <div>
          <label className="block font-medium text-white">Email Address</label>
          <input
            type="email"
            name="user_email"
            className="w-full border px-3 py-2 rounded bg-gray-800 text-white"
          />
          {errors.user_email && (
            <p className="text-red-400 text-sm">{errors.user_email}</p>
          )}
        </div>

        {/** Phone Number */}
        <div>
          <label className="block font-medium text-white">Phone Number</label>
          <input
            type="tel"
            name="user_phone"
            className="w-full border px-3 py-2 rounded bg-gray-800 text-white"
          />
          {errors.user_phone && (
            <p className="text-red-400 text-sm">{errors.user_phone}</p>
          )}
        </div>

        {/** WhatsApp Number */}
        <div>
          <label className="block font-medium text-white">
            WhatsApp Number
          </label>
          <input
            type="tel"
            name="user_whatsapp"
            className="w-full border px-3 py-2 rounded bg-gray-800 text-white"
          />
          {errors.user_whatsapp && (
            <p className="text-red-400 text-sm">{errors.user_whatsapp}</p>
          )}
        </div>

        {/** Message */}
        <div>
          <label className="block font-medium text-white">Comment</label>
          <textarea
            name="message"
            rows={4}
            className="w-full border px-3 py-2 rounded bg-gray-800 text-white"
          ></textarea>
          {errors.message && (
            <p className="text-red-400 text-sm">{errors.message}</p>
          )}
        </div>

        {/** Submit Button */}
        <button
          type="submit"
          className="bg-yellow-500 text-black font-semibold py-2 px-4 rounded hover:bg-yellow-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
