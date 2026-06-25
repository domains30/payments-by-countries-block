/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverExternalPackages: ['undici'],
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Exclude undici from server-side bundle
      config.externals = config.externals || [];
      config.externals.push('undici');
    }
    return config;
  }
}

module.exports = nextConfig 