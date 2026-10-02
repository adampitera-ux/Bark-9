"use client";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Ctx = { entered: boolean; enter: () => void };
const C = createContext<Ctx>({ entered: false, enter: () => {} });
export const useMode = () => useContext(C);

export function ModeProvider({ children }: { children: ReactNode }) {
  const [entered, setEntered] = useState(false);
  useEffect(() => {
    if (new URLSearchParams(window.location.search).has("skip")) setEntered(true); // eslint-disable-line react-hooks/set-state-in-effect
  }, []);
  useEffect(() => {
    document.body.style.overflow = entered ? "" : "hidden";
  }, [entered]);
  return <C.Provider value={{ entered, enter: () => setEntered(true) }}>{children}</C.Provider>;
}
