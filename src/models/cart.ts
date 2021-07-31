import ProductCart from './productCart';

interface Cart {
  items: ProductCart[];
  subTotalCost: number;
  shipCost: number;
  totalCost: number;
}

export default Cart;
