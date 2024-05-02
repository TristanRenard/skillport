import NavBar from "@/components/NavBar"
import CreateForm from "@/components/form/CreateForm"

const createFolio = () => (
  <main className="flex flex-col items-center">
    <NavBar />
    <h1 className="text-5xl font-bold my-16">Create a new folio</h1>
    <CreateForm />
  </main>
)

export default createFolio