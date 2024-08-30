import IconHome from '../assets/icons/home.svg'
import IconRecentes from '../assets/icons/schedule.svg'
import IconFavoritos from '../assets/icons/star.svg'
import IconLixeira from '../assets/icons/delete.svg'
import IconSettings from '../assets/icons/settings.svg'
import IconQuiz from '../assets/icons/quiz.svg'
import { useState } from 'react'

export default function NavigationMenu() {
  const [activeBtn, setActiveBtn] = useState('home-btn')

  return (
    <aside className="flex flex-col gap-4 pt-4 w-1/5 bg-neutral-1">
      <div
        onClick={() => setActiveBtn('home-btn')}
        className={`ml-9 cursor-pointer flex items-center h-12 ${activeBtn === 'home-btn' ? 'text-primary-1' : 'text-neutral-2'} hover:text-primary-2`}
      >
        <span className={`w-px h-6 mr-1 ${activeBtn === 'home-btn' ? 'bg-current' : 'bg-transparent'} bg-current`}></span>
        <span className="w-6 h-6 mr-3 flex justify-center items-center">
          <IconHome />
        </span>
        <h5 className="text-h5">Início</h5>
      </div>
      <div
        onClick={() => setActiveBtn('recent-btn')}
        className={`ml-9 cursor-pointer flex items-center h-12 ${activeBtn === 'recent-btn' ? 'text-primary-1' : 'text-neutral-2'} hover:text-primary-2`}
      >
        <span className={`w-px h-6 mr-1 ${activeBtn === 'recent-btn' ? 'bg-current' : 'bg-transparent'} bg-current`}></span>
        <span className="w-6 h-6 mr-3 flex justify-center items-center">
          <IconRecentes />
        </span>
        <h5 className="text-h5">Recentes</h5>
      </div>
      <div
        onClick={() => setActiveBtn('favorites-btn')}
        className={`ml-9 cursor-pointer flex items-center h-12 ${activeBtn === 'favorites-btn' ? 'text-primary-1' : 'text-neutral-2'} hover:text-primary-2`}
      >
        <span className={`w-px h-6 mr-1 ${activeBtn === 'favorites-btn' ? 'bg-current' : 'bg-transparent'} bg-current`}></span>
        <span className="w-6 h-6 mr-3 flex justify-center items-center">
          <IconFavoritos />
        </span>
        <h5 className="text-h5">Favoritos</h5>
      </div>
      <div
        onClick={() => setActiveBtn('trash-btn')}
        className={`ml-9 cursor-pointer flex items-center h-12 ${activeBtn === 'trash-btn' ? 'text-primary-1' : 'text-neutral-2'} hover:text-primary-2`}
      >
        <span className={`w-px h-6 mr-1 ${activeBtn === 'trash-btn' ? 'bg-current' : 'bg-transparent'} bg-current`}></span>
        <span className="w-6 h-6 mr-3 flex justify-center items-center">
          <IconLixeira />
        </span>
        <h5 className="text-h5">Lixeira</h5>
      </div>

      <span className="w-full h-px bg-primary-3 my-10"></span>

      <div
        onClick={() => setActiveBtn('settings-btn')}
        className={`ml-9 cursor-pointer flex items-center h-12 ${activeBtn === 'settings-btn' ? 'text-primary-1' : 'text-neutral-2'} hover:text-primary-2`}
      >
        <span className={`w-px h-6 mr-1 ${activeBtn === 'settings-btn' ? 'bg-current' : 'bg-transparent'} bg-current`}></span>
        <span className="w-6 h-6 mr-3 flex justify-center items-center">
          <IconSettings width="18" height="18"/>
        </span>
        <h5 className="text-h5">Configurações</h5>
      </div>
      <div
        onClick={() => setActiveBtn('quiz-btn')}
        className={`ml-9 cursor-pointer flex items-center h-12 ${activeBtn === 'quiz-btn' ? 'text-primary-1' : 'text-neutral-2'} hover:text-primary-2`}
      >
        <span className={`w-px h-6 mr-1 ${activeBtn === 'quiz-btn' ? 'bg-current' : 'bg-transparent'} bg-current`}></span>
        <span className="w-6 h-6 mr-3 flex justify-center items-center">
          <IconQuiz />
        </span>
        <h5 className="text-h5">FAQ</h5>
      </div>
    </aside>
  )
}