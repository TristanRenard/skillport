import { useEffect, useState } from "react"

const TextForm = ({ folioConfig, setFolioConfig, id, publish }) => {
  const [text, setText] = useState(folioConfig[id].options)

  useEffect(() => {
    setFolioConfig((prev) => {
      prev[id].options = text


      return prev
    })
  }, [id, setFolioConfig, text])

  return (
    <div className="font-semibold flex justify-center items-center btn-primary w-11/12 bg-gradient-to-br from-primary to-[#df9884cc] rounded-3xl bg-opacity-15">
      <div className="w-full h-full bg-noise bg-fixed rounded-3xl flex flex-row justify-center items-center">
        <div className="flex flex-col w-3/4 p-8 gap-8 justify-center items-center">
          <h4 className="w-full font-bold text-xl text-quinary">Text</h4>
          <div className="flex w-full flex-col gap-2 text-tertiary">
            <label className="text-lg" htmlFor="text">Text</label>
            <input
              type="text"
              id="text"
              value={text.text}
              placeholder="Text"
              onChange={(e) => setText({ ...text, text: e.target.value })}
              onBlur={publish}
              className="w-full bg-[#df9884] placeholder:text-quinary placeholder:font-light placeholder:capitalize placeholder:italic p-2 px-3 rounded-xl outline-none border-tertiary border-2"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TextForm