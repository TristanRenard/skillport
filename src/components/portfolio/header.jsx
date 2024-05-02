import Image from "next/image"

export const Header = ({ imageUrl, text }) => (
  <div>
    <h1>{text}</h1>
    {/* <Image
      src={imageUrl}
      width={500}
      height={500}
      alt="Picture of portfolio's author"
    ></Image> */}
    <img src={imageUrl} alt="Picture of portfolio's author" />
  </div>
)
