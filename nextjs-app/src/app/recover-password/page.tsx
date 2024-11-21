'use client'

import { useState } from "react";
import { getQuestionsByEmail, getSecretAnswer, recoverPassword } from "./actions";
import Image from "next/image";
import check from "../../assets/icons/check.svg"
import { useRouter } from "next/navigation";
import Background from "@/components/Background";

import eyesOpenIcon from '@/assets/icons/eyes_open.png'
import eyesClosedIcon from '@/assets/icons/eyes_closed.png'

export default function RecoverPasswordPage() {
  const [email, setEmail] = useState("")
  const [showPassword, setShowPassword] = useState('password');
  const [showMatchPassword, setShowMatchPassword] = useState('password');
  const [questionAndAnswer, setQuestionAndAnswer] = useState({
    questionId: 0,
    answer: ""
  })
  const [newPassword, setNewPassword] = useState({
    password: "",
    matchPassword: ""
  })
  const [response, setResponse] = useState({ status: 0, cause: "", message: "", questions: [] })
  const [secretQuestions, setSecretQuestions] = useState([{ id: 0, question: "" }])
  const [screen, setScreen] = useState(1)

  const onChange = (e, state, setState) => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  async function verifyEmail() {
    const result: any = await getQuestionsByEmail(email);
    setResponse(result)
    if (result.status === 200) {
      setSecretQuestions(result.questions)
      setScreen(2)
    }
  }

  async function verifySecretAnswer() {
    const result: any = await getSecretAnswer(email, questionAndAnswer);
    setResponse(result)
    if (result.status === 201) {
      setScreen(3)
    }
  }

  async function updatePassword() {
    const result: any = await recoverPassword(email, newPassword);
    setResponse(result)
    if (result.status === 200) {
      setScreen(4)
    }
  }

  const router = useRouter();
  function goToHomePage() {
    router.push("/home")
  }

  return (
    <Background custom="overflow-hidden">
      <div className="h-header flex flex-col justify-center items-center ">
        {screen === 1 ?
          <>
            <h1 className={`mb-12 text-primary-1 font-weight-600`}>Recuperar senha</h1>
            <div className="flex flex-col w-full max-w-sm">
              <p className="text-neutral-2 py-1">E-mail</p>
              <input
                placeholder="Insira seu email"
                required
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full p-3 border border-solid rounded text-neutral-2 ${response.status === 401 ? 'border-red-500' : 'border-primary-1'}`}
              />
              <span className="h-4 pt-1 w-full flex justify-end items-center">
                <p className="text-red-500 text-sm">
                  {response.status === 401 && response.message}
                </p>
              </span>
              <button type="button" onClick={() => verifyEmail()} className="highlight-btn min-w-60 mt-12">Continuar</button>
            </div>
          </>
          : screen === 2 ?
            <>
              <h1 className={`mb-12 text-primary-1 font-weight-600`}>Recuperar senha</h1>
              <div className="flex flex-col w-full max-w-sm">
                <select
                  value={questionAndAnswer.questionId}
                  onChange={(e) => onChange(e, questionAndAnswer, setQuestionAndAnswer)}
                  name="questionId"
                  id="questionId"
                  className={`h-10 mb-2 w-full focus:outline-none focus:shadow-none bg-white border rounded-md pl-3 pr-10 text-neutral-2 ${response.cause === 'question' ? 'border-red-500' : 'border-primary-1'}`}
                >
                  <option value={0} disabled className="text-neutral-3 ">Escolha uma pergunta</option>
                  {secretQuestions.map(item => <option key={item.id} value={item.id}>{item.question}</option>)}
                </select>
                <input
                  placeholder="Insira sua resposta"
                  type="text"
                  name="answer"
                  value={questionAndAnswer.answer}
                  onChange={(e) => onChange(e, questionAndAnswer, setQuestionAndAnswer)}
                  className={`w-full p-3 border border-solid rounded focus:outline-none focus:shadow-none text-neutral-2  ${response.cause === 'answer' ? 'border-red-500' : 'border-primary-1'}`}
                />
                <span className="h-8 w-full flex justify-end items-center">
                  <p className="text-red-500 text-sm">
                    {response.status === 401 && response.message}
                  </p>
                </span>
                <button type="button" onClick={() => verifySecretAnswer()} className="highlight-btn min-w-60 mt-12">Continuar</button>
              </div>
            </>
            : screen === 3 ?
              <>
                <h1 className={`mb-12 text-primary-1 font-weight-600`}>Recuperar senha</h1>
                <div className="flex flex-col w-full max-w-sm">
                  <p className="text-neutral-2 py-1">Nova senha</p>
                  <div className={`flex border border-solid rounded overflow-hidden focus-within:border-black ${response.cause === 'password' ? 'border-red-500' : 'border-primary-1'}`}>
                    <input
                      placeholder="Insira sua senha"
                      required
                      type={showPassword}
                      name="password"
                      id="password"
                      value={newPassword.password}
                      onChange={(e) => onChange(e, newPassword, setNewPassword)}
                      className="w-full p-3 text-neutral-2 focus:outline-none"
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
                  <span className="h-4 pt-1 w-full flex justify-end items-center">
                    <p className="text-red-500 text-sm">
                      {response.cause === "password" && response.message}
                    </p>
                  </span>
                  <p className="text-neutral-2 py-1">Confirmar senha</p>
                  <div className={`flex border border-solid rounded overflow-hidden focus-within:border-black ${response.cause === 'password' ? 'border-red-500' : 'border-primary-1'}`}>
                    <input
                      placeholder="Insira novamente sua senha"
                      required
                      type={showMatchPassword}
                      name="matchPassword"
                      id="matchPassword"
                      value={newPassword.matchPassword}
                      onChange={(e) => onChange(e, newPassword, setNewPassword)}
                      className="w-full p-3 text-neutral-2 focus:outline-none"
                    />
                    <button className="bg-white px-3" onClick={(e) => {
                      e.preventDefault()
                      setShowMatchPassword(showMatchPassword === 'password' ? 'text' : 'password')
                    }}>
                      <Image
                        src={showMatchPassword === 'password' ? eyesOpenIcon : eyesClosedIcon}
                        alt="password icon"
                        width={24}
                        height={24}
                      />
                    </button>
                  </div>
                  <span className="h-4 pt-1 w-full flex justify-end items-center">
                    <p className="text-red-500 text-sm">
                      {response.cause === "match password" && response.message}
                    </p>
                  </span>
                  <button type="button" onClick={() => updatePassword()} className="highlight-btn min-w-60 mt-12">Continuar</button>
                </div>
              </>
              :
              <>
                <Image alt="check" src={check} className="mb-8" />
                <h1 className={`mb-4 text-primary-1 font-weight-600`}>Senha redefinida</h1>
                <h4 className={`mb-24 text-primary-1 font-weight-600`}>Sua nova senha foi salva.</h4>
                <button onClick={() => goToHomePage()} className="highlight-btn min-w-60">Ir para página inicial</button>
              </>
        }
      </div>
    </Background>
  )
}