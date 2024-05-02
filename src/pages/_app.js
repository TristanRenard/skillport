import "@/styles/globals.css"
import { Montserrat } from "next/font/google"


// eslint-disable-next-line new-cap
const montserrat = Montserrat({ subsets: ["latin"] })
const App = ({ Component, pageProps }) => (
  <main className={montserrat.className}>
    <Component {...pageProps} />
  </main>
)
export default App
