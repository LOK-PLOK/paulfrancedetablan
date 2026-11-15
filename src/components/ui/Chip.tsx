export function Chip({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded border border-line bg-bg px-2 py-1 text-xs text-fg-2">{children}</li>
  );
}

export function ChipList({ items, label }: { items: string[]; label: string }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label={label}>
      {items.map((t) => (
        <Chip key={t}>{t}</Chip>
      ))}
    </ul>
  );
}
