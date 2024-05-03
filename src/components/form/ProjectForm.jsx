import { useEffect, useState } from "react"

const ProjectForm = ({ folioConfig, setFolioConfig, id, publish }) => {
  const [project, setProject] = useState(folioConfig[id].options)
  useEffect(() => {
    setFolioConfig((prev) => {
      prev[id].options = project

      return prev
    })
  }, [id, project, setFolioConfig])

  return (
    <div className="font-semibold flex justify-center items-center btn-primary w-11/12 bg-gradient-to-br from-primary to-[#df9884cc] rounded-3xl bg-opacity-15">
      <div className="w-full h-full bg-noise bg-fixed rounded-3xl flex flex-row justify-center items-center">
        <div className="flex flex-col w-3/4 p-8 gap-8 justify-center items-center">
          <h4 className="w-full font-bold text-xl text-quinary">Project</h4>
          <div className="flex w-full flex-col gap-2 text-tertiary">
            <label className="text-lg" htmlFor="imageUrl">Image URL</label>
            <input type="text" id="imageUrl" value={project.imageUrl} onChange={(e) => setProject({ ...project, imageUrl: e.target.value })} onBlur={publish} placeholder="Image URL" className="w-full bg-[#df9884] placeholder:text-quinary placeholder:font-light placeholder:italic p-2 px-3 rounded-xl outline-none border-tertiary border-2 autofill:bg-[#df9884]" autoComplete="off"
            />
          </div>
          <div className="flex w-full flex-col gap-2 text-tertiary">
            <label className="text-lg" htmlFor="text">Title</label>
            <input type="text" id="text" value={project.titre} placeholder="Project Title" onChange={(e) => setProject({ ...project, titre: e.target.value })} onBlur={publish} className="uppercase w-full bg-[#df9884] placeholder:text-quinary placeholder:font-light placeholder:capitalize placeholder:italic p-2 px-3 rounded-xl outline-none border-tertiary border-2"
            />
          </div>
          <div className="flex w-full flex-col gap-2 text-tertiary">
            <label className="text-lg" htmlFor="text">Tech Stack</label>
            <input type="text" id="text" value={project.techno} placeholder="Tech Stack" onChange={(e) => setProject({ ...project, techno: e.target.value })} onBlur={publish} className="w-full bg-[#df9884] placeholder:text-quinary placeholder:font-light placeholder:italic p-2 px-3 rounded-xl outline-none border-tertiary border-2"
            />
          </div>
          <div className="flex w-full flex-col gap-2 text-tertiary">
            <label className="text-lg" htmlFor="text">Date</label>
            <input type="text" id="text" value={project.date} placeholder="Date" onChange={(e) => setProject({ ...project, date: e.target.value })} onBlur={publish} className="w-full bg-[#df9884] placeholder:text-quinary placeholder:font-light placeholder:italic p-2 px-3 rounded-xl outline-none border-tertiary border-2"
            />
          </div>
          <div className="flex w-full flex-col gap-2 text-tertiary">
            <label className="text-lg" htmlFor="text">Description</label>
            <textarea id="text" value={project.description} placeholder="Description" onChange={(e) => setProject({ ...project, description: e.target.value })} onBlur={publish} className="w-full bg-[#df9884] placeholder:text-quinary placeholder:font-light placeholder:italic p-2 px-3 rounded-xl outline-none border-tertiary border-2"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectForm