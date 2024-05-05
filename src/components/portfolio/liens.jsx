import clsx from "clsx"
import { Montserrat } from "next/font/google"
import Link from "next/link"

const montserrat = Montserrat({ subsets: ["latin"] })
export const Liens = ({ lstLien, mail, telephone }) => (
  <div
    className={clsx(
      "mb-10 mx-4 flex align-middle justify-center",
      montserrat.className,
    )}
  >
    <p>
      {telephone} {mail}
    </p>
    {/* {lstLien.map((lien, index) => {
      return (
        <Link key={index} href={lien.url}>
          {lien.type}
        </Link>
      )
    })} */}
  </div>
)
