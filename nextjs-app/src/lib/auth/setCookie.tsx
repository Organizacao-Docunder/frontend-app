'use server'
 
import { cookies } from 'next/headers'
 
export async function setCookie(name, token) {
  cookies().set({
    name: name,
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 3600000, // 1 hora
    path: '/',
  })
}