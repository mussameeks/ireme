import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-sm font-bold text-white">
            IR
          </div>
          <div>
            <p className="text-lg font-bold tracking-tight text-slate-900">Ireme Real Estate</p>
            <p className="text-xs text-slate-500">Trusted property solutions</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link href="/services" className="transition hover:text-blue-600">Services</Link>
          <Link href="/about" className="transition hover:text-blue-600">About</Link>
          <Link href="/properties" className="transition hover:text-blue-600">Properties</Link>
          <Link href="/contact" className="transition hover:text-blue-600">Contact</Link>
          <Link href="/admin" className="transition hover:text-blue-600">Admin</Link>
        </nav>
      </div>
    </header>
  )
}