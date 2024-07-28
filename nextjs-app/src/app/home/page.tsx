'use client'

import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Image from "next/image";
import iconInicio from '../../assets/icons/hard_drive.svg'
import iconRecentes from '../../assets/icons/schedule.svg'
import iconFavoritos from '../../assets/icons/star.svg'
import iconLixeira from '../../assets/icons/delete.svg'
import iconSeta from '../../assets/icons/arrow_back_ios_new.svg'
import { useRouter } from "next/navigation";
import { hasAccessToken } from "../../../actions/hasAccessToken";
import { useEffect, useState } from "react";

export default function HomePage() {
  const router = useRouter()
  const [accessTokenExists, setAccessTokenExists] = useState(false)

  useEffect(() => {
    async function checkAccessToken() {
      const tokenExists = await hasAccessToken()
      setAccessTokenExists(tokenExists)
    }
    checkAccessToken()
  }, [])
  
  useEffect(() => {
    // if (!accessTokenExists) {
    //   router.push("/login")
    // }
    console.log("home", accessTokenExists)
  }, [accessTokenExists])

  return (
    <main className="flex min-h-screen min-w-full flex-col items-center">
      <Header home={true}/>
      <Nav>
        <div className="flex min-w-full h-header">
          <aside className="flex flex-col gap-3 px-9 pt-4 w-1/5 bg-neutral-1">
            <span className="flex gap-4">
              <Image alt="icon-inicio" src={iconInicio} />
              <h5 className="text-h5 text-neutral-2">Início</h5>
            </span>
            <span className="flex gap-4">
              <Image alt="icon-inicio" src={iconRecentes} />
              <h5 className="text-h5 text-neutral-2">Recentes</h5>
            </span>
            <span className="flex gap-4">
              <Image alt="icon-inicio" src={iconFavoritos} />
              <h5 className="text-h5 text-neutral-2">Favoritos</h5>
            </span>
            <span className="flex gap-4">
              <Image alt="icon-inicio" src={iconLixeira} />
              <h5 className="text-h5 text-neutral-2">Lixeira</h5>
            </span>
            <span className="line my-2"></span>
            <span className="flex gap-4">
              <Image alt="icon-inicio" src={iconSeta} />
              <h5 className="text-h5 text-neutral-2">Times</h5>
            </span>
          </aside>
          <section className="flex flex-col w-4/5 pl-12 pr-20 ">
            <h3 className="text-h3 py-4 text-neutral-2 font-weight-bold">Início</h3>
            <div className="pb-6">
              <h4 className="text-h4 text-neutral-2 pb-2">Acessar documento</h4>
              <div className="flex gap-3">
                <button className="filter-btn">Time</button>
                <button className="filter-btn">Minha biblioteca</button>
                <button className="filter-btn">Favoritos</button>
              </div>
            </div>
            <div>
              <div className="w-full bg-neutral-1 pl-8 py-6 pr-11 rounded-lg">
                <h3 className="text-h3 mb-1 text-neutral-2 font-weight-bold">Documento teste</h3>
                <div className="flex items-center gap-1 mb-3">
                  <span className="tag">#Python</span>
                  <span className="tag">#Dev</span>
                </div>
                <p className="text-p text-neutral-2 mb-4">Lorem ipsum dolor sit amet consectetur. Gravida ut gravida eu viverra eget mollis. Volutpat in cursus imperdiet est. Cursus tincidunt sem lacus facilisis pellentesque neque diam. Donec odio sit massa in fermentum nec tempus quam diam.Lorem ipsum dolor sit amet consectetur. Gravida ut gravida eu viverra eget mollis. Volutpat in cursus imperdiet est. Cursus tincidunt sem lacus facilisis pellentesque neque diam. Donec odio sit massa in fermentum nec tempus quam diam.</p>
                <div className="flex justify-between w-full">
                  <span className="border border-primary-1 text-primary-1 px-4 py-1 rounded-lg">Time</span>
                  <button className="highlight-btn-sm">Acessar</button>
                </div>
              </div>
            </div>
          </section>

        </div>

      </Nav>
    </main>
  );
}