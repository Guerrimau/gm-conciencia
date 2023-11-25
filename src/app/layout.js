import { Raleway } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { NavbarSection } from "@/components";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Grupo Medico Consciencia",
  description:
    "Descubre el apoyo integral para tu salud mental en Grupo Médico Consciencia, con psiquiatras especializados en Apodaca. Ofrecemos terapia individual y de pareja, evaluación psiquiátrica comprensiva y atención de primera vez y seguimiento. Tratamos depresión, ansiedad, trastorno bipolar y más. ¡Inicia tu viaje hacia el bienestar emocional hoy!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="8PrZVIDdbfgn5BLDzkM0lrFeLJF3mfZVjZNiZK7gQPU"
        />
      </head>
      <body
        className={raleway.className}
        style={{ backgroundColor: "#f8f6f5" }}
      >
        <Providers>
          <NavbarSection />
          {children}
        </Providers>
      </body>
    </html>
  );
}
