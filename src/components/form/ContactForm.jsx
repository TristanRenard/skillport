/* eslint-disable max-lines */
import { ChevronDownIcon, ChevronUpIcon, XMarkIcon } from "@heroicons/react/24/solid"
import { useEffect, useState } from "react"

// eslint-disable-next-line max-lines-per-function
const ContactForm = ({ id, folioConfig, setFolioConfig, update, deleteIndex, upIndex, downIndex }) => {
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
          <div className="w-full flex">
            <h4 className="w-full font-bold text-xl text-quinary">Contact</h4>
            <button
              onClick={() => upIndex(id)}
            >
              <ChevronUpIcon className="fill-quinary h-7 w-h-7" />
            </button>
            <button
              onClick={() => downIndex(id)}
            >
              <ChevronDownIcon className="fill-quinary h-7 w-h-7" />
            </button>
            <button
              onClick={() => {
                deleteIndex(id)
                update()
              }}
            >
              <XMarkIcon className="fill-quinary h-7 w-h-7" />
            </button>
          </div>

          <div className="flex w-full flex-col gap-2 text-tertiary">
            <label className="text-lg" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={contact.email}
              onChange={(e) => setContact({ ...contact, email: e.target.value })}
              onBlur={update}
              placeholder="Email (can be empty)"
              className="w-full bg-[#df9884] placeholder:text-quinary placeholder:font-light placeholder:italic p-2 px-3 rounded-xl outline-none border-tertiary border-2 autofill:bg-[#df9884]" autoComplete="off"
            />
          </div>
          <div className="flex w-full flex-col gap-2 text-tertiary">
            <label className="text-lg" htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              value={contact.phone}
              placeholder="Phone (can be empty)"
              onChange={(e) => setContact({ ...contact, phone: e.target.value })}
              onBlur={update}
              className="w-full bg-[#df9884] placeholder:text-quinary placeholder:font-light placeholder:italic p-2 px-3 rounded-xl outline-none border-tertiary border-2"
            />
          </div>
          <div className="flex w-full flex-col gap-2 text-tertiary">
            <label className="text-lg" htmlFor="github">Github</label>
            <input
              type="url"
              id="github"
              value={contact.github}
              placeholder="Github (can be empty)"
              onChange={(e) => setContact({ ...contact, github: e.target.value })}
              onBlur={update}
              className="w-full bg-[#df9884] placeholder:text-quinary placeholder:font-light placeholder:italic p-2 px-3 rounded-xl outline-none border-tertiary border-2"
            />
          </div>
          <div className="flex w-full flex-col gap-2 text-tertiary">
            <label className="text-lg" htmlFor="linkedin">Linkedin</label>
            <input
              type="url"
              id="linkedin"
              value={contact.linkedin}
              placeholder="Linkedin (can be empty)"
              onChange={(e) => setContact({ ...contact, linkedin: e.target.value })}
              onBlur={update}
              className="w-full bg-[#df9884] placeholder:text-quinary placeholder:font-light placeholder:italic p-2 px-3 rounded-xl outline-none border-tertiary border-2"
            />
          </div>
          <div className="flex w-full flex-col gap-2 text-tertiary">
            <label className="text-lg" htmlFor="instagram">Instagram</label>
            <input
              type="url"
              id="instagram"
              value={contact.instagram}
              placeholder="Instagram (can be empty)"
              onChange={(e) => setContact({ ...contact, instagram: e.target.value })}
              onBlur={update}
              className="w-full bg-[#df9884] placeholder:text-quinary placeholder:font-light placeholder:italic p-2 px-3 rounded-xl outline-none border-tertiary border-2"
            />
          </div>
          <div className="flex w-full flex-col gap-2 text-tertiary">
            <label className="text-lg" htmlFor="twitter">Twitter</label>
            <input
              type="url"
              id="twitter"
              value={contact.twitter}
              placeholder="Twitter (can be empty)"
              onChange={(e) => setContact({ ...contact, twitter: e.target.value })}
              onBlur={update}
              className="w-full bg-[#df9884] placeholder:text-quinary placeholder:font-light placeholder:italic p-2 px-3 rounded-xl outline-none border-tertiary border-2"
            />
          </div>
          <div className="flex w-full flex-col gap-2 text-tertiary">
            <label className="text-lg" htmlFor="dribbble">Dribbble</label>
            <input
              type="url"
              id="dribbble"
              value={contact.dribbble}
              placeholder="Dribbble (can be empty)"
              onChange={(e) => setContact({ ...contact, dribbble: e.target.value })}
              onBlur={update}
              className="w-full bg-[#df9884] placeholder:text-quinary placeholder:font-light placeholder:italic p-2 px-3 rounded-xl outline-none border-tertiary border-2"
            />
          </div>
          <div className="flex w-full flex-col gap-2 text-tertiary">
            <label className="text-lg" htmlFor="behance">Behance</label>
            <input
              type="url"
              id="behance"
              value={contact.behance}
              placeholder="Behance (can be empty)"
              onChange={(e) => setContact({ ...contact, behance: e.target.value })}
              onBlur={update}
              className="w-full bg-[#df9884] placeholder:text-quinary placeholder:font-light placeholder:italic p-2 px-3 rounded-xl outline-none border-tertiary border-2"
            />
          </div>
          <div className="flex w-full flex-col gap-2 text-tertiary">
            <label className="text-lg" htmlFor="codepen">Codepen</label>
            <input
              type="url"
              id="codepen"
              value={contact.codepen}
              placeholder="Codepen (can be empty)"
              onChange={(e) => setContact({ ...contact, codepen: e.target.value })}
              onBlur={update}
              className="w-full bg-[#df9884] placeholder:text-quinary placeholder:font-light placeholder:italic p-2 px-3 rounded-xl outline-none border-tertiary border-2"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm