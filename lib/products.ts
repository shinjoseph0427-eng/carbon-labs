export type Product = {
  handle: string;
  name: string;
  abbr: string;
  category: "Single Peptides" | "Blends" | "Accessories";
  tagline: string;
  description: string;
  purity: string;
  sequence?: string;
  formula?: string;
  molWeight?: string;
  cas?: string;
  /** vial accent color used by the SVG illustration */
  tone: string;
  variants: { size: string; price: number }[];
  featured?: boolean;
};

export const products: Product[] = [
  {
    handle: "bpc-157",
    name: "BPC-157",
    abbr: "BPC",
    category: "Single Peptides",
    tagline: "Body Protection Compound · 5mg",
    description:
      "A synthetic 15–amino-acid peptide derived from a sequence found in gastric juice. Widely studied in vitro for its role in cellular signaling and tissue-model research.",
    purity: "99.4%",
    sequence: "Gly-Glu-Pro-Pro-Pro-Gly-Lys-Pro-Ala-Asp-Asp-Ala-Gly-Leu-Val",
    formula: "C62H98N16O22",
    molWeight: "1419.5 g/mol",
    cas: "137525-51-0",
    tone: "#1f6f5c",
    variants: [
      { size: "5mg", price: 42 },
      { size: "10mg", price: 72 },
    ],
    featured: true,
  },
  {
    handle: "tb-500",
    name: "TB-500",
    abbr: "TB",
    category: "Single Peptides",
    tagline: "Thymosin Beta-4 Fragment · 5mg",
    description:
      "A synthetic fragment of the naturally occurring protein Thymosin Beta-4. A common reference compound in actin-regulation and cell-migration laboratory models.",
    purity: "99.1%",
    sequence: "Ac-SDKP… (Thymosin β4 active region)",
    formula: "C212H350N56O78S",
    molWeight: "4963.4 g/mol",
    cas: "77591-33-4",
    tone: "#2f6f86",
    variants: [
      { size: "5mg", price: 48 },
      { size: "10mg", price: 84 },
    ],
    featured: true,
  },
  {
    handle: "ipamorelin",
    name: "Ipamorelin",
    abbr: "IPA",
    category: "Single Peptides",
    tagline: "Growth Hormone Secretagogue · 5mg",
    description:
      "A selective pentapeptide secretagogue used extensively in receptor-binding and endocrine pathway research models.",
    purity: "99.6%",
    sequence: "Aib-His-D-2-Nal-D-Phe-Lys-NH2",
    formula: "C38H49N9O5",
    molWeight: "711.9 g/mol",
    cas: "170851-70-4",
    tone: "#6a5acd",
    variants: [
      { size: "5mg", price: 39 },
      { size: "10mg", price: 68 },
    ],
    featured: true,
  },
  {
    handle: "nad-plus",
    name: "NAD+",
    abbr: "NAD",
    category: "Single Peptides",
    tagline: "Nicotinamide Adenine Dinucleotide · 100mg",
    description:
      "A coenzyme central to redox reactions and cellular metabolism. A staple reference compound in mitochondrial and aging research models.",
    purity: "99.2%",
    formula: "C21H27N7O14P2",
    molWeight: "663.4 g/mol",
    cas: "53-84-9",
    tone: "#c98a2b",
    variants: [
      { size: "100mg", price: 64 },
      { size: "500mg", price: 240 },
    ],
    featured: true,
  },
  {
    handle: "dsip",
    name: "DSIP",
    abbr: "DSIP",
    category: "Single Peptides",
    tagline: "Delta Sleep-Inducing Peptide · 5mg",
    description:
      "A nonapeptide first isolated from cerebral venous blood. Used as a reference compound in neuropeptide and circadian-model research.",
    purity: "99.0%",
    sequence: "Trp-Ala-Gly-Gly-Asp-Ala-Ser-Gly-Glu",
    formula: "C35H48N10O15",
    molWeight: "848.8 g/mol",
    cas: "62568-57-4",
    tone: "#3b6fb0",
    variants: [
      { size: "5mg", price: 44 },
      { size: "10mg", price: 78 },
    ],
  },
  {
    handle: "ghk-cu",
    name: "GHK-Cu",
    abbr: "GHK",
    category: "Single Peptides",
    tagline: "Copper Peptide · 50mg",
    description:
      "A naturally occurring copper-binding tripeptide. Frequently referenced in extracellular-matrix and fibroblast laboratory models.",
    purity: "99.3%",
    sequence: "Gly-His-Lys · Cu²⁺",
    formula: "C14H24N6O4·Cu",
    molWeight: "403.9 g/mol",
    cas: "89030-95-5",
    tone: "#2aa39a",
    variants: [
      { size: "50mg", price: 52 },
      { size: "100mg", price: 92 },
    ],
  },
  {
    handle: "recovery-blend",
    name: "Recovery Blend",
    abbr: "RB",
    category: "Blends",
    tagline: "BPC-157 + TB-500 · 10mg",
    description:
      "A pre-combined research blend pairing BPC-157 and TB-500 in a single lyophilized vial for tissue-model comparative studies.",
    purity: "99.0%+",
    tone: "#1f6f5c",
    variants: [
      { size: "10mg", price: 96 },
    ],
    featured: true,
  },
  {
    handle: "amino-h2o",
    name: "Amino H₂O",
    abbr: "H2O",
    category: "Accessories",
    tagline: "Bacteriostatic Water · 30mL",
    description:
      "Sterile bacteriostatic water (0.9% benzyl alcohol) for laboratory reconstitution of lyophilized research compounds.",
    purity: "USP grade",
    tone: "#9aa6b2",
    variants: [
      { size: "30mL", price: 14 },
      { size: "3 × 30mL", price: 36 },
    ],
  },
];

export const getProduct = (handle: string) =>
  products.find((p) => p.handle === handle);

export const fromPrice = (p: Product) =>
  Math.min(...p.variants.map((v) => v.price));
