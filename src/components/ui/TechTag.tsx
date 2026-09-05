type TechTagProps = {
  children: string;
};

export function TechTag({ children }: TechTagProps) {
  return (
    <span className="rounded-full lvl-2 border px-3 py-1 text-xs text-[var(--muted)]">
      {children}
    </span>
  );
}
