type MarkProps = {
  className?: string;
  tone?: "duo" | "solid";
};

export function Mark({ className = "", tone = "duo" }: MarkProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      aria-hidden
      focusable="false"
      fill="none"
    >
      <path
        d="M31.4 13.4a13.4 13.4 0 1 0 0 13.2"
        stroke="var(--foreground)"
        strokeWidth="4.6"
        strokeLinecap="round"
      />
      <path
        d="M22.6 12.6v9.2a4.7 4.7 0 0 1-8.8 2.3"
        stroke={tone === "duo" ? "var(--accent)" : "var(--foreground)"}
        strokeWidth={tone === "duo" ? 5 : 4.6}
        strokeLinecap="round"
      />
    </svg>
  );
}
