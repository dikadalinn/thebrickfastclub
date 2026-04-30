export type Work = {
  _id: string;
  title: string;
  slug: string;
  location: string;
  year: string;
  description: string;
  galleryImages: string[];
  thumbnail?: string;
  order?: number;
};