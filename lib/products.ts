export type Spec = { label: string; value: string };

export type Product = {
  handle: string;
  name: string;
  abbr: string;
  /** filter group */
  category: "Peptides" | "Compounds" | "Blends";
  /** small line under the name, e.g. "Premium Research Peptide" */
  subtitle: string;
  productType: string;
  purity: string;
  /** tailwind bg class for the card / image area */
  card: string;
  /** vial accent color for the SVG fallback */
  tone: string;
  /** real product photo (transparent PNG); falls back to Vial SVG when absent */
  image?: string;
  description: string;
  applications: string[];
  blend?: { items: { name: string; amount: string }[]; total: string };
  variants: { size: string; price: number }[];
  featured?: boolean;
};

/** Shared boilerplate copy shown on every product page. */
export const POLICY = {
  testing:
    "Carbon Labs products are third-party tested. Certificates of Analysis are available directly on the product listing when completed. If a COA is not currently shown, it is in progress.",
  storage:
    "Store lyophilized vials in a cool, dry place away from heat, moisture, and direct sunlight. Refer to the product label for any specific storage instructions.",
  sales:
    "All Carbon Labs sales are final. Due to the nature of research products, returns are not accepted once an order has been processed or shipped.",
  disclaimer:
    "This product is sold strictly for laboratory, analytical, and scientific research purposes only. It is not intended for human consumption, veterinary use, clinical use, therapeutic use, diagnosis, treatment, cure, or prevention of any disease.",
};

/** Spec rows are identical except for Product Type — build them per product. */
export const buildSpecs = (productType: string): Spec[] => [
  { label: "Product Type", value: productType },
  { label: "Form", value: "Lyophilized powder" },
  { label: "Testing", value: "Third-party tested" },
  { label: "Documentation", value: "COA available when completed" },
  { label: "Use", value: "Laboratory research only" },
  { label: "Consumption", value: "Not for human or veterinary consumption" },
];

export const products: Product[] = [
  {
    handle: "glp-3-rt",
    name: "GLP-3 RT",
    abbr: "GLP",
    category: "Peptides",
    subtitle: "Premium Research Peptide",
    productType: "Research peptide",
    purity: "99%+",
    card: "bg-card-ice",
    tone: "#3b6fb0",
    image: "/products/glp-3rt.png",
    description:
      "GLP-3 RT, also known as Retatrutide, is a research peptide studied for activity across GLP-1, GIP, and glucagon receptor pathways. It is commonly used in laboratory research involving receptor signaling, metabolic pathway models, glucose-related signaling, and energy balance research.",
    applications: [
      "GLP-1 receptor signaling",
      "GIP receptor signaling",
      "Glucagon receptor pathways",
      "Metabolic signaling models",
      "Energy balance research",
      "Glucose-related pathway analysis",
    ],
    variants: [{ size: "1mg", price: 76.0 }],
    featured: true,
  },
  {
    handle: "igf-1-lr3",
    name: "IGF-1 LR3",
    abbr: "IGF",
    category: "Peptides",
    subtitle: "Premium Research Peptide",
    productType: "Research peptide",
    purity: "99%+",
    card: "bg-card-lavender",
    tone: "#6a5acd",
    image: "/products/igf-1-lr3.png",
    description:
      "IGF-1 LR3 is a long-chain analog of insulin-like growth factor 1, modified with an extended N-terminal sequence and an arginine substitution. It is studied in laboratory research involving IGF-1 receptor signaling, cellular growth pathways, protein synthesis models, and metabolic activity.",
    applications: [
      "IGF-1 receptor signaling",
      "Cellular growth pathway research",
      "Protein synthesis models",
      "Metabolic activity research",
      "Growth-factor pathway analysis",
    ],
    variants: [{ size: "1mg", price: 79.99 }],
    featured: true,
  },
  {
    handle: "ghk-cu",
    name: "GHK-Cu",
    abbr: "GHK",
    category: "Peptides",
    subtitle: "Premium Research Peptide",
    productType: "Research peptide",
    purity: "99%+",
    card: "bg-card-sage",
    tone: "#2aa39a",
    image: "/products/ghk-cu.png",
    description:
      "GHK-Cu is a naturally occurring copper-binding tripeptide composed of glycine, histidine, and lysine complexed with copper. It is studied in laboratory and preclinical research for its role in extracellular matrix activity, tissue remodeling models, collagen regulation, and cellular repair signaling.",
    applications: [
      "Extracellular matrix signaling",
      "Collagen regulation pathways",
      "Tissue remodeling models",
      "Cellular repair mechanisms",
      "Copper-peptide interactions",
    ],
    variants: [{ size: "100mg", price: 57.0 }],
    featured: true,
  },
  {
    handle: "glutathione",
    name: "Glutathione",
    abbr: "GSH",
    category: "Compounds",
    subtitle: "Premium Research Compound",
    productType: "Research compound",
    purity: "99%+",
    card: "bg-card-mint",
    tone: "#2f8f6f",
    image: "/products/glutathione.png",
    description:
      "Glutathione is a naturally occurring tripeptide composed of glutamine, cysteine, and glycine. It is studied in laboratory research involving redox balance, oxidative stress models, cellular defense pathways, and antioxidant-related activity.",
    applications: [
      "Redox balance",
      "Oxidative stress models",
      "Cellular defense pathways",
      "Antioxidant-related activity",
      "Metabolic and cellular signaling research",
    ],
    variants: [{ size: "1500mg", price: 74.0 }],
    featured: true,
  },
  {
    handle: "klow",
    name: "KLOW",
    abbr: "KLOW",
    category: "Blends",
    subtitle: "Premium Multi-Peptide Research Blend",
    productType: "Multi-peptide research blend",
    purity: "89%",
    card: "bg-card-mauve",
    tone: "#a05a9c",
    image: "/products/klow.png",
    description:
      "KLOW is a multi-peptide research blend containing BPC-157, TB-500, KPV, and GHK-Cu. This formulation is designed for laboratory research involving peptide signaling, extracellular matrix activity, tissue remodeling models, inflammatory-response pathways, and cellular repair mechanisms.",
    blend: {
      items: [
        { name: "BPC-157", amount: "10mg" },
        { name: "TB-500", amount: "10mg" },
        { name: "KPV", amount: "10mg" },
        { name: "GHK-Cu", amount: "50mg" },
      ],
      total: "80mg",
    },
    applications: [
      "Peptide signaling pathways",
      "Extracellular matrix activity",
      "Tissue remodeling models",
      "Inflammatory-response pathways",
      "Cellular repair mechanisms",
      "Multi-peptide interaction research",
    ],
    variants: [{ size: "80mg", price: 129.99 }],
    featured: true,
  },
  {
    handle: "nad-plus",
    name: "NAD+",
    abbr: "NAD",
    category: "Compounds",
    subtitle: "Premium Research Compound",
    productType: "Research compound",
    purity: "99%+",
    card: "bg-card-sand",
    tone: "#c98a2b",
    image: "/products/nad-plus.png",
    description:
      "NAD+ is a naturally occurring coenzyme involved in cellular redox reactions and energy-related signaling pathways. It is studied in laboratory research involving mitochondrial function, metabolic activity, oxidative stress models, and cellular aging pathways.",
    applications: [
      "Cellular redox reactions",
      "Mitochondrial function",
      "Metabolic activity",
      "Oxidative stress models",
      "Energy-related signaling pathways",
      "Cellular aging pathway research",
    ],
    variants: [{ size: "500mg", price: 76.0 }],
    featured: true,
  },
];

export const getProduct = (handle: string) =>
  products.find((p) => p.handle === handle);

export const fromPrice = (p: Product) =>
  Math.min(...p.variants.map((v) => v.price));
