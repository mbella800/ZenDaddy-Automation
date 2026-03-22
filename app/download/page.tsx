'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function DownloadContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  
  const [loading, setLoading] = useState(true);
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [productName, setProductName] = useState('');
  const [supportLoading, setSupportLoading] = useState(false);

  useEffect(() => {
    if (!sessionId) {
      setError('No session ID provided');
      setLoading(false);
      return;
    }

    fetch('/api/verify-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ session_id: sessionId }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setVerified(true);
          setCustomerEmail(data.email);
          setProductName(data.product);
        } else {
          setError(data.error || 'Payment verification failed');
        }
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to verify payment');
        setLoading(false);
      });
  }, [sessionId]);

  const handleSupportCheckout = async () => {
    setSupportLoading(true);
    try {
      const response = await fetch('/api/create-checkout-support', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: customerEmail }),
      });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert('Something went wrong. Please try again or contact support on Discord.');
      }
    } catch (error) {
      console.error('Support checkout error:', error);
      alert('Connection error. Please try again.');
    }
    setSupportLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <div className="text-matrix-green text-2xl font-terminal mb-4 animate-pulse">
            [ VERIFYING PAYMENT... ]
          </div>
          <div className="text-gray-500 text-sm font-terminal">
            &gt; Please wait while we verify your purchase
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black px-4">
        <div className="max-w-md text-center">
          <div className="text-red-500 text-2xl font-terminal mb-4">
            [ ERROR ]
          </div>
          <p className="text-gray-400 font-terminal text-sm mb-6">{error}</p>
          <a href="/" className="btn-neon inline-block">
            GO BACK HOME
          </a>
        </div>
      </div>
    );
  }

  if (verified) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black px-4">
        <div className="max-w-2xl w-full">
          <div className="text-center mb-12">
            <div className="text-matrix-green text-3xl md:text-4xl font-terminal mb-4 text-glow">
              [ PURCHASE SUCCESSFUL ]
            </div>
            <p className="text-gray-400 font-terminal text-sm">
              Thank you for your purchase, {customerEmail}!
            </p>
          </div>

          <div className="glass-card p-8 border-matrix-green/50 mb-8">
            <h2 className="text-xl text-matrix-lime mb-4 font-terminal">
              GOD FLICK v3.0 PRO
            </h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-2 text-sm text-gray-300 font-terminal">
                <span className="text-matrix-green shrink-0">[1]</span>
                <span>Download the ZIP file below (contains .gpc script + instructions)</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-gray-300 font-terminal">
                <span className="text-matrix-green shrink-0">[2]</span>
                <span>Load the .gpc file on your Cronus Zen via Zen Studio</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-gray-300 font-terminal">
                <span className="text-matrix-green shrink-0">[3]</span>
                <span>Read the <a href="/docs" className="text-matrix-lime underline">full documentation</a> for all 29 settings</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-gray-300 font-terminal">
                <span className="text-matrix-green shrink-0">[4]</span>
                <span>Join Discord and verify with /verify {customerEmail}</span>
              </div>
            </div>

            <a 
              href={`/api/download?session_id=${sessionId}`}
              download
              className="btn-neon w-full mb-4 inline-block text-center"
            >
              DOWNLOAD GOD FLICK v3.0 PRO
            </a>

            <p className="text-xs text-gray-600 font-terminal text-center">
              [!] Keep this file safe - no refunds on digital products
            </p>
          </div>

          <div className="glass-card p-6 border-yellow-500/40 mb-8 relative overflow-hidden">
            <div className="absolute -top-1 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500"></div>
            <div className="text-center mb-4">
              <h3 className="text-xl text-yellow-400 mb-2 font-terminal">
                [ SETUP SUPPORT ]
              </h3>
              <p className="text-sm text-gray-400 font-terminal">
                Need help installing? Get live 1-on-1 setup via Discord
              </p>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3 text-sm">
                <span className="text-yellow-400 shrink-0">[+]</span>
                <span className="text-gray-300 font-terminal">
                  Live screenshare session with the developer
                </span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <span className="text-yellow-400 shrink-0">[+]</span>
                <span className="text-gray-300 font-terminal">
                  Full installation on your Cronus Zen
                </span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <span className="text-yellow-400 shrink-0">[+]</span>
                <span className="text-gray-300 font-terminal">
                  Settings tuned to your playstyle
                </span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <span className="text-yellow-400 shrink-0">[+]</span>
                <span className="text-gray-300 font-terminal">
                  Priority Discord support for 30 days
                </span>
              </div>
            </div>

            <div className="text-center mb-4">
              <span className="text-3xl text-yellow-400 font-terminal">€14.99</span>
              <span className="text-xs text-gray-500 font-terminal ml-2">one-time</span>
            </div>

            <button
              onClick={handleSupportCheckout}
              disabled={supportLoading}
              className="w-full py-3 px-6 font-terminal text-sm border border-yellow-500 text-yellow-400 hover:bg-yellow-500/10 transition-all rounded disabled:opacity-50"
            >
              {supportLoading ? 'LOADING...' : 'GET LIVE SETUP SUPPORT - €14.99'}
            </button>
          </div>

          <div className="glass-card p-6 border-matrix-green/30">
            <div className="text-center mb-4">
              <h3 className="text-xl text-matrix-green mb-2 font-terminal text-glow">
                [ JOIN DISCORD ]
              </h3>
              <p className="text-sm text-gray-400 font-terminal">
                Get instant access to VIP channels + community support!
              </p>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3 text-sm">
                <span className="text-matrix-lime shrink-0">[+]</span>
                <span className="text-gray-300 font-terminal">
                  PRO MEMBER role + exclusive access
                </span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <span className="text-matrix-lime shrink-0">[+]</span>
                <span className="text-gray-300 font-terminal">
                  Community tips &amp; settings sharing
                </span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <span className="text-matrix-lime shrink-0">[+]</span>
                <span className="text-gray-300 font-terminal">
                  Script updates &amp; announcements
                </span>
              </div>
            </div>

            <a 
              href="https://discord.gg/zp2HmEgTWq"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon w-full inline-block text-center mb-3"
            >
              JOIN DISCORD
            </a>
            <p className="text-xs text-gray-500 font-terminal text-center">
              After joining, type: <span className="text-matrix-lime">/verify {customerEmail}</span>
            </p>
          </div>

          <div className="text-center mt-8">
            <a href="/" className="text-gray-600 hover:text-matrix-green transition-colors text-sm font-terminal">
              &gt; Back to homepage
            </a>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default function DownloadPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <div className="text-matrix-green text-2xl font-terminal mb-4 animate-pulse">
            [ LOADING... ]
          </div>
        </div>
      </div>
    }>
      <DownloadContent />
    </Suspense>
  );
}
