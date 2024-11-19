'use client';

import { validateFirstPart, validateSecondPart, signup } from './actions'
import { useEffect, useState } from "react";
import ModalSecretAnswers from './components/ModalSecretAnswers'
import ModalTerms from './components/ModalTerms'
import { useRouter } from "next/navigation";
import Background from '@/components/Background';
import Image from 'next/image';

import eyesOpenIcon from '@/assets/icons/eyes_open.png'
import eyesClosedIcon from '@/assets/icons/eyes_closed.png'

export default function SignupPage() {
  const [isModalSecretAnswersOpen, setIsModalSecretAnswersOpen] = useState(false);
  const [isModalTermsOpen, setIsModalTermsOpen] = useState(false);
  const [isCheckedTerms, setIsCheckedTerms] = useState(false);
  const [showPassword, setShowPassword] = useState('password');
  const [showMatchPassword, setShowMatchPassword] = useState('password');
  const [isFirstForm, setIsFirstForm] = useState(true)
  const [response, setResponse] = useState({ message: "", error: "" })
  const [filteredQuestions1, setFilteredQuestions1] = useState([{ id: 0, question: "" }])
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
    setFilteredQuestions1(secretQuestions.filter(item => item.id != secondForm.questionId2 && item.id != secondForm.questionId3))
    setFilteredQuestions2(secretQuestions.filter(item => item.id != secondForm.questionId1 && item.id != secondForm.questionId3))
    setFilteredQuestions3(secretQuestions.filter(item => item.id != secondForm.questionId1 && item.id != secondForm.questionId2))
  }, [secondForm.questionId1, secondForm.questionId2, secondForm.questionId3])

  async function goToSecondPart() {
    const result: any = await validateFirstPart(firstForm)
    if (result.error !== "") {
      setResponse(result)
    } else {
      setIsFirstForm(false)
    }
  }

  async function secretQuestionsCheck() {
    const result: any = await validateSecondPart(secondForm)
    if (result.error !== "") {
      setResponse(result)
    }
    if (result.error.length === 0) {
      setResponse({ message: "", error: "" })
      setIsModalSecretAnswersOpen(true)
    }
  }
  
  const router = useRouter();
  
  async function onSubmit() {
    const result: any = await signup(firstForm, secondForm);
    setResponse(result)
    if (result.error === "email") {
      setIsFirstForm(true)
      setIsCheckedTerms(false)
    }
    if (result.error.length === 0) {
      router.push("/home")
    }
  }

  const termsCheck = (e) => e.target.checked ? setIsCheckedTerms(true) : setIsCheckedTerms(false)

  return (
    <Background custom="overflow-hidden">
      <ModalSecretAnswers isModalOpen={isModalSecretAnswersOpen} setIsModalOpen={setIsModalSecretAnswersOpen} secretQuestions={secretQuestions} secondForm={secondForm} onSubmit={onSubmit} />
      <ModalTerms isModalOpen={isModalTermsOpen} setIsModalOpen={setIsModalTermsOpen} />
      <div className="h-header flex flex-col gap-12 justify-center items-center">
        <h1 className="text-primary-1 font-weight-600">Primeiros Passos</h1>
        <div id="formSignup" className="flex flex-col items-center w-80 gap-3">
          {isFirstForm ?
            <>
              <div className="flex flex-col w-full">
                <div>
                  <p className="text-neutral-2 py-1">Nome</p>
                  <input
                    placeholder="Insira seu nome"
                    required
                    type="text"
                    name="name"
                    id="name"
                    value={firstForm.name}
                    onChange={(e) => onChange(e, firstForm, setFirstForm)}
                    className={`w-full px-3 h-10 border border-solid rounded text-neutral-2 ${response.error === 'name' ? 'border-red-500' : 'border-primary-1'}`}
                  />
                  <span className="h-4 pt-1 w-full flex justify-end items-center">
                    <p className="text-red-500 text-sm">
                      {response.error === 'name' && response.message}
                    </p>
                  </span>
                </div>
                <div>
                  <p className="text-neutral-2 py-1">E-mail</p>
                  <input
                    placeholder="Insira seu e-mail"
                    required
                    type="text"
                    name="email"
                    id="email"
                    value={firstForm.email}
                    onChange={(e) => onChange(e, firstForm, setFirstForm)}
                    className={`w-full px-3 h-10 border border-solid rounded text-neutral-2 ${response.error === 'email' ? 'border-red-500' : 'border-primary-1'}`}
                  />
                  <span className="h-4 pt-1 w-full flex justify-end items-center">
                    <p className="text-red-500 text-sm">
                      {response.error === 'email' && response.message}
                    </p>
                  </span>
                </div>
                <div>
                  <p className="text-neutral-2 py-1">Senha</p>
                  <div className={`w-full flex h-10 border border-solid rounded text-neutral-2 overflow-hidden ${response.error === 'password' || response.error === 'match password' ? 'border-red-500' : 'border-primary-1'}`}>
                    <input
                      placeholder="Insira sua senha"
                      required
                      type={showPassword}
                      name="password"
                      id="password"
                      value={firstForm.password}
                      onChange={(e) => onChange(e, firstForm, setFirstForm)}
                      className='w-full h-full pl-3'
                    />
                    <button className="bg-white pr-3" onClick={(e) => {
                      e.preventDefault()
                      setShowPassword(showPassword === 'password' ? 'text' : 'password')
                    }}>
                      <Image
                        src={showPassword === 'password' ? eyesClosedIcon : eyesOpenIcon}
                        alt="password icon"
                        width={24}
                        height={24}
                      />
                    </button>
                  </div>
                  <span className="h-4 pt-1 w-full flex justify-end items-center">
                    <p className="text-red-500 text-sm">
                      {response.error === 'password' && response.message}
                    </p>
                  </span>
                </div>
                <div>
                  <p className="text-neutral-2 py-1">Confirmar senha</p>

                  <div className={`w-full flex h-10 border border-solid rounded text-neutral-2 overflow-hidden ${response.error === 'password' || response.error === 'match password' ? 'border-red-500' : 'border-primary-1'}`}>
                    <input
                      placeholder="Confirme sua senha"
                      required
                      type={showMatchPassword}
                      name="matchPassword"
                      value={firstForm.matchPassword}
                      onChange={(e) => onChange(e, firstForm, setFirstForm)}
                      className='w-full h-full pl-3'
                    />
                    <button className="bg-white pr-3" onClick={(e) => {
                      e.preventDefault()
                      setShowMatchPassword(showMatchPassword === 'password' ? 'text' : 'password')
                    }}>
                      <Image
                        src={showMatchPassword === 'password' ? eyesClosedIcon : eyesOpenIcon}
                        alt="password icon"
                        width={24}
                        height={24}
                      />
                    </button>
                  </div>
                  <span className="h-4 pt-1 w-full flex justify-end items-center">
                    <p className="text-red-500 text-sm">
                      {response.error === 'match password' && response.message}
                    </p>
                  </span>
                </div>
              </div>
              <div className="flex align-top gap-2 pb-3">
                <input
                  type='checkbox'
                  id='termsOfUse'
                  name='termsOfUse'
                  required
                  onClick={(e) => termsCheck(e)}
                />
                <label className="text-neutral-2" htmlFor='termsOfUse'>Estou ciente sobre os <span onClick={() => setIsModalTermsOpen(true)} className="text-primary-1 cursor-pointer">Termos de Uso e Políticas de privacidade</span> do Docunder.</label>
              </div>
              <button type="button" disabled={!isCheckedTerms} onClick={() => goToSecondPart()} className="highlight-btn min-w-full">Continuar</button>
            </>
            :
            <>
              <p className=" text-primary-1 pb-3 text-center">Caso você esqueça sua senha, terá que responder às seguintes perguntas para recuperá-la:</p>
              <div className="flex flex-col w-full">
                <select
                  value={secondForm.questionId1}
                  onChange={(e) => onChange(e, secondForm, setSecondForm)}
                  name="questionId1"
                  id="questionId1"
                  className={`h-10 mb-2 w-full focus:outline-none focus:shadow-none bg-white border rounded-md pl-3 pr-10 text-neutral-2 ${response.error === 'question 1' ? 'border-red-500' : 'border-primary-1'}`}
                >
                  <option value={0} disabled className="text-neutral-3 ">Escolha a primeira pergunta</option>
                  {filteredQuestions1.map(item => <option key={item.id} value={item.id}>{item.question}</option>)}
                </select>
                <input
                  placeholder="Resposta secreta 1"
                  type="text"
                  name="answer1"
                  value={secondForm.answer1}
                  onChange={(e) => onChange(e, secondForm, setSecondForm)}
                  className={`w-full px-3 h-10 border border-solid rounded focus:outline-none focus:shadow-none text-neutral-2 ${response.error === 'answer 1' ? 'border-red-500' : 'border-primary-1'}`}
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
                  className={`h-10 mb-2 w-full focus:outline-none focus:shadow-none border border-primary-1 rounded-md pl-3 pr-10 text-neutral-2 ${response.error === 'question 2' ? 'border-red-500' : 'border-primary-1'}`}
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
                  className={`w-full px-3 h-10 border border-solid rounded focus:outline-none focus:shadow-none text-neutral-2 ${response.error === 'answer 2' ? 'border-red-500' : 'border-primary-1'}`}
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
                  className={`h-10 mb-2 w-full focus:outline-none focus:shadow-none bg-white border rounded-md pl-3 pr-10 text-neutral-2 ${response.error === 'question 3' ? 'border-red-500' : 'border-primary-1'}`}
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
                  className={`w-full px-3 h-10 border border-solid rounded focus:outline-none focus:shadow-none text-neutral-2 ${response.error === 'answer 3' ? 'border-red-500' : 'border-primary-1'}`}
                />
                <span className="h-4 pt-1 w-full flex justify-end items-center">
                  <p className="text-red-500 text-sm">
                    {response.error === 'answer 3' && response.message}
                    {response.error === 'question 3' && response.message}
                  </p>
                </span>
              </div>
              <p className=" text-neutral-2 pb-3">Ao se cadastrar, estou ciente dos <span onClick={() => setIsModalTermsOpen(true)} className="text-primary-1 cursor-pointer">Termos de Uso e das Políticas de privacidade</span> do Docunder.</p>
              <button id={"signup"} type="button" onClick={() => secretQuestionsCheck()} className="highlight-btn min-w-full">Enviar</button>
            </>
          }
        </div>
      </div>
    </Background>
  )
}