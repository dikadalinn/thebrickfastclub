import type { Work } from "@/lib/sanity/types";

const imgImage1 = "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80";
const imgImage2 = "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1920&q=80";
const imgImage3 = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80";
const imgImage4 = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80";
const imgImage5 = "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&q=80";

export const STATIC_WORKS: Work[] = [
  {
    _id: "work-green-cove",
    title: "Kitchen Interior",
    slug: "green-cove",
    location: "Grand Wisata, Bekasi",
    year: "2022",
    description:
      "Design secara keseluruhan ingin konsep open space agar ruangan tidak terlihat sempit, di lain sisi konsep open space juga menjadi jembatan antar ruang yaitu dapur dan juga teras belakang.",
    galleryImages: [imgImage1, imgImage2, imgImage3],
    thumbnail: imgImage1,
    order: 1,
  },
  {
    _id: "work-sienna-grove",
    title: "Mr. A Bedroom Interior",
    slug: "sienna-grove",
    location: "Jakarta Selatan",
    year: "2023",
    description:
      "Sienna Grove menghadirkan suasana ruang tidur yang hangat dan tenang melalui permainan material alami, tone lembut, dan komposisi ruang yang bersih namun tetap nyaman untuk digunakan sehari-hari.",
    galleryImages: [imgImage2, imgImage3, imgImage4],
    thumbnail: imgImage2,
    order: 2,
  },
  {
    _id: "work-villa-serenity",
    title: "Villa Serenity",
    slug: "villa-serenity",
    location: "Bandung, Jawa Barat",
    year: "2024",
    description:
      "Villa Serenity dirancang untuk menghadirkan pengalaman tinggal yang tenang dan elegan, dengan fokus pada pencahayaan alami, keterbukaan ruang, serta hubungan yang kuat dengan lanskap sekitar.",
    galleryImages: [imgImage3, imgImage4, imgImage5],
    thumbnail: imgImage3,
    order: 3,
  },
  {
    _id: "work-midnight-haven",
    title: "Midnight Haven",
    slug: "midnight-haven",
    location: "BSD, Tangerang",
    year: "2022",
    description:
      "Midnight Haven menonjolkan karakter ruang yang modern dan refined, dengan perpaduan warna gelap, garis tegas, dan tata ruang yang efisien untuk kebutuhan hidup urban.",
    galleryImages: [imgImage4, imgImage5, imgImage1],
    thumbnail: imgImage4,
    order: 4,
  },
  {
    _id: "work-solace-villa",
    title: "Solace Villa",
    slug: "solace-villa",
    location: "Ubud, Bali",
    year: "2024",
    description:
      "Solace Villa diciptakan sebagai tempat beristirahat yang intimate, memadukan arsitektur tropis modern dengan pengalaman ruang yang menenangkan dan menyatu dengan alam.",
    galleryImages: [imgImage5, imgImage1, imgImage2],
    thumbnail: imgImage5,
    order: 5,
  },
];
