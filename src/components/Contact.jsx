import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/bwnnneva", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <div className="flex justify-center items-center">
          <div className="card-glow rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/60 backdrop-blur-md p-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-10 px-6 md:px-16">
            {/* Contact Info */}
            <div className="flex flex-col justify-center items-center md:items-start md:w-1/2 gap-6 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-extrabold text-center md:text-left mb-2 tracking-wide text-green-700 dark:text-green-300">Contact Me</h1>
              <p className="text-center md:text-left text-gray-600 dark:text-gray-300 mb-2 text-base md:text-lg">I'd love to hear from you! Fill out the form or reach out directly.</p>
              <div className="flex flex-col gap-4 w-full">
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-200"><FaEnvelope className="text-green-500" /> <a href="mailto:shamsihassan002@gmail.com" className="underline hover:text-green-600 dark:hover:text-green-400 break-all">shamsihassan002@gmail.com</a></div>
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-200"><FaPhoneAlt className="text-green-500" /> <a href="tel:+919899472584" className="underline hover:text-green-600 dark:hover:text-green-400">+91 9899472584</a></div>
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-200"><FaMapMarkerAlt className="text-green-500" /> Delhi, India</div>
              </div>
            </div>
            {/* Contact Form */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              action="https://getform.io/f/bwnnneva"
              method="POST"
              className="flex flex-col gap-5 md:w-1/2 w-full justify-center"
            >
              <div className="flex flex-col gap-1">
                <label className="block text-gray-700 dark:text-gray-200 font-medium">Full Name</label>
                <input
                  {...register("name", { required: true })}
                  className="rounded-xl border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-900/70 py-3 px-4 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all shadow-sm"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                />
                {errors.name && <span className="text-red-500 text-xs mt-1">This field is required</span>}
              </div>
              <div className="flex flex-col gap-1">
                <label className="block text-gray-700 dark:text-gray-200 font-medium">Email Address</label>
                <input
                  {...register("email", { required: true })}
                  className="rounded-xl border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-900/70 py-3 px-4 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all shadow-sm"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                />
                {errors.email && <span className="text-red-500 text-xs mt-1">This field is required</span>}
              </div>
              <div className="flex flex-col gap-1">
                <label className="block text-gray-700 dark:text-gray-200 font-medium">Message</label>
                <textarea
                  {...register("message", { required: true })}
                  className="rounded-xl border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-900/70 py-3 px-4 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all shadow-sm min-h-[100px]"
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                />
                {errors.message && <span className="text-red-500 text-xs mt-1">This field is required</span>}
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold rounded-xl py-3 mt-2 shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
