/** @type {import('next').NextConfig} */
nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/quiz/start",
        permanent: false,
      },
    ];
  },
};

module.exports = {
  nextConfig,
};
