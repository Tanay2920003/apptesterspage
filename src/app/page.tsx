"use client";

import React from "react";
import QRCode from "react-qr-code";
import { ExternalLink, Volume2, VolumeX } from "lucide-react";

const groupEmail = "apptestersappstanay@googlegroups.com";
const groupUrl = "https://groups.google.com/g/apptestersappstanay";

const videos = [
  { src: "/demo.mp4", label: "General guide" },
  { src: "/demohabit.mp4", label: "Habit app · Paid" },
];

const apps = [
  {
    name: "Wristguard",
    id: "com.wristguard.app",
    url: "https://play.google.com/apps/testing/com.wristguard.app",
    description: "Lock and track your phone using your Wear OS watch.",
  },
  {
    name: "Pocket DB",
    id: "com.boltbase.boltbase",
    url: "https://play.google.com/apps/testing/com.boltbase.boltbase",
    description: "Join early access testing for Pocket DB.",
  },
  {
    name: "HomeTank",
    id: "com.echoonetango.tanksync",
    url: "https://play.google.com/apps/testing/com.echoonetango.tanksync",
    description: "Open-source project. Track your water usage and manage your tank efficiently.",
  },
  {
    name: "MedRemind",
    id: "com.medremind.med_remind",
    url: "https://play.google.com/apps/testing/com.medremind.med_remind",
    description: "Never miss a dose with a smart medication reminder.",
  },
];

const fixes = [
  {
    title: "Different Gmail account",
    text: "You joined the group with a different email than the one in your Play Store. Join again with the Play Store email.",
  },
  {
    title: "Google needs a moment",
    text: "It can take a minute or two for Google to recognise you as a tester. Wait, refresh, and try again.",
  },
  {
    title: "Wrong browser account",
    text: "On a computer, your browser may be signed into another Google account. Open this page on your Android phone, or scan the QR code.",
  },
];

export default function Home() {
  const [video, setVideo] = React.useState(videos[0].src);
  const [muted, setMuted] = React.useState(true);
  const [joined, setJoined] = React.useState(false);
  const [result, setResult] = React.useState("");
  const [sending, setSending] = React.useState(false);

  const onContactSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);
    setResult("");

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
        setResult("Thanks. Your request has been sent, and we'll reply by email soon.");
        form.reset();
      } else {
        setResult("Something went wrong. Please try again.");
      }
    } catch {
      setResult("Network error. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <main>
        <header className="hero">
          <p className="eyebrow">Android beta testing</p>
          <h1>App Testers Hub</h1>
          <p className="lead">
            Get early access to new Android apps. Setup takes about a minute.
          </p>
          <a href="#steps" className="btn btn-primary">
            Get started
          </a>

          <div className="hero-media" aria-hidden="true">
            <video src="/hero-dev.mp4" autoPlay muted loop playsInline />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/hero-test.gif" alt="" />
          </div>
        </header>

        <section className="section" id="video">
          <h2>Watch how it works</h2>
          <p className="section-lead">A one-minute walkthrough of joining and installing.</p>

          <div className="segmented" role="tablist">
            {videos.map((v) => (
              <button
                key={v.src}
                type="button"
                role="tab"
                aria-selected={video === v.src}
                className={video === v.src ? "active" : ""}
                onClick={() => setVideo(v.src)}
              >
                {v.label}
              </button>
            ))}
          </div>

          {video === "/demohabit.mp4" && (
            <p className="notice paid-note">
              Habit is a paid app. This demo shows the paid install flow.
            </p>
          )}

          <div className="video-frame">
            <video
              key={video}
              src={video}
              controls
              autoPlay
              muted={muted}
              loop
              playsInline
            />
            <button
              type="button"
              className="mute-btn"
              onClick={() => setMuted(!muted)}
              aria-label={muted ? "Unmute video" : "Mute video"}
            >
              {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              <span>{muted ? "Unmute" : "Mute"}</span>
            </button>
          </div>
        </section>

        <section className="section" id="steps">
          <h2>Three steps</h2>

          <ol className="steps">
            <li className="card">
              <span className="step-num">1</span>
              <h3>Find your Play Store email</h3>
              <p>
                Open the Play Store on your phone and tap your profile picture. The email shown
                there is the one you must use in the next step.
              </p>
            </li>

            <li className="card">
              <span className="step-num">2</span>
              <h3>Join the tester group</h3>
              <p>
                Google requires testers to be in our group. Join with the same email from step 1.
              </p>
              <a href={groupUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                Join Google Group <ExternalLink size={16} />
              </a>
              <p className="muted small">{groupEmail}</p>
              <label className="confirm">
                <input
                  type="checkbox"
                  checked={joined}
                  onChange={(e) => setJoined(e.target.checked)}
                />
                <span>I&apos;ve joined with my Play Store email</span>
              </label>
            </li>

            <li className="card">
              <span className="step-num">3</span>
              <h3>Install an app</h3>
              <p>
                Open an app below, tap <strong>Become a tester</strong>, then <strong>Install</strong>.
              </p>
              {!joined && (
                <p className="notice">Join the group in step 2 first, or Google Play will show an error.</p>
              )}

              <div className="apps">
                {apps.map((app, i) => (
                  <div key={app.id} className="app">
                    <div className="app-info">
                      <span className="app-no">App {i + 1}</span>
                      <h4>{app.name}</h4>
                      <p className="muted">{app.description}</p>
                    </div>
                    <a href={app.url} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
                      Get on Google Play <ExternalLink size={14} />
                    </a>
                    <div className="qr" title="Scan with your phone camera">
                      <QRCode value={app.url} size={64} />
                    </div>
                  </div>
                ))}
              </div>
            </li>
          </ol>
        </section>

        <section className="section" id="help">
          <h2>&ldquo;App not available&rdquo;?</h2>
          <p className="section-lead">It&apos;s almost always one of these.</p>

          <div className="fixes">
            {fixes.map((fix) => (
              <div key={fix.title} className="card">
                <h3>{fix.title}</h3>
                <p>{fix.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="contact">
          <h2>Still stuck?</h2>
          <p className="section-lead">
            Send us your Play Store email and we&apos;ll check your access.
          </p>

          <form className="form" onSubmit={onContactSubmit}>
            <div className="row">
              <label>
                <span>Name</span>
                <input type="text" name="name" autoComplete="name" required />
              </label>
              <label>
                <span>Play Store email</span>
                <input type="email" name="email" autoComplete="email" placeholder="you@gmail.com" required />
              </label>
            </div>

            <div className="row">
              <label>
                <span>Topic</span>
                <select name="request_type" defaultValue="Testing access / App not available">
                  <option>Testing access / App not available</option>
                  <option>Request support for an app</option>
                  <option>Download / Installation issue</option>
                  <option>Google Group join issue</option>
                  <option>Other</option>
                </select>
              </label>
              <label>
                <span>App</span>
                <input type="text" name="app" placeholder="Optional" />
              </label>
            </div>

            <label>
              <span>Message</span>
              <textarea name="message" rows={4} required />
            </label>

            <button className="btn btn-primary" type="submit" disabled={sending}>
              {sending ? "Sending…" : "Send request"}
            </button>
            {result && <p className="muted" role="status">{result}</p>}
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} App Testers Hub</p>
      </footer>
    </>
  );
}
