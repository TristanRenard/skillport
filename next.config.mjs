
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rdackrkotksedwcf.public.blob.vercel-storage.com",
        port: "",
        pathname: "**",
      },
    ],
  }
}

export default nextConfig