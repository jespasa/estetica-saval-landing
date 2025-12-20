import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      // Definimos los Design Tokens basados en el logo de Estética Saval
      colors: {
        brand: {
          primary: "#7A5448", // Marrón cálido del texto "Saval" (Elegancia y tierra)
          secondary: "#F2D0C9", // Rosa empolvado de la mancha del logo (Suavidad)
          accent: "#D9BBAE", // Tono intermedio para bordes o detalles
          dark: "#4A322C", // Marrón oscuro para máxima legibilidad en títulos
          muted: "#9C847E", // Grisáceo cálido para textos secundarios
        },
        estetica: {
          pink: "#FBE9E5", // Rosa muy sutil para fondos de secciones
          soft: "#FFF9F8", // Blanco con matiz rosado para evitar el blanco puro
        },
      },
      // Tipografías
      fontFamily: {
        // 'Playfair Display' para ese toque "High-End" de estética
        display: ["Playfair Display", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      spacing: {
        "18": "4.5rem",
      },
    },
  },
};
