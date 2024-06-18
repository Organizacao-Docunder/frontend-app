'use server';

import axios from "axios";

export interface formPrevState {
  message: string
}

export async function login(prevState: formPrevState, formData: FormData) {

  const body = {
    email: formData.get('email'),
    password: formData.get('password')
  }

  try {
    const response = await axios.post('http://localhost:3000/login', body);
    const token = response.data.access_token
    
    if (response.status === 200) {
      console.log("token:", token)
    }
    return { status: 200, message: response.data.access_token };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        return { status: 401, message: 'E-mail e/ou senha incorreto(s)'};
      }
    }
    return { status: 401, message: 'Bad Request' };
  }
}