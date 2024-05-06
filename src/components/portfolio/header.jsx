
export const HeaderPortfolio = ({ imageUrl, text }) => (
  <div id="Header" className="p-4 ml-0  sm:ml-9 mb-20 ">
    <h1 className="uppercase font-bold text-2xl sm:7xl md:text-8xl lg:text-9xl max-w-screen-md">{text}</h1>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src={imageUrl}
      alt="Picture of portfolio's author"
      className="max-h-96 h-max-h-96 mt-6"
    />
  </div>
)
