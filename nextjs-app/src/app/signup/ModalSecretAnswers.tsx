import CustomModal from "@/components/CustomModal";
import Image from "next/image";
import iconWarning from "../../assets/icons/warning.svg"

export default function ModalSecretAnswers({ isModalOpen, setIsModalOpen, secretQuestions, secondForm, onSubmit }) {
  let question1 = secretQuestions.filter(item => item.id == secondForm.questionId1)[0]
  let question2 = secretQuestions.filter(item => item.id == secondForm.questionId2)[0]
  let question3 = secretQuestions.filter(item => item.id == secondForm.questionId3)[0]

  return (
    <CustomModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <div className="p-9 flex flex-col items-center justify-center gap-4">
        <div className="w-full mb-9 flex flex-col items-center">
          <Image alt="icon-warning" src={iconWarning} />
          <h2 className="text-h1 text-neutral-2">Atenção</h2>
        </div>
        <div className="mb-4 w-full flex flex-col items-center">
          <p className="text-p text-red-500 font-weight-bold">Esta é uma etapa importante.</p>
          <p className="text-p text-red-500 font-weight-bold">Anote em local seguro suas respostas.</p>
          <p className="text-p text-red-500 font-weight-bold">Você só conseguirá recuperar sua senha respondendo às perguntas corretamente.</p>
        </div>
        <div className="w-full flex flex-col max-w-sm">
          <p className="text-p text-neutral-2">Pergunta Secreta 1: {secondForm.questionId1 !== 0 && question1.question}</p>
          <p className="text-p text-neutral-2 font-weight-bold p-3 w-full border border-solid rounded border-primary-1 uppercase">{secondForm.answer1}</p>
        </div>
        <div className="w-full flex flex-col max-w-sm">
          <p className="text-p text-neutral-2">Pergunta Secreta 2: {secondForm.questionId2 !== 0 && question2.question}</p>
          <p className="text-p text-neutral-2 font-weight-bold p-3 w-full border border-solid rounded border-primary-1 uppercase">{secondForm.answer2}</p>
        </div>
        <div className="w-full flex flex-col max-w-sm">
          <p className="text-p text-neutral-2">Pergunta Secreta 3: {secondForm.questionId3 !== 0 && question3.question}</p>          
          <p className="text-p text-neutral-2 font-weight-bold p-3 w-full border border-solid rounded border-primary-1 uppercase">{secondForm.answer3}</p>
        </div>
        <button onClick={() => setIsModalOpen(false)} className="w-full max-w-sm rounded-lg p-1 border border-primary-4 text-h5 text-neutral-2">Voltar</button>
        <button onClick={() => onSubmit()} className="w-full max-w-sm rounded-lg p-1 bg-primary-1 text-h5 text-neutral-1 font-weight-bold">Enviar</button>
      </div>
    </CustomModal>
  )
}