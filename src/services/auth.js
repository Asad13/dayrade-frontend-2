import { axiosPublic, axiosPrivate } from '../utilities/axiosInstances';

export const register = (body) => axiosPublic.post('/v1/auth/signup', body);

export const verifyEmail = (body, signal) =>
  axiosPublic.post('/v1/auth/verify-email', body, { signal: signal });

export const login = (body) => axiosPublic.post('/v1/auth/login', body);

export const checkUserName = async (body, signal) => {
  try {
    const { data } = await axiosPublic.post('/v1/auth/check-username', body, {
      signal: signal,
    });

    return data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const checkAuth = async () => {
  try {
    const { data } = await axiosPrivate.post(
      '/v1/auth/check',
      {}
      // { signal: signal },
    );

    return data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const logout = () => axiosPrivate.post('/v1/auth/logout', {});
