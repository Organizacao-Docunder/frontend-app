import Header from "@/components/Header";
import HighlightBtn from "@/components/HighlightBtn";
import Input from "@/components/Input";
import Nav from "@/components/Nav";

export default function SignupPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start ">
      <Header />
      <Nav>
        <h1 className="text-h1 text-primary-1 font-weight-bold">Primeiros Passos</h1>
        <form className="flex flex-col items-center w-80 gap-3">
          <div className="flex flex-col w-full gap-3">
            <div>
              <p className="text-p text-neutral-2 py-1">Nome</p>
              <Input
                placeholder="Insira seu nome"
                type="text"
                name="nome"
              />
            </div>
            <div>
              <p className="text-p text-neutral-2 py-1">E-mail</p>
              <Input
                placeholder="Insira seu e-mail"
                type="text"
                name="email"
              />
            </div>
            <div>
              <p className="text-p text-neutral-2 py-1">Senha</p>
              <Input
                placeholder="Insira seu senha"
                type="password"
                name="password"
              />
            </div>
            <div>
              <p className="text-p text-neutral-2 py-1">Confirmar senha</p>
              <Input
                placeholder="Confirme seu senha"
                type="password"
                name="password"
              />
            </div>
            <div>
              <p className="text-p text-neutral-2 py-1">Apelido</p>
              <Input
                placeholder="Como deseja ser chamado (a)"
                type="text"
                name="nickname"
              />
            </div>
          </div>
          <p className=" text-p text-neutral-2 pb-3">Ao se cadastrar, estou ciente dos Termos de Uso e das Políticas de privacidade do Docunder.</p>
          <HighlightBtn id={"signup"} content={"Continuar"} customStyle={'min-w-full'} link={"/home"}/>
        </form>
      </Nav>
    </main>
  )
}