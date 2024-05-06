import NavBar from "@/components/NavBar"
import Link from "next/link"

// eslint-disable-next-line max-lines-per-function
export default function Home() {
  return (
    <div>
      <NavBar />
      <main>
        <div className="flex">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/heroheader.png" alt="Header Image" className="w-2/3" />
          <div className="flex flex-col justify-center">
            <h1 className="uppercase text-6xl font-black text-primary mb-10">
              SKILLPORT
            </h1>
            <div className="text-xl">
              <p>
                Showcase your{" "}
                <span className="font-bold text-primary">skills</span>
              </p>
              <p>
                Create your{" "}
                <span className="font-bold text-primary">portfolio</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-20">
          <p className="text-center w-3/5">
            Having an online portfolio is essential in a world where first
            impressions matter greatly. It's the perfect opportunity to showcase
            your past achievements, successful projects, and unique skills,
            creating a professional and compelling image for recruiters and
            clients.
          </p>
          <Link
            href="createFolio"
            className="text-2xl font-black text-tertiary bg-gradient-to-br from-primary to-[#df9884cc] rounded-full mt-7"
          >
            <div className="p-4 px-8 bg-noise">
              Create a portfolio
            </div>

          </Link>
        </div>
        <div className="mt-28">
          <h2 className="w-full mb-16 text-center text-4xl font-black text-primary">
            Our advantages
          </h2>
          <ul className="flex text-md font-black text-tertiary justify-around px-36">
            <li className="w-1/6 bg-gradient-to-br from-primary to-[#df9884cc] bg-primary rounded-lg text-center">
              <div className="bg-noise px-3 py-8 h-full">
                Customizable components
              </div>
            </li>
            <li className="w-1/6 bg-gradient-to-br from-primary to-[#df9884cc] bg-primary rounded-lg text-center">
              <div className="bg-noise px-3 py-8">
                Personalized content tailored to your activity
              </div>
            </li>
            <li className="w-1/6 bg-gradient-to-br from-primary to-[#df9884cc] bg-primary rounded-lg text-center">
              <div className="bg-noise px-3 py-8">
                Images to illustrate your content
              </div>
            </li>
            <li className="w-1/6 bg-gradient-to-br from-primary to-[#df9884cc] bg-primary rounded-lg text-center">
              <div className="bg-noise px-3 py-8">
                Clean design to enhance your ideas
              </div>
            </li>
          </ul>
        </div>
        <div className="mt-28 flex flex-col items-center">
          <h2 className="w-full mb-8 text-center text-4xl font-black text-primary">
            The team
          </h2>
          <div className="grid grid-cols-2 grid-rows-3 w-2/5 my-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/vincent.jpg" alt="Vincent" />
            <div className="flex flex-col justify-center items-center text-center">
              <p className="font-bold text-primary text-3xl">Vincent</p>
              <ul>
                <li>System and network engineer</li>
                <li>Enjoys climbing</li>
                <li>Plays video games</li>
              </ul>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <p className="font-bold text-primary text-3xl">Léa</p>
              <ul>
                <li>Developer</li>
                <li>Enjoys fast cars</li>
                <li>Loves climbing</li>
              </ul>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/lea.jpg" alt="Léa" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/tristan.jpg" alt="Tristan" />
            <div className="flex flex-col justify-center items-center text-center">
              <p className="font-bold text-primary text-3xl">Tristan</p>
              <ul>
                <li>Developer</li>
                <li>Enjoys fashion</li>
                <li>Loves furniture design</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-primary text-tertiary flex justify-center py-7 mt-16">
        <Link href="https://github.com/parlabarbedeMerlin/skillport">
          GitHub
        </Link>
        <p className="ml-1"> © May 2024</p>
      </footer>
    </div>
  )
}
