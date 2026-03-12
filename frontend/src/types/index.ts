export type ProductType = {
  _id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  image: { url: string; filename: string };
  country: string;
  images: [{ url: string; filename: string }];
};
export type ProductCardType = {
  _id: string;
  title: string;
  price: number;
  location: string;
  image: { url: string; filename: string };
};
