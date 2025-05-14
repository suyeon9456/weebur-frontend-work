import ListItem from '@/components/ListItem/Index';
import { Product } from '@/models/api/product';

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => (
  <ul>
    {products.map((product: Product) => (
      <ListItem
        key={product.id}
        title={product.title}
        description={product.description}
        thumbnail={product.thumbnail}
        rating={product.rating}
        review={product.reviews.length}
      />
    ))}
  </ul>
);

export default ProductList;
