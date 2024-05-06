/* eslint-disable max-lines-per-function */
import NavBar from "@/components/portfolio/NavBar"
import { Description } from "@/components/portfolio/description"
import { HeaderPortfolio } from "@/components/portfolio/header"
import { Liens } from "@/components/portfolio/liens"
import { Projet } from "@/components/portfolio/projet"
import { Texte } from "@/components/portfolio/texte"
import { TexteImage } from "@/components/portfolio/textwImage"
import { Titre } from "@/components/portfolio/titre"

const Portfolio = ({ lstComponent }) => (
  <div className="scroll-smooth">
    <NavBar lstComponent={lstComponent} />
    {lstComponent.map((element, index) => {
      if (element.type === "Header") {
        return (
          <HeaderPortfolio
            key={index}
            imageUrl={element.options.imageUrl}
            text={element.options.text}
          />
        )
      }

      if (element.type === "Project") {
        return (
          <Projet
            key={index}
            index={index}
            imageUrl={element.options.imageUrl}
            titre={element.options.titre}
            techno={element.options.techno}
            date={element.options.date}
            description={element.options.description}
          />
        )
      }

      if (element.type === "Text") {
        return <Texte key={index} texte={element.options.text} />
      }

      if (element.type === "Title") {
        return <Titre key={index} titre={element.options.text} />
      }

      if (element.type === "Introduction") {
        return (
          <Description
            key={index}
            text={element.options.text}
            titre={element.options.subTitle}
          />
        )
      }

      if (element.type === "Textwithimage") {
        return (
          <TexteImage
            key={index}
            texte={element.options.text}
            imageUrl={element.options.imageUrl}
          />
        )
      }

      if (element.type === "Contact") {
        return (
          <Liens
            key={index}
            mail={element.options.email}
            telephone={element.options.phone}
            github={element.options.github}
            linkedin={element.options.linkedin}
            instagram={element.options.instagram}
            twitter={element.options.twitter}
            dribbble={element.options.dribbble}
            behance={element.options.behance}
            codepen={element.options.codepen}
          />
        )
      }

      return null
    })}
  </div>
)

export default Portfolio
