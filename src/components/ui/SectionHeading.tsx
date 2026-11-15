export function SectionHeading({ id, title, path }: { id: string; title: string; path: string }) {
  return (
    <div className="mb-5 flex flex-wrap items-baseline gap-x-4 gap-y-1">
      <h2 id={id} className="text-xl font-bold text-fg sm:text-2xl">
        <span aria-hidden className="mr-2 text-primary">$</span>
        {title}
      </h2>
      <span className="text-sm text-muted" aria-hidden>{path}</span>
    </div>
  );
}
