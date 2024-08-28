/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Apply these headers to all routes
        source: "/(.*)",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*", // Allows any origin to access the resource
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS", // Define the allowed methods
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "X-Requested-With, Content-Type, Accept",
          },
        ],
      },
      {
        // Apply these headers specifically to static assets
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*", // Allows any origin to access static assets
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "X-Requested-With, Content-Type, Accept",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
