import { query } from "./strapi";

export interface ContactData {
  id: string;
  name: string;
  icon: string;
  value: string;
}

export interface ContactDataResponse {
  id: string;
  documentId: string;
  name: string;
  value: string;
  image: Image;
}

export interface Image {
  id: string;
  url: string;
}

export const getContact = async () => {
  return query("contacts?populate[image][fields]=url").then((res) => {
    const data: ContactData[] = res.data.map((item: ContactDataResponse) => ({
      id: item.id,
      name: item.name,
      value: item.value,
      icon: `${process.env.STRAPI_HOST}${item.image.url}`,
    }));
    return data;
  });
};
