import client from "../api";
const baseURL: string = "/api/v1/adverts";

export const getLatestProducts = () => {
  const url = `${baseURL}`;
  return client.get(url);
};

export const DetailProducts = (id: string) => {
  const url = `${baseURL}/${id}`;
  return client.get(url);
};

export const createProducts = (neWpost: Object) => {
  const url = baseURL;
  return client.post(url, neWpost);
};

export const deleteProducts = (id: string) => {
  const url = `${baseURL}/${id}`;
  return client.delete(url);
};
