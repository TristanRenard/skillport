import { PlusCircleIcon } from "@heroicons/react/24/solid"
import clsx from "clsx"
import { useState } from "react"

const Types = {
  Introduction: {
    type: "Introduction",
    options: {
      subTitle: "",
      text: ""
    }
  },
  Project: {
    type: "Project",
    options: {
      imageUrl: "",
      titre: "",
      techno: "",
      date: "",
      description: ""
    }
  },
  Title: {
    type: "Title",
    options: {
      text: "mes projets",
      dispaly: true
    }
  },
  Text: {
    type: "Text",
    options: {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    }
  },
  TextwithImage: {
    type: "Textwithimage",
    options: {
      imageUrl: "",
      text: "",
      imagePlacement: "left"
    }
  },
  Contact: {
    type: "Contact",
    options: [
      {
        type: "insta",
        url: "insta.com"
      },
      {
        type: "git",
        url: "github/moi.com"
      },
    ]
  }

}
const AddButton = ({ setFolioConfig, folioConfig }) => {
  const [type, setType] = useState("add")
  const handleAddClick = () => {
    setType("selectType")
  }
  const handleTypeClick = (seltype) => {
    setFolioConfig([...folioConfig, Types[seltype]])
    setType("add")
  }
  const handleCancelClick = () => {
    setType("add")
  }

  return (
    <div className={clsx("font-semibold flex justify-center items-center btn-primary w-11/12 bg-gradient-to-br from-primary to-[#df9884cc] rounded-3xl ", (type === "add") && "h-20", (type === "selectType") && "min-h-52")} >
      <div className="w-full h-full bg-noise bg-fixed rounded-3xl flex justify-center items-center">
        {(type === "add") && (
          <div className="w-full h-full flex justify-center items-center" onClick={handleAddClick} >
            <PlusCircleIcon className="h-12 w-12 fill-tertiary" />
          </div>
        )}
        {(type === "selectType") && (
          <div className="w-full flex flex-col gap-6 justify-center p-6">
            {
              Object.keys(Types).map((seltype) => (
                <button
                  key={seltype}
                  onClick={() => handleTypeClick(seltype)}
                  type="button"
                  className="hover:text-primary py-5 w-full bg-tertiary bg-noise  rounded-3xl hover:from-quinary hover:to-tertiary transition-all"
                >
                  {seltype}
                </button>
              ))
            }
            <button
              onClick={handleCancelClick}
              type="button"
              className="text-primary hover:text-quaternary py-5 w-full bg-tertiary bg-noise rounded-3xl hover:from-quinary hover:to-tertiary transition-all"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
export default AddButton