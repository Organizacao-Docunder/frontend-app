'use client'

import Image from "next/image";
import HighlightBtn from "./HighlightBtn";
import logo from '../assets/logo.svg'
import Link from "next/link";
import Input from "./Input";
import iconHelp from "../assets/icons/help.svg"
import iconSettings from "../assets/icons/settings.svg"
import iconEllipse from "../assets/icons/Ellipse.svg"
import { usePathname } from 'next/navigation';


export default function Header() {
  const pathname = usePathname();

  const isHomePage = pathname === '/home';

  return (
    <header
      className="w-full h-20 flex justify-center bg-neutral-4"
    >
      <div className="w-full h-full flex justify-between">
        <div className="flex w-1/5 items-center justify-center">
          <Link href={"/"} className="flex justify-center w-full">
            <Image alt="logo" src={logo} />
          </Link>
        </div>
        {isHomePage ?
          <div className="flex w-4/5 pr-20 pl-12 items-center justify-between">
            <div className="flex gap-12 w-1/2">
            <Link href={""}><h5 className="text-h5 text-neutral-2">Início</h5></Link>
            <Link href={""}><h5 className="text-h5 text-neutral-2">Minha biblioteca</h5></Link>
            <h5 className="text-h5 text-neutral-2">Times</h5>
            <HighlightBtn id={"create"} content={"Criar"} customStyle={'px-4'} link={""} />
            </div>
            <div className="flex gap-4 w-1/2">
              <Input placeholder={"Pesquisar"} type={""} name={"research"} border={false}/>
              <Image alt="icon-help" src={iconHelp} />
              <Image alt="icon-settings" src={iconSettings} />
              <Image alt="icon-ellipse" src={iconEllipse} />
            </div>
          </div>
          :
          <div className="flex w-4/5 pr-20 items-center justify-end gap-12">
            <Link href={"/about"}><h5 className="text-h5 text-neutral-2">Sobre</h5></Link>
            <Link href={"/login"}><h5 className="text-h5 text-neutral-2">Entrar</h5></Link>
            <h5 className="text-h5 text-neutral-2">Perguntas frequentes</h5>
            <HighlightBtn id={"start-free"} content={"Comece grátis"} customStyle={'px-4'} link={"/signup"} />
          </div>
        }
      </div>
    </header >
  );
}