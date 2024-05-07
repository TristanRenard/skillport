import { ChevronDownIcon, ChevronUpIcon, XMarkIcon } from "@heroicons/react/24/solid"
import { useEffect, useState } from "react"

const TextWithImageForm = ({ folioConfig, setFolioConfig, id, update, deleteIndex, upIndex, downIndex }) => {
  const [textWithImage, setTextWithImage] = useState(folioConfig[id].options)

  useEffect(() => {
    setFolioConfig((prev) => {
      prev[id].options = textWithImage


      return prev
    })
  }, [id, setFolioConfig, textWithImage])

  return (
    <div className="font-semibold flex justify-center items-center btn-primary w-11/12 bg-gradient-to-br from-primary to-[#df9884cc] rounded-3xl bg-opacity-15">
      <div className="w-full h-full bg-noise bg-fixed rounded-3xl flex flex-row justify-center items-center">
        <div className="flex flex-col w-3/4 p-8 gap-8 justify-center items-center">
          <div className="w-full flex">
            <h4 className="w-full font-bold text-xl text-quinary">Text with Image</h4>
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
            <label className="text-lg" htmlFor="imageUrl">Image URL</label>
            <input
              type="text"
              id="imageUrl"
              value={textWithImage.imageUrl}
              onChange={(e) => setTextWithImage({ ...textWithImage, imageUrl: e.target.value })}
              onBlur={update}
              placeholder="Image URL"
              className="w-full bg-[#df9884] placeholder:text-quinary placeholder:font-light placeholder:italic p-2 px-3 rounded-xl outline-none border-tertiary border-2 autofill:bg-[#df9884]" autoComplete="off"
            />
          </div>
          <div className="flex w-full flex-col gap-2 text-tertiary">
            <label className="text-lg" htmlFor="text">Text</label>
            <textarea
              id="text"
              value={textWithImage.text}
              placeholder="Text"
              onChange={(e) => setTextWithImage({ ...textWithImage, text: e.target.value })}
              onBlur={update}
              className="w-full bg-[#df9884] placeholder:text-quinary placeholder:font-light placeholder:capitalize placeholder:italic p-2 px-3 rounded-xl outline-none border-tertiary border-2"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TextWithImageForm
