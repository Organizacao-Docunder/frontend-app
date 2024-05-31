import Input from "@/components/Input";
import HighlightBtn from "@/components/HighlightBtn";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start ">
      <Header />
      <Nav>
        <h1 className="text-h1 text-primary-1 font-weight-bold">Entrar</h1>
        <form className="flex flex-col items-center w-80 gap-6">
          <div className="flex flex-col w-full gap-3">
            <Input
              placeholder="E-mail"
              type="text"
              name="email"
            />
            <Input
              placeholder="Senha"
              type="password"
              name="password"
            />
          </div>
          <HighlightBtn id={"login"} content={"Entrar"} customStyle={'px-20'} link={"/home"}/>
        </form>
        <div className="flex flex-col items-center">
          <p className="text-neutral-2">Esqueceu sua senha?</p>
          <p className="text-neutral-2">Não possui uma conta? <Link href={"/signup"} className="text-primary-1">Criar</Link></p>
        </div>
      </Nav>
    </main>
  );
}
