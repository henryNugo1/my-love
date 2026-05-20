import { useForm } from "@formspree/react";

export function ContactPage() {
  const [state, handleSubmit] = useForm("xqejayjr");

  if (state.succeeded) {
    return (
      <main className="pt-32 px-6 md:px-12 pb-24 bg-black text-white min-h-screen">
        <h1 className="text-4xl md:text-5xl font-extralight text-[#C9A45C]">
          Message Sent
        </h1>
        <p className="mt-4 text-white/70">
          Thank you. We’ll get back to you shortly.
        </p>
      </main>
    );
  }

  return (
    <main className="pt-32 px-6 md:px-12 pb-24 bg-black text-white min-h-screen">
      <div className="max-w-2xl mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-[#C9A45C] mb-4">
          Contact
        </p>

        <h1 className="text-4xl md:text-5xl font-extralight">
          Start your project
        </h1>

        <p className="mt-4 text-white/60">
          Tell us about your space, your vision, or the finishing work you need.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            name="name"
            placeholder="Your name"
            className="w-full bg-transparent border-b border-white/30 py-3 placeholder:text-white/40 focus:outline-none focus:border-[#C9A45C]"
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Your email"
            className="w-full bg-transparent border-b border-white/30 py-3 placeholder:text-white/40 focus:outline-none focus:border-[#C9A45C]"
            required
          />

          <textarea
            name="message"
            placeholder="Tell us about your project..."
            rows={6}
            className="w-full bg-transparent border-b border-white/30 py-3 placeholder:text-white/40 focus:outline-none focus:border-[#C9A45C] resize-none"
            required
          />

          <button
            type="submit"
            disabled={state.submitting}
            className="px-6 py-3 bg-[#C9A45C] text-black hover:bg-[#b89145] transition disabled:opacity-60"
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        <div className="text-white/60 space-y-5 text-sm leading-relaxed">
          <p>
            We work on interior design, home finishing, and premium paint
            solutions.
          </p>

          <div className="pt-6">
            <p className="font-medium text-[#C9A45C]">Email</p>
            <p>sapphireberyl12@gmail.com</p>
          </div>

          <div>
            <p className="font-medium text-[#C9A45C]">Services</p>
            <p>Interior Design</p>
            <p>Home Finishing</p>
            <p>Paint Line</p>
          </div>
        </div>
      </div>
    </main>
  );
}