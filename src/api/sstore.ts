import axios from 'axios';
export const baseUrl = 'https://sstore-server.herokuapp.com/api/v1';
import { Cart, Product, Shopping, User } from '../models';

export const fetchShoppingData = async () => {
  const response = await axios.get<Shopping>(`${baseUrl}`);
  return response;
};

export const authLogin = async (username: string, password: string) => {
  const response = await axios.post<User>(`${baseUrl}/login`, {
    username: username,
    password: password
  });
  return response;
};

export const authRegister = async (
  firstName: string,
  lastName: string,
  age: number,
  gender: string,
  email: string,
  phone: string,
  password: string
) => {
  const response = await axios.post<string>(`${baseUrl}/register`, {
    firstName: firstName,
    lastName: lastName,
    age: age,
    gender: gender,
    email: email,
    phone: phone,
    password: password
  });

  return response;
};

export const buyOrder = async (
  firstName: string,
  lastName: string,
  address: string,
  note: string,
  user: User,
  cart: Cart
) => {
  const response = await axios.post<string>(`${baseUrl}/order`, {
    id: '',
    user: user,
    items: cart.items,
    subTotalCost: cart.subTotalCost,
    shipCost: cart.shipCost,
    totalCost: cart.totalCost,
    date: 0,
    firstName: firstName,
    lastName: lastName,
    address: address,
    note: note
  });

  return response;
};
