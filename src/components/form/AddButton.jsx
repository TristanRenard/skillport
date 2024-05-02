import { PlusCircleIcon } from "@heroicons/react/24/solid"
import clsx from "clsx"
import { useState } from "react"

const Types = [
  "Introduction",
  "Project",
  "Title",
  "Links",
  "Text",
  "Text with Image",
]
const AddButton = () => {
  const [type, setType] = useState("add")
  const handleAddClick = () => {
    setType("selectType")
  }
  const handleTypeClick = (seltype) => {
    console.log(seltype)
    setType("add")
  }

  return (
    <div className={clsx("font-semibold flex justify-center items-center btn-primary w-11/12 bg-gradient-to-br from-primary to-[#df9884cc] rounded-3xl ", (type === "add") && "h-20", (type === "selectType") && "min-h-52")} onClick={handleAddClick} >
      <span className="w-full h-full bg-noise bg-fixed rounded-3xl flex justify-center items-center">
        {(type === "add") && <PlusCircleIcon className="h-12 w-12 fill-tertiary" />}
        {(type === "selectType") && (
          <div className="w-full flex flex-wrap gap-6 justify-center p-6">
            {
              Types.map((seltype) => (
                <button
                  key={seltype}
                  onClick={() => handleTypeClick(seltype)}
                  type="button"
                  className="btn btn-primary w-1/5 bg-gradient-to-br from-tertiary to-quinary  rounded-3xl h-28 hover:from-quinary hover:to-tertiary transition"
                >
                  {seltype}
                </button>
              ))
            }
          </div>
        )}
      </span>
    </div>
  )
}
export default AddButton