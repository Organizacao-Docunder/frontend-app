'use server';

import { cookies } from 'next/headers'

export async function hasAccessToken() {
  return cookies().has('access_token')
}
