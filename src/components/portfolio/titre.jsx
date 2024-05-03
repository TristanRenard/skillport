import clsx from "clsx"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({ subsets: ["latin"] })
export const Titre = ({ titre }) => (
  <div className={clsx("mb-10 mx-4", montserrat.className)}>
    <h1 className="font-bold text-7xl">{titre}</h1>
  </div>
)
