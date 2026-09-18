export function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="h-px w-10 bg-primary" />
      <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
        {number} — {label}
      </span>
    </div>
  )
}
