import Image from "next/image";
import background from '../assets/bg.svg'

export default function Nav({ children }) {
  return (
    <nav className="relative w-full flex flex-grow">
      <Image className="absolute z-0 w-full h-full object-cover" alt="background-image" src={background} />
      <div
        className="z-10 w-full h-full"
      >
        {children}
      </div>
    </nav>
  )
}