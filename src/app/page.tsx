"use client";

import React from 'react';
import QRCode from "react-qr-code";
// @ts-ignore
import { CheckCircle, Smartphone, ExternalLink, ShieldCheck, Heart, Play, X, Download } from "lucide-react";

export default function Home() {
  const [loading, setLoading] = React.useState(true);
  const [showVideo, setShowVideo] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [showHabitVideo, setShowHabitVideo] = React.useState(false);
  const habitVideoRef = React.useRef<HTMLVideoElement>(null);

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

        {showHabitVideo && (
          <div className="video-overlay" onClick={() => { setShowHabitVideo(false); if (habitVideoRef.current) habitVideoRef.current.pause(); }}>
            <div className="video-modal" onClick={(e) => e.stopPropagation()}>
              <button className="video-close-btn" onClick={() => { setShowHabitVideo(false); if (habitVideoRef.current) habitVideoRef.current.pause(); }}>
                <X size={24} />
              </button>
              <video
                ref={habitVideoRef}
                src="/demohabit.mp4"
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
            
            {/* Premium App Section */}
            <div className="app-card" style={{ borderColor: '#f59e0b' }}>
              <div className="app-card-header">
                <div className="app-card-content">
                  <h3>Habit Builder</h3>
                  <p>Special premium app testing. Requires additional steps to download.</p>
                </div>
                <div className="qr-container">
                  <QRCode value="https://play.google.com/apps/testing/com.tanay.habit_builder" size={80} style={{ height: "auto", maxWidth: "100%", width: "100%" }} />
                </div>
              </div>
              
              <div className="special-notice">
                <p><strong>Special Instruction:</strong></p>
                <p>Watch the video below to learn how to download the app.</p>
                <p style={{ marginTop: '0.5rem' }}><strong>Note:</strong> It will show a price, but it is <strong>free</strong> for you! Just choose the "Google Play Test Card" when you get the app.</p>
              </div>
              <button 
                className="btn-watch-demo" 
                style={{ marginTop: '1rem', width: '100%', justifyContent: 'center' }}
                onClick={() => setShowHabitVideo(true)}
              >
                <span className="btn-watch-pulse" />
                <Play size={20} fill="#fff" color="#fff" />
                <span>Watch Instruction Video</span>
              </button>
              <a href="https://play.google.com/apps/testing/com.tanay.habit_builder" target="_blank" rel="noreferrer" className="playstore-button" style={{ marginTop: '0.5rem' }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="playstore-icon" viewBox="0 0 512 512">
                  <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z" />
                </svg>
                <span className="playstore-texts">
                  <span className="playstore-text-1">GET IT ON</span>
                  <span className="playstore-text-2">Google Play</span>
                </span>
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
