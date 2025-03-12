import { useQuery } from 'react-query';
import apiClient from '../api/api';

export const useCategories = () => {
  return useQuery(['categories'], async () => {
    const response = await apiClient.get('/categories');
    console.log(response.data);
    return response.data;
  });
};