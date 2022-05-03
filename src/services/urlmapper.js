const BASE_DOMAIN = process.env.VUE_APP_API_HOST;
const BASE_URL = "api/v1/";

const urlMapper = {
  login: `${BASE_DOMAIN}${BASE_URL}login/`,
};

export default urlMapper;
