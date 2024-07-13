import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
}

export default nextConfig;


// import {NextConfig}  from 'next';

// const nextConfig: NextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ['res.cloudinary.com'],
//   },
// };

// export default nextConfig;
