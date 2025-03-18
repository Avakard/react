/** @type {import('tailwindcss').Config} */
module.exports={
    content: ["./**/*.{tsx,ts,jsx,js}"],
    darkMode: "class",
    theme: {
        extend:{
            animation:{
                "fadeIn": "0.5s ease-in-out",
                "pulse": "pulse 1.5s ease-in-out infinite"
            },
            keyframes:{
                fadeIn:{
                    "0%":{ opacity: "0",transform: "translateY(10px)"},
                    "100%":{ opacity: "1",transform: "translateY(0)"},
                }
            }
        }
    }
}