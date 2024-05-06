
export const Description = ({ text, titre }) => (
  <div className="m-4 mx-9 mb-20 flex flex-col-reverse gap-6 md:flex-row justify-end">
    <div className="flex justify-center items-center w-full">
      <p className="max-w-screen-md">{text}</p>
    </div>
    <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:text-end">{titre}</h2>
  </div>
)
