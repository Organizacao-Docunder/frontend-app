'use server';

import axios from "axios";
import { cookies } from 'next/headers'

export interface CurrentUser {
    id: number,
    email: string,
    name: string
}

axios.defaults.withCredentials = true;

export async function getCurrentUser() {
  try {
    const cookieStore = cookies();
    const authCookie = cookieStore.get('access_token');
    
    if (!authCookie) {
      return { status: 401, message: 'Unauthorized' };
    }
    
    const response = await axios.get(`http://${process.env.API_ENDPOINT}:${process.env.API_PORT}/me`, {
      withCredentials: true,
      headers: {
        Cookie: `access_token=${authCookie.value}`
      }
    });

    const currentUser: CurrentUser = response.data;
    return currentUser;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        return { status: error.response.status, message: error.message };
      }
    }
    return { status: 401, message: 'Unauthorized' };
  }
}
