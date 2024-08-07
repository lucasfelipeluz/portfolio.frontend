/** @type {import('next').NextConfig} */

// Remove this if you're not using Fullcalendar features
const withTM = require('next-transpile-modules')([]);

module.exports = withTM({
  trailingSlash: true,
  reactStrictMode: false,
  experimental: {
    esmExternals: false,
    jsconfigPaths: true, // enables it for both jsconfig.json and tsconfig.json
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
    };

    return config;
  },
});
