import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    type: "Residential",
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // If phone field → allow only numbers
    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Swal.fire({
    //   title: "Email Sending...",
    //   text: "Please wait",
    //   allowOutsideClick: false,
    //   didOpen: () => Swal.showLoading(),
    // })
     

    try {
      const response = await axios.post("http://localhost:3000/email", {
        type: formData.type,
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
      });


      if (response.data.success) {
       alert("emailsent successfully!")

        setFormData({
          type: "Residential",
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        alert("error")
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-white px-6 pb-8 m-3 md:mx-8 my-5 shadow rounded-2xl grid place-content-center">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <span
            key={i}
            className="water-drop"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>
      
      {/* Heading border */}
     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl w-full items-center p-5 mt-5 md;mt-10 place-content-center">
        {/* LEFT CONTENT */}
        <div className="self-center">
          
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white">
          

          <p className="mt-4 text-gray-600">You're a/an</p>

          {/* INPUTS */}
          <form className="mt-6 space-y-5 " onSubmit={handleSubmit}>
            {/* RADIO */}
            <div className="flex gap-6 mt-2">
              {["Residential", "Commercial"].map((item) => (
                <label
                  key={item}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="type"
                    value={item}
                    checked={formData.type === item}
                    onChange={handleChange}
                    required
                    className="accent-blue-600"
                  />
                  <span className="text-gray-800">{item}</span>
                </label>
              ))}
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full mt-1 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Phone number
              </label>
              <input
                type="tel"
                placeholder=" 98765 43210"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                inputMode="numeric"
                maxLength={10}
                required
                className="w-full mt-1 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full mt-1 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Tell us what you need
              </label>
              <textarea
                rows="4"
                placeholder="Describe your requirements..."
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full mt-1 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer bg-[#00BCFF] hover:bg-[#00a6e0] text-white font-semibold py-3 rounded-lg transition"
            >
              Get Free Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
