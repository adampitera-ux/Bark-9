"use client";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Mode } from "@/data/content";

type Ctx = { mode: Mode; setMode: (m: Mode) => void; flip: () => void; entered: boolean; enter: (m: Mode) => void };
const C = createContext<Ctx>({ mode: "husky", setMode: () => {}, flip: () => {}, entered: false, enter: () => {} });
export const useMode = () => useContext(C);

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>("husky");
  const [entered, setEntered] = useState(false);
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    if (q.has("skip")) {
      /* eslint-disable react-hooks/set-state-in-effect */
      if (q.get("skip") === "shepherd") setMode("shepherd");
      setEntered(true);
      /* eslint-enable react-hooks/set-state-in-effect */
    }
  }, []);
  useEffect(() => {
    document.documentElement.dataset.mode = mode;
  }, [mode]);
  useEffect(() => {
    document.body.style.overflow = entered ? "" : "hidden";
  }, [entered]);
  return (
    <C.Provider
      value={{
        mode,
        setMode,
        flip: () => setMode((m) => (m === "husky" ? "shepherd" : "husky")),
        entered,
        enter: (m) => {
          setMode(m);
          setEntered(true);
        },
      }}
    >
      {children}
    </C.Provider>
  );
}
