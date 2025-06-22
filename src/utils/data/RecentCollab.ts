export interface CollaborationItem {
  imageSrc: string;
  alt: string;
  caption?: string;
  isGrayscale?: boolean;
}

export const collaborationData: CollaborationItem[] = [
  {
    imageSrc: "/collab-1.jpg",
    alt: "Swarnika Jewellers 1",
    caption: "Swarnika Jewellers",
  },
  {
    imageSrc: "/collab-2.jpg",
    alt: "Swarnika Jewellers 2",
    caption: "Content Shoot",
    isGrayscale: true,
  },
  {
    imageSrc: "/collab-3.jpg",
    alt: "Swarnika Jewellers 3",
    caption: "In collaboration with\nSwarnika Jewellers",
  },
];