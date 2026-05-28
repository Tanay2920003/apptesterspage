"use client";

import React from 'react';
import QRCode from "react-qr-code";
import { CheckCircle, Smartphone, ExternalLink, Heart, Play, X, Download, Mail, Send } from "lucide-react";

export default function Home() {
  const [loading, setLoading] = React.useState(true);
  const [showVideo, setShowVideo] = React.useState(false);
  const [contactResult, setContactResult] = React.useState("");
  const [contactSubmitting, setContactSubmitting] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader">
          <span><span /><span /><span /><span /></span>
          <div className="base">
            <span />
            <div className="face" />
          </div>
        </div>
        <div className="longfazers">
          <span /><span /><span /><span />
        </div>
      </div>
    );
  }

  const groupEmail = "apptestersappstanay@googlegroups.com";
  const groupUrl = "https://groups.google.com/g/apptestersappstanay";

  const onContactSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setContactSubmitting(true);
    setContactResult("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "ad4b8d7c-c570-4aff-9a2f-53a1c4e02fed");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setContactResult("Thanks, your request has been sent.");
        form.reset();
      } else {
        setContactResult("Something went wrong. Please try again.");
      }
    } catch {
      setContactResult("Network error. Please try again.");
    } finally {
      setContactSubmitting(false);
    }
  };
  
  const apps = [
    {
      name: "Wristguard",
      id: "com.wristguard.app",
      url: "https://play.google.com/apps/testing/com.wristguard.app",
      description: "App tester opt-in for Wristguard.",
    },
    {
      name: "Sam AppLock",
      id: "com.samapplock.applock",
      url: "https://play.google.com/apps/testing/com.samapplock.applock",
      description: "App tester opt-in for Sam AppLock.",
    },
  ];

  return (
    <>
      <main className="container">
        <header>
          <h1>App Testers Hub</h1>
          <p className="subtitle">
            Welcome to our Android App Beta Testing portal. Get exclusive early access to our upcoming apps and help us shape their future!
          </p>
          
          <div className="thank-you">
            <Heart size={20} color="#f43f5e" fill="#f43f5e" />
            <span>Thank you so much for volunteering your time to test our apps!</span>
            <Heart size={20} color="#f43f5e" fill="#f43f5e" />
          </div>
        </header>

        <section className="step-card">
          <h2><CheckCircle color="#34d399" /> Step 1: Join the Google Group</h2>
          <p>
            You MUST join our Google Group using your Google Play Store email before you can opt-in to test the apps below.
          </p>
          <a href={groupUrl} target="_blank" rel="noreferrer" className="btn-join">
            Join Google Group <ExternalLink size={18} />
          </a>
          <div style={{ marginTop: '1.25rem' }}>
            <span className="pill-note">
              NOTE: use same gmail for join and playstore
            </span>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', wordBreak: 'break-all' }}>
            Group Email: <strong>{groupEmail}</strong>
          </p>
          
          <div className="highlight-text">
            Important: After joining the group, please come back to this site to select any one or more apps to install from Step 2!
          </div>
        </section>

        <section className="guide-section">
          <div className="guide-card">
            <div className="guide-content">
              <div className="guide-icon-wrapper">
                <Download size={28} color="#fff" />
              </div>
              <div className="guide-text">
                <h2>Not sure how to download?</h2>
                <p>Watch our quick video guide to learn how to join the testing program and install the apps on your device.</p>
              </div>
            </div>
            <button
              className="btn-watch-demo"
              onClick={() => setShowVideo(true)}
            >
              <span className="btn-watch-pulse" />
              <Play size={20} fill="#fff" color="#fff" />
              <span>Watch Demo</span>
            </button>
          </div>
        </section>

        {showVideo && (
          <div className="video-overlay" onClick={() => { setShowVideo(false); if (videoRef.current) videoRef.current.pause(); }}>
            <div className="video-modal" onClick={(e) => e.stopPropagation()}>
              <button className="video-close-btn" onClick={() => { setShowVideo(false); if (videoRef.current) videoRef.current.pause(); }}>
                <X size={24} />
              </button>
              <video
                ref={videoRef}
                src="/demo.mp4"
                controls
                autoPlay
                className="demo-video"
                playsInline
              />
            </div>
          </div>
        )}

        <section>
          <h2 className="section-title">
            <Smartphone color="#0ea5e9" /> Step 2: Opt-in to Apps
          </h2>
          <div className="apps-grid">
            {apps.map((app) => (
              <div key={app.id} className="app-card">
                <div className="app-card-header">
                  <div className="app-card-content">
                    <h3>{app.name}</h3>
                    <p>{app.description}</p>
                  </div>
                  <div className="qr-container">
                    <QRCode value={app.url} size={80} style={{ height: "auto", maxWidth: "100%", width: "100%" }} />
                  </div>
                </div>
                <a href={app.url} target="_blank" rel="noreferrer" className="playstore-button" style={{ marginTop: 'auto' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="playstore-icon" viewBox="0 0 512 512">
                    <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z" />
                  </svg>
                  <span className="playstore-texts">
                    <span className="playstore-text-1">GET IT ON</span>
                    <span className="playstore-text-2">Google Play</span>
                  </span>
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="faq-section">
          <h2>FAQ</h2>
          <div className="faq-card">
            <h3>Not able to download or seeing &quot;App not available&quot;?</h3>
            <p>
              This means you either did not join the Google Group in Step 1, or the Gmail account you are using on the Google Play Store is different from the one you used to join the group.
            </p>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-shell">
            <div className="contact-copy">
              <div className="contact-icon">
                <Mail size={28} />
              </div>
              <h2>Request Support</h2>
              <p>
                Need help joining the tester group, installing an app, or requesting access? Send the details and we will get back to you.
              </p>
            </div>

            <form className="contact-form" onSubmit={onContactSubmit}>
              <div className="contact-field-grid">
                <label>
                  <span>Name</span>
                  <input type="text" name="name" placeholder="Your name" required />
                </label>
                <label>
                  <span>Email</span>
                  <input type="email" name="email" placeholder="you@gmail.com" required />
                </label>
              </div>

              <div className="contact-field-grid">
                <label>
                  <span>Request Type</span>
                  <select name="request_type" defaultValue="Testing access" required>
                    <option>Testing access</option>
                    <option>Request support for an app</option>
                    <option>Download issue</option>
                    <option>Google Group issue</option>
                    <option>Other</option>
                  </select>
                </label>
                <label>
                  <span>App</span>
                  <input type="text" name="app" placeholder="App name" />
                </label>
              </div>

              <label>
                <span>Message</span>
                <textarea name="message" placeholder="Tell us what you need help with." rows={5} required />
              </label>

              <button className="contact-submit" type="submit" disabled={contactSubmitting}>
                <Send size={18} />
                <span>{contactSubmitting ? "Sending..." : "Submit Request"}</span>
              </button>
              {contactResult && <p className="contact-result">{contactResult}</p>}
            </form>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Android App Testers. All rights reserved.</p>
      </footer>
    </>
  );
}
