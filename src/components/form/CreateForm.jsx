import AddButton from "@/components/form/AddButton"
import ContactForm from "@/components/form/ContactForm"
import HeaderForm from "@/components/form/HeaderForm"
import IntroductionForm from "@/components/form/IntroductionForm"
import ProjectForm from "@/components/form/ProjectForm"
import TextForm from "@/components/form/TextForm"
import TextWithImageForm from "@/components/form/TextWithImageForm"
import TitleForm from "@/components/form/TitleForm"
import { ArrowDownOnSquareIcon, CloudArrowUpIcon } from "@heroicons/react/24/solid"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

// eslint-disable-next-line max-lines-per-function
const CreateForm = () => {
  const [username, setUsername] = useState("Loading...")
  const [folioConfig, setFolioConfig] = useState(["Loading..."])
  const router = useRouter()
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
  const publish = () => {
    axios.put("http://localhost:3000/api/folio", { folio: folioConfig }).then((res) => res.data.folio)
    router.push(`/folio/${username}`)
  }
  const save = () => (
    axios.post("http://localhost:3000/api/folio", { folio: folioConfig }).then((res) => res.data.folio)
  )

  useEffect(() => {
    axios.get("http://localhost:3000/api/folio").then((res) => {
      setFolioConfig(res.data.folio)
      setUsername(res.data.username)
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
      <div className="w-11/12 flex justify-center  gap-6">
        <div className="h-20 font-semibold flex justify-center items-center btn-primary w-full bg-gradient-to-br from-primary to-[#df9884cc] rounded-3xl" onClick={save}>
          <div className="w-full h-full bg-noise bg-fixed rounded-3xl flex justify-center items-center">
            <div className="w-full h-full flex justify-center items-center cursor-pointer text-tertiary gap-6" >
              <h2 className="text-2xl font-bold">Save</h2>
              <ArrowDownOnSquareIcon className="h-12 w-12 fill-tertiary" />
            </div>
          </div>
        </div>
        <div className="h-20 font-semibold flex justify-center items-center btn-primary w-full bg-gradient-to-br from-primary to-[#df9884cc] rounded-3xl " onClick={publish}>
          <div className="w-full h-full bg-noise bg-fixed rounded-3xl flex justify-center items-center">
            <div className="w-full h-full flex justify-center items-center cursor-pointer text-tertiary gap-6" >
              <h2 className="text-2xl font-bold">Publish</h2>
              <CloudArrowUpIcon className="h-12 w-12 fill-tertiary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateForm
