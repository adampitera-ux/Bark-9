const S = { fill: "none", stroke: "currentColor", strokeWidth: 2.6, strokeLinecap: "round", strokeLinejoin: "round" } as const;

export function ProgramIcon({ k, className }: { k: string; className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} {...S} aria-hidden>
      {k === "puppy" && (<><circle cx="32" cy="34" r="18" /><path d="M20 20 L14 8 L26 14 M44 20 L50 8 L38 14" /><path d="M26 34h0M38 34h0M28 42q4 4 8 0" /></>)}
      {k === "obedience" && (<><path d="M16 50V28l16-16 16 16v22z" /><path d="M26 50V38h12v12" /></>)}
      {k === "protection" && (<><path d="M32 6l20 8v16c0 13-9 22-20 28C21 52 12 43 12 30V14z" /><path d="M23 31l7 7 12-14" /></>)}
      {k === "behavior" && (<><circle cx="32" cy="32" r="8" /><circle cx="32" cy="32" r="18" /><path d="M32 6v6M32 52v6M6 32h6M52 32h6" /></>)}
    </svg>
  );
}

export function Logo() {
  return <img className="logo" src="/img/wordmark.png" alt="BARK9 Training" width={900} height={211} />;
}
