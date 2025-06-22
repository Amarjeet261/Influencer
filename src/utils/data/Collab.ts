//  interface
export interface BrandCollab {
  name: string;
  logoSrc: string;
  textColor?: string;
  bold?: boolean;
  underline?: boolean;
}

// const data
export const collabData: BrandCollab[] = [
  { name: "BAHU PALACE", logoSrc: "/logo-1.png", underline: true },
  { name: "Beauty Talk", logoSrc: "/logo-2.png", bold: true, underline: true },
  { name: "Evanthe", logoSrc: "/logo-3.png" },
  { name: "Ever Beauty", logoSrc: "/logo-4.png", textColor: "text-purple-700", bold: true },
  { name: "GAYRAA", logoSrc: "/logo-5.png", bold: true, underline: true },
  { name: "KOSME", logoSrc: "/logo-6.png", bold: true, textColor: "text-blue-800", underline: true },
  { name: "Laviscart", logoSrc: "/logo-7.png", textColor: "text-purple-600" },
  { name: "STYLE TALK", logoSrc: "/logo-8.png", bold: true, underline: true },
  { name: "tira", logoSrc: "/logo-9.png", textColor: "text-red-600" },
  { name: "Vaku Luxos", logoSrc: "/logo-10.png", bold: true, underline: true },
];