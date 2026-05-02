import { useState } from "react";

export function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // for now just log (later we can connect email service)
    console.log("Form submitted:", form);

    alert("Message sent (demo)");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <main className="pt-32 px-6 md:px-12">
      {/* Header */}
      <div className="max-w-2xl mb-12">
        <h1 className="text-4xl md:text-5xl font-medium">Contact</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Tell us about your project. We’ll get back to you with details and
          next steps.
        </p>
      </div>

      {/* Layout */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full border border-gray-300 dark:border-gray-700 px-4 py-3 bg-transparent"
            required
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            type="email"
            className="w-full border border-gray-300 dark:border-gray-700 px-4 py-3 bg-transparent"
            required
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your project..."
            rows={6}
            className="w-full border border-gray-300 dark:border-gray-700 px-4 py-3 bg-transparent"
            required
          />

          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>

        {/* Info */}
        <div className="text-gray-600 dark:text-gray-400 space-y-4 text-sm leading-relaxed">
          <p>
            We work on interior design, finishing, and custom paint
            applications.
          </p>

          <p>Each project is handled personally from concept to completion.</p>

          <div className="pt-6">
            <p className="font-medium text-black dark:text-white">Studio</p>
            <p>14 Rue des Artisans</p>
            <p>Antwerp, Belgium</p>
          </div>

          <div>
            <p className="font-medium text-black dark:text-white">Contact</p>
            <p>+32 3 555 0142</p>
            <p>studio@maren.co</p>
          </div>
        </div>
      </div>
    </main>
  );
}
