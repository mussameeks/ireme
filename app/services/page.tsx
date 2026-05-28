import SectionHeading from '@/components/SectionHeading'

const services = [
  'Property and houses sales',
  'House rentals and leasing',
  'Construction and renovation',
  'Architectural design',
  'Interior design and consultation',
]

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        title="Our Services"
        description="Explore the main services provided by Ireme Real Estate."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <div
            key={service}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="mb-4 h-12 w-12 rounded-2xl bg-blue-100" />
            <h2 className="text-xl font-semibold text-slate-900">{service}</h2>
            <p className="mt-3 text-slate-600">
              We offer professional and practical support to help our clients achieve the best property outcomes.
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}