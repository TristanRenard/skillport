
export const TexteImage = ({ texte, imageUrl }) => (
  <div className="flex gap-20 my-10 mt-32 mx-9 justify-center items-center">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src={imageUrl}
      alt="Picture of the project"
      className="w-full max-h-128 max-w-md object-cover"
    />
    <p className="text-xl max-w-screen-sm">{texte}</p>
  </div>
)
