import Link from 'next/link'
import Image from 'next/image'
import SectionHeading from '@/components/SectionHeading'
import PropertyCard from '@/components/PropertyCard'
import { supabase } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

const services = [
  'Property and houses sales',
  'House rentals and leasing',
  'Construction and renovation',
  'Architectural design',
  'Interior design and consultation',
]

export default async function HomePage() {
  const { data: properties } = await supabase
    .from('properties')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(3)

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center">
            <span className="mb-4 inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm">
              Trusted real estate services
            </span>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Find, rent, buy, and build with confidence.
            </h1>

            <p className="mt-5 max-w-xl text-base text-slate-200 sm:text-lg">
              Ireme Real Estate helps clients discover quality properties and
              also offers construction, renovation, architectural design, and
              interior consultation.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/properties"
                className="rounded-2xl bg-white px-6 py-3 font-semibold text-slate-900 shadow hover:bg-slate-100"
              >
                View Properties
              </Link>

              <Link
                href="/contact"
                className="rounded-2xl border border-white/30 px-6 py-3 font-semibold hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative h-64 overflow-hidden rounded-3xl shadow-2xl sm:h-full">
              <Image
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop"
                alt="House exterior"
                fill
                className="object-cover"
              />
            </div>

            <div className="grid gap-4">
              <div className="relative h-40 overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop"
                  alt="Interior design"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative h-40 overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200&auto=format&fit=crop"
                  alt="Architectural work"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Services"
          description="We provide real estate and property-related solutions tailored to your needs."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {services.map((service) => (
            <div
              key={service}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 h-12 w-12 rounded-2xl bg-blue-100" />
              <h3 className="text-lg font-semibold">{service}</h3>
              <p className="mt-2 text-sm text-slate-600">
                Professional support and reliable service delivery for every
                client.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Featured Properties"
            description="Browse a simple list of highlighted properties currently available."
          />

          {!properties || properties.length === 0 ? (
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10 text-center text-slate-600 shadow-sm">
              No properties available yet.
            </div>
          ) : (
            <div className="grid gap-8 lg:grid-cols-3">
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}