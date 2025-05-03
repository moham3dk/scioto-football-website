"use client";
import React, { useState } from "react";
import axios from "axios";
import Loading from "@/components/Loading";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const params = new URLSearchParams(formData);
      const res = await axios.get(`/api/contact?${params.toString()}`);
      if (res.data.success) {
        setSuccessMessage("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setErrorMessage(res.data.message || "Something went wrong.");
      }
    } catch (error: any) {
      setErrorMessage(
        error.response?.data?.message || "Failed to send message."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white w-full flex justify-center items-center p-4">
      <div className="w-full max-w-2xl my-4 md:my-8">
        <h1 className="text-4xl font-oswald text-[#014321] text-center mb-8">
          CONTACT US
        </h1>

        {loading ? (
          <form className="bg-white border border-[#014321] p-6 shadow-md">
            <Loading />
          </form>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-[#014321] p-6 shadow-md"
          >
            <div className="mb-4">
              <label className="block text-[#014321] font-oswald mb-1">
                NAME
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2"
                maxLength={100}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-[#014321] font-oswald mb-1">
                EMAIL
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-[#014321] font-oswald mb-1">
                SUBJECT
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2"
                maxLength={150}
              />
            </div>

            <div className="mb-4">
              <label className="block text-[#014321] font-oswald mb-1">
                MESSAGE
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2"
                rows={6}
                maxLength={2000}
                required
              ></textarea>
            </div>

            {errorMessage && (
              <div className="text-red-600 mb-4 font-oswald uppercase">
                <p>{errorMessage}</p>
              </div>
            )}
            {successMessage && (
              <div className="text-green-600 mb-4 font-oswald uppercase">
                {successMessage}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-[#014321] text-white font-oswald py-2 hover:bg-[#026937] transition"
            >
              SEND MESSAGE
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Page;
