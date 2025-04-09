"use client"
import useLocalStorage from "@/Hooks/useLocalStorageTate"
import { createContext, useContext, useEffect, useState } from "react"

const DarkModeContext = createContext()

export default function DarkModeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useLocalStorage("isDarkMode", false)
    const [hasMounted, setHasMounted] = useState(false)

    useEffect(() => {
        setHasMounted(true)

        if (typeof window !== 'undefined') {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
            setIsDarkMode(prefersDark)
        }
    }, [])

    useEffect(() => {
        if (!hasMounted) return

        if (isDarkMode) {
            document.documentElement.classList.add("dark-mode")
            document.documentElement.classList.remove("light-mode")
        } else {
            document.documentElement.classList.add("light-mode")
            document.documentElement.classList.remove("dark-mode")
        }
    }, [isDarkMode, hasMounted])

    const toggleDarkMode = () => setIsDarkMode((prev) => !prev)

    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
}

export function useDarkMode() {
    const context = useContext(DarkModeContext)
    if (context === undefined) throw new Error("useDarkMode must be used within DarkModeProvider")
    return context
}