import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { supabase } from '@/lib/supabase'

type Props = {
  params: Promise<{ id: string }>
}

export const dynamic = 'force-dynamic'

export default async function PropertyDetailPage({ params }: Props) {
  const { id } = await params

  const { data: property, error } = await supabase
    .from('properties')
    .select('*')
    .eq('id', Number(id))
    .single()

  if (error || !property) {
    notFound()
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
            {property.type}
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {property.title}
          </h1>
          <p className="mt-2 text-slate-600">{property.location}</p>
        </div>

        <Link
          href="/properties"
          className="rounded-2xl border border-slate-300 px-5 py-3 font-semibold text-slate-800 hover:bg-slate-100"
        >
          Back to Properties
        </Link>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.5fr_0.9fr]">
        <div>
          <div className="relative h-[420px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <Image
              src={property.image}
              alt={property.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">
              Property Description
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              {property.description}
            </p>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm text-slate-500">Price</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">
              {property.price}
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">
              Property Details
            </h2>

            <div className="mt-5 space-y-3 text-slate-600">
              <p>
                <strong>Type:</strong> {property.type}
              </p>
              <p>
                <strong>Location:</strong> {property.location}
              </p>

              {property.bedrooms !== null && property.bedrooms !== undefined && (
                <p>
                  <strong>Bedrooms:</strong> {property.bedrooms}
                </p>
              )}

              {property.bathrooms !== null &&
                property.bathrooms !== undefined && (
                  <p>
                    <strong>Bathrooms:</strong> {property.bathrooms}
                  </p>
                )}

              {property.area && (
                <p>
                  <strong>Area:</strong> {property.area}
                </p>
              )}

              <p>
                <strong>Summary:</strong> {property.details}
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white shadow-sm">
            <h2 className="text-xl font-semibold">
              Interested in this property?
            </h2>
            <p className="mt-3 text-slate-300">
              Contact Ireme Real Estate for more details, viewing appointments,
              or availability.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex rounded-2xl bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-slate-100"
            >
              Contact Us
            </Link>
          </div>
        </aside>
      </div>
    </section>
  )
}