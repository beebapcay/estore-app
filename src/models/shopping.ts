import Category from './category';
import Motivation from './motivation';
import Product from './product';

interface Shopping {
  categories: Category[];
  products: Product[];
  motivations: Motivation[];
}

export default Shopping;
