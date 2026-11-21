import { GeistSans } from "geist/font/sans";
import {
  Cormorant_Garamond,
  Montserrat,
} from "next/font/google";
import type { FontFamilyKey } from "~/lib/data";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], display: "swap", variable: "--font-cormorant", weight: ["300", "400", "500", "600", "700"] });
const montserrat = Montserrat({ subsets: ["latin"], display: "swap", variable: "--font-montserrat" });

type FontEntry = { loader: { variable: string; className: string }; cssVar: string };

export const fontCatalog: Partial<Record<FontFamilyKey, FontEntry>> = {
  geist: { loader: GeistSans, cssVar: "var(--font-geist-sans)" },
  cormorant: { loader: cormorant, cssVar: "var(--font-cormorant)" },
  montserrat: { loader: montserrat, cssVar: "var(--font-montserrat)" },
};

export const builtFonts: { sansFamily: FontFamilyKey; headingFamily: FontFamilyKey } = {
  sansFamily: "montserrat",
  headingFamily: "cormorant",
};

export const allFontVariables = Object.values(fontCatalog)
  .filter((entry): entry is FontEntry => Boolean(entry))
  .map((entry) => entry.loader.variable)
  .join(" ");
