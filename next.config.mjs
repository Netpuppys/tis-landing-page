/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
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
      config.module.rules.push(
        {
          test: /\.(pdf)$/,
          use: {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
              publicPath: `/_next/static/files`,
              outputPath: `${isServer ? "../" : ""}static/files`,
            },
          },
        },
        {
          test: /\.(mp4|webm)$/i,
          use: [
            {
              loader: "file-loader",
              options: {
                publicPath: "/_next/static/images",
                outputPath: "static/images",
                name: "[name].[ext]",
                esModule: false,
              },
            },
          ],
        }
      );
  
      return config;
    },
  };
  
  export default nextConfig;
  