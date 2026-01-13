import { useConnectionContext } from "@/context/connection"
import axios from "axios"
import Cookies from "js-cookie"
import { useRouter } from "next/router"
import { useEffect } from "react"

const Logout = () => {
  const router = useRouter()
  const { setConnected } = useConnectionContext()

  useEffect(() => {
    const logout = async () => {
      await axios.get("/api/auth/logout")
      Cookies.remove("token")
      setConnected(undefined)
      router.push("/")
    }

    logout()
  }, [router, setConnected])

  return (
    <div>
      <h1>Logout</h1>
    </div>
  )
}

export default Logout
