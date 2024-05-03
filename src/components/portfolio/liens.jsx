import clsx from "clsx"
import { Montserrat } from "next/font/google"
import Link from "next/link"

const montserrat = Montserrat({ subsets: ["latin"] })
export const Description = ({ lstLien }) => (
  <div
    className={clsx(
      "mb-10 mx-4 flex align-middle justify-center",
      montserrat.className,
    )}
  >
    {lstLien.forEach((lien) => {
      return <Link href={lien.url}>{lien.type}</Link>
    })}
  </div>
)
