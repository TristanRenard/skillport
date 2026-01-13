import Portfolio from "@/components/Portfolio"
import UserModel from "@/utils/database/model/userModel"
import mongoose from "mongoose"

export const getServerSideProps = async ({ params: { username } }) => {
  try {
    if (!mongoose.connection.readyState) {
      await mongoose.connect(process.env.DB_URI, {
        serverSelectionTimeoutMS: 5000,
        autoCreate: true,
        autoIndex: true,
      })
    }

    const user = await UserModel.findOne({ username })

    if (!user || !user.publishedFolio) {
      return {
        notFound: true,
      }
    }

    return { props: { folio: JSON.parse(JSON.stringify(user.publishedFolio)) } }
  }
  catch (e) {
    console.error("Error fetching folio:", e)

    return {
      notFound: true,
    }
  }
}
const Folio = ({ folio }) => (
  <Portfolio lstComponent={folio} />
)

export default Folio