// Original pixel-block decoration (no third-party artwork).
const pattern = [
  [0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0],
  [1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
];

export function PixelStrip() {
  return (
    <div aria-hidden className="mx-auto flex w-full max-w-6xl flex-col gap-1 overflow-hidden px-5 py-2 opacity-70">
      {pattern.map((row, r) => (
        <div key={r} className="flex gap-1">
          {row.map((on, i) => (
            <span
              key={i}
              className={`h-2 flex-1 ${on ? (i % 3 === 0 ? "bg-primary" : "bg-primary-dim") : "bg-transparent"}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
