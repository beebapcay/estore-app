import Product from './product';

interface ProductOrder extends Product {
  quantity: number;
}

export default ProductOrder;
