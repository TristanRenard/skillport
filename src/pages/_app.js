import { ConnectionContextProvider } from "@/context/connection"
import "@/styles/globals.css"
import { Montserrat } from "next/font/google"
import { QueryClient, QueryClientProvider } from "react-query"


// eslint-disable-next-line new-cap
const montserrat = Montserrat({ subsets: ["latin"] })
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },

})
const App = ({ Component, pageProps }) => (
  <div className={montserrat.className}>
    <QueryClientProvider client={queryClient}>
      <ConnectionContextProvider>
        <Component {...pageProps} />
      </ConnectionContextProvider>
    </QueryClientProvider>
  </div>
)
export default App
