import Image from "next/image";
import HighlightBtn from "./HighlightBtn";
import logo from '../assets/logo.svg'

export default function Header({ }) {
  return (
    <header
      className="w-full h-20 flex justify-center bg-neutral-4"
    >
      <div className="max-w-7xl w-full h-full flex justify-between">
        <div className="flex items-center w-1/5 justify-center">
          <Image alt="logo" src={logo} className="flex" />
        </div>
        <div className="flex w-4/5 items-center justify-end gap-12">
          <h5 className="text-h5 text-neutral-2">Sobre</h5>
          <h5 className="text-h5 text-neutral-2">Entrar</h5>
          <h5 className="text-h5 text-neutral-2">Perguntas frequentes</h5>
          <HighlightBtn id={"start-free"} content={"Comece grátis"} paddingX={'px-4'}/>
        </div>
      </div>
    </header>
  );
}