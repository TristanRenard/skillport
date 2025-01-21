import clsx from "clsx"
import Link from "next/link"
import { useState } from "react"

const ProjectLink = ({ link, children }) => <>
  {link ? (
    <Link href={link}>
      {children}
    </Link>
  ) : (
    <>{children}</>
  )}
</>

export const Projet = ({ imageUrl, titre, techno, date, description, link, index }) => {
  const [id] = useState(index)

  return (
    <ProjectLink link={link}>
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
            <div className="absolute top-1/3 left-1/3 transform -translate-x-1/3 -translate-y-1/3 opacity-0 transition-opacity w-full h-full duration-300 hover:bg-primary hover:opacity-90">
              <div className="flex px-5 md:px-20 w-full h-full items-center justify-center">
                <p className="text-white text-center text-sm sm:text-base lg:text-xl">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProjectLink>
  )
}
