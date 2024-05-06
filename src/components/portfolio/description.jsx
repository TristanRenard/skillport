
export const Description = ({ text, titre }) => (
  <div className="m-4 mx-9 mb-20 flex justify-end">
    <div className="flex justify-center items-center w-full">
      <p className="max-w-screen-md">{text}</p>
    </div>
    <h2 className="font-bold text-7xl text-end">{titre}</h2>
  </div>
)
