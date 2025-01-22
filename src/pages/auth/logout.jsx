import axios from "axios"
import { useRouter } from "next/router"
import { useEffect } from "react"

const Logout = () => {
  const router = useRouter()

  useEffect(() => {
    const logout = () => {
      axios("/api/auth/logout")
      router.push("/")
    }

    logout()

    return logout
  }, [router])

  return (
    <div>
      <h1>Logout</h1>
    </div>
  )
}

export default Logout
