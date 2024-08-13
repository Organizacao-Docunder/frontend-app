'use server';

import axios from "axios";
import { setCookie } from "../../lib/auth/setCookie";

export interface formPrevState {
  message: string
}

axios.defaults.withCredentials = true;

export async function login(prevState: formPrevState, formData: FormData) {
  const body = {
    email: formData.get('email'),
    password: formData.get('password')
  }

  try {
    const response = await axios.post(`http://${process.env.API_ENDPOINT}:${process.env.API_PORT}/login`, body, {
      withCredentials: true,
    });
    
    if (response.status === 200) {
      const setCookieHeader = response.headers['set-cookie'];
      if (!setCookieHeader || setCookieHeader.length === 0) {
        throw new Error('Token não encontrado no cabeçalho de resposta.', { cause: 'token' });
      }
      const token = setCookieHeader[0].split(';')[0].split('=')[1];
      setCookie('access_token', token)
    }
    
    return { status: 200, message: '' };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        return { status: 401, message: 'E-mail e/ou senha incorreto(s)'};
      }
    }
    return { status: 401, message: 'Bad Request' };
  }
}