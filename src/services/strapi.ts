const { STRAPI_HOST, STRAPI_TOKEN } = process.env;

export const query = async (url: string) => {
  return fetch(`${STRAPI_HOST}/api/${url}`, {
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },
  }).then((res) => res.json());
};
