import { Header } from "@/components/portfolio/header"

export default function Home() {
  return (
    <div className="bg-tertiary">
      <main className="w-full min-h-screen bg-tertiary flex justify-around items-center">
        <p className="bg-primary text-white h-52 w-52 border-black border-2 flex justify-center items-center rounded-2xl">
          Primary color
        </p>
        <p className="bg-secondary text-white h-52 w-52 border-black border-2 flex justify-center items-center rounded-2xl">
          Secondary color
        </p>
        <p className="bg-tertiary text-quaternary h-52 w-52 border-black border-2 flex justify-center items-center rounded-2xl">
          Tertiary color
        </p>
        <p className="bg-quaternary text-white h-52 w-52 border-black border-2 flex justify-center items-center rounded-2xl">
          Quaternary color
        </p>
        <p className="bg-quinary text-quaternary h-52 w-52 border-black border-2 flex justify-center items-center rounded-2xl">
          Quinary color
        </p>
      </main>
      <Header
        imageUrl="https://tse1.explicit.bing.net/th?id=OIP.rExqAS6nxccIjikCQQdfvQHaFj&pid=Api"
        text="Photo de chat"
      >
    </Header>
    </div>
  )
}
