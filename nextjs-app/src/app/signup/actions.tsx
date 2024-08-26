'use server';

import axios from "axios";

export async function validateFirstPart(data) {
  const nameRegex = /^(?=.*[a-zA-Z\u00C0-\u017F])([a-zA-Z\s\u00C0-\u017F]+)$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const has6Char = /^.{6,}$/;
  const hasDigit = /(?=.*\d)/;
  const hasSpecialChar = /(?=.*[!@#\$%\^&\*\(\)_\+\-=\[\]\{\};':",\.<>\/\?\\|`~])/;
  const hasUpperCase = /(?=.*[A-Z])/;
  const hasLowerCase = /(?=.*[a-z])/;
  const noSpaceOrNewline = /^[^\s\n\r]+$/;
  const anyCharsToEnd = /.*/;

  try {
    if (data.name.length > 74) {
      throw new Error('O nome deve possuir menos de 74 caracteres.', { cause: 'name' });
    }
    if (!nameRegex.test(data.name)) {
      throw new Error('O nome deve conter apenas letras e espaços.', { cause: 'name' });
    }
    if (data.email.length < 6 || data.email.length > 74) {
      throw new Error('O e-mail deve possuir entre 6 e 74 caracteres.', { cause: 'email' });
    }
    if (!emailRegex.test(data.email)) {
      throw new Error('E-mail inválido.', { cause: 'email' });
    }
    if (data.password.length < 6 || data.password.length > 74) {
      throw new Error('A senha deve possuir entre 6 e 74 caracteres.', { cause: 'password' });
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
    if (data.password !== data.matchPassword) {
      throw new Error('Confirmação de senha incorreta.', { cause: 'match password' });
    }

    return { error: '', message: 'OK' };
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.cause, message: error.message };
    }
    return { error: '404', message: 'Bad Request' };
  }
}

export async function validateSecondPart(data) {
  try {
    if (data.questionId1 === 0) {
      throw new Error('Escolha uma pergunta.', { cause: 'question 1' });
    }
    if (data.questionId2 === 0) {
      throw new Error('Escolha uma pergunta.', { cause: 'question 2' });
    }
    if (data.questionId3 === 0) {
      throw new Error('Escolha uma pergunta.', { cause: 'question 3' });
    }
    if (data.answer1.length < 3 || data.answer1.length > 74) {
      throw new Error('A resposta deve ter entre 3 e 74 caracteres.', { cause: 'answer 1' });
    }
    if (data.answer2.length < 3 || data.answer2.length > 74) {
      throw new Error('A resposta deve ter entre 3 e 74 caracteres.', { cause: 'answer 2' });
    }
    if (data.answer3.length < 3 || data.answer3.length > 74) {
      throw new Error('A resposta deve ter entre 3 e 74 caracteres.', { cause: 'answer 3' });
    }
    return { error: '', message: 'OK' };
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.cause, message: error.message };
    }
    return { error: '404', message: 'Bad Request' };
  }
}

export async function signup(firstForm, secondForm) {
  const body = {
    name: firstForm.name,
    email: firstForm.email,
    password: firstForm.password,
    secretAnswers:
      [
        {
          questionId: Number(secondForm.questionId1),
          answer: secondForm.answer1
        },
        {
          questionId: Number(secondForm.questionId2),
          answer: secondForm.answer2
        },
        {
          questionId: Number(secondForm.questionId3),
          answer: secondForm.answer3
        }
      ]
  }

  try {
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


