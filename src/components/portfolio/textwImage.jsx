import clsx from "clsx"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({ subsets: ["latin"] })
export const TexteImage = ({ texte, imageUrl }) => (
  <div className={clsx("flex gap-4 mb-10 mx-4", montserrat.className)}>
    <img
      src={imageUrl}
      alt="Picture of the project"
      className="w-full max-h-128 max-w-md object-cover"
    />
    <p className="text-xl">{texte}</p>
  </div>
)
