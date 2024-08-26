import Image from "next/image";
import background from '../assets/bg.svg'

export default function Background({ children, custom = "" }) {
  return (
    <div className={`relative w-full flex flex-grow ${custom}`}>
      <Image className="absolute z-0 w-full object-cover" alt="background-image" src={background} />
      <div
        className="z-10 w-full h-full"
      >
        {children}
      </div>
    </div>
  )
}