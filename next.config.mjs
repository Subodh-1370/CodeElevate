/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true,
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'i.pinimg.com',
        },
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
        },
        {
          protocol: 'https',
          hostname: 'plus.unsplash.com',
        },
        {
          protocol: 'https',
          hostname: 'prepbytes-misc-images.s3.ap-south-1.amazonaws.com',
        },
        {
          protocol: 'https',
          hostname: 'www.javaindia.in',
        },
        {
          protocol: 'https',
          hostname: 'www.mygreatlearning.com',
        },
        {
          protocol: 'https',
          hostname: 'images.prismic.io',
        },
      ],
    },
  };
  
  export default nextConfig;
  