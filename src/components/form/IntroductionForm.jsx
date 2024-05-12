import { ChevronDownIcon, ChevronUpIcon, XMarkIcon } from "@heroicons/react/24/solid"
import { useEffect, useState } from "react"

const IntroductionForm = ({ folioConfig, setFolioConfig, id, update, deleteIndex, upIndex, downIndex }) => {
  const [intro, setIntro] = useState(folioConfig[id].options)

  useEffect(() => {
    setFolioConfig((prev) => {
      prev[id].options = intro


      return prev
    })
  }, [id, intro, setFolioConfig])

  return (
    <div className="font-semibold flex justify-center items-center btn-primary w-11/12 bg-gradient-to-br from-primary to-[#df9884cc] rounded-3xl bg-opacity-15">
      <div className="w-full h-full bg-noise bg-fixed rounded-3xl flex flex-row justify-center items-center">
        <div className="flex flex-col w-3/4 p-8 gap-6 justify-center items-center">
          <div className="w-full flex">
            <h4 className="w-full font-bold text-xl text-quinary">Introduction</h4>
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
            <label className="text-lg" htmlFor="subTitle">Sub Title</label>
            <input
              type="text"
              id="subTitle"
              value={intro.subTitle}
              onChange={(e) => setIntro({ ...intro, subTitle: e.target.value })}
              onBlur={update}
              placeholder="Sub Title"
              className="w-full bg-[#df9884] placeholder:text-quinary placeholder:font-light placeholder:italic p-2 px-3 rounded-xl outline-none border-tertiary border-2 autofill:bg-[#df9884]" autoComplete="off"
            />
          </div>
          <div className="flex w-full flex-col gap-2 text-tertiary">
            <label className="text-lg" htmlFor="text">Text</label>
            <textarea
              id="text"
              value={intro.text}
              placeholder="Introduction Text"
              onChange={(e) => setIntro({ ...intro, text: e.target.value })}
              onBlur={update}
              className="w-full bg-[#df9884] placeholder:text-quinary placeholder:font-light placeholder:italic p-2 px-3 rounded-xl outline-none border-tertiary border-2"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntroductionForm