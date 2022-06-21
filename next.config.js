/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => [
    {
      source: "/",
      destination: "/quiz/start",
      permanent: false,
    },
  ],
};

module.exports = {
  nextConfig,
};
