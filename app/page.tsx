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

      <section style={{ padding: '80px 24px', backgroundColor: '#EBD1BE30' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ color: '#54253D', fontSize: '36px', fontWeight: 300, marginBottom: '16px' }}>Setup Guides</h2>
            <p style={{ color: '#6C3750', fontSize: '18px' }}>Follow the step-by-step instructions below to complete each part of your Bot Sidekick setup.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #D5B2B2', borderRadius: '16px', overflow: 'hidden' }}>
              <div style={{ backgroundColor: '#54253D', padding: '16px', borderBottom: '1px solid #D5B2B240' }}>
                <span style={{ color: '#D5B2B2', fontSize: '12px', fontWeight: 600 }}>SETUP GUIDE 01</span>
                <h3 style={{ color: '#FEF6ED', fontSize: '14px', fontWeight: 600, marginTop: '4px' }}>Create Your OpenAI API Key</h3>
              </div>
              <div style={{ padding: '48px 24px', backgroundColor: '#FEF6ED', textAlign: 'center', borderBottom: '1px solid #D5B2B240' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>📄</div>
                <p style={{ color: '#6C3750', fontSize: '14px' }}>Step-by-step guide for creating your OpenAI API key.</p>
              </div>
              <div style={{ padding: '16px' }}>
                <button disabled style={{ width: '100%', padding: '8px', borderRadius: '8px', border: '1px solid #D5B2B2', color: '#54253D', fontSize: '14px', fontWeight: 600, opacity: 0.5 }}>Coming Soon</button>
              </div>
            </div>
            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #D5B2B2', borderRadius: '16px', overflow: 'hidden' }}>
              <div style={{ backgroundColor: '#54253D', padding: '16px', borderBottom: '1px solid #D5B2B240' }}>
                <span style={{ color: '#D5B2B2', fontSize: '12px', fontWeight: 600 }}>SETUP GUIDE 02</span>
                <h3 style={{ color: '#FEF6ED', fontSize: '14px', fontWeight: 600, marginTop: '4px' }}>Add Credits to Your OpenAI API Account</h3>
              </div>
              <div style={{ padding: '48px 24px', backgroundColor: '#FEF6ED', textAlign: 'center', borderBottom: '1px solid #D5B2B240' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>📄</div>
                <p style={{ color: '#6C3750', fontSize: '14px' }}>Learn how to add billing credits to your OpenAI account.</p>
              </div>
              <div style={{ padding: '16px' }}>
                <button disabled style={{ width: '100%', padding: '8px', borderRadius: '8px', border: '1px solid #D5B2B2', color: '#54253D', fontSize: '14px', fontWeight: 600, opacity: 0.5 }}>Coming Soon</button>
              </div>
            </div>
            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #D5B2B2', borderRadius: '16px', overflow: 'hidden' }}>
              <div style={{ backgroundColor: '#54253D', padding: '16px', borderBottom: '1px solid #D5B2B240' }}>
                <span style={{ color: '#D5B2B2', fontSize: '12px', fontWeight: 600 }}>SETUP GUIDE 03</span>
                <h3 style={{ color: '#FEF6ED', fontSize: '14px', fontWeight: 600, marginTop: '4px' }}>Pair Your Bot Sidekick with Telegram</h3>
              </div>
              <div style={{ padding: '48px 24px', backgroundColor: '#FEF6ED', textAlign: 'center', borderBottom: '1px solid #D5B2B240' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>📄</div>
                <p style={{ color: '#6C3750', fontSize: '14px' }}>Connect your Bot Sidekick to Telegram for messaging.</p>
              </div>
              <div style={{ padding: '16px' }}>
                <button disabled style={{ width: '100%', padding: '8px', borderRadius: '8px', border: '1px solid #D5B2B2', color: '#54253D', fontSize: '14px', fontWeight: 600, opacity: 0.5 }}>Coming Soon</button>
              </div>
            </div>
            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #D5B2B2', borderRadius: '16px', overflow: 'hidden' }}>
              <div style={{ backgroundColor: '#54253D', padding: '16px', borderBottom: '1px solid #D5B2B240' }}>
                <span style={{ color: '#D5B2B2', fontSize: '12px', fontWeight: 600 }}>SETUP GUIDE 04</span>
                <h3 style={{ color: '#FEF6ED', fontSize: '14px', fontWeight: 600, marginTop: '4px' }}>Create Your OpenClaw Bot Profile</h3>
              </div>
              <div style={{ padding: '48px 24px', backgroundColor: '#FEF6ED', textAlign: 'center', borderBottom: '1px solid #D5B2B240' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>📄</div>
                <p style={{ color: '#6C3750', fontSize: '14px' }}>Set up your bot profile with personality and boundaries.</p>
              </div>
              <div style={{ padding: '16px' }}>
                <button disabled style={{ width: '100%', padding: '8px', borderRadius: '8px', border: '1px solid #D5B2B2', color: '#54253D', fontSize: '14px', fontWeight: 600, opacity: 0.5 }}>Coming Soon</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ marginBottom: '64px' }}>
            <h2 style={{ color: '#54253D', fontSize: '36px', fontWeight: 300, marginBottom: '16px' }}>A capable assistant begins with a clear foundation.</h2>
            <p style={{ color: '#6C3750', fontSize: '18px' }}>Bot Sidekick gives your OpenClaw assistant the access, instructions, boundaries, and communication channels it needs to support your business consistently.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            <div style={{ backgroundColor: '#FEF6ED', border: '1px solid #D5B2B2', borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#AF636F20', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', color: '#AF636F' }}>✦</div>
              <h3 style={{ color: '#54253D', fontSize: '16px', fontWeight: 600, marginBottom: '8px' }}>Clear Setup</h3>
              <p style={{ color: '#6C3750', fontSize: '14px' }}>Step-by-step guidance for completing each required setup process.</p>
            </div>
            <div style={{ backgroundColor: '#FEF6ED', border: '1px solid #D5B2B2', borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#AF636F20', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', color: '#AF636F' }}>✦</div>
              <h3 style={{ color: '#54253D', fontSize: '16px', fontWeight: 600, marginBottom: '8px' }}>Business Context</h3>
              <p style={{ color: '#6C3750', fontSize: '14px' }}>A bot profile that teaches your assistant who it serves and what role it performs.</p>
            </div>
            <div style={{ backgroundColor: '#FEF6ED', border: '1px solid #D5B2B2', borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#AF636F20', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', color: '#AF636F' }}>✦</div>
              <h3 style={{ color: '#54253D', fontSize: '16px', fontWeight: 600, marginBottom: '8px' }}>Approval Boundaries</h3>
              <p style={{ color: '#6C3750', fontSize: '14px' }}>Clear distinctions between what the bot may prepare and what requires human approval.</p>
            </div>
            <div style={{ backgroundColor: '#FEF6ED', border: '1px solid #D5B2B2', borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#AF636F20', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', color: '#AF636F' }}>✦</div>
              <h3 style={{ color: '#54253D', fontSize: '16px', fontWeight: 600, marginBottom: '8px' }}>Secure Connections</h3>
              <p style={{ color: '#6C3750', fontSize: '14px' }}>Practical reminders for protecting keys, tokens, and private business information.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', backgroundColor: '#EBD1BE20' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ color: '#54253D', fontSize: '36px', fontWeight: 300, marginBottom: '16px' }}>How the setup process works</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#54253D', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', margin: '0 auto 16px', color: '#FEF6ED' }}>🔗</div>
              <div style={{ color: '#AF636F', fontSize: '14px', fontWeight: 600, marginBottom: '4px' }}>Step 1</div>
              <h3 style={{ color: '#54253D', fontSize: '16px', fontWeight: 600, marginBottom: '8px' }}>Connect OpenAI</h3>
              <p style={{ color: '#6C3750', fontSize: '14px' }}>Create the API key and add API billing.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#54253D', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', margin: '0 auto 16px', color: '#FEF6ED' }}>💬</div>
              <div style={{ color: '#AF636F', fontSize: '14px', fontWeight: 600, marginBottom: '4px' }}>Step 2</div>
              <h3 style={{ color: '#54253D', fontSize: '16px', fontWeight: 600, marginBottom: '8px' }}>Connect Telegram</h3>
              <p style={{ color: '#6C3750', fontSize: '14px' }}>Pair the Telegram account you will use to communicate with your bot.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#54253D', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', margin: '0 auto 16px', color: '#FEF6ED' }}>📝</div>
              <div style={{ color: '#AF636F', fontSize: '14px', fontWeight: 600, marginBottom: '4px' }}>Step 3</div>
              <h3 style={{ color: '#54253D', fontSize: '16px', fontWeight: 600, marginBottom: '8px' }}>Define the Bot</h3>
              <p style={{ color: '#6C3750', fontSize: '14px' }}>Create and install the OpenClaw bot profile.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#54253D', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', margin: '0 auto 16px', color: '#FEF6ED' }}>✓</div>
              <div style={{ color: '#AF636F', fontSize: '14px', fontWeight: 600, marginBottom: '4px' }}>Step 4</div>
              <h3 style={{ color: '#54253D', fontSize: '16px', fontWeight: 600, marginBottom: '8px' }}>Confirm and Test</h3>
              <p style={{ color: '#6C3750', fontSize: '14px' }}>Verify that Bot Sidekick can receive and respond to messages.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ color: '#54253D', fontSize: '36px', fontWeight: 300, marginBottom: '16px' }}>More Bot Sidekick Resources</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            <div style={{ backgroundColor: '#FEF6ED', border: '1px solid #D5B2B2', borderRadius: '16px', padding: '24px' }}>
              <h3 style={{ color: '#54253D', fontSize: '16px', fontWeight: 600, marginBottom: '8px' }}>Before You Begin</h3>
              <p style={{ color: '#6C3750', fontSize: '14px', marginBottom: '16px' }}>Prerequisites, account requirements, and preparation instructions.</p>
              <a href='#' style={{ color: '#AF636F', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>View Resources →</a>
            </div>
            <div style={{ backgroundColor: '#FEF6ED', border: '1px solid #D5B2B2', borderRadius: '16px', padding: '24px' }}>
              <h3 style={{ color: '#54253D', fontSize: '16px', fontWeight: 600, marginBottom: '8px' }}>Troubleshooting</h3>
              <p style={{ color: '#6C3750', fontSize: '14px', marginBottom: '16px' }}>Known issues, common errors, and recommended solutions.</p>
              <a href='#' style={{ color: '#AF636F', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>View Resources →</a>
            </div>
            <div style={{ backgroundColor: '#FEF6ED', border: '1px solid #D5B2B2', borderRadius: '16px', padding: '24px' }}>
              <h3 style={{ color: '#54253D', fontSize: '16px', fontWeight: 600, marginBottom: '8px' }}>New and Updated Guidance</h3>
              <p style={{ color: '#6C3750', fontSize: '14px', marginBottom: '16px' }}>Changes to OpenAI, Telegram, OpenClaw, or Bot Sidekick setup procedures.</p>
              <a href='#' style={{ color: '#AF636F', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>View Resources →</a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '48px 24px' }}>
        <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
          <div style={{ backgroundColor: '#FEF6ED', border: '2px solid #D5B2B2', borderRadius: '16px', padding: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{ fontSize: '32px' }}>🛡️</div>
              <div>
                <h3 style={{ color: '#54253D', fontSize: '20px', fontWeight: 600, marginBottom: '8px' }}>Your access information belongs only to you.</h3>
                <p style={{ color: '#6C3750', fontSize: '16px' }}>Never send passwords, API keys, Telegram bot tokens, authentication codes, recovery codes, credit card information, or private client information through ordinary email, text, or chat. Enter sensitive information only in the approved secure setup fields.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: 'linear-gradient(135deg, #54253D 0%, #6C3750 100%)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ fontSize: '120px' }}>🤖</div>
            </div>
            <div>
              <h2 style={{ color: '#FEF6ED', fontSize: '36px', fontWeight: 300, marginBottom: '16px' }}>Need help completing your setup?</h2>
              <p style={{ color: '#D5B2B2', fontSize: '18px', marginBottom: '24px' }}>Bot Sidekick onboarding support is available when you are uncertain about a step, permission, connection, or security requirement.</p>
              <p style={{ color: '#D9AB6F', fontSize: '20px', fontWeight: 600, marginBottom: '24px' }}>Support: +1-720-987-2080</p>
              <div style={{ display: 'flex', gap: '16px' }}>
                <a href='https://clawchitect.com/login' style={{ backgroundColor: '#AF636F', color: '#FEF6ED', padding: '16px 32px', borderRadius: '9999px', fontSize: '16px', fontWeight: 600, textDecoration: 'none' }}>Client Login</a>
                <a href='tel:+17209872080' style={{ border: '2px solid #D5B2B2', color: '#FEF6ED', padding: '16px 32px', borderRadius: '9999px', fontSize: '16px', fontWeight: 600, textDecoration: 'none' }}>Contact Support</a>
              </div>
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
