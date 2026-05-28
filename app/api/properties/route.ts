import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const {
      title,
      location,
      price,
      type,
      details,
      image,
      description,
      bedrooms,
      bathrooms,
      area,
    } = body

    if (!title || !location || !price || !type || !details || !image || !description) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      )
    }

    const { data, error } = await supabaseAdmin
      .from('properties')
      .insert([
        {
          title,
          location,
          price,
          type,
          details,
          image,
          description,
          bedrooms: bedrooms || null,
          bathrooms: bathrooms || null,
          area: area || null,
        },
      ])
      .select()
      .single()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, property: data })
  } catch (error) {
    return NextResponse.json(
      { error: 'Something went wrong.' },
      { status: 500 }
    )
  }
}