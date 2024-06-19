import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./vendor/laravel/jetstream/**/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary_theme: "#f5f5f5",
                secondary_theme: "#94a3b8",
                secondary_button: "#cbd5e1",
                text_color: "#565360",
                label_color: "#908E9B",
                disabled_color: "#E1DFE9",
                background_color: "#F9F7F7",
                button_color: "#E63946",
                primary_color: "#DBE2EF",
                secondary_color: "#3F72AF",
                tertiary_color: "#112D4E",
                text_background: "#161D1D",
                text_button: "#FFFFFF",
                text_primary: "#FFFFFF",
                text_secondary: "#FFFFFF",
                text_tertiary: "#FFFFFF",
                error_color: "#FFDAD8",
                text_error: "#3B080C",
                outline_color: "#6F7979",
            },
        },
    },

    plugins: [forms, typography],
};
