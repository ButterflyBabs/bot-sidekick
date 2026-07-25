export default function Home() {
  return (
    <div style={{ backgroundColor: '#FEF6ED', minHeight: '100vh' }}>
      {/* Navigation */}
      <nav style={{ backgroundColor: '#FEF6ED', borderBottom: '1px solid #D5B2B240', padding: '16px 24px', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img src="/logo.jpg" alt="Bot Sidekick" style={{ width: '40px', height: '40px', borderRadius: '8px', objectFit: 'contain' }} />
            <span style={{ color: '#54253D', fontWeight: 600, fontSize: '20px' }}>Bot Sidekick</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <a href="#hero" style={{ color: '#54253D', fontSize: '14px', textDecoration: 'none' }}>Meet Bot Sidekick</a>
            <a href="#setup" style={{ color: '#54253D', fontSize: '14px', textDecoration: 'none' }}>Setup Guide</a>
            <a href="#how" style={{ color: '#54253D', fontSize: '14px', textDecoration: 'none' }}>How It Works</a>
            <a href="#resources" style={{ color: '#54253D', fontSize: '14px', textDecoration: 'none' }}>Resources</a>
            <a href="#support" style={{ color: '#54253D', fontSize: '14px', textDecoration: 'none' }}>Support</a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a href="https://clawchitect.com/login" style={{ color: '#54253D', fontSize: '14px', textDecoration: 'none' }}>Client Login</a>
            <a href="#setup" style={{ backgroundColor: '#AF636F', color: '#FEF6ED', padding: '10px 20px', borderRadius: '9999px', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>Begin Setup</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" style={{ background: 'linear-gradient(135deg, #54253D 0%, #6C3750 55%, #8E5165 100%)', paddingTop: '120px', paddingBottom: '60px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
          <div>
            <p style={{ color: '#D9AB6F', fontSize: '14px', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '16px' }}>YOUR BUSINESS. SUPPORTED.</p>
            <h1 style={{ color: '#FEF6ED', fontSize: '48px', fontWeight: 300, lineHeight: 1.2, marginBottom: '24px', fontFamily: 'serif' }}>Meet the AI assistant designed to work beside you.</h1>
            <p style={{ color: '#D5B2B2', fontSize: '18px', marginBottom: '32px' }}>Bot Sidekick helps you set up and use your OpenClaw assistant with clear instructions, thoughtful safeguards, and guided support at every step.</p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="#setup" style={{ backgroundColor: '#AF636F', color: '#FEF6ED', padding: '16px 32px', borderRadius: '9999px', fontSize: '16px', fontWeight: 600, textDecoration: 'none' }}>Start Your Setup</a>
              <a href="#guides" style={{ border: '2px solid #D5B2B2', color: '#FEF6ED', padding: '16px 32px', borderRadius: '9999px', fontSize: '16px', fontWeight: 600, textDecoration: 'none' }}>Explore the Setup Guides</a>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src="/logo.jpg" alt="Bot Sidekick" style={{ width: '384px', height: '384px', objectFit: 'contain' }} />
          </div>
        </div>
        <div style={{ height: '96px', background: 'linear-gradient(to bottom, #8E5165, #FEF6ED)' }} />
      </section>

      {/* Setup Choices */}
      <section id="setup" style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ color: '#54253D', fontSize: '36px', fontWeight: 300, marginBottom: '16px', fontFamily: 'serif' }}>What would you like help with today?</h2>
            <p style={{ color: '#6C3750', fontSize: '18px' }}>Choose the part of your Bot Sidekick setup you are ready to complete.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {[
              { icon: '🔑', title: 'Create Your OpenAI API Key', desc: 'Set up the API key your Bot Sidekick will use to access OpenAI.' },
              { icon: '💳', title: 'Add OpenAI API Credits', desc: 'Set up the separate API billing required for your bot to operate.' },
              { icon: '💬', title: 'Pair Bot Sidekick with Telegram', desc: 'Connect your Telegram account and complete the secure pairing process.' },
              { icon: '🤖', title: 'Create Your OpenClaw Bot Profile', desc: 'Use ChatGPT to define how your assistant should think, communicate, and protect your business.' },
            ].map((card, i) => (
              <div key={i} style={{ backgroundColor: '#FFFFFF', border: '1px solid #D5B2B2', borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#D5B2B240', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', margin: '0 auto 16px' }}>{card.icon}</div>
                <h3 style={{ color: '#54253D', fontSize: '18px', fontWeight: 600, marginBottom: '12px' }}>{card.title}</h3>
                <p style={{ color: '#6C3750', fontSize: '14px', marginBottom: '16px' }}>{card.desc}</p>
                <button style={{ backgroundColor: '#AF636F', color: '#FEF6ED', padding: '8px 16px', borderRadius: '9999px', fontSize: '14px', fontWeight: 600, border: 'none', cursor: 'pointer' }}>View Instructions</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Guides Placeholder */}
      <section id="guides" style={{ padding: '80px 24px', backgroundColor: '#EBD1BE30' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ color: '#54253D', fontSize: '36px', fontWeight: 300, marginBottom: '16px', fontFamily: 'serif' }}>Setup Guides</h2>
            <p style={{ color: '#6C3750', fontSize: '18px' }}>Follow the step-by-step instructions below to complete each part of your Bot Sidekick setup.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {[
              { num: '01', title: 'Create Your OpenAI API Key', desc: 'Step-by-step guide for creating your OpenAI API key.' },
              { num: '02', title: 'Add Credits to Your OpenAI API Account', desc: 'Learn how to add billing credits to your OpenAI account.' },
              { num: '03', title: 'Pair Your Bot Sidekick with Telegram', desc: 'Connect your Bot Sidekick to Telegram for messaging.' },
              { num: '04', title: 'Create Your OpenClaw Bot Profile', desc: 'Set up your bot profile with personality and boundaries.' },
            ].map((guide, i) => (
              <div key={i} style={{ backgroundColor: '#FFFFFF', border: '1px solid #D5B2B2', borderRadius: '16px', overflow: 'hidden' }}>
                <div style={{ backgroundColor: '#54253D', padding: '16px', borderBottom: '1px solid #D5B2B240' }}>
                  <span style={{ color: '#D5B2B2', fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em' }}>SETUP GUIDE {guide.num}</span>
                  <h3 style={{ color: '#FEF6ED', fontSize: '14px', fontWeight: 600, marginTop: '4px' }}>{guide.title}</h3>
                </div>
                <div style={{ padding: '48px 24px', backgroundColor: '#FEF6ED', textAlign: 'center', borderBottom: '1px solid #D5B2B240' }}>
                  <div style={{ fontSize: '48px', marginBottom: '16px' }}>📄</div>
                  <p style={{ color: '#6C3750', fontSize: '14px' }}>{guide.desc}</p>
                </div>
                <div style={{ padding: '16px' }}>
                  <button disabled style={{ width: '100%', padding: '8px', borderRadius: '8px', border: '1px solid #D5B2B2', color: '#54253D', fontSize: '14px', fontWeight: 600, opacity: 0.5, cursor: 'not-allowed' }}>Coming Soon</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ marginBottom: '64px' }}>
            <h2 style={{ color: '#54253D', fontSize: '36px', fontWeight: 300, marginBottom: '16px', fontFamily: 'serif' }}>A capable assistant begins with a clear foundation.</h2>
            <p style={{ color: '#6C3750', fontSize: '18px' }}>Bot Sidekick gives your OpenClaw assistant the access, instructions, boundaries, and communication channels it needs to support your business consistently.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {[
              { title: 'Clear Setup', desc: 'Step-by-step guidance for completing each required setup process.' },
              { title: 'Business Context', desc: 'A bot profile that teaches your assistant who it serves and what role it performs.' },
              { title: 'Approval Boundaries', desc: 'Clear distinctions between what the bot may prepare and what requires human approval.' },
              { title: 'Secure Connections', desc: 'Practical reminders for protecting keys, tokens, and private business information.' },
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: '#FEF6ED', border: '1px solid #D5B2B2', borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#AF636F20', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', color: '#AF636F' }}>✦</div>
                <h3 style={{ color: '#54253D', fontSize: '16px', fontWeight: 600, marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ color: '#6C3750', fontSize: '14px' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" style={{ padding: '80px 24px', backgroundColor: '#EBD1BE20' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ color: '#54253D', fontSize: '36px', fontWeight: 300, marginBottom: '16px', fontFamily: 'serif' }}>How the setup process works</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px' }}>
            {[
              { icon: '🔗', step: '1', title: 'Connect OpenAI', desc: 'Create the API key and add API billing.' },
              { icon: '💬', step: '2', title: 'Connect Telegram', desc: 'Pair the Telegram account you will use to communicate with your bot.' },
              { icon: '📝', step: '3', title: 'Define the Bot', desc: 'Create and install the OpenClaw bot profile.' },
              { icon: '✓', step: '4', title: 'Confirm and Test', desc: 'Verify that Bot Sidekick can receive and respond to messages.' },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: 'center', position: 'relative' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#54253D', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', margin: '0 auto 16px', color: '#FEF6ED' }}>{s.icon}</div>
                
                <div style={{ color: '#AF636F', fontSize: '14px', fontWeight: 600, marginBottom: '4px' }}>Step {s.step}</div>
                <h3 style={{ color: '#54253D', fontSize: '16px', fontWeight: 600, marginBottom: '8px' }}>{s.title}</h3>
                <p style={{ color: '#6C3750', fontSize: '14px' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section id="resources" style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ color: '#54253D', fontSize: '36px', fontWeight: 300, marginBottom: '16px', fontFamily: 'serif' }}>More Bot Sidekick Resources</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {[
              { title: 'Before You Begin', desc: 'Prerequisites, account requirements, and preparation instructions.' },
              { title: 'Troubleshooting', desc: 'Known issues, common errors, and recommended solutions.' },
              { title: 'New and Updated Guidance', desc: 'Changes to OpenAI, Telegram, OpenClaw, or Bot Sidekick setup procedures.' },
            ].map((r, i) => (
              <div key={i} style={{ backgroundColor: '#FEF6ED', border: '1px solid #D5B2B2', borderRadius: '16px', padding: '24px' }}>
                <h3 style={{ color: '#54253D', fontSize: '16px', fontWeight: 600, marginBottom: '8px' }}>{r.title}</h3>
                <p style={{ color: '#6C3750', fontSize: '14px', marginBottom: '16px' }}>{r.desc}</p>
                <a href="#" style={{ color: '#AF636F', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>View Resources →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
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

      {/* Support */}
      <section id="support" style={{ padding: '80px 24px', background: 'linear-gradient(135deg, #54253D 0%, #6C3750 100%)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img src="/logo.jpg" alt="Bot Sidekick" style={{ width: '256px', height: '256px', objectFit: 'contain' }} />
            </div>
            <div>
              <h2 style={{ color: '#FEF6ED', fontSize: '36px', fontWeight: 300, marginBottom: '16px', fontFamily: 'serif' }}>Need help completing your setup?</h2>
              <p style={{ color: '#D5B2B2', fontSize: '18px', marginBottom: '24px' }}>Bot Sidekick onboarding support is available when you are uncertain about a step, permission, connection, or security requirement.</p>
              <p style={{ color: '#D9AB6F', fontSize: '20px', fontWeight: 600, marginBottom: '24px' }}>Support: +1-720-987-2080</p>
              <div style={{ display: 'flex', gap: '16px' }}>
                <a href="https://clawchitect.com/login" style={{ backgroundColor: '#AF636F', color: '#FEF6ED', padding: '16px 32px', borderRadius: '9999px', fontSize: '16px', fontWeight: 600, textDecoration: 'none' }}>Client Login</a>
                <a href="tel:+17209872080" style={{ border: '2px solid #D5B2B2', color: '#FEF6ED', padding: '16px 32px', borderRadius: '9999px', fontSize: '16px', fontWeight: 600, textDecoration: 'none' }}>Contact Support</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '80px 24px', backgroundColor: '#EBD1BE20' }}>
        <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ color: '#54253D', fontSize: '36px', fontWeight: 300, marginBottom: '16px', fontFamily: 'serif' }}>Frequently Asked Questions</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqData.map((f, i) => (
              <div key={i} style={{ backgroundColor: '#FFFFFF', border: '1px solid #D5B2B2', borderRadius: '16px', overflow: 'hidden' }}>
                <button style={{ width: '100%', padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                  <span style={{ color: '#54253D', fontWeight: 500 }}>{f.q}</span>
                  <span style={{ color: '#AF636F' }}>+</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '80px 24px', background: 'linear-gradient(135deg, #54253D 0%, #AF636F 100%)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img src="/logo.jpg" alt="Bot Sidekick" style={{ width: '256px', height: '256px', objectFit: 'contain' }} />
            </div>
            <div>
              <h2 style={{ color: '#FEF6ED', fontSize: '36px', fontWeight: 300, marginBottom: '16px', fontFamily: 'serif' }}>Your Bot Sidekick is ready to become part of the business.</h2>
              <p style={{ color: '#D5B2B2', fontSize: '18px', marginBottom: '32px' }}>Complete the setup steps, establish clear approval boundaries, and give your assistant the foundation it needs to support you well.</p>
              <div style={{ display: 'flex', gap: '16px' }}>
                <a href="#setup" style={{ backgroundColor: '#AF636F', color: '#FEF6ED', padding: '16px 32px', borderRadius: '9999px', fontSize: '16px', fontWeight: 600, textDecoration: 'none' }}>Begin Setup</a>
                <a href="https://clawchitect.com/login" style={{ border: '2px solid #D5B2B2', color: '#FEF6ED', padding: '16px 32px', borderRadius: '9999px', fontSize: '16px', fontWeight: 600, textDecoration: 'none' }}>Open Client Login</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '48px 24px', backgroundColor: '#54253D' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img src="/logo.jpg" alt="Bot Sidekick" style={{ width: '40px', height: '40px', borderRadius: '8px', objectFit: 'contain' }} />
              <span style={{ color: '#FEF6ED', fontWeight: 600, fontSize: '20px' }}>Bot Sidekick</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <span style={{ color: '#D5B2B2', fontSize: '14px' }}>Support: +1-720-987-2080</span>
              <a href="https://clawchitect.com/login" style={{ color: '#D5B2B2', fontSize: '14px', textDecoration: 'none' }}>Client Login</a>
              <a href="#" style={{ color: '#D5B2B2', fontSize: '14px', textDecoration: 'none' }}>Privacy</a>
              <a href="#" style={{ color: '#D5B2B2', fontSize: '14px', textDecoration: 'none' }}>Terms</a>
            </div>
            <p style={{ color: '#D5B2B2', fontSize: '14px' }}>© 2026 Bot Sidekick. All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
