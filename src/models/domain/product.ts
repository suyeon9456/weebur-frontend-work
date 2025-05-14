import { Product, ProductListRequest } from '../api/product';

export interface ProductDisplay
  extends Pick<Product, 'id' | 'title' | 'description' | 'thumbnail' | 'rating'> {
  review: Product['reviews']['length'];
}

export type ProductFilter = Partial<Pick<ProductListRequest, 'q' | 'sortBy' | 'order'>>;
