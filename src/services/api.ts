import axios from "axios";

const instance = axios.create();

function queryToString(query?: Record<string, string>) {
  if (query == null) {
    return "";
  }

  const qs = Object.entries(query).reduce(
    (acc: string, [key, value]: [string, string]) => `${acc}${key}=${value}&`,
    "?"
  );

  return qs.slice(0, qs.length - 1);
}

instance.interceptors.request.use(
  function (config) {
    console.log("config", config);
    return config;
  },
  function (error) {
    console.log("request", error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    console.log("response", response);
    return response;
  },
  function (error: any) {
    console.log("response", error);
    if (error?.response?.data != null) {
      throw new Error(JSON.stringify(error?.response?.data));
    }

    throw new Error(error.message);
  }
);

export async function get(url: string, query?: Record<string, string>) {
  const qs = queryToString(query);

  return instance.get(`${url}${qs}`);
}

export async function post(url: string, body?: Record<string, string>) {
  return instance.post(url, body);
}
