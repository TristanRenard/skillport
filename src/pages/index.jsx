
export default function Home() {
  return (
    <main className="w-full min-h-screen flex justify-around items-center">
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
  )
}
