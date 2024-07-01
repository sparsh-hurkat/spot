// next.config.mjs

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    webpack: (config, { isServer }) => {
      // Disable minification
      config.optimization.minimize = false;
  
      // Important: return the modified config
      return config;
    },
  };
  
  export default nextConfig;
  