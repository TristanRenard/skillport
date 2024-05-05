import AddButton from "@/components/form/AddButton"
import ContactForm from "@/components/form/ContactForm"
import HeaderForm from "@/components/form/HeaderForm"
import IntroductionForm from "@/components/form/IntroductionForm"
import ProjectForm from "@/components/form/ProjectForm"
import TextForm from "@/components/form/TextForm"
import TextWithImageForm from "@/components/form/TextWithImageForm"
import TitleForm from "@/components/form/TitleForm"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useEffect, useState } from "react"

const CreateForm = () => {
  const [folioConfig, setFolioConfig] = useState(["Loading..."])
  const { refetch } = useQuery({
    queryKey: ["folio", folioConfig],
    enabled: false,
    queryFn: () => {
      if (folioConfig[0] !== "Loading...") {
        return axios.post("http://localhost:3000/api/folio",
          { folio: folioConfig }
        ).then((res) => res.data.folio)
      }

      return []
    }
  })
  const update = () => {
    refetch()
  }
  const deleteIndex = (id) => {
    setFolioConfig([
      ...folioConfig.slice(0, id),
      ...folioConfig.slice(id + 1)
    ])
  }

  useEffect(() => {
    axios.get("http://localhost:3000/api/folio").then((res) => {
      //
      setFolioConfig(res.data.folio)
    })
    refetch()

    return () => {
      update()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refetch])

  return (
    <div className="w-3/4 flex flex-col items-center gap-6">
      {folioConfig.map((config, id) => {
        switch (config.type) {
          case "Header":
            return <HeaderForm key={id} id={id} folioConfig={folioConfig} setFolioConfig={setFolioConfig} update={update} deleteIndex={deleteIndex} />

          case "Introduction":
            return <IntroductionForm key={id} id={id} folioConfig={folioConfig} setFolioConfig={setFolioConfig} update={update} deleteIndex={deleteIndex} />

          case "Title":
            return <TitleForm key={id} id={id} folioConfig={folioConfig} setFolioConfig={setFolioConfig} update={update} deleteIndex={deleteIndex} />

          case "Project":
            return <ProjectForm key={id} id={id} folioConfig={folioConfig} setFolioConfig={setFolioConfig} update={update} deleteIndex={deleteIndex} />

          case "Contact":
            return <ContactForm key={id} id={id} folioConfig={folioConfig} setFolioConfig={setFolioConfig} update={update} deleteIndex={deleteIndex} />

          case "Text":
            return <TextForm key={id} id={id} folioConfig={folioConfig} setFolioConfig={setFolioConfig} update={update} deleteIndex={deleteIndex} />

          case "Textwithimage":
            return <TextWithImageForm key={id} id={id} folioConfig={folioConfig} setFolioConfig={setFolioConfig} update={update} deleteIndex={deleteIndex} />

          default:
            return <div key={id} />
        }
      })}
      <AddButton setFolioConfig={setFolioConfig} folioConfig={folioConfig} />
    </div>
  )
}

export default CreateForm
