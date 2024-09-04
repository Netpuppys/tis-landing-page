/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admission.tis.edu.in",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "tis.edu.in",
        port: "",
        pathname: "/**",
      },
    ],
  },

  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(pdf)$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
          publicPath: `/`,
          outputPath: `${isServer ? "../" : ""}static/files`,
        },
      },
    });

    return config;
  },
};

export default nextConfig;
