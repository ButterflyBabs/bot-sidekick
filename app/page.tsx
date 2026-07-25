export default function Home() {
  return (
    <main style={{ backgroundColor: '#FEF6ED', minHeight: '100vh' }}>
      <nav style={{ backgroundColor: '#FEF6ED', borderBottom: '1px solid #D5B2B240', padding: '16px 24px', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ color: '#54253D', fontWeight: 600, fontSize: '20px' }}>Bot Sidekick</span>
          </div>
          <div>
            <a href="https://clawchitect.com/login" style={{ color: '#54253D', fontSize: '14px', textDecoration: 'none', marginRight: '16px' }}>Client Login</a>
            <a href="#" style={{ backgroundColor: '#AF636F', color: '#FEF6ED', padding: '10px 20px', borderRadius: '9999px', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>Begin Setup</a>
          </div>
        </div>
      </nav>

      <section style={{ background: 'linear-gradient(135deg, #54253D 0%, #6C3750 55%, #8E5165 100%)', paddingTop: '120px', paddingBottom: '60px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <p style={{ color: '#D9AB6F', fontSize: '14px', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '16px' }}>YOUR BUSINESS. SUPPORTED.</p>
          <h1 style={{ color: '#FEF6ED', fontSize: '48px', fontWeight: 300, lineHeight: 1.2, marginBottom: '24px' }}>Meet the AI assistant designed to work beside you.</h1>
          <p style={{ color: '#D5B2B2', fontSize: '18px', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>Bot Sidekick helps you set up and use your OpenClaw assistant with clear instructions, thoughtful safeguards, and guided support at every step.</p>
          <div>
            <a href="#" style={{ backgroundColor: '#AF636F', color: '#FEF6ED', padding: '16px 32px', borderRadius: '9999px', fontSize: '16px', fontWeight: 600, textDecoration: 'none', marginRight: '16px' }}>Start Your Setup</a>
            <a href="#" style={{ border: '2px solid #D5B2B2', color: '#FEF6ED', padding: '16px 32px', borderRadius: '9999px', fontSize: '16px', fontWeight: 600, textDecoration: 'none' }}>Explore the Setup Guides</a>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ color: '#54253D', fontSize: '36px', fontWeight: 300, marginBottom: '16px' }}>What would you like help with today?</h2>
            <p style={{ color: '#6C3750', fontSize: '18px' }}>Choose the part of your Bot Sidekick setup you are ready to complete.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #D5B2B2', borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>🔑</div>
              <h3 style={{ color: '#54253D', fontSize: '18px', fontWeight: 600, marginBottom: '12px' }}>Create Your OpenAI API Key</h3>
              <p style={{ color: '#6C3750', fontSize: '14px', marginBottom: '16px' }}>Set up the API key your Bot Sidekick will use to access OpenAI.</p>
              <button style={{ backgroundColor: '#AF636F', color: '#FEF6ED', padding: '8px 16px', borderRadius: '9999px', fontSize: '14px', fontWeight: 600, border: 'none' }}>View Instructions</button>
            </div>
            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #D5B2B2', borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>💳</div>
              <h3 style={{ color: '#54253D', fontSize: '18px', fontWeight: 600, marginBottom: '12px' }}>Add OpenAI API Credits</h3>
              <p style={{ color: '#6C3750', fontSize: '14px', marginBottom: '16px' }}>Set up the separate API billing required for your bot to operate.</p>
              <button style={{ backgroundColor: '#AF636F', color: '#FEF6ED', padding: '8px 16px', borderRadius: '9999px', fontSize: '14px', fontWeight: 600, border: 'none' }}>View Instructions</button>
            </div>
            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #D5B2B2', borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>💬</div>
              <h3 style={{ color: '#54253D', fontSize: '18px', fontWeight: 600, marginBottom: '12px' }}>Pair Bot Sidekick with Telegram</h3>
              <p style={{ color: '#6C3750', fontSize: '14px', marginBottom: '16px' }}>Connect your Telegram account and complete the secure pairing process.</p>
              <button style={{ backgroundColor: '#AF636F', color: '#FEF6ED', padding: '8px 16px', borderRadius: '9999px', fontSize: '14px', fontWeight: 600, border: 'none' }}>View Instructions</button>
            </div>
            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #D5B2B2', borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>🤖</div>
              <h3 style={{ color: '#54253D', fontSize: '18px', fontWeight: 600, marginBottom: '12px' }}>Create Your OpenClaw Bot Profile</h3>
              <p style={{ color: '#6C3750', fontSize: '14px', marginBottom: '16px' }}>Use ChatGPT to define how your assistant should think, communicate, and protect your business.</p>
              <button style={{ backgroundColor: '#AF636F', color: '#FEF6ED', padding: '8px 16px', borderRadius: '9999px', fontSize: '14px', fontWeight: 600, border: 'none' }}>View Instructions</button>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ padding: '48px 24px', backgroundColor: '#54253D' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#D5B2B2' }}>© 2026 Bot Sidekick. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
