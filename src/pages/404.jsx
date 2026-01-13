import Link from "next/link"

const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-screen">
    <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
    <p className="text-2xl text-quaternary mb-8">Page not found</p>
    <Link href="/" className="btn-primary bg-gradient-to-br from-primary to-[#df9884] rounded-xl px-6 py-3 text-quinary font-semibold border-tertiary border-2">
      Go back home
    </Link>
  </div>
)

export default NotFound
