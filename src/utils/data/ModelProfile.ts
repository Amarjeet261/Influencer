  export interface ModelInfo {
    name: string;
    imageSrc: string;
    stats: {
      label: string;
      value: string;
    }[];
  }

  export const modelData: ModelInfo = {
    name: "AKSHITA RAWAT",
    imageSrc: "/akshita.jpg",
    stats: [
      { label: "HEIGHT", value: `5'2"` },
      { label: "SHOES", value: "US 5.5" },
      { label: "BUST", value: "34 Inch" },
      { label: "DRESS", value: "US 4 - US 6" },
      { label: "WAIST", value: "28.5 Inch" },
      { label: "HAIR", value: "DARK BROWN" },
      { label: "HIPS", value: "35" },
      { label: "EYES", value: "BROWN" },
    ],
  };