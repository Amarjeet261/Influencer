export interface ContactInfo {
  phone: string;
  email: string;
  socials: {
    name: string;
    label: string;
    icon: string;
    link: string;
  }[];
  image: string;
}


export const contactData: ContactInfo = {
  phone: "+91 9319534358",
  email: "rawatakshita887@gmail.com",
  socials: [
    {
      name: "YouTube",
      label: "THE INDIAN DREAMER",
      icon: "/youtube-logo.png",
      link: "https://youtube.com/@akxhittaa?si=KFgxzZJfBOoUlGy-",
    },
    {
      name: "Instagram",
      label: "akx.putf",
      icon: "/insta-logo.png",
      link: "https://instagram.com/akx.putf",
    },
  ],
  image: "/akshita-contact.jpg",
};