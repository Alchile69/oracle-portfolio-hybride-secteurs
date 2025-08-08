// Oracle Portfolio V2.6.0 - Architecture Hybride
// Page Next.js qui coexiste avec l'application Vite principale

import { useEffect } from 'react';
import Head from 'next/head';

export default function NextJSIndex() {
  useEffect(() => {
    // Redirection automatique vers l'application Vite en développement
    if (process.env.NODE_ENV === 'development') {
      console.log('🔄 Architecture Hybride - Next.js coexiste avec Vite');
      console.log('📍 Application principale sur Vite: http://localhost:5173');
      console.log('📍 Application Next.js: http://localhost:3000');
    }
  }, []);

  return (
    <>
      <Head>
        <title>Oracle Portfolio V2.6.0 - Architecture Hybride</title>
        <meta name="description" content="Oracle Portfolio avec architecture hybride Vite + Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #1e1e2e 0%, #2d2d44 100%)',
        color: 'white',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        padding: '2rem'
      }}>
        <div style={{
          textAlign: 'center',
          maxWidth: '600px',
          background: 'rgba(255, 255, 255, 0.1)',
          padding: '3rem',
          borderRadius: '16px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            marginBottom: '1rem',
            background: 'linear-gradient(45deg, #60a5fa, #a78bfa)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            🎯 Oracle Portfolio V2.6.0
          </h1>
          
          <h2 style={{
            fontSize: '1.5rem',
            marginBottom: '2rem',
            color: '#e2e8f0'
          }}>
            Architecture Hybride Next.js + Vite
          </h2>

          <div style={{
            background: 'rgba(0, 0, 0, 0.3)',
            padding: '1.5rem',
            borderRadius: '8px',
            marginBottom: '2rem',
            textAlign: 'left'
          }}>
            <h3 style={{ color: '#60a5fa', marginBottom: '1rem' }}>🏗️ Frameworks Disponibles :</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>
                ✅ <strong>Vite</strong> (Principal) - Port 5173
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                ✅ <strong>Next.js</strong> (Coexistence) - Port 3000
              </li>
            </ul>
          </div>

          <div style={{
            background: 'rgba(16, 185, 129, 0.2)',
            padding: '1.5rem',
            borderRadius: '8px',
            marginBottom: '2rem',
            border: '1px solid rgba(16, 185, 129, 0.3)'
          }}>
            <h3 style={{ color: '#10b981', marginBottom: '1rem' }}>🚀 Démarrage :</h3>
            <div style={{ textAlign: 'left', fontFamily: 'monospace', fontSize: '0.9rem' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <strong>Vite (Recommandé) :</strong> <code>npm run dev</code>
              </div>
              <div>
                <strong>Next.js :</strong> <code>npm run dev:next</code>
              </div>
            </div>
          </div>

          <div style={{
            background: 'rgba(59, 130, 246, 0.2)',
            padding: '1.5rem',
            borderRadius: '8px',
            border: '1px solid rgba(59, 130, 246, 0.3)'
          }}>
            <h3 style={{ color: '#3b82f6', marginBottom: '1rem' }}>🎯 Fonctionnalités V2.6.0 :</h3>
            <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left' }}>
              <li>✅ Icônes crayon ✏️ fonctionnelles</li>
              <li>✅ Modal d'édition complète</li>
              <li>✅ CRUD complet opérationnel</li>
              <li>✅ Interface React 19 + Radix UI</li>
              <li>✅ Architecture hybride flexible</li>
            </ul>
          </div>

          <div style={{ marginTop: '2rem', fontSize: '0.9rem', opacity: 0.8 }}>
            <p>🔐 <strong>Login de test :</strong> admin / scalabla2025</p>
            <p>📍 <strong>Application principale :</strong> <a 
              href="http://localhost:5173" 
              style={{ color: '#60a5fa', textDecoration: 'none' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              http://localhost:5173
            </a></p>
          </div>
        </div>
      </div>
    </>
  );
}

