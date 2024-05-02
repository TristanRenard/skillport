import "@/styles/globals.css"
import clsx from "clsx"
import { Montserrat } from "next/font/google"


// eslint-disable-next-line new-cap
const montserrat = Montserrat({ subsets: ["latin"] })
export default function App({ Component, pageProps }) {
  return (
    <main className={clsx("min-h-screen bg-tertiary bg-noise bg-fixed", montserrat.className)}>
      <Component {...pageProps} />
    </main>
  )
}
