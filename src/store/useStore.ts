import create from "zustand";
import { persist } from "zustand/middleware";

interface StoreState {
  language: string;
  direction: "ltr" | "rtl";
  setLanguage: (language: string) => void;
}

const useStore = create<StoreState>()(
  persist(
    (set) => ({
      language: "fa",
      direction: "rtl",
      setLanguage: (language: string) =>
        set(() => ({
          language,
          direction: language === "fa" ? "rtl" : "ltr",
        })),
    }),
    {
      name: "language",
    }
  )
);

export default useStore;
