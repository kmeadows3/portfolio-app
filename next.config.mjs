/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/portfolio-app',
    output: "export",  // <=== enables static exports
    images: {
        unoptimized: true
    }
};

export default nextConfig;
