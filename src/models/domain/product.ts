import { Product } from '../api/product';

export interface ProductDisplay
  extends Pick<Product, 'id' | 'title' | 'description' | 'thumbnail' | 'rating'> {
  review: Product['reviews']['length'];
}
