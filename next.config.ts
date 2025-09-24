import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.apollo.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'static.licdn.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.zerobounce.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.millionverifier.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'instantly.ai',
        port: '',
        pathname: '/**',
      },
       {
        protocol: 'https',
        hostname: 'smartlead.ai',
        port: '',
        pathname: '/**',
      },
       {
        protocol: 'https',
        hostname: 'phantombuster.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 's3-alpha.figma.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.ui8.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'logo.clearbit.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.linkedin.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'millionverifier.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'mxtoolbox.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'easydmarc.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'glockapps.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'chatgpt.com',
        port: '',
        pathname: '/**',
      },
       {
        protocol: 'https',
        hostname: 'www.anthropic.com',
        port: '',
        pathname: '/**',
      },
       {
        protocol: 'https',
        hostname: 'www.deepseek.com',
        port: '',
        pathname: '/**',
      },
       {
        protocol: 'https',
        hostname: 'n8n.io',
        port: '',
        pathname: '/**',
      },
       {
        protocol: 'https',
        hostname: 'www.airtable.com',
        port: '',
        pathname: '/**',
      },
       {
        protocol: 'https',
        hostname: 'www.google.com',
        port: '',
        pathname: '/**',
      },
       {
        protocol: 'https',
        hostname: 'www.notion.so',
        port: '',
        pathname: '/**',
      }
    ],
  },
  devIndicators: {
    allowedDevOrigins: [
        '*.cluster-v6vfua76y5hvquszcbrvi5d4oi.cloudworkstations.dev',
    ]
  }
};

export default nextConfig;
