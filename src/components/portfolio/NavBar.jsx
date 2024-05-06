import Link from "next/link"
import { useEffect, useState } from "react"

const NavBar = ({ lstComponent }) => {
  const [links, setLinks] = useState([])

  useEffect(() => {
    const lk = []
    lstComponent.map((element) => {
      if (element.type === "Header") {
        lk.push("Header")
      }

      if (element.type === "Title") {
        lk.push(element.options.text)
      }

      if (element.type === "Contact") {
        lk.push("Contact")
      }

      return null
    })
    setLinks(lk)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="top-0 left-0 w-full h-16 bg-tertiary bg-noise flex justify-center items-center z-50">
      {links.map((link, index) => (
        <Link key={index
        } href={`#${link}`} className="hover:text-primary transition-all font-bold text-xl mx-4">{link}</Link>
      ))}
    </div>
  )
}

export default NavBar