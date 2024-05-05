import Portfolio from "@/components/Portfolio"

const lstportfolio = [
  {
    type: "Header",
    options: {
      imageUrl: "https://http.cat/images/418.jpg",
      text: "Creative Developper",
    },
  },
  {
    type: "Introduction",
    options: {
      subTitle: "Tristan Renard",
      text: "I'm a great developper... I think...",
    },
  },
  {
    type: "Project",
    options: {
      imageUrl: "https://http.cat/images/530.jpg",
      titre: "A frozen cat",
      techo: "Snow",
      date: "2020",
      description: "No description for this beautiful project",
    },
  },
  {
    type: "Project",
    options: {
      imageUrl: "https://http.cat/images/100.jpg",
      titre: "flying cat",
      techo: "perlinpinpn powder",
      date: "2023",
      description:
        "No description for this beautiful project bc flying is visual",
    },
  },
  {
    type: "Title",
    options: {
      text: "Thi is a title for cats",
      dispaly: true,
    },
  },
  {
    type: "Text",
    options: {
      text: "A greate and important text about secrets of cats...",
    },
  },
  {
    type: "Textwithimage",
    options: {
      imageUrl: "https://http.cat/images/510.jpg",
      text: "Not extended",
      imagePlacement: "left",
    },
  },
  {
    type: "Contact",
    options: {
      0: {
        type: "insta",
        url: "insta.com",
      },
      1: {
        type: "git",
        url: "github/moi.com",
      },
      email: "cat@cat.cat",
      phone: "06 06 06 06 06",
    },
  },
]

const ShowPortfolio = () => (
  <>
    <h1>OUI</h1>
    <Portfolio lstComponent={lstportfolio} />
  </>
)
export default ShowPortfolio
