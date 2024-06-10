'use server';

import axios from "axios";

export interface formPrevState {
  message: string
}

export async function signup(prevState: formPrevState, formData: FormData) {

  const body = {
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password')
  }

  function validatePassword(data) {
    const nameRegex = /^(?=.*[a-zA-Z\u00C0-\u017F])([a-zA-Z\s\u00C0-\u017F]+)$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const has6Char = /^.{6,}$/;
    const hasDigit = /(?=.*\d)/;
    const hasSpecialChar = /(?=.*[!@#\$%\^&\*\(\)_\+\-=\[\]\{\};':",\.<>\/\?\\|`~])/;
    const hasUpperCase = /(?=.*[A-Z])/;
    const hasLowerCase = /(?=.*[a-z])/;
    const noSpaceOrNewline = /^[^\s\n\r]+$/;
    const anyCharsToEnd = /.*/;

    if (!nameRegex.test(data.name)) {
      throw new Error('O nome deve conter apenas letras e espaços.', { cause: 'name' });
    }
    if (!emailRegex.test(data.email)) {
      throw new Error('E-mail inválido.', { cause: 'email' });
    }
    if (!has6Char.test(data.password)) {
      throw new Error('Adicione pelo menos 6 caracteres.', { cause: 'password' });
    }
    if (!hasDigit.test(data.password)) {
      throw new Error('Adicione pelo menos um dígito.', { cause: 'password' });
    }
    if (!hasSpecialChar.test(data.password)) {
      throw new Error('Adicione pelo menos um caractere especial.', { cause: 'password' });
    }
    if (!hasUpperCase.test(data.password)) {
      throw new Error('Adicione pelo menos uma letra maiúscula.', { cause: 'password' });
    }
    if (!hasLowerCase.test(data.password)) {
      throw new Error('Adicione pelo menos uma letra minúscula.', { cause: 'password' });
    }
    if (!noSpaceOrNewline.test(data.password)) {
      throw new Error('A senha não deve conter espaço ou nova linha.', { cause: 'password' });
    }
    if (!anyCharsToEnd.test(data.password)) {
      throw new Error('A senha é inválida.', { cause: 'password' });
    }

    //password confirmation
    if (data.password !== formData.get('matchPassword')) {
      throw new Error('Confirmação de senha incorreta.', { cause: 'match password' });
    }

    return true;
  }

  try {
    validatePassword(body)
    await axios.post('http://localhost:3000/user', body);
    return { error: '', message: 'Created' };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        return { error: 'email', message: 'E-mail indisponível' || 'Bad Request' };
      }
    } else if (error instanceof Error) {
      return { error: error.cause, message: error.message };
    }
    return { error: '404', message: 'Bad Request' };
  }
}


