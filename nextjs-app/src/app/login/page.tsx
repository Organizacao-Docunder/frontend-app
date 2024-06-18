'use client';

import Input from "@/components/Input";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Link from "next/link";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import axios from "axios";
import { login } from "../../../actions/login";

export default function LoginPage() {
  const [formState, formAction] = useFormState(login, {status: 0, message: ""});
  const router = useRouter();
  
  console.log(formState)

  if (formState.status === 200) {
    router.push("/home")
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-start ">
      <Header />
      <Nav>
        <div className="h-header flex flex-col gap-12 justify-center items-center">
          <h1 className="text-h1 text-primary-1 font-weight-bold">Entrar</h1>
          <form action={formAction} className="flex flex-col items-center w-80">
            <div className="flex flex-col w-full gap-3">
              <Input
                placeholder="E-mail"
                type="text"
                name="email"
                border={formState.status === 401 ? '1px solid red' : undefined}
              />
              <Input
                placeholder="Senha"
                type="password"
                name="password"
                border={formState.status === 401 ? '1px solid red' : undefined}
              />
            </div>
            <span className="h-6 w-full flex justify-end items-center">
              <p className="text-red-500 text-sm">
                {formState.status === 401 && formState.message}
              </p>
            </span>
            <button id="signup" type="submit" className="highlight-btn min-w-full">Entrar</button>
          </form>
          <div className="flex flex-col items-center">
            <p className="text-neutral-2">Esqueceu sua senha?</p>
            <p className="text-neutral-2">Não possui uma conta? <Link href="/signup" className="text-primary-1">Criar</Link></p>
          </div>
        </div>
      </Nav>
    </main>
  );
}
