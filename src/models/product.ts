interface Product {
  _id: string;
  name: string;
  description: string;
  category: string;
  stock: number;
  sales: number;
  price: number;
  motivations: string[];
  images: string[];
}

export default Product;
