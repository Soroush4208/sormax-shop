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
  category: Category ;
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

export type ICategoryTypes = {
  _id: string;
  name: string;
  icon: string;
  createdAt: string;
  updatedAt: string;
  slugname: string;
};
export type ISubCategoryTypes = {
  _id: string;
  category: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  slugname: string;
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

export type MobileMenuType = {
  mobileMoreAnchorEl: null | HTMLElement;
  isMobileMenuOpen: boolean;
  handleMobileMenuClose: () => void;
  handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
};

export type ProfileMenuType = {
  anchorEl: null | HTMLElement;
  isMenuOpen: boolean;
  handleMenuClose: () => void;
  handleLogout: () => void;
  handleMenuGoToDashboard: () => void;
};

export type OrderType = {
  length: number;
  _id: string;
  user: {
    username: string;
  };
  products: {
    product: {
      images: string[];
      name: string;
    };
    count: number;
  }[];
  totalPrice: number;
  deliveryDate: string;
  deliveryStatus: boolean;
  createdAt: string;
};
