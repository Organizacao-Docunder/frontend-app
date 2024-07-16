'use server';

import axios from "axios";
import { setCookie } from "./setCookie";
import { cookies } from 'next/headers'

export async function getQuestionsByEmail(email) {

  const body = {
    email: email
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  try {
    if (email.length === 0) {
      throw new Error('Digite seu email.', { cause: 'email' });
    }
    if (email.length < 6 || email.length > 74) {
      throw new Error('O e-mail deve possuir entre 6 e 74 caracteres.', { cause: 'email' });
    }
    if (!emailRegex.test(email)) {
      throw new Error('E-mail inválido.', { cause: 'email' });
    }

    const response = await axios.post(`http://${process.env.API_ENDPOINT}:${process.env.API_PORT}/user/recover-password`, body);
    
    return { status: 200, cause: '', message: "OK", questions: response.data };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        return { status: 401, cause: 'email', message: 'O e-mail não confere', questions: [] };
      }
    }
    if (error instanceof Error) {
      return { status: 401, cause: error.cause, message: [error.message], questions: [] };
    }
    return { status: 401, cause: 'email', message: 'Bad Request', questions: [] };
  }
}

axios.defaults.withCredentials = true;

export async function getSecretAnswer(email, questionAndAnswer) {

  const body = {
    email: email,
    questionId: Number(questionAndAnswer.questionId),
    answer: questionAndAnswer.answer
  }

  try {
    if (questionAndAnswer.questionId === 0) {
      throw new Error('Escolha uma pergunta.', { cause: 'question' });
    }
    if (questionAndAnswer.answer.length === 0) {
      throw new Error('Digite sua resposta.', { cause: 'answer' });
    }

    const response = await axios.post(`http://${process.env.API_ENDPOINT}:${process.env.API_PORT}/user/verify-secret-answer`, body, {
      withCredentials: true,
    });    

    const setCookieHeader = response.headers['set-cookie'];
    if (!setCookieHeader || setCookieHeader.length === 0) {
      throw new Error('Token não encontrado no cabeçalho de resposta.', { cause: 'token' });
    }
    const token = setCookieHeader[0].split(';')[0].split('=')[1];
    setCookie('access_token', token)

    return { status: response.status, cause: '', message: token, questions: [] };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        return { status: 401, cause: 'answer', message: 'A resposta está incorreta.', questions: [] };
      }
    }
    if (error instanceof Error) {
      return { status: 401, cause: error.cause, message: error.message, questions: [] };
    }
    return { status: 401, cause: 'answer', message: 'Bad Request', questions: [] };
  }
}

export async function recoverPassword(email, newPassword) {
  const has6Char = /^.{6,}$/;
  const hasDigit = /(?=.*\d)/;
  const hasSpecialChar = /(?=.*[!@#\$%\^&\*\(\)_\+\-=\[\]\{\};':",\.<>\/\?\\|`~])/;
  const hasUpperCase = /(?=.*[A-Z])/;
  const hasLowerCase = /(?=.*[a-z])/;
  const noSpaceOrNewline = /^[^\s\n\r]+$/;
  const anyCharsToEnd = /.*/;

  try {
    if (newPassword.password.length < 6 || newPassword.password.length > 74) {
      throw new Error('A senha deve possuir entre 6 e 74 caracteres.', { cause: 'password' });
    }
    if (!has6Char.test(newPassword.password)) {
      throw new Error('Adicione pelo menos 6 caracteres.', { cause: 'password' });
    }
    if (!hasDigit.test(newPassword.password)) {
      throw new Error('Adicione pelo menos um dígito.', { cause: 'password' });
    }
    if (!hasSpecialChar.test(newPassword.password)) {
      throw new Error('Adicione pelo menos um caractere especial.', { cause: 'password' });
    }
    if (!hasUpperCase.test(newPassword.password)) {
      throw new Error('Adicione pelo menos uma letra maiúscula.', { cause: 'password' });
    }
    if (!hasLowerCase.test(newPassword.password)) {
      throw new Error('Adicione pelo menos uma letra minúscula.', { cause: 'password' });
    }
    if (!noSpaceOrNewline.test(newPassword.password)) {
      throw new Error('A senha não deve conter espaço ou nova linha.', { cause: 'password' });
    }
    if (!anyCharsToEnd.test(newPassword.password)) {
      throw new Error('A senha é inválida.', { cause: 'password' });
    }

    //password confirmation
    if (newPassword.matchPassword.length === 0) {
      throw new Error('Confirme sua senha.', { cause: 'match password' });
    }
    if (newPassword.password !== newPassword.matchPassword) {
      throw new Error('Confirmação de senha incorreta.', { cause: 'match password' });
    }

    const body = {
      email: email,
      newPassword: newPassword.password
    }

    const cookieStore = cookies();
    const authCookie = cookieStore.get('access_token');

    if (!authCookie) {
      return { status: 401, message: 'Unauthorized' };
    }

    await axios.post(`http://${process.env.API_ENDPOINT}:${process.env.API_PORT}/user/reset-password`, body, {
      withCredentials: true,
      headers: {
        Cookie: `access_token=${authCookie.value}`
      }
    });    

    return { status: 200, cause: '', message: '', questions: [] };
  } catch (error) {
    if (error instanceof Error) {
      return { status: 401, cause: error.cause, message: error.message, questions: []};
    }
    return { status: 404, cause: 'new password', message: 'Bad Request', questions: [] };
  }
}