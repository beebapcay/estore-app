import Product from './product';

interface Order {
  id: string;
  items: Product[];
  subTotalCost: number;
  shipCost: number;
  totalCost: number;
}

export default Order;
