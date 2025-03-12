import { useQuery } from 'react-query';
import apiClient from '../api/api';

export const useProducts = ({categoryId,offset,limit}) => {
  return useQuery(['products',categoryId], async () => {
    let url = '/products';
  
    if (categoryId) {
      url += `?categoryId=${categoryId}`;
    }

    // Add offset and limit parameters if both are provided
    if (offset !== undefined && limit !== undefined) {
      url += `${categoryId ? '&' : '?'}offset=${offset}&limit=${limit}`;
    }

    const response = await apiClient.get(url);
    console.log(response.data);
    return response.data;
  }, {
    staleTime: 0, // Always refetch when categoryId changes
  });
};