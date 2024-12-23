/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  experimental: {
    // ppr: "incremental",
    reactCompiler: true,
    authInterrupts: true,
  },
};

export default nextConfig;
