import { useConnectionContext } from "@/context/connection"
import Link from "next/link"

const disconnectedLinks = [
  { name: "Login", href: "/auth/login" },
  { name: "Register", href: "/auth/register" },
]
const connectedLinks = [
  { name: "Home", href: "/" },
  { name: "Create Folio", href: "/createFolio" },
  { name: "Logout", href: "/auth/logout" },
]
const NavBar = () => {
  const { connected } = useConnectionContext()

  return (
    <nav className="w-full flex py-6 justify-between items-center" >
      <Link href="/">
        <h4 className="uppercase ml-9 text-3xl font-black text-primary px-4">SkillPort</h4>
      </Link>
      <ul className="flex text-xl font-semibold px-4 mr-9 gap-3">
        {connected ? (
          connectedLinks.map(({ name, href }, index) => (
            <div key={index} className="flex gap-3">
              <li>
                <Link className="hover:text-primary transition-all duration-300" href={href}>
                  {name}
                </Link>
              </li>
              {index !== connectedLinks.length - 1 && (
                <li className="text-xl">
                  |
                </li>
              )}
            </div>

          ))
        ) : (
          disconnectedLinks.map(({ name, href }, index) => (
            <div key={index} className="flex gap-3">
              <li>
                <Link className="hover:text-primary transition-all duration-300" href={href}>
                  {name}
                </Link>
              </li>
              {index !== disconnectedLinks.length - 1 && (
                <li className="text-xl">
                  |
                </li>
              )}
            </div>
          ))
        )}

      </ul>
    </nav >
  )
}

export default NavBar