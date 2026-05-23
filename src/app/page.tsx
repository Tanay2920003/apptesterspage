export default function Home() {
  const groupEmail = "apptestersappstanay@googlegroups.com";
  const groupUrl = "https://groups.google.com/g/apptestersappstanay";
  const whatsappNumber = "8810686931";
  
  const apps = [
    {
      name: "Wristguard",
      id: "com.wristguard.app",
      url: "https://play.google.com/apps/testing/com.wristguard.app",
      description: "App tester opt-in for Wristguard.",
    },
    {
      name: "Echo One Tango Todo",
      id: "com.echoonetango.todo",
      url: "https://play.google.com/apps/testing/com.echoonetango.todo",
      description: "App tester opt-in for Echo One Tango Todo.",
    },
    {
      name: "QR Generator",
      id: "com.tanay.qr_generator_app",
      url: "https://play.google.com/apps/testing/com.tanay.qr_generator_app",
      description: "App tester opt-in for QR Generator.",
    },
    {
      name: "Sam AppLock",
      id: "com.samapplock.applock",
      url: "https://play.google.com/apps/testing/com.samapplock.applock",
      description: "App tester opt-in for Sam AppLock.",
    },
    {
      name: "Attendance Pro",
      id: "com.tanay.attendancepro",
      url: "https://play.google.com/apps/testing/com.tanay.attendancepro",
      description: "App tester opt-in for Attendance Pro.",
    },
  ];

  return (
    <>
      <main className="container">
        <header>
          <h1>App Testers Hub</h1>
          <p className="subtitle">
            Welcome to the Android App Beta Testing portal. Join our Google Group to get exclusive early access to upcoming apps and help us improve them.
          </p>
        </header>

        <section className="step-card">
          <h2>Step 1: Join the Google Group</h2>
          <p>
            You MUST join our Google Group with your Google Play Store email before you can opt-in to test the apps below.
          </p>
          <a href={groupUrl} target="_blank" rel="noreferrer" className="btn-primary">
            Join Google Group
          </a>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
            Group Email: <strong>{groupEmail}</strong>
          </p>
        </section>

        <section>
          <h2 style={{ textAlign: "center", marginBottom: "2rem", fontSize: "2rem" }}>Step 2: Opt-in to Apps</h2>
          <div className="apps-grid">
            {apps.map((app) => (
              <div key={app.id} className="app-card">
                <h3>{app.name}</h3>
                <p>{app.description}</p>
                <a href={app.url} target="_blank" rel="noreferrer" className="btn-primary" style={{ textAlign: 'center' }}>
                  Opt-in as Tester
                </a>
              </div>
            ))}
            
            <div className="app-card" style={{ borderColor: '#f59e0b' }}>
              <h3>Habit Builder</h3>
              <p>Special premium app testing. Requires additional steps to download.</p>
              <div className="special-notice">
                <p><strong>Paid App Notice:</strong></p>
                <p>This is a paid app. Please direct message me on WhatsApp with your email to be added as a designated tester. You can then use a Google Test Card to download it for free.</p>
                <p style={{ marginTop: '0.5rem' }}><strong>WhatsApp:</strong> +91 {whatsappNumber}</p>
              </div>
              <a href={`https://wa.me/91${whatsappNumber}?text=Hi, I want to test Habit Builder. My email is: `} target="_blank" rel="noreferrer" className="btn-secondary" style={{ marginTop: '1rem' }}>
                Message on WhatsApp
              </a>
              <a href="https://play.google.com/apps/testing/com.tanay.habit_builder" target="_blank" rel="noreferrer" className="btn-secondary" style={{ marginTop: '0.5rem' }}>
                View on Play Store
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Android App Testers. All rights reserved.</p>
      </footer>
    </>
  );
}
