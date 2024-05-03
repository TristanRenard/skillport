import clsx from "clsx"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({ subsets: ["latin"] })
export const Header = ({ imageUrl, text }) => (
  <div className={clsx("m-4 mb-20", montserrat.className)}>
    <h1 className="font-bold text-9xl max-w-screen-md">{text}</h1>
    <img
      src={imageUrl}
      alt="Picture of portfolio's author"
      className="max-h-72"
    />
  </div>
)
