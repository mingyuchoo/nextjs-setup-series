/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [320, 480, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // loader: "imgix", // Uncomment this line for STATIC EXPORT
    // path: "", // Uncomment this line for STATIC EXPORT
  },
  env: {
    production_type: "server", // Change variable to "static" for STATIC EXPORT
  },
  // trailingSlash: true // Uncomment this line for STATIC EXPORT

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: "removeUselessDefs",
                  active: false,
                },
              ],
            },
          },
        },
      ],
    })

    return config
  },
}

const API_KEY = process.env.API_KEY

module.exports = nextConfig
