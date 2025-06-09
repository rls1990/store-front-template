import { query } from "./strapi";

export interface LogoData {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

export interface LogoResponse {
  id: number;
  title: string;
  subtitle: string;
  image: Image;
}

export interface Image {
  id: number;
  documentId: string;
  url: string;
}

export const getLogo = async (): Promise<LogoData> => {
  return query("global?populate[logo][populate][image][fields]=url").then(
    (res) => {
      const data: LogoResponse = res.data.logo;
      return {
        id: data.id,
        title: data.title,
        subtitle: data.subtitle,
        image: `${process.env.STRAPI_HOST}${data.image.url}`,
      };
    }
  );
};
