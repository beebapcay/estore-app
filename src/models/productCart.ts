import Product from './product';

interface ProductCart extends Product {
  quantity: number;
}

export default ProductCart;
