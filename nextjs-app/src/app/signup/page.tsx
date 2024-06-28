'use client';

import Header from "@/components/Header";
import Nav from "@/components/Nav";
import { validateFirstPart, validateSecondPart, signup } from '../../../actions/signup'
import { useEffect, useState } from "react";
import Modal from './Modal'
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFirstForm, setIsFirstForm] = useState(true)
  const [response, setResponse] = useState({ message: "", error: "" })
  const [filteredQuestions2, setFilteredQuestions2] = useState([{ id: 0, question: "" }])
  const [filteredQuestions3, setFilteredQuestions3] = useState([{ id: 0, question: "" }])
  const [firstForm, setFirstForm] = useState({
    name: "",
    email: "",
    password: "",
    matchPassword: ""
  })
  const [secondForm, setSecondForm] = useState({
    questionId1: 0,
    answer1: "",
    questionId2: 0,
    answer2: "",
    questionId3: 0,
    answer3: "",
  })

  const onChange = (e, state, setState) => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  const secretQuestions = [
    {
      id: 1,
      question: "Qual seu animal favorito?"
    },
    {
      id: 2,
      question: "Em qual cidade você nasceu?"
    },
    {
      id: 3,
      question: "Qual sua cor favorita?"
    },
    {
      id: 4,
      question: "Qual seu número da sorte? "
    },
    {
      id: 5,
      question: "Qual foi seu primeiro emprego? "
    },
    {
      id: 6,
      question: "Qual a sua fruta favorita?"
    },
    {
      id: 7,
      question: "Qual seu esporte favorito? "
    },
    {
      id: 8,
      question: "Qual seu time favorito?"
    },
    {
      id: 9,
      question: "Qual a sua comida favorita?"
    }
  ]

  useEffect(() => {
    const filteredQuestions = secretQuestions.filter(item => item.id != secondForm.questionId1)
    setFilteredQuestions2([...filteredQuestions])
  }, [secondForm.questionId1])

  useEffect(() => {
    const filteredQuestions = secretQuestions.filter(item => item.id != secondForm.questionId1 && item.id != secondForm.questionId2)
    setFilteredQuestions3([...filteredQuestions])
  }, [secondForm.questionId2])

  async function goToSecondPart() {
    console.log(firstForm)
    const result: any = await validateFirstPart(firstForm)
    if (result.error !== "") {
      setResponse(result)
    } else {
      setIsFirstForm(false)
    }
  }

  async function secretQuestionsCheck() {
    const result: any = await validateSecondPart(secondForm)
    console.log(result)
    if (result.error !== "") {
      setResponse(result)
    } 
    if (result.error.length === 0) {
      setResponse({ message: "", error: "" })
      setIsModalOpen(true)
    } 
  }

  const router = useRouter();

  async function onSubmit() {
    const result: any = await signup(firstForm, secondForm);
    setResponse(result)
    if (result.error === "email") {
      setIsFirstForm(true)
    }
    if (result.error.length === 0) {
      router.push("/home")
    }

  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-start ">
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} secretQuestions={secretQuestions} secondForm={secondForm} onSubmit={onSubmit}/>
      <Header />
      <Nav>
        <div className="h-header flex flex-col gap-12 justify-center items-center">
          <h1 className="text-h1 text-primary-1 font-weight-bold">Primeiros Passos</h1>
          <div id="formSignup" className="flex flex-col items-center w-80 gap-3">
            {isFirstForm ?
              <>
                <div className="flex flex-col w-full">
                  <div>
                    <p className="text-p text-neutral-2 py-1">Nome</p>
                    <input
                      placeholder="Insira seu nome"
                      required
                      type="text"
                      name="name"
                      id="name"
                      value={firstForm.name}
                      onChange={(e) => onChange(e, firstForm, setFirstForm)}
                      className={`w-full p-3 border border-solid rounded text-p text-neutral-2 ${response.error === 'name' ? 'border-red-500' : 'border-primary-1'}`}
                    />
                    <span className="h-4 pt-1 w-full flex justify-end items-center">
                      <p className="text-red-500 text-sm">
                        {response.error === 'name' && response.message}
                      </p>
                    </span>
                  </div>
                  <div>
                    <p className="text-p text-neutral-2 py-1">E-mail</p>
                    <input
                      placeholder="Insira seu e-mail"
                      required
                      type="text"
                      name="email"
                      id="email"
                      value={firstForm.email}
                      onChange={(e) => onChange(e, firstForm, setFirstForm)}
                      className={`w-full p-3 border border-solid rounded text-p text-neutral-2 ${response.error === 'email' ? 'border-red-500' : 'border-primary-1'}`}
                    />
                    <span className="h-4 pt-1 w-full flex justify-end items-center">
                      <p className="text-red-500 text-sm">
                        {response.error === 'email' && response.message}
                      </p>
                    </span>
                  </div>
                  <div>
                    <p className="text-p text-neutral-2 py-1">Senha</p>
                    <input
                      placeholder="Insira sua senha"
                      required
                      type="password"
                      name="password"
                      id="password"
                      value={firstForm.password}
                      onChange={(e) => onChange(e, firstForm, setFirstForm)}
                      className={`w-full p-3 border border-solid rounded text-p text-neutral-2 ${response.error === 'password' || response.error === 'match password' ? 'border-red-500' : 'border-primary-1'}`}
                    />
                    <span className="h-4 pt-1 w-full flex justify-end items-center">
                      <p className="text-red-500 text-sm">
                        {response.error === 'password' && response.message}
                      </p>
                    </span>
                  </div>
                  <div>
                    <p className="text-p text-neutral-2 py-1">Confirmar senha</p>
                    <input
                      placeholder="Confirme sua senha"
                      required
                      type="password"
                      name="matchPassword"
                      value={firstForm.matchPassword}
                      onChange={(e) => onChange(e, firstForm, setFirstForm)}
                      className={`w-full p-3 border border-solid rounded text-p text-neutral-2 ${response.error === 'match password' ? 'border-red-500' : 'border-primary-1'}`}
                    />
                    <span className="h-4 pt-1 w-full flex justify-end items-center">
                      <p className="text-red-500 text-sm">
                        {response.error === 'match password' && response.message}
                      </p>
                    </span>
                  </div>
                </div>
                <p className=" text-p text-neutral-2 pb-3">Ao se cadastrar, estou ciente dos Termos de Uso e das Políticas de privacidade do Docunder.</p>
                <button type="button" onClick={() => goToSecondPart()} className="highlight-btn min-w-full">Continuar</button>
              </>
              :
              <>
                <p className=" text-p text-primary-1 pb-3 text-center">Caso você esqueça sua senha, terá que responder às seguintes perguntas para recuperá-la:</p>

                {/* <label htmlFor="secret-question-1" className="texp-p text-neutral-2">Perguntas Secretas</label> */}
                <div className="flex flex-col w-full">

                  <select
                    value={secondForm.questionId1}
                    onChange={(e) => onChange(e, secondForm, setSecondForm)}
                    name="questionId1"
                    id="questionId1"
                    className={`h-10 mb-2 w-full focus:outline-none focus:shadow-none bg-white border rounded-md pl-3 pr-10 text-neutral-2 text-p ${response.error === 'question 1' ? 'border-red-500' : 'border-primary-1'}`}
                  >
                    <option value={0} disabled className="text-neutral-3 ">Escolha a primeira pergunta</option>
                    {secretQuestions.map(item => <option key={item.id} value={item.id}>{item.question}</option>)}
                  </select>
                  <input
                    placeholder="Resposta secreta 1"
                    type="text"
                    name="answer1"
                    value={secondForm.answer1}
                    onChange={(e) => onChange(e, secondForm, setSecondForm)}
                    className={`w-full p-3 border border-solid rounded text-p focus:outline-none focus:shadow-none text-neutral-2 ${response.error === 'answer 1' ? 'border-red-500' : 'border-primary-1'}`}
                  />
                  <span className="h-8 w-full flex justify-end items-center">
                    <p className="text-red-500 text-sm">
                      {response.error === 'answer 1' && response.message}
                      {response.error === 'question 1' && response.message}
                    </p>
                  </span>
                  <select
                    disabled={secondForm.questionId1 !== 0 ? false : true}
                    value={secondForm.questionId2}
                    onChange={(e) => onChange(e, secondForm, setSecondForm)}
                    name="questionId2"
                    id="questionId2"
                    className={`h-10 mb-2 w-full focus:outline-none focus:shadow-none border border-primary-1 rounded-md pl-3 pr-10 text-neutral-2 text-p ${response.error === 'question 2' ? 'border-red-500' : 'border-primary-1'}`}
                  >
                    <option value={0} disabled className="text-neutral-3 ">Escolha a segunda pergunta</option>
                    {secondForm.questionId1 !== 0 && filteredQuestions2.map(item => <option key={item.id} value={item.id}>{item.question}</option>)}
                  </select>
                  <input
                    placeholder="Resposta secreta 2"
                    type="text"
                    name="answer2"
                    value={secondForm.answer2}
                    onChange={(e) => onChange(e, secondForm, setSecondForm)}
                    className={`w-full p-3 border border-solid rounded text-p focus:outline-none focus:shadow-none text-neutral-2 ${response.error === 'answer 2' ? 'border-red-500' : 'border-primary-1'}`}
                  />
                  <span className="h-8 w-full flex justify-end items-center">
                    <p className="text-red-500 text-sm">
                      {response.error === 'answer 2' && response.message}
                      {response.error === 'question 2' && response.message}
                    </p>
                  </span>
                  <select
                    disabled={secondForm.questionId1 && secondForm.questionId2 !== 0 ? false : true}
                    value={secondForm.questionId3}
                    onChange={(e) => onChange(e, secondForm, setSecondForm)}
                    name="questionId3"
                    id="questionId3"
                    className={`h-10 mb-2 w-full focus:outline-none focus:shadow-none bg-white border rounded-md pl-3 pr-10 text-neutral-2 text-p ${response.error === 'question 3' ? 'border-red-500' : 'border-primary-1'}`}
                  >
                    <option value={0} disabled className="text-neutral-3 ">Escolha a terceira pergunta</option>
                    {filteredQuestions3.map(item => <option key={item.id} value={item.id}>{item.question}</option>)}
                  </select>
                  <input
                    placeholder="Resposta secreta 3"
                    type="text"
                    name="answer3"
                    value={secondForm.answer3}
                    onChange={(e) => onChange(e, secondForm, setSecondForm)}
                    className={`w-full p-3 border border-solid rounded text-p focus:outline-none focus:shadow-none text-neutral-2 ${response.error === 'answer 3' ? 'border-red-500' : 'border-primary-1'}`}
                  />
                  <span className="h-4 pt-1 w-full flex justify-end items-center">
                    <p className="text-red-500 text-sm">
                      {response.error === 'answer 3' && response.message}
                      {response.error === 'question 3' && response.message}
                    </p>
                  </span>
                </div>
                <button id={"signup"} type="button" onClick={() => secretQuestionsCheck()} className="highlight-btn min-w-full">Enviar</button>
              </>
            }
          </div>
        </div>
      </Nav>
    </main>
  )
}