import clsx from "clsx"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({ subsets: ["latin"] })
export const Description = ({ text, titre }) => (
  <div className={clsx("m-4 mb-20 flex justify-end", montserrat.className)}>
    <div className="flex justify-center items-center w-full">
      <p className="max-w-screen-md">{text}</p>
    </div>
    <h2 className="font-bold text-7xl text-end">{titre}</h2>
  </div>
)
