import { axiosPrivate } from '../../../utilities/axiosInstances';
import { queryOptions } from '@tanstack/react-query';

const fetchData = async () => {
  try {
    const { data } = await axiosPrivate.get('/v1/user/profile');

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const userQuery = () =>
  queryOptions({
    queryKey: ['user', 'profile'],
    queryFn: fetchData,
  });

export const loader = (queryClient) => async () => {
  await queryClient.ensureQueryData(userQuery());
  return null;
};
