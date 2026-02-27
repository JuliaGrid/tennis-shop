export interface IBrand {
  id: number;
  name: string;
  product: IRacket[];
}

export interface IRacket {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  type: string;
  model: string;
  year: number;
  top10: boolean;
  description: string;
  brand: IBrand;
  brandId: number;
  userData: IUserProduct[];
}

export interface IUserProduct {
  id: string;
  userId: number;
  productId: number;
  isFavorite: boolean;
  //   user :   User
  product: IRacket;
}
