export type IProps = {};

export type IPropsSignIn = {
  username: string;
  password: string;
};

export type UserTypeSignUp = {
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  phoneNumber: string;
  address: string;
  termsAccepted: boolean;
};

interface Category {
  name: string;
}
interface Subcategory {
  name: string;
}

export type IProduct = {
  _id: string;
  category: Category;
  subcategory: Subcategory;
  name: string;
  price: number;
  quantity: number;
  brand: string;
  description: string;
  thumbnail?: string;
  images: string[];
  createdAt: string;
  updatedAt?: string;
  slugname?: string;
  __v?: number;
};

export type IUserType = {
  _id: string;
  firstname: string;
  lastname: string;
  username: string;
  phoneNumber: string;
  address: string;
  role?: string;
  createdAt?: string;
  updatedAt?: string;
};
