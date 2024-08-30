import Bg from '../assets/bg.svg'

export default function Background({ children, custom = "" }) {
  return (
    <div className={`relative w-full flex flex-grow ${custom}`}>
      <Bg className="absolute z-0 w-screen object-cover"/>
      <div
        className="z-10 w-full h-full"
      >
        {children}
      </div>
    </div>
  )
}