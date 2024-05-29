import Image from "next/image";
import background from '../assets/bg.svg'

export default function Nav({ children }) {
  return (
    <nav className="relative w-full flex flex-col flex-grow items-center justify-center">
      <Image className="absolute z-0 w-full h-full object-cover" alt="background-image" src={background} />
      <div
        className="z-10 flex flex-col items-center justify-center gap-12"
      >
        {children}
      </div>
    </nav>
  )
}