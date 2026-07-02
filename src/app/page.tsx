"use client";

import React from 'react';
import QRCode from "react-qr-code";
import { 
  CheckCircle, 
  Smartphone, 
  ExternalLink, 
  Heart, 
  Mail, 
  Send, 
  AlertTriangle, 
  HelpCircle, 
  Video, 
  Volume2, 
  VolumeX, 
  CheckSquare, 
  Square, 
  Info, 
  ArrowDown, 
  Sparkles,
  ShieldAlert
} from "lucide-react";

export default function Home() {
  const [selectedVideo, setSelectedVideo] = React.useState<string>("/demo.mp4");
  const [isMuted, setIsMuted] = React.useState<boolean>(true);
  const [joinedGroup, setJoinedGroup] = React.useState<boolean>(false);
  const [contactResult, setContactResult] = React.useState("");
  const [contactSubmitting, setContactSubmitting] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const groupEmail = "apptestersappstanay@googlegroups.com";
  const groupUrl = "https://groups.google.com/g/apptestersappstanay";

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoChange = (url: string) => {
    setSelectedVideo(url);
    if (videoRef.current) {
      videoRef.current.src = url;
      videoRef.current.play().catch(() => {
        // Handle browser autoplay policies gracefully
      });
    }
  };

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
        setContactResult("Thanks, your request has been sent! We will reply to your email soon.");
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
      description: "App tester opt-in for Wristguard. Protect your wrist health with our smart tracking utility.",
    },
    {
      name: "Sam AppLock",
      id: "com.samapplock.applock",
      url: "https://play.google.com/apps/testing/com.samapplock.applock",
      description: "App tester opt-in for Sam AppLock. Secure your private apps and data with advanced biometric lock.",
    },
  ];

  return (
    <>
      <main className="container">
        <header>
          <div className="trust-banner">
            <Sparkles size={20} className="animate-spin-slow" />
            <span>Official Google Play Beta Testing Program • Easy 2-Step Installation</span>
          </div>
          <h1>App Testers Hub</h1>
          <p className="subtitle">
            Welcome to our Android App Testing portal! Get exclusive early access to our exciting new apps. 
            <strong> Even if you have never tested an app before, our foolproof guide below will have you set up in 60 seconds!</strong>
          </p>
          
          <div className="thank-you">
            <Heart size={22} color="#f43f5e" fill="#f43f5e" />
            <span>Thank you so much for volunteering your time to test our apps!</span>
            <Heart size={22} color="#f43f5e" fill="#f43f5e" />
          </div>
        </header>

        {/* PROMINENT VIDEO GUIDE SECTION */}
        <section className="video-showcase-section" id="video-guide">
          <div className="video-showcase-header">
            <div className="video-title-badge">
              <Video size={24} color="#38bdf8" />
              <span>WATCH FIRST: 1-Minute Visual Guide</span>
            </div>
            <h2>How To Install Without Errors</h2>
            <p className="video-subtitle">
              Watch this quick autoplaying video to see exactly how to join the tester group and download your app without getting &quot;App not available&quot;!
            </p>

            <div className="video-tabs">
              <button 
                type="button"
                className={`video-tab-btn ${selectedVideo === "/demo.mp4" ? "active" : ""}`}
                onClick={() => handleVideoChange("/demo.mp4")}
              >
                🎬 General Install Guide
              </button>
              <button 
                type="button"
                className={`video-tab-btn ${selectedVideo === "/demohabit.mp4" ? "active" : ""}`}
                onClick={() => handleVideoChange("/demohabit.mp4")}
              >
                📱 Habit App Demo
              </button>
            </div>
          </div>

          <div className="video-player-frame">
            {isMuted && (
              <div className="unmute-banner" onClick={toggleMute}>
                <VolumeX size={22} color="#fef08a" />
                <span>🔇 Video is muted by default — <strong>Click here to UNMUTE & Listen 🔊</strong></span>
                <span className="unmute-pulse-btn">Click to Unmute</span>
              </div>
            )}
            
            <div className="video-wrapper">
              <video
                ref={videoRef}
                src={selectedVideo}
                controls
                autoPlay
                muted={isMuted}
                loop
                playsInline
                className="main-demo-video"
              />
            </div>

            <div className="video-footer-controls">
              <button type="button" className="btn-mute-toggle" onClick={toggleMute}>
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                <span>{isMuted ? "Unmute Audio" : "Mute Audio"}</span>
              </button>
              <span className="video-hint">💡 Tip: You can pause, rewind, or make the video full screen anytime!</span>
            </div>
          </div>

          <div className="video-key-takeaways">
            <div className="takeaway-item">
              <span className="takeaway-num">1️⃣</span>
              <p><strong>Check Your Gmail:</strong> Find out which Google account is logged into your Android phone&apos;s Play Store.</p>
            </div>
            <div className="takeaway-item">
              <span className="takeaway-num">2️⃣</span>
              <p><strong>Join Google Group:</strong> You MUST join our group using that EXACT SAME Gmail address.</p>
            </div>
            <div className="takeaway-item">
              <span className="takeaway-num">3️⃣</span>
              <p><strong>Download App:</strong> Once joined, tap the Google Play link below and tap &quot;Become a Tester&quot;!</p>
            </div>
          </div>
        </section>

        {/* FOOLPROOF STEP-BY-STEP SYSTEM */}
        <section className="steps-container">
          <div className="section-divider">
            <span>START YOUR EASY INSTALLATION HERE</span>
            <ArrowDown size={20} className="bounce-arrow" />
          </div>

          {/* PRE-STEP */}
          <div className="step-card warning-step">
            <div className="step-badge pre-badge">⚠️ PRE-STEP: CRITICAL RULE</div>
            <h2><ShieldAlert color="#fbbf24" size={28} /> Know Your Google Play Store Email!</h2>
            <p className="step-description">
              The #1 reason people fail to install beta apps is because they use two different Gmail accounts!
            </p>
            <div className="idiot-proof-box">
              <Info size={24} color="#38bdf8" className="flex-shrink-0" />
              <div>
                <strong>How to check your email in 10 seconds:</strong>
                <ol className="simple-list">
                  <li>Open the <strong>Google Play Store app</strong> on your Android phone.</li>
                  <li>Tap your <strong>profile picture or initial</strong> at the top right corner.</li>
                  <li>Look at the exact email address shown (for example: <em>yourname@gmail.com</em>).</li>
                  <li><strong>You MUST use this exact email in Step 1 below!</strong></li>
                </ol>
              </div>
            </div>
          </div>

          {/* STEP 1 */}
          <div className={`step-card step-one-card ${joinedGroup ? "completed-step" : ""}`}>
            <div className="step-badge">🟢 STEP 1 OF 2</div>
            <h2><CheckCircle color="#34d399" size={32} /> Join Our Google Tester Group</h2>
            <p className="step-description">
              Google requires all testers to be on our official tester mailing list. Click the button below to join for free!
            </p>
            
            <div className="join-action-area">
              <a href={groupUrl} target="_blank" rel="noreferrer" className="btn-join">
                <span>Join Google Group Now</span>
                <ExternalLink size={20} />
              </a>
              <div style={{ marginTop: '1.25rem' }}>
                <span className="pill-note">
                  ⚠️ CRITICAL: Must be the SAME Gmail from your Play Store!
                </span>
              </div>
            </div>

            <p className="group-email-display">
              Group Email: <strong>{groupEmail}</strong>
            </p>

            {/* Interactive Confirmation Checklist */}
            <div 
              className={`interactive-checklist ${joinedGroup ? "checked" : ""}`}
              onClick={() => setJoinedGroup(!joinedGroup)}
            >
              <div className="checkbox-icon">
                {joinedGroup ? (
                  <CheckSquare size={28} color="#10b981" />
                ) : (
                  <Square size={28} color="#94a3b8" />
                )}
              </div>
              <div className="checklist-text">
                <strong>👉 Click here once you have joined the Google Group!</strong>
                <span>
                  {joinedGroup 
                    ? "🎉 AWESOME! You are officially confirmed in Step 1. Now move down to Step 2 to install your apps!" 
                    : "I confirm that I clicked above and joined the group with my Google Play Store email."}
                </span>
              </div>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="step-card step-two-card">
            <div className="step-badge blue-badge">🚀 STEP 2 OF 2</div>
            <h2><Smartphone color="#38bdf8" size={32} /> Choose Your App & Download!</h2>
            <p className="step-description">
              Now that you are in the tester group, click any app below to open it on the Google Play Store. Tap <strong>&quot;Become a Tester&quot;</strong> and then tap <strong>&quot;Install&quot; / &quot;Download&quot;</strong>!
            </p>

            {!joinedGroup && (
              <div className="reminder-banner">
                <AlertTriangle size={20} color="#f59e0b" />
                <span><strong>Reminder:</strong> Please make sure you joined the group in Step 1 first, otherwise Google Play will show an error!</span>
              </div>
            )}

            <div className="apps-grid">
              {apps.map((app) => (
                <div key={app.id} className="app-card">
                  <div className="app-card-header">
                    <div className="app-card-content">
                      <h3>{app.name}</h3>
                      <p>{app.description}</p>
                    </div>
                    <div className="qr-container" title="Scan with your phone camera to download">
                      <QRCode value={app.url} size={84} style={{ height: "auto", maxWidth: "100%", width: "100%" }} />
                      <span className="qr-label">Scan with Phone</span>
                    </div>
                  </div>
                  <a href={app.url} target="_blank" rel="noreferrer" className="playstore-button">
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
          </div>
        </section>

        {/* TROUBLESHOOTING / IDIOT-PROOF FAQ */}
        <section className="faq-section" id="faq">
          <div className="faq-header">
            <HelpCircle size={32} color="#f43f5e" />
            <h2>Troubleshooting &amp; Dummy-Proof FAQ</h2>
          </div>
          
          <div className="faq-card">
            <h3>❓ Seeing &quot;App not available for this account&quot; or &quot;URL Not Found&quot;?</h3>
            <p className="faq-intro">
              Don&apos;t worry! This is extremely common and has a simple 30-second fix. It always means one of these three things:
            </p>
            
            <div className="troubleshoot-grid">
              <div className="troubleshoot-box">
                <div className="ts-num">1</div>
                <h4>Different Gmail Account</h4>
                <p>
                  You joined the Google Group in Step 1 using a different email address (like your work email or secondary Gmail) than the one logged into your Android Google Play Store. 
                  <br /><br />
                  <strong>Fix:</strong> Check your Play Store app email, and click Step 1 to join the group again with that exact email!
                </p>
              </div>

              <div className="troubleshoot-box">
                <div className="ts-num">2</div>
                <h4>Google Server Delay (Wait 2 Mins)</h4>
                <p>
                  You just joined the Google Group 5 seconds ago! Google&apos;s worldwide servers sometimes take 1 to 2 minutes to recognize that you are a new tester.
                  <br /><br />
                  <strong>Fix:</strong> Wait 60 seconds, refresh this page, and click the download button again.
                </p>
              </div>

              <div className="troubleshoot-box">
                <div className="ts-num">3</div>
                <h4>Browser Account Mismatch</h4>
                <p>
                  If you are clicking the download link on a computer or browser, your web browser might be logged into a different Google account than your phone.
                  <br /><br />
                  <strong>Fix:</strong> Open this website directly on your Android phone, or scan the QR code above with your phone camera!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SUPPORT / CONTACT SECTION */}
        <section className="contact-section" id="contact">
          <div className="contact-shell">
            <div className="contact-copy">
              <div className="contact-icon">
                <Mail size={32} />
              </div>
              <h2>Still Need Help? Request Support</h2>
              <p>
                If you followed the guide above and still can&apos;t get the app installed, don&apos;t give up! Send us a message below with your Play Store Gmail address and we will manually verify your account!
              </p>
            </div>

            <form className="contact-form" onSubmit={onContactSubmit}>
              <div className="contact-field-grid">
                <label>
                  <span>Your Name</span>
                  <input type="text" name="name" placeholder="John Doe" required />
                </label>
                <label>
                  <span>Your Play Store Gmail</span>
                  <input type="email" name="email" placeholder="yourname@gmail.com" required />
                </label>
              </div>

              <div className="contact-field-grid">
                <label>
                  <span>What do you need help with?</span>
                  <select name="request_type" defaultValue="Testing access" required>
                    <option>Testing access / App not available</option>
                    <option>Request support for an app</option>
                    <option>Download / Installation issue</option>
                    <option>Google Group join issue</option>
                    <option>Other</option>
                  </select>
                </label>
                <label>
                  <span>Which App?</span>
                  <input type="text" name="app" placeholder="Wristguard or Sam AppLock" />
                </label>
              </div>

              <label>
                <span>Message / Details</span>
                <textarea name="message" placeholder="Tell us what error you are seeing or how we can help you." rows={4} required />
              </label>

              <button className="contact-submit" type="submit" disabled={contactSubmitting}>
                <Send size={18} />
                <span>{contactSubmitting ? "Sending Request..." : "Submit Support Request"}</span>
              </button>
              {contactResult && <p className="contact-result">{contactResult}</p>}
            </form>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Android App Testers Hub. Built for foolproof, easy beta testing.</p>
      </footer>
    </>
  );
}
