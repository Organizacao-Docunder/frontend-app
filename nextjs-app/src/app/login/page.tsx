'use client';

import Input from "@/components/Input";
import Link from "next/link";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { login } from "../../../actions/login";

export default function LoginPage() {
  const [formState, formAction] = useFormState(login, { status: 0, message: "" });
  const router = useRouter();

  if (formState.status === 200) {
    router.push("/home")
  }

  function goToRecoverPasswordPage() {
    router.push("/recover-password")
  }

  return (
    <div className="h-header flex flex-col gap-12 justify-center items-center">
      <h1 className="text-primary-1 font-weight-600">Entrar</h1>
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
      <div className="flex flex-col items-center gap-2">
        <p onClick={() => goToRecoverPasswordPage()} className="text-primary-1 cursor-pointer">Esqueceu sua senha?</p>
        <p className="text-neutral-2">Não possui uma conta? <Link href="/signup" className="text-primary-1">Criar</Link></p>
      </div>
    </div>
  );
}
