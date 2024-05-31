import Image from "next/image";
import HighlightBtn from "./HighlightBtn";
import logo from '../assets/logo.svg'
import Link from "next/link";

export default function Header({ }) {
  return (
    <header
      className="w-full h-20 flex justify-center bg-neutral-4"
    >
      <div className="max-w-7xl w-full h-full flex justify-between">
        <div className="flex items-center w-1/5 justify-center">
          <Link href={"/"}>
            <Image alt="logo" src={logo} className="flex" />
          </Link>
        </div>
        <div className="flex w-4/5 items-center justify-end gap-12">
          <Link href={"/about"}><h5 className="text-h5 text-neutral-2">Sobre</h5></Link>
          <Link href={"/login"}><h5 className="text-h5 text-neutral-2">Entrar</h5></Link>
          <h5 className="text-h5 text-neutral-2">Perguntas frequentes</h5>
          <HighlightBtn id={"start-free"} content={"Comece grátis"} customStyle={'px-4'} link={"/signup"}/>
        </div>
      </div>
    </header >
  );
}