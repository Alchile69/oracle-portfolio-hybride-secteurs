/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration hybride Next.js + Vite
  experimental: {
    // Permet la coexistence avec Vite
    esmExternals: true,
  },
  
  // Configuration pour la compatibilité hybride
  reactStrictMode: true,
  swcMinify: true,
  
  // Configuration des assets
  assetPrefix: process.env.NODE_ENV === 'production' ? '/next' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/next' : '',
  
  // Configuration des redirections pour l'architecture hybride
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      },
    ];
  },
  
  // Configuration des headers pour CORS (compatibilité avec Vite)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization',
          },
        ],
      },
    ];
  },
  
  // Configuration du build pour coexistence
  distDir: '.next',
  generateEtags: false,
  
  // Configuration des modules externes
  transpilePackages: [
    '@radix-ui/react-accordion',
    '@radix-ui/react-alert-dialog',
    '@radix-ui/react-avatar',
    '@radix-ui/react-button',
    '@radix-ui/react-card',
    '@radix-ui/react-dialog',
    '@radix-ui/react-dropdown-menu',
    '@radix-ui/react-form',
    '@radix-ui/react-hover-card',
    '@radix-ui/react-input',
    '@radix-ui/react-label',
    '@radix-ui/react-menubar',
    '@radix-ui/react-navigation-menu',
    '@radix-ui/react-popover',
    '@radix-ui/react-progress',
    '@radix-ui/react-radio-group',
    '@radix-ui/react-scroll-area',
    '@radix-ui/react-select',
    '@radix-ui/react-separator',
    '@radix-ui/react-sheet',
    '@radix-ui/react-slider',
    '@radix-ui/react-switch',
    '@radix-ui/react-table',
    '@radix-ui/react-tabs',
    '@radix-ui/react-textarea',
    '@radix-ui/react-toast',
    '@radix-ui/react-toggle',
    '@radix-ui/react-tooltip',
  ],
};

module.exports = nextConfig;

