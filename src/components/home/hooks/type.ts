export interface ProductsType {
  rating: Rating;
  _id: string;
  category: Category;
  subcategory: Subcategory;
  name: string;
  price: number;
  quantity: number;
  brand: string;
  description: string;
  thumbnail: string;
  images?: string[] | undefined | any;
  createdAt: string;
  updatedAt: string;
  slugname: string;
}
export interface Rating {
  rate: number;
  count: number;
}
export interface Category {
  _id: string;
  name: string;
  icon: string;
  createdAt: string;
  updatedAt: string;
  slugname: string;
  __v: number;
}
export interface Subcategory {
  _id: string;
  category: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  slugname: string;
  __v: number;
}
