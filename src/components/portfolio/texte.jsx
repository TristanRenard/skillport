import clsx from "clsx"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({ subsets: ["latin"] })
export const Texte = ({ texte }) => (
  <div className={clsx("mb-10 mx-4", montserrat.className)}>
    <p className="text-xl">{texte}</p>
  </div>
)
