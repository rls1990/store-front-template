import { data, SocialNetworksData } from "@/data/social-networks";
import { query } from "./strapi";

export interface SocialNetworksResponse {
  id: string;
  name: string;
  url: string;
  image: Image;
}

export interface Image {
  id: number;
  url: string;
}

export const getSocialNetworks = async () => {
  return query("social-networks?populate[image][fields]=url").then((res) => {
    const data: SocialNetworksData[] = res.data.map(
      (item: SocialNetworksResponse) => {
        const data: SocialNetworksData = {
          id: item.id,
          url: item.url,
          name: item.name,
          image: `${process.env.STRAPI_HOST}${item.image.url}`,
        };
        return data;
      }
    );
    return data;
  });
};

export const getSocialNetworksData = async () => {
  return data;
};
