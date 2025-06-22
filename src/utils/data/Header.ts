export interface HeaderData {
  roleLabel: string;
  firstName: string;
  lastName: string;
  roles: string[];
  imageSrc: string;
  imageAlt: string;
}

export const headerData: HeaderData = {
  roleLabel: "Influencer",
  firstName: "Akshita",
  lastName: "Rawat",
  roles: ["Content Creator", "Vlogger", "Influencer"],
  imageSrc: "/header-img.png",
  imageAlt: "Akshita Rawat",
};