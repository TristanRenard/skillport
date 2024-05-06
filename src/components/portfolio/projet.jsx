import clsx from "clsx"
import { useState } from "react"

export const Projet = ({ imageUrl, titre, techno, date, description, index }) => {
  const [id] = useState(index)

  return (
    <div className={clsx(
      "group w-full flex border-y border-primary", (id % 2 !== 0 ? "bg-tertiary " : "bg-tertiary bg-noise text-quaternary md:bg-gradient-to-br from-primary to-[#df9884cc] md:text-quinary")
    )}>
      <div className="w-full flex flex-col md:flex-row bg-noise">
        <div className=" flex flex-col-reverse md:flex-col justify-between md:w-1/2 p-4 transition-all">
          <div className="flex justify-between">
            <p className="text-xl">{techno}</p>
            <p className="text-xl">© {date}</p>
          </div>
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">{titre}</p>
        </div>
        <div className="md:w-1/2 relative max-h-128">
          {/* eslint-disable-next-line @next/next/no-img-element */}
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
    </div>
  )
}
