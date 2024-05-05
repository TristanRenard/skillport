import AddButton from "@/components/form/AddButton"
import ContactForm from "@/components/form/ContactForm"
import HeaderForm from "@/components/form/HeaderForm"
import IntroductionForm from "@/components/form/IntroductionForm"
import ProjectForm from "@/components/form/ProjectForm"
import TextForm from "@/components/form/TextForm"
import TextWithImageForm from "@/components/form/TextWithImageForm"
import TitleForm from "@/components/form/TitleForm"
import { useEffect, useState } from "react"

const initialFolioConfig = [
  {
    type: "Header",
    options: {
      imageUrl: "",
      text: ""
    }
  }
]
const CreateForm = () => {
  const [folioConfig, setFolioConfig] = useState(initialFolioConfig)
  const publish = () => {
    // eslint-disable-next-line no-console
    console.log(folioConfig)
    localStorage.setItem("folioConfig", JSON.stringify(folioConfig))
  }
  useEffect(() => {
    if (localStorage.getItem("folioConfig")) {
      setFolioConfig(JSON.parse(localStorage.getItem("folioConfig")))
    }
  }
    , [])

  return (
    <div className="w-3/4 flex flex-col items-center gap-6">
      {folioConfig.map((config, id) => {
        switch (config.type) {
          case "Header":
            return <HeaderForm key={id} id={id} folioConfig={folioConfig} setFolioConfig={setFolioConfig} publish={publish} />

          case "Introduction":
            return <IntroductionForm key={id} id={id} folioConfig={folioConfig} setFolioConfig={setFolioConfig} publish={publish} />

          case "Title":
            return <TitleForm key={id} id={id} folioConfig={folioConfig} setFolioConfig={setFolioConfig} publish={publish} />

          case "Project":
            return <ProjectForm key={id} id={id} folioConfig={folioConfig} setFolioConfig={setFolioConfig} publish={publish} />

          case "Contact":
            return <ContactForm key={id} id={id} folioConfig={folioConfig} setFolioConfig={setFolioConfig} publish={publish} />

          case "Text":
            return <TextForm key={id} id={id} folioConfig={folioConfig} setFolioConfig={setFolioConfig} publish={publish} />

          case "Textwithimage":
            return <TextWithImageForm key={id} id={id} folioConfig={folioConfig} setFolioConfig={setFolioConfig} publish={publish} />

          default:
            return <div key={id} />
        }
      })}
      <AddButton setFolioConfig={setFolioConfig} folioConfig={folioConfig} />
    </div>
  )
}

export default CreateForm