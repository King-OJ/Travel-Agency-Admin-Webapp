// next.config.js
const nextConfig = {
  // Add the images configuration for Next.js Image optimization
  images: {
    // OR use remotePatterns for more control (recommended)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "**.unsplash.com", // ** allows all subdomains
      },
      // Add your other image hostnames here
    ],
  },

  // Keep your existing webpack configuration for SVGs
  webpack(config) {
    // Find the default rule handling SVGs (file loader)
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    // Rebuild the rules array:
    config.module.rules = [
      // Keep all other rules, except the SVG rule (we'll add our own)
      ...config.module.rules.filter((rule) => rule !== fileLoaderRule),

      // Re-add the original SVG rule, but exclude it from handling all .svg files
      {
        ...fileLoaderRule,
        exclude: /\.svg$/i,
      },

      // Add a rule for SVGs imported with ?url (static URL, suitable for next/image)
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // ex: import Icon from './icon.svg?url'
      },

      // Add the SVGR loader for other SVG imports (React component)
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [/url/] }, // exclude those with ?url
        use: ["@svgr/webpack"],
      },
    ];

    return config;
  },
};

module.exports = nextConfig;
