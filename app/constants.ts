//PHOTOS FOR SECOND SECTION
import image1 from "../public/SecondSectionPhotos/secondSection1.png";
import image2 from "../public/SecondSectionPhotos/secondSection2.png";
import image3 from "../public/SecondSectionPhotos/secondSection3.png";
import image4 from "../public/SecondSectionPhotos/secondSection4.png";

//PHOTOS FOR HORIZONTAL SCROLL CAROUSEL
import HorizontalPhoto1 from "../public/HorizontalScrollCarouselPhotos/HorizontalScrollCarousel1.jpeg";
import HorizontalPhoto2 from "../public/HorizontalScrollCarouselPhotos/HorizontalScrollCarousel2.jpeg";
import HorizontalPhoto3 from "../public/HorizontalScrollCarouselPhotos/HorizontalScrollCarousel3.jpeg";
import HorizontalPhoto4 from "../public/HorizontalScrollCarouselPhotos/HorizontalScrollCarousel4.jpeg";
import HorizontalPhoto5 from "../public/HorizontalScrollCarouselPhotos/HorizontalScrollCarousel5.jpeg";
//ICONS FOR SOCIALS
import { FaInstagram, FaFacebook, FaDribbble, FaYoutube } from "react-icons/fa";

export const trending = [
  {
    id: 1,
    artist: "Anna Taylor",
    image: image1,
    title: "Whispers of Nature",
  },
  {
    id: 2,
    artist: "Michael Brown",
    image: image2,
    title: "Urban Symphony",
  },
  {
    id: 3,
    artist: "Sophia Carter",
    image: image3,
    title: "Shadows and Light",
  },
  {
    id: 4,
    artist: "Liam White",
    image: image4,
    title: "Abstract Dreams",
  },
];

export const CARDS = [
  {
    url: HorizontalPhoto1,
    title: "Whispering Peaks",
    author: "Sophie Meadows",
    id: 1,
  },
  {
    url: HorizontalPhoto2,
    title: "Futuristic Reverie",
    author: "Liam Carter",
    id: 2,
  },
  {
    url: HorizontalPhoto3,
    title: "Void on Canvas",
    author: "Amelia Hayes",
    id: 3,
  },
  {
    url: HorizontalPhoto4,
    title: "Tattooed Creator",
    author: "Ethan Blackwood",
    id: 4,
  },
  {
    url: HorizontalPhoto5,
    title: "Abstract Wall Encounter",
    author: "Olivia Harper",
    id: 5,
  },
];

export const FOOTERLINKS = [
  {
    name: "© 2024 Loom. All rights reserved.",
    isUnderlined: false,
  },
  {
    name: "Privacy Policy",
    isUnderlined: true,
  },
  {
    name: "Terms of Service",
    isUnderlined: true,
  },
  {
    name: "Cookie Settings",
    isUnderlined: true,
  },
];

export const SOCIALS = [
  {
    icon: FaInstagram,
  },
  {
    icon: FaFacebook,
  },
  {
    icon: FaDribbble,
  },
  {
    icon: FaYoutube,
  },
];

export const NAVITEMS = [
  { href: "#trending", label: "Trending" },
  { href: "#contact", label: "Contact Us" },
  { href: "BenefitFirst", label: "Join Us" },
];
