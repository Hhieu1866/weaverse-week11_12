import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserPreferences {
  theme: "light" | "dark";
  currency: "GBP" | "USD" | "EUR";
  language: "en" | "vi";
  newsletterSubscribed: boolean;
  setTheme: (theme: "light" | "dark") => void;
  setCurrency: (currency: "GBP" | "USD" | "EUR") => void;
  setLanguage: (language: "en" | "vi") => void;
  setNewsletterSubscribed: (subscribed: boolean) => void;
}

export const usePreferencesStore = create<UserPreferences>()(
  persist(
    (set) => ({
      theme: "light",
      currency: "GBP",
      language: "en",
      newsletterSubscribed: false,
      setTheme: (theme) => set({ theme }),
      setCurrency: (currency) => set({ currency }),
      setLanguage: (language) => set({ language }),
      setNewsletterSubscribed: (newsletterSubscribed) => set({ newsletterSubscribed }),
    }),
    {
      name: "user-preferences-storage",
    }
  )
);
