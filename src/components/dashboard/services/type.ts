export interface UserType {
  _id: string;
  firstname: string;
  lastname: string;
  username: string;
  phoneNumber: string;
  address: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface RatingType {
  rate: number;
  count: number;
}

export interface ProductType {
  _id: string;
  rating: RatingType;
  category: string;
  subcategory: string;
  name: string;
  price: number;
  quantity: number;
  brand: string;
  description: string;
  thumbnail: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
  slugname: string;
  __v: number;
}

export interface ProductInOrderType {
  product: ProductType;
  count: number;
  _id: string;
}

export interface OrderIdType {
  _id: string;
  user: UserType;
  products: ProductInOrderType[];
  totalPrice: number;
  deliveryDate: string;
  deliveryStatus: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
