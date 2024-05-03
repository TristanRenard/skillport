import { Description } from "@/components/portfolio/description"
import { HeaderPortfolio } from "@/components/portfolio/header"
import { Liens } from "@/components/portfolio/liens"
import { Projet } from "@/components/portfolio/projet"
import { Texte } from "@/components/portfolio/texte"
import { TexteImage } from "@/components/portfolio/textwImage"
import { Titre } from "@/components/portfolio/titre"
import React from "react"

const Portfolio = ({ lstComponent }) => (
  <div>
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
            imageUrl={element.options.imageUrl}
            text={element.options.text}
            titre={element.options.titre}
            techno={element.options.techo}
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
            lstLien={element.options.lstLien}
            mail={element.options.email}
            telephone={element.options.phone}
          />
        )
      }
      return null
    })}
  </div>
)

export default Portfolio
