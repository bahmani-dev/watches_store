import React, { useState } from "react";
import emailjs from "emailjs-com";
export default function Comment() {
  const [formData, SetFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    SetFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_jnkr402",
        "template_dtfewmw",
        formData,
        "jLRBMUtiVvTXs5XXn",
      )
      .then(() => {
        alert("Message sent successfully ✅");
      })
      .catch(() => {
        alert("Failed to send ❌");
      });
  };
  return (
    <>
      <section className="w-full max-w-[1400px] my-12 mx-auto px-4 sm:px-6 md:px-8">
        <div className="  bg-[#FFB568] rounded-xl shadow-lg p-6 sm:p-8 lg:p-12">
          <div className="text-center mb-6 lg:mb-10">
            <h2 className="font-sans font-semibold text-xl md:text-2xl lg:text-3xl">
              Share your thoughts
            </h2>
            <p className="text-sm sm:text-base text-zinc-700 mt-2">
              Your feedback helps us improve
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 max-w-[800px] mx-auto "
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className=" flex flex-col gap-1">
                <label htmlFor="name" className="text-sm font-sans font-medium">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className=" h-11 px-4 font-sans text-sm md:text-base rounded-md focus:ring-2 focus:ring-black outline-none "
                />
              </div>
              <div className=" flex flex-col gap-1">
                <label
                  htmlFor="email"
                  className="text-sm font-sans font-medium"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className=" h-11 px-4 font-sans text-sm md:text-base rounded-md focus:ring-2 focus:ring-black outline-none "
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="tex-sm font-sans font-medium">
                Comment:
              </label>
              <textarea
                type="text"
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your comments here"
                className="min-h-[140px] resize-none px-4 py-3 font-sans text-sm md:text-base rounded-md focus:ring-2 focus:ring-black outline-none"
              />
            </div>
            <button
              type="submit"
              className=" w-full mt-2 sm:w-fit sm:px-10 cursor-pointer bg-zinc-900 text-white my-4 py-2 font-sans rounded-md hover:bg-zinc-800 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
