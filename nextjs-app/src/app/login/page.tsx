'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";

import { login } from "./actions";
import Background from "@/components/Background";

import eyesOpenIcon from '@/assets/icons/eyes_open.png'
import eyesClosedIcon from '@/assets/icons/eyes_closed.png'

export default function LoginPage() {
  const [formState, formAction] = useFormState(login, { status: 0, message: "" });
  const [showPassword, setShowPassword] = useState('password');
  const router = useRouter();

  if (formState.status === 200) {
    router.push("/home")
  }

  function goToRecoverPasswordPage() {
    router.push("/recover-password")
  }

  return (
    <Background custom="overflow-hidden">
      <div className="h-header flex flex-col gap-12 justify-center items-center">
        <h1 className="text-primary-1 font-weight-600">Entrar</h1>
        <form action={formAction} className="flex flex-col items-center w-80">
          <div className="flex flex-col w-full gap-3">
            <input
              placeholder="E-mail"
              required
              type="text"
              name="email"
              className={`w-full px-3 h-10 border border-solid rounded text-p text-neutral-2 
                ${formState.status === 401 ? 'border-red-500' : 'border-primary-1'}`}
            />
            <div
              className={`w-full flex h-10 border border-solid rounded overflow-hidden text-p text-neutral-2 ${formState.status === 401 ? 'border-red-500' : 'border-primary-1'}`}>
              <input
                placeholder="Senha"
                type={showPassword}
                name="password"
                className="flex-1 px-3 focus:outline-none"
              />
              <button className="bg-white px-3" onClick={(e) => {
                e.preventDefault()
                setShowPassword(showPassword === 'password' ? 'text' : 'password')
              }}>
                <Image
                  src={showPassword === 'password' ? eyesOpenIcon : eyesClosedIcon}
                  alt="password icon"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>
          <span className="h-6 w-full flex justify-end items-center">
            <p className="text-red-500 text-sm">
              {formState.status === 401 && formState.message}
            </p>
          </span>
          <button id="signup" type="submit" className="highlight-btn px-20 h-8">Entrar</button>
        </form>
        <div className="flex flex-col items-center gap-2">
          <p onClick={() => goToRecoverPasswordPage()} className="text-primary-1 cursor-pointer">Esqueceu sua senha?</p>
          <p className="text-neutral-2">Não possui uma conta? <Link href="/signup" className="text-primary-1">Criar</Link></p>
        </div>
      </div>
    </Background>
  );
}
