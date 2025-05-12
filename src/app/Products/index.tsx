import ListItem from '@/components/ListItem/Index';
import { ProductDisplay } from '@/models/domain/product';

interface ProductsProps {
  initialProducts: ProductDisplay[];
}

const Products = ({ initialProducts }: ProductsProps) => {
  return (
    <ul>
      {initialProducts.map((product: ProductDisplay) => (
        <ListItem
          key={product.id}
          title={product.title}
          description={product.description}
          thumbnail={product.thumbnail}
          rating={product.rating}
          review={product.review}
        />
      ))}
    </ul>
  );
};

export default Products;
