import { useEffect, useState } from "react"

const ContactForm = ({ id, folioConfig, setFolioConfig, publish }) => {
  const [contact, setContact] = useState(folioConfig[id].options)

  useEffect(() => {
    setFolioConfig(prev => {
      prev[id].options = contact


      return prev
    })
  }, [contact, id, setFolioConfig])

  return (
    <div className="font-semibold flex justify-center items-center btn-primary w-11/12 bg-gradient-to-br from-primary to-[#df9884cc] rounded-3xl bg-opacity-15">
      <div className="w-full h-full bg-noise bg-fixed rounded-3xl flex flex-row justify-center items-center">
        <div className="flex flex-col w-3/4 p-8 gap-8 justify-center items-center">
          <h4 className="w-full font-bold text-xl text-quinary">Contact</h4>
          <div className="flex w-full flex-col gap-2 text-tertiary">
            <label className="text-lg" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={contact.email}
              onChange={(e) => setContact({ ...contact, email: e.target.value })}
              onBlur={publish}
              placeholder="Email"
              className="w-full bg-[#df9884] placeholder:text-quinary placeholder:font-light placeholder:italic p-2 px-3 rounded-xl outline-none border-primary border-2 autofill:bg-[#df9884]" autoComplete="off"
            />
          </div>
          <div className="flex w-full flex-col gap-2 text-tertiary">
            <label className="text-lg" htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              value={contact.phone}
              placeholder="Phone"
              onChange={(e) => setContact({ ...contact, phone: e.target.value })}
              onBlur={publish}
              className="w-full bg-[#df9884] placeholder:text-quinary placeholder:font-light placeholder:italic p-2 px-3 rounded-xl outline-none border-primary border-2"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm