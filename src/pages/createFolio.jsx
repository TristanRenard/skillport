import NavBar from "@/components/NavBar"
import CreateForm from "@/components/form/CreateForm"

const createFolio = () => (
  <>
    <NavBar />
    <main className="flex flex-col items-center py-16">
      <h1 className="text-5xl font-bold mb-10"><span className="font-black text-primary">Create</span> a new portfolio</h1>
      <CreateForm />
    </main>
  </>
)

export default createFolio