import SectionHeading from '@/components/SectionHeading'

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        title="About Ireme Real Estate"
        description="A simple and client-focused real estate business dedicated to trusted service delivery."
      />

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Who we are</h2>
          <p className="mt-4 leading-7 text-slate-600">
            Ireme Real Estate helps clients buy, rent, lease, and improve properties with confidence.
            We combine practical real estate support with design and construction-related services so our
            clients can find complete solutions in one place.
          </p>
          <p className="mt-4 leading-7 text-slate-600">
            Our mission is to provide trusted guidance, quality listings, and professional property services
            that make real estate easier for everyone.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Why choose us?</h2>
          <ul className="mt-5 space-y-4 text-slate-600">
            <li>• Simple and clear property guidance</li>
            <li>• Reliable sales, rental, and leasing support</li>
            <li>• Construction and renovation expertise</li>
            <li>• Professional architectural and interior design services</li>
          </ul>
        </div>
      </div>
    </section>
  )
}