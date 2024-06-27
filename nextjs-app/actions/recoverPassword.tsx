'use server';

import axios from "axios";

export async function getQuestionsByEmail(email) {

  const body = {
    email: email
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  try {
    if (email.length === 0) {
      throw new Error('Digite seu email.', { cause: 401 });
    }
    if (email.length < 6 || email.length > 74) {
      throw new Error('O e-mail deve possuir entre 6 e 74 caracteres.', { cause: 401 });
    }
    if (!emailRegex.test(email)) {
      throw new Error('E-mail inválido.', { cause: 401 });
    }

    const response = await axios.post('http://localhost:3000/user/recover-password', body);
    return { status: 200, message: "", questions: response.data};
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        return { status: 401, message: 'O e-mail não confere', questions: []};
      }
    }
    if (error instanceof Error) {
      return { status: error.cause, message: [error.message], questions: [] };
    }
    return { status: 401, message: 'Bad Request', questions:[] };
  }
}