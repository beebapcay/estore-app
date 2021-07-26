import axios from 'axios';
export const baseUrl = 'https://sstore-server.herokuapp.com/api/v1/';
import { ProductAvailability } from '../models';

export const fetchProductAvailability = async () => {
  const response = await axios.get<ProductAvailability>(`${baseUrl}`);
  return response;
};
