'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function NewPropertyPage() {
  const router = useRouter()

  const [form, setForm] = useState({
    title: '',
    location: '',
    price: '',
    type: 'For Sale',
    details: '',
    image: '',
    description: '',
    bedrooms: '',
    bathrooms: '',
    area: '',
  })

  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  function updateField(name: string, value: string) {
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const res = await fetch('/api/properties', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...form,
          bedrooms: form.bedrooms ? Number(form.bedrooms) : null,
          bathrooms: form.bathrooms ? Number(form.bathrooms) : null,
          area: form.area || null,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setMessage(data.error || 'Failed to add property')
        return
      }

      router.push('/admin')
      router.refresh()
    } catch (error) {
      setMessage('Something went wrong while submitting the property.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Add New Property
        </h1>
        <p className="mt-3 text-slate-600">
          Fill in the property information below.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <input
            value={form.title}
            onChange={(e) => updateField('title', e.target.value)}
            placeholder="Property title"
            className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          />

          <input
            value={form.location}
            onChange={(e) => updateField('location', e.target.value)}
            placeholder="Location"
            className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          />

          <input
            value={form.price}
            onChange={(e) => updateField('price', e.target.value)}
            placeholder="Price"
            className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          />

          <select
            value={form.type}
            onChange={(e) => updateField('type', e.target.value)}
            className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          >
            <option>For Sale</option>
            <option>For Rent</option>
            <option>For Lease</option>
          </select>

          <input
            value={form.bedrooms}
            onChange={(e) => updateField('bedrooms', e.target.value)}
            placeholder="Bedrooms"
            className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          />

          <input
            value={form.bathrooms}
            onChange={(e) => updateField('bathrooms', e.target.value)}
            placeholder="Bathrooms"
            className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          />

          <input
            value={form.area}
            onChange={(e) => updateField('area', e.target.value)}
            placeholder="Area (e.g. 250 sqm)"
            className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          />

          <input
            value={form.image}
            onChange={(e) => updateField('image', e.target.value)}
            placeholder="Image URL"
            className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        <textarea
          value={form.details}
          onChange={(e) => updateField('details', e.target.value)}
          placeholder="Short details summary"
          rows={3}
          className="mt-5 w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
        />

        <textarea
          value={form.description}
          onChange={(e) => updateField('description', e.target.value)}
          placeholder="Full description"
          rows={6}
          className="mt-5 w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
        />

        {message && (
          <div className="mt-5 rounded-2xl bg-slate-100 px-4 py-3 text-sm text-slate-700">
            {message}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="mt-6 rounded-2xl bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-slate-800 disabled:opacity-60"
        >
          {loading ? 'Submitting...' : 'Submit Property'}
        </button>
      </form>
    </section>
  )
}