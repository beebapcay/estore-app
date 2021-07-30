import axios from 'axios';
export const baseUrl = 'https://sstore-server.herokuapp.com/api/v1/';
import { Shopping } from '../models';

export const fetchShoppingData = async () => {
  const response = await axios.get<Shopping>(`${baseUrl}`);
  return response;
};
