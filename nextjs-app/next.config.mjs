/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",

  webpack(config) {
    // Adiciona o loader do SVGR para arquivos SVG
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;
