'use client'

import Image from "next/image";
import iconInicio from '../../assets/icons/hard_drive.svg'
import iconRecentes from '../../assets/icons/schedule.svg'
import iconFavoritos from '../../assets/icons/star.svg'
import iconLixeira from '../../assets/icons/delete.svg'
import iconSeta from '../../assets/icons/arrow_back_ios_new.svg'
import { useRouter } from "next/navigation";
import { hasAccessToken } from "../../lib/auth/hasAccessToken";
import { useEffect, useState } from "react";
import Background from "@/components/Background";
import NavigationMenu from "@/components/NavigationMenu";

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
    <Background custom="overflow-hidden">
      <div className="flex min-w-full h-header">
        <NavigationMenu/>
        <section className="flex flex-col w-4/5 pl-12 pr-20 ">
          <h3 className="py-4 mb-4 text-neutral-2 font-weight-600">Início</h3>
          <div className="pb-6">
            <h4 className="text-h4 text-neutral-2 pb-2 font-weight-600">Acessar documento</h4>
            <div className="flex gap-3">
              <button className="filter-btn">Time</button>
              <button className="filter-btn">Minha biblioteca</button>
              {/* <button className="filter-btn">Favoritos</button> */}
            </div>
          </div>
          <div>
            <div className="w-full bg-neutral-1 pl-8 py-6 pr-11 rounded-lg box-shadow">
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
    </Background>
  );
}