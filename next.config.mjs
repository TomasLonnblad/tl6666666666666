/** @type {import('next').NextConfig} */
const nextConfig = {

images:{domains: ["images.unsplash.com", "https://tomaslonnblad.github.io/",

]},
  reactCompiler: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  async redirects() {
    return [
      {
        source: "/dashboard",
        destination: "/dashboard/default",
        permanent: false,
      },
    ];
  },
};
export default nextConfig;
