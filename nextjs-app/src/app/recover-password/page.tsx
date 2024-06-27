'use client'

import Header from "@/components/Header";
import Nav from "@/components/Nav";
import { useState } from "react";
import { getQuestionsByEmail } from "../../../actions/recoverPassword";

export default function RecoverPasswordPage() {
  const [email, setEmail] = useState("")
  const [questionAndAnswer, setQuestionAndAnswer] = useState({
    questionId: 0,
    answer: ""
  })
  const [newPassword, setNewPassword] = useState("")
  const [response, setResponse] = useState({ message: "", status: 0, questions: [{id: 0, question: ""}] })
  const [screen, setScreen] = useState(1)

  const onChange = (e, state, setState) => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  async function verifyEmail() {
    const result: any = await getQuestionsByEmail(email);
    setResponse(result)
    if (result.status === 200) {
      console.log(result.questions)
      setScreen(2)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-start ">
      <Header />
      <Nav>
        <div className="h-header flex flex-col gap-12 justify-center items-center ">
          <h1 className="text-h1 text-primary-1 font-weight-bold">Recuperar senha</h1>
          <div className="flex flex-col w-full max-w-sm">
            {screen === 1 ?
              <>
                <p className="text-p text-neutral-2 py-1">E-mail</p>
                <input
                  placeholder="Insira seu email"
                  required
                  type="text"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full p-3 border border-solid rounded text-p text-neutral-2 ${response.status === 401 ? 'border-red-500' : 'border-primary-1'}`}
                />
                <span className="h-4 pt-1 w-full flex justify-end items-center">
                  <p className="text-red-500 text-sm">
                    {response.status === 401 && response.message}
                  </p>
                </span>
              </>
              :
              <>
                <select
                  value={questionAndAnswer.questionId}
                  onChange={(e) => onChange(e, questionAndAnswer, setQuestionAndAnswer)}
                  name="questionId"
                  id="questionId"
                  className="h-10 mb-2 w-full focus:outline-none focus:shadow-none bg-white border border-primary-1 rounded-md pl-3 pr-10 text-neutral-2 text-p"
                >
                  <option value={0} disabled className="text-neutral-3 ">Escolha uma pergunta</option>
                  {response.status === 200 && response.questions.map(item => <option key={item.id} value={item.id}>{item.question}</option>)}
                </select>
                <input
                  placeholder="Resposta secreta"
                  type="text"
                  name="answer"
                  value={questionAndAnswer.answer}
                  onChange={(e) => onChange(e, questionAndAnswer, setQuestionAndAnswer)}
                  className={`w-full p-3 border border-solid rounded text-p focus:outline-none focus:shadow-none text-neutral-2`}
                  // ${response.error === 'answer 1' ? 'border-red-500' : 'border-primary-1'}
                />
                <span className="h-8 w-full flex justify-end items-center">
                  <p className="text-red-500 text-sm">
                    {/* {response.error === 'answer 1' && response.message} */}
                  </p>
                </span>
              </>
            }
          </div>
          <button type="button" onClick={() => verifyEmail()} className="highlight-btn min-w-60">Continuar</button>
        </div>
      </Nav>
    </main>
  )
}