import { Description } from "@/components/portfolio/description"
import { Header } from "@/components/portfolio/header"
import { Projet } from "@/components/portfolio/projet"
import { Titre } from "@/components/portfolio/titre"

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
        imageUrl="https://tse4.mm.bing.net/th?id=OIP.L_Od205XI-2i5LXm8yw2IwHaEo&pid=Api"
        text="Photo de chat"
      />
      <Description
        text="Lorem ipsum dolor sit amet consectetur. Mauris felis tristique volutpat enim porttitor. Interdum maecenas convallis lorem vitae elementum tellus. Leo imperdiet natoque sed"
        titre="Jean Moulin"
      />
      <Titre titre="Mes projets" />
      <Projet
        imageUrl="https://tse2.mm.bing.net/th?id=OIP.YDMTEBn7QTiSF8HnOAe5RQHaEo&pid=Api"
        titre="Premier projet"
        techno="HTML_CSS_JS"
        date="Janvier 2020"
        description="ça c'ets mon projet Lorem ipsum dolor sit amet consectetur. Mauris felis tristique volutpat enim porttitor."
      />
    </div>
  )
}
