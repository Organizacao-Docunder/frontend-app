'use client';

import Header from "@/components/Header";
import Input from "@/components/Input";
import Nav from "@/components/Nav";
import { useFormState } from 'react-dom'
import { signup } from '../../../actions/signup'

export default function SignupPage() {

  const [formState, formAction] = useFormState(signup, { message: "", error: "" })
  console.log(formState.message)
  return (
    <main className="flex min-h-screen flex-col items-center justify-start ">
      <Header />
      <Nav>
        <div className="h-header flex flex-col gap-12 justify-center items-center">
          <h1 className="text-h1 text-primary-1 font-weight-bold">Primeiros Passos</h1>
          <form action={formAction} className="flex flex-col items-center w-80 gap-3">
            <div className="flex flex-col w-full">
              <div>
                <p className="text-p text-neutral-2 py-1">Nome</p>
                <Input
                  placeholder="Insira seu nome"
                  type="text"
                  name="name"
                  border={formState.error === 'name'}
                />
                <span className="h-4 pt-1 w-full flex justify-end items-center">
                  <p className="text-red-500 text-sm">
                    {formState.error === 'name' && formState.message}
                  </p>
                </span>
              </div>
              <div>
                <p className="text-p text-neutral-2 py-1">E-mail</p>
                <Input
                  placeholder="Insira seu e-mail"
                  type="text"
                  name="email"
                  border={formState.error === 'email'}
                />
                <span className="h-4 pt-1 w-full flex justify-end items-center">
                  <p className="text-red-500 text-sm">
                    {formState.error === 'email' && formState.message}
                  </p>
                </span>
              </div>
              <div>
                <p className="text-p text-neutral-2 py-1">Senha</p>
                <Input
                  placeholder="Insira seu senha"
                  type="password"
                  name="password"
                  border={formState.error === 'password' || formState.error === 'match password'}
                />
                <span className="h-4 pt-1 w-full flex justify-end items-center">
                  <p className="text-red-500 text-sm">
                    {formState.error === 'password' && formState.message}
                  </p>
                </span>
              </div>
              <div>
                <p className="text-p text-neutral-2 py-1">Confirmar senha</p>
                <Input
                  placeholder="Confirme seu senha"
                  type="password"
                  name="matchPassword"
                  border={formState.error === 'match password'}
                />
                <span className="h-4 pt-1 w-full flex justify-end items-center">
                  <p className="text-red-500 text-sm">
                    {formState.error === 'match password' && formState.message}
                  </p>
                </span>
              </div>
            </div>
            <p className=" text-p text-neutral-2 pb-3">Ao se cadastrar, estou ciente dos Termos de Uso e das Políticas de privacidade do Docunder.</p>
            <button id={"signup"} type="submit" className="highlight-btn min-w-full">Continuar</button>
          </form>
        </div>
      </Nav>
    </main>
  )
}