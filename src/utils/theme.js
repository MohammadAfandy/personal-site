import { useEffect, useState } from "react"

// Reads/writes localStorage("theme"); falls back to prefers-color-scheme.
// Returns [theme, toggleTheme]; applying/removing the body.light/body.dark
// class on every state change keeps UI and the SSR script in sync.
export function useTheme() {
  const [theme, setTheme] = useState(() =>
    typeof window !== "undefined"
      ? localStorage.getItem("theme") ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      : "light"
  )
  useEffect(() => {
    document.body.classList.remove("light", "dark")
    document.body.classList.add(theme)
    localStorage.setItem("theme", theme)
  }, [theme])
  const toggleTheme = t => setTheme(t)
  return [theme, toggleTheme]
}
