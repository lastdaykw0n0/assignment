import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const USE_MOCK = import.meta.env.MODE === 'development';

const axiosClient = axios.create({
  baseURL: API_BASE_URL,
});

export const apiFetch = async <T>(
  endpoint: string,
  mockData?: T
): Promise<T> => {
  if (USE_MOCK && mockData) {
    return new Promise((resolve) => setTimeout(() => resolve(mockData), 300));
  }

  const response = await axiosClient.get<T>(endpoint);
  return response.data;
};
