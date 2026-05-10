/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/X-client-v1.0',
  assetPrefix: '/X-client-v1.0',
  trailingSlash: true,  // Добавляем слеш в конце
};

export default nextConfig;
