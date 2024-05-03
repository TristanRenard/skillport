import NavBar from "@/components/NavBar"
import PopUp from "@/components/PopUp"
import { useConnectionContext } from "@/context/connection"
import axios from "axios"
import { Field, Form, Formik } from "formik"
import { useRouter } from "next/router"
import { useState } from "react"
import * as yup from "yup"

const Fields = [
  {
    type: "email",
    id: "email",
    label: "Email",
    placeholder: "Email",
  },
  {
    type: "password",
    id: "password",
    label: "Password",
    placeholder: "Password",
  }
]
const initialValues = {
  email: "",
  password: ""
}
const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required()
})
const Login = () => {
  const [popup, setPopup] = useState(false)
  const [success, setSuccess] = useState(false)
  const [message, setMessage] = useState("")
  const { setConnected } = useConnectionContext()
  const router = useRouter()
  const handleClosePopup = () => {
    setPopup(false)

    if (success) {
      router.push("/")
    }
  }
  const handleSubmit = async (values) => {
    try {
      await loginSchema.validate(values)
      const { data } = await axios.post("http://localhost:3000/api/auth/login", values)
      setConnected(true)
      setSuccess(true)
      setMessage(data.message)
      setPopup(true)
    } catch (error) {
      setSuccess(false)
      setMessage(error.response.data.message)
      setPopup(true)
    }
  }

  return (
    <>
      <PopUp open={popup} success={success} message={message} btnText="Login" onClose={handleClosePopup} clickBtn={handleClosePopup} />
      <div className="flex flex-col items-center min-h-screen">
        <NavBar />
        <div className="flex flex-1 w-full items-center justify-center">
          <div className="w-full flex justify-center">
            <div className="font-semibold flex justify-center items-center btn-primary w-1/3 bg-gradient-to-br from-primary to-[#df9884cc] rounded-3xl bg-opacity-15">
              <div className="w-full h-full bg-noise bg-fixed rounded-3xl flex flex-row justify-center items-center">
                <Formik initialValues={initialValues} validationSchema={loginSchema} onSubmit={(values) => { handleSubmit(values) }}>
                  {({ errors, touched }) => (
                    <Form className="flex flex-col w-3/4 p-8 gap-8 justify-center items-center">
                      <h4 className="w-full text-center font-bold text-3xl text-quinary">Login</h4>
                      {Fields.map(({ id, type, label, placeholder }) => (
                        <div key={id} className="flex w-full flex-col gap-2 text-tertiary">
                          <label className="text-lg" htmlFor={id}>{label}</label>
                          < Field type={type} id={id} name={id} placeholder={placeholder} className="w-full bg-[#df9884] placeholder:text-quinary placeholder:font-light placeholder:capita lize placeholder:italic p-2 px-3 rounded-xl outline-none border-tertiary border-2" autoComplete="off" />
                          {errors[id] && touched[id] && <div className="text-quinary-500 text-sm">{errors[id]}</div>}
                        </div>
                      ))}
                      <button
                        type="submit"
                        className="btn-primary w-full bg-gradient-to-br from-primary to-[#df9884] rounded-xl p-2 text-quinary font-semibold border-tertiary border-2 disabled:opacity-50"
                      >
                        Login
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Login