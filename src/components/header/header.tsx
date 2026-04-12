"use client";

import Image from "next/image"
import Logo from "../../../public/assets/logo1.png"
import Link from "next/link"
import Button from "./LoginButton"
import Base from "./base"
import { Show, UserButton, useUser } from "@clerk/nextjs"

const Header = () => {
  const { user } = useUser();

  return (
    <header className="w-full backdrop-blur-md bg-white/70">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={Logo} alt="Uplys Logo" width={52} height={50} className="-ml-3" />
          <span
            className="
    text-lg font-semibold uppercase -ml-4
    text-black/90
  "
          >
            Uplys
          </span>
        </Link>

        <Base />

        <div className="flex justify-end items-center p-2 gap-4 h-16">
          <Show when="signed-in">
            <div className="flex items-center gap-2">
              <UserButton />
              <p> {user?.firstName} {user?.lastName}</p>
            </div>
          </Show>

          <Show when="signed-out">
            <Button />
          </Show>

        </div>

      </div>
    </header>
  )
}

export default Header