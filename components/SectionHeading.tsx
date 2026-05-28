type SectionHeadingProps = {
  title: string
  description?: string
}

export default function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 text-center">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h1>
      {description && (
        <p className="mx-auto mt-3 max-w-2xl text-slate-600">
          {description}
        </p>
      )}
    </div>
  )
}