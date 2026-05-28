import Image from 'next/image'
import Link from 'next/link'

type Property = {
  id: number
  title: string
  location: string
  price: string
  type: string
  details: string
  image: string
}

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-56 w-full">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <div className="mb-3 flex items-center justify-between gap-4">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
            {property.type}
          </span>
          <span className="text-sm font-bold text-slate-900">{property.price}</span>
        </div>

        <h3 className="text-xl font-semibold text-slate-900">{property.title}</h3>
        <p className="mt-2 text-sm text-slate-500">{property.location}</p>
        <p className="mt-3 text-sm leading-6 text-slate-600">{property.details}</p>

        <Link
          href={`/properties/${property.id}`}
          className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-slate-900 px-4 py-3 font-semibold text-white transition hover:bg-slate-800"
        >
          View Details
        </Link>
      </div>
    </article>
  )
}