export function Paw({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="currentColor" aria-hidden>
      <ellipse cx="32" cy="42" rx="14" ry="11" />
      <ellipse cx="14" cy="28" rx="6" ry="8" transform="rotate(-20 14 28)" />
      <ellipse cx="26" cy="15" rx="6" ry="9" transform="rotate(-6 26 15)" />
      <ellipse cx="40" cy="15" rx="6" ry="9" transform="rotate(6 40 15)" />
      <ellipse cx="52" cy="28" rx="6" ry="8" transform="rotate(20 52 28)" />
    </svg>
  );
}

const S = { fill: "none", stroke: "currentColor", strokeWidth: 2.6, strokeLinecap: "round", strokeLinejoin: "round" } as const;

export function ProgramIcon({ k, className }: { k: string; className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} {...S} aria-hidden>
      {k === "foundations" && (<><circle cx="32" cy="34" r="18" /><path d="M20 20 L14 8 L26 14 M44 20 L50 8 L38 14" /><path d="M26 34h0M38 34h0M28 42q4 4 8 0" /></>)}
      {k === "obedience" && (<><path d="M16 50V28l16-16 16 16v22z" /><path d="M26 50V38h12v12" /></>)}
      {k === "agility" && (<><path d="M10 54V14M54 54V14" /><path d="M10 22h44M10 34h44" strokeDasharray="6 5" /><path d="M24 54c4-14 12-14 16 0" /></>)}
      {k === "reactivity" && (<><circle cx="32" cy="32" r="8" /><circle cx="32" cy="32" r="18" /><path d="M32 6v6M32 52v6M6 32h6M52 32h6" /></>)}
      {k === "recall" && (<><path d="M12 32h34M34 20l14 12-14 12" /><path d="M8 14v36" /></>)}
      {k === "board" && (<><path d="M8 50h48M12 50V26l20-14 20 14v24" /><path d="M26 50V36h12v14" /></>)}
    </svg>
  );
}

export function Logo() {
  return (
    <span className="logo">
      <Paw />
      <span>
        BARK<b>9</b>
      </span>
    </span>
  );
}
