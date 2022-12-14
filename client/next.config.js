module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/deshboard",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
