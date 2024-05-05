import NavBar from "@/components/NavBar"
import PopUp from "@/components/PopUp"
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
    type: "text",
    id: "username",
    label: "Username",
    placeholder: "Username",
  },
  {
    type: "password",
    id: "password",
    label: "Password",
    placeholder: "Password",
  },
  {
    type: "password",
    id: "confirmPassword",
    label: "Confirm Password",
    placeholder: "Confirm Password",
  }
]
const initialValues = {
  email: "",
  username: "",
  password: "",
  confirmPassword: ""
}
const registerSchema = yup.object().shape({
  email: yup.string().email().required(),
  username: yup.string().required(),
  password: yup.string().required().min(8),
  confirmPassword: yup.string().required().oneOf([yup.ref("password"), null], "Passwords must match")
})
// eslint-disable-next-line max-lines-per-function
const Register = () => {
  const [popup, setPopup] = useState(false)
  const [success, setSuccess] = useState(false)
  const [message, setMessage] = useState("")
  const router = useRouter()
  const handleClosePopup = () => {
    setPopup(false)

    if (success) {
      router.push("/auth/login")
    }
  }
  const handleSubmit = async (values) => {
    try {
      await registerSchema.validate(values)
      const { data } = await axios.post("http://localhost:3000/api/auth/register", values)

      setSuccess(true)
      setMessage(data.message)
      setPopup(true)
    } catch (error) {
      setSuccess(false)
      setMessage((String(error.response.data.message).startsWith("E11000")) ? "This is already exist" : error.response.data.message)
      setPopup(true)
    }
  }

  return (
    <>
      <PopUp open={popup} success={success} message={message} onClose={handleClosePopup} btnText={(success) ? "Login" : "Close"} clickBtn={handleClosePopup} />
      <div className="flex flex-col items-center min-h-screen">
        <NavBar />
        <div className="flex flex-1 w-full items-center justify-center">
          <div className="w-full flex justify-center">
            <div className="font-semibold flex justify-center items-center btn-primary w-1/3 bg-gradient-to-br from-primary to-[#df9884cc] rounded-3xl bg-opacity-15">
              <div className="w-full h-full bg-noise bg-fixed rounded-3xl flex flex-row justify-center items-center">
                <Formik
                  initialValues={initialValues}
                  validationSchema={registerSchema}
                  onSubmit={(values) => {
                    handleSubmit(values)
                  }}
                >
                  {({ errors, touched }) => (
                    <Form className="flex flex-col w-3/4 p-8 gap-8 justify-center items-center">
                      <h4 className="w-full text-center font-bold text-3xl text-quinary">Register</h4>
                      {Fields.map(({ id, type, label, placeholder }) => (
                        <div key={id} className="flex w-full flex-col gap-2 text-tertiary">
                          <label className="text-lg" htmlFor={id}>{label}</label>
                          <Field
                            type={type}
                            id={id}
                            name={id}
                            placeholder={placeholder}
                            className="w-full bg-[#df9884] placeholder:text-quinary placeholder:font-light placeholder:capitalize placeholder:italic p-2 px-3 rounded-xl outline-none border-tertiary border-2"
                            autoComplete="off"
                          />
                          {errors[id] && touched[id] && <div className="text-quinary-500 text-sm">{errors[id]}</div>}
                        </div>
                      ))}
                      <button
                        type="submit"
                        className="btn-primary w-full bg-gradient-to-br from-primary to-[#df9884] rounded-xl p-2 text-quinary font-semibold  disabled:opacity-50 border-tertiary border-2"
                      >
                        Register
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

export default Register
