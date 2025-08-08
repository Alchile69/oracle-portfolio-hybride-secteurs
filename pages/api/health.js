// Oracle Portfolio V2.6.0 - API Next.js
// Endpoint de santé pour l'architecture hybride

export default function handler(req, res) {
  const healthData = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: '2.6.0',
    architecture: 'hybrid',
    frameworks: {
      nextjs: {
        status: 'active',
        port: 3000,
        description: 'Next.js server for API and SSR capabilities'
      },
      vite: {
        status: 'primary',
        port: 5173,
        description: 'Vite development server for main application'
      }
    },
    features: {
      crud: 'operational',
      editIcons: 'functional',
      modal: 'complete',
      ui: 'react-19-radix',
      data: '15-countries-fallback'
    },
    endpoints: {
      health: '/api/health',
      status: '/api/status'
    },
    login: {
      username: 'admin',
      note: 'Test credentials available'
    }
  };

  // CORS headers pour compatibilité avec Vite
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  res.status(200).json(healthData);
}

