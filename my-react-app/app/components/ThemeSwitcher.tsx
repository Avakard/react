import { useState, useEffect } from "react";
import { data } from "react-router";

export default function ThemeSwitcher() {
    const [isDark, setIsDark] = useState(() => {
        if (typeof window !== "undefined" && localStorage.getItem("theme")) {
        return localStorage.getItem("theme") === "dark";
        }
    return false;
    })
    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
        else {                
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "ligth");
        }

    }, [isDark]
);

    
    return (
        <button onClick={() => setIsDark(!isDark)}
        className={"p-2 bg-gray-200 dark:bg-gray-700 dark:text-white rounded dark:hover:bg-gray-800 transition-colors animate-pulse"}>
            {isDark ? "Светлая тема" : "Темная тема"}
        </button>
    )
}