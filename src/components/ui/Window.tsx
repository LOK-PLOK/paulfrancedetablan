export function Window({
  path,
  tag,
  children,
  className = "",
}: {
  path: string;
  tag?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden rounded-md border border-line bg-surface ${className}`}>
      <div className="flex h-8 items-center justify-between gap-3 border-b border-line bg-bg px-3.5 text-xs">
        <span className="truncate text-fg-2">{path}</span>
        {tag ? <span className="shrink-0 text-primary">{tag}</span> : null}
      </div>
      {children}
    </div>
  );
}
