import NavBar from "@/components/NavBar"
import { Montserrat } from "next/font/google"
import clsx from "clsx"
import Link from "next/link"

const montserrat = Montserrat({ subsets: ["latin"] })

export default function Home() {
  return (
    <div className={clsx("bg-tertiary", montserrat.className)}>
      <NavBar />
      <main>
        <div className="flex">
          <img src="/heroheader.png" alt="Image header" className="w-2/3" />
          <div className="flex flex-col justify-center">
            <h1 className="uppercase text-6xl font-black text-primary mb-10">
              SKILLPORT
            </h1>
            <div className="text-xl">
              <p>
                Montrez vos{" "}
                <span className="font-bold text-primary">skill</span>
              </p>
              <p>
                Créez votre{" "}
                <span className="font-bold text-primary">portfolio</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-20">
          <p className="text-center w-3/5">
            Avoir un portfolio en ligne est essentiel dans un monde où la
            première impression compte énormément. C'est l'occasion idéale de
            mettre en avant vos réalisations passées, vos projets réussis et vos
            compétences uniques, créant ainsi une image professionnelle et
            convaincante auprès des recruteurs et des clients.
          </p>
          <Link
            href="createFolio.jsx"
            className="text-quaternary bg-primary p-3 rounded-full mt-7"
          >
            Créer un portfolio
          </Link>
        </div>
        <div className="mt-28">
          <h2 className="w-full mb-16 text-center text-4xl font-black text-primary">
            Nos avantages
          </h2>
          <ul className="flex justify-around px-36">
            <li className="w-1/6 px-3 py-8 bg-primary rounded-lg text-center">
              Des composants à la carte
            </li>
            <li className="w-1/6 px-3 py-8 bg-primary rounded-lg text-center">
              Un contenu personnalisé à votre activité
            </li>
            <li className="w-1/6 px-3 py-8 bg-primary rounded-lg text-center">
              Des images pour illuser vos contenu
            </li>
            <li className="w-1/6 px-3 py-8 bg-primary rounded-lg text-center">
              Un design sobre pour sublimer vos idées
            </li>
          </ul>
        </div>
        <div className="mt-28 flex flex-col items-center">
          <h2 className="w-full mb-8 text-center text-4xl font-black text-primary">
            L'équipe
          </h2>
          <div className="grid grid-cols-2 grid-rows-3 w-2/5 my-8">
            <img src="/vincent.jpg" alt="Vincent" />
            <div className="flex flex-col justify-center items-center text-center">
              <p className="font-bold text-primary text-3xl">Vincent</p>
              <ul>
                <li>Ingénieur système et réseau</li>
                <li>Aime l'escalade</li>
                <li>Joue à des jeux</li>
              </ul>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <p className="font-bold text-primary text-3xl">Léa</p>
              <ul>
                <li>Developpeur</li>
                <li>Aime les voitures qui vont vite</li>
                <li>Ont lui a volé une glace</li>
              </ul>
            </div>
            <img src="/lea.jpg" alt="Vincent" />
            <img src="/tristan.jpg" alt="Vincent" />
            <div className="flex flex-col justify-center items-center text-center">
              <p className="font-bold text-primary text-3xl">Tristan</p>
              <ul>
                <li>Developpeur</li>
                <li>Aime la mode</li>
                <li>Dis des mots cailloux</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-primary text-tertiary flex justify-center py-7 mt-16">
        <Link href="https://github.com/parlabarbedeMerlin/skillport">
          GitHub
        </Link>
        <p> © mai 2024</p>
      </footer>
    </div>
  )
}
