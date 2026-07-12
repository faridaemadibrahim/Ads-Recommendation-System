import { authApi } from '../../../services/api';

export const registerUser = async (payload) => authApi.register(payload);
export const loginUser = async (payload) => authApi.login(payload);
