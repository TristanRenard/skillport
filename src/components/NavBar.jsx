import clsx from "clsx"
import { Montserrat } from "next/font/google"

// eslint-disable-next-line new-cap
const montserrat = Montserrat({ subsets: ["latin"] })
const NavBar = () => (
  <nav className={clsx("flex min-h-28 border-b border-quinary justify-between items-center", montserrat.className)} >
    <h4 className="uppercase text-3xl font-black text-primary px-4">SkillPort</h4>
    <ul className="flex text-lg font-semibold px-4 gap-4">
      <li>Home</li>
      <li>Profile</li>
      <li>Settings</li>
    </ul>
  </nav >
)

export default NavBar