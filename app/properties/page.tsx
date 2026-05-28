import SectionHeading from '@/components/SectionHeading'
import PropertyCard from '@/components/PropertyCard'
import { supabase } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

export default async function PropertiesPage() {
  const { data: properties, error } = await supabase
    .from('properties')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        title="Available Properties"
        description="Browse the current list of homes, apartments, and spaces available through Ireme Real Estate."
      />

      {error ? (
        <div className="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-red-700">
          Failed to load properties.
        </div>
      ) : !properties || properties.length === 0 ? (
        <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center text-slate-600 shadow-sm">
          No properties available yet.
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      )}
    </section>
  )
}