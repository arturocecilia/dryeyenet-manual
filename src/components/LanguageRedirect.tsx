import { useEffect } from "react";

export default function LanguageRedirect() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.pathname !== "/") return;
    if (localStorage.getItem("i18n-redirected")) return;

    const langs = navigator.languages || [navigator.language];
    const prefers = langs.map((l) => l.toLowerCase());

    let target: string | null = null;

    if (prefers.some((l) => l.startsWith("es"))) {
      target = "/es/";
    } else if (prefers.some((l) => l.startsWith("de"))) {
      target = "/de/";
    }

    // Mark as processed so we never run again
    localStorage.setItem("i18n-redirected", "true");

    // Only redirect if a non-default language is detected
    if (target) {
      window.location.replace(target);
    }
  }, []);

  return null;
}
