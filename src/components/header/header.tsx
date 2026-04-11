import Image from "next/image"
import Logo from "../../../public/assets/logo2.png"
import Link from "next/link"
import Button from "./LoginButton"

const Header = () => {
  return (
    <header className="w-full fixed top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-2 py-2 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={Logo} alt="Uplys Logo" width={52} height={50} />
          <span className="text-lg font-semibold text-text -ml-4 ">
            Uplys
          </span>
        </Link>

        {/* Botão */}
        <Button />

      </div>
    </header>
  )
}

export default Header