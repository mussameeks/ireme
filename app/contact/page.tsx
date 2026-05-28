import SectionHeading from '@/components/SectionHeading'

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        title="Contact Us"
        description="Reach out for property inquiries, rentals, sales, construction, design, and consultation services."
      />

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white shadow-sm">
          <h2 className="text-2xl font-semibold">Contact Information</h2>

          <div className="mt-6 space-y-3 text-slate-200">
            <p>
              <strong>Phone:</strong> +250 7XX XXX XXX
            </p>
            <p>
              <strong>Email:</strong> info@iremerealestate.com
            </p>
            <p>
              <strong>Location:</strong> Kigali, Rwanda
            </p>
          </div>
        </div>

        <form className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid gap-4">
            <input
              type="text"
              placeholder="Your name"
              className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            />
            <input
              type="email"
              placeholder="Your email"
              className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            />
            <textarea
              placeholder="Your message"
              rows={5}
              className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="rounded-2xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}