import Input from "@/components/Input";
import HighlightBtn from "@/components/highlightBtn";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-12 p-24">
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
        <HighlightBtn id={"login"} content={"Entrar"} />
      </form>
    </main>
  );
}
