import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!form.message.trim()) newErrors.message = "Message can't be empty";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // TODO: wire up to backend/API
    console.log(form);
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm({ name: "", email: "", message: "" });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed relative px-4 py-12"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&h=1600&fit=crop')",
      }}
    >
      {/* Light overlay just to keep contrast readable */}
      <div className="absolute inset-0 bg-white/20" />

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-white drop-shadow-md mb-2">Get in Touch</h1>
          <p className="text-white/90 drop-shadow-sm max-w-md mx-auto">
            Have a question, feedback, or a catering request? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Contact info cards */}
          <div className="space-y-4 md:col-span-1">
            <div className="bg-white rounded-2xl shadow-md p-5 flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-sm">Phone</h3>
                <p className="text-gray-500 text-sm">+254 700 123 456</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-5 flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-sm">Email</h3>
                <p className="text-gray-500 text-sm">hello@foodapp.com</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-5 flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-sm">Location</h3>
                <p className="text-gray-500 text-sm">Downtown Branch, Meru</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-5 flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-sm">Hours</h3>
                <p className="text-gray-500 text-sm">Mon–Sun, 8am – 10pm</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-md p-6 md:col-span-2">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-800 font-semibold text-lg">Thank you, {form.name.split(" ")[0]}!</p>
                <p className="text-gray-500 text-sm mt-1 mb-6">
                  We've received your message and will get back to you soon.
                </p>
                <button
                  onClick={handleReset}
                  className="text-orange-500 font-medium text-sm hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-gray-400 uppercase tracking-wide mb-1"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    aria-invalid={!!errors.name}
                    className={`w-full border-b outline-none py-2 text-gray-800 ${
                      errors.name ? "border-red-400" : "border-gray-200 focus:border-orange-500"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-gray-400 uppercase tracking-wide mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    aria-invalid={!!errors.email}
                    className={`w-full border-b outline-none py-2 text-gray-800 ${
                      errors.email ? "border-red-400" : "border-gray-200 focus:border-orange-500"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-gray-400 uppercase tracking-wide mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    aria-invalid={!!errors.message}
                    className={`w-full border-b outline-none py-2 text-gray-800 resize-none ${
                      errors.message ? "border-red-400" : "border-gray-200 focus:border-orange-500"
                    }`}
                  />
                  <div className="flex justify-between mt-1">
                    {errors.message ? (
                      <p className="text-red-500 text-xs">{errors.message}</p>
                    ) : (
                      <span />
                    )}
                    <span className="text-gray-400 text-xs">
                      {form.message.length}/500
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-full transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;