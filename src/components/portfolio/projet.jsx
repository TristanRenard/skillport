import clsx from "clsx"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({ subsets: ["latin"] })
export const Projet = ({ imageUrl, titre, techno, date, description }) => (
  <div className={clsx("mb-20 w-sceen flex", montserrat.className)}>
    <div className="flex flex-col justify-between flex-1 p-4">
      <div className="flex justify-between">
        <p className="text-xl">{techno}</p>
        <p className="text-xl">© {date}</p>
      </div>
      <p className="font-bold text-7xl">{titre}</p>
    </div>
    <div className="flex-1 relative max-h-128">
      <img
        src={imageUrl}
        alt="Picture of the project"
        className="w-full max-h-128 object-cover"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity w-full h-full duration-300 hover:bg-primary hover:opacity-90">
        <div className="flex px-20 w-full h-full items-center justify-center">
          <p className="text-white text-center text-xl">{description}</p>
        </div>
      </div>
    </div>
  </div>
)
