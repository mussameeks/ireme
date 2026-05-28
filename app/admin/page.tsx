import Link from 'next/link'
import { supabase } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

export default async function AdminPage() {
  const { data: properties, error } = await supabase
    .from('properties')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Admin Dashboard
          </h1>
          <p className="mt-3 text-slate-600">
            Manage listed properties and add new ones.
          </p>
        </div>

        <Link
          href="/admin/new"
          className="rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white hover:bg-slate-800"
        >
          Add New Property
        </Link>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        {error ? (
          <div className="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-red-700">
            Failed to load properties.
          </div>
        ) : !properties || properties.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-10 text-center text-slate-600">
            No properties posted yet.
          </div>
        ) : (
          <div className="grid gap-4">
            {properties.map((property) => (
              <div
                key={property.id}
                className="flex flex-col justify-between gap-4 rounded-2xl border border-slate-200 p-5 md:flex-row md:items-center"
              >
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">
                    {property.title}
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    {property.location}
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    {property.type} • {property.price}
                  </p>
                </div>

                <div className="flex gap-3">
                  <Link
                    href={`/properties/${property.id}`}
                    className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100"
                  >
                    View
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}