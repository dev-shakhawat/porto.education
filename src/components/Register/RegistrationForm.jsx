
import React, { useState } from "react";


function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-10">
      <div className="flex gap-2 text-sm text-secondery max-md:max-w-full">
        <input
          type="text"
          name="firstName"
          placeholder="FIRST NAME*"
          value={formData.firstName}
          onChange={handleChange}
          required
          className="overflow-hidden px-4 py-4  bg-secondery/5 outline-none max-md:pr-5 w-1/2"
        />
        <input
          type="text"
          name="lastName"
          placeholder="LAST NAME*"
          value={formData.lastName}
          onChange={handleChange}
          required
          className="overflow-hidden px-4 py-4 bg-secondery/5 outline-none max-md:pr-5 w-1/2"
        />
      </div>

      <div className="flex gap-2 mt-2 text-sm whitespace-nowrap text-neutral-400 max-md:max-w-full">
        <input
          type="tel"
          name="phone"
          placeholder="PHONE*"
          value={formData.phone}
          onChange={handleChange}
          required
          className="overflow-hidden px-4 py-4 bg-secondery/5 outline-none max-md:pr-5 w-1/2"
        />
        <input
          type="email"
          name="email"
          placeholder="EMAIL*"
          value={formData.email}
          onChange={handleChange}
          required
          className="overflow-hidden px-4 py-4 bg-secondery/5 outline-none max-md:pr-5 w-1/2"
        />
      </div>

      <button
        type="submit"
        className="w-full overflow-hidden py-6 mt-2 text-sm font-bold text-center text-white border border-solid bg-brand2 border-slate-700 max-md:px-5 max-md:max-w-full cursor-pointer hover:bg-slate-800 transition-colors"
      >
        GET IT NOW
      </button>
    </form>
  );
}

export default RegistrationForm;
