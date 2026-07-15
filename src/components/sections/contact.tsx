'use client';

import * as React from 'react';
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';
import { getFadeInUpProps } from '@/lib/animation';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

/**
 * Contact Section Component.
 * Split-screen layout:
 * - Left: Location, Availability telemetry, and direct social links.
 * - Right: Client-validated Contact Form with honeypot spam protection.
 */
export function ContactSection() {
  const isReducedMotion = useReducedMotion();

  // Form states
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [honeypot, setHoneypot] = React.useState(''); // Spam protection honeypot

  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    // Honeypot spam protection trigger
    if (honeypot) {
      // Quietly succeed without sending anything (spam bot caught)
      setTimeout(() => {
        setStatus('success');
      }, 1000);
      return;
    }

    // Basic Client-side validations
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    try {
      // Configurable endpoint. If configured in site config, POST to it.
      // Otherwise, simulate a successful server submission.
      const endpoint = siteConfig.contactFormEndpoint;

      if (endpoint) {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, message }),
        });

        if (!response.ok) {
          throw new Error('Server returned an error status.');
        }
      } else {
        // Mock server latency to demonstrate loading UI states
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }

      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      console.error('Contact submission error:', err);
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again or email directly.');
    }
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 border-t border-border-custom bg-background"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <p className="font-mono text-2xs uppercase tracking-widest text-accent">
            [ 11 // Bridge ]
          </p>
          <h2
            id="contact-heading"
            className="font-display text-3xl font-bold tracking-tight text-text-primary"
          >
            Get In Touch
          </h2>
        </div>

        {/* Form Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Coordinates */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="font-display text-lg font-bold text-text-primary">
                {"Let's discuss statistics, algorithms, or internships."}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                I am actively seeking junior positions or internships where I can contribute to
                building robust data pipelines, training ML architectures, or designing scalable
                software.
              </p>
            </div>

            {/* Telemetry Stamps */}
            <div className="border border-border-custom bg-surface p-6 rounded-md space-y-4">
              <div className="flex items-center space-x-3 text-text-secondary">
                <MapPin size={16} className="text-accent" />
                <span className="font-mono text-xs uppercase">{siteConfig.location}</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span className="font-mono text-xs uppercase text-text-secondary">
                  {siteConfig.status.label}
                </span>
              </div>
            </div>

            {/* Direct coordinate links */}
            <div className="flex flex-col space-y-3 font-mono text-xs">
              <a
                href={siteConfig.links.email}
                className="flex items-center space-x-3 text-text-secondary hover:text-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent w-fit py-1"
                aria-label="Send direct email"
              >
                <Mail size={14} />
                <span>{siteConfig.links.email.replace('mailto:', '')}</span>
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-text-secondary hover:text-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent w-fit py-1"
                aria-label="View LinkedIn profile"
              >
                <Linkedin size={14} />
                <span>linkedin.com/in/ayush-patwa</span>
              </a>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-text-secondary hover:text-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent w-fit py-1"
                aria-label="View GitHub profile"
              >
                <Github size={14} />
                <span>github.com/AyushPatwa11</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <motion.div
              {...getFadeInUpProps(isReducedMotion)}
              className="border border-border-custom bg-surface p-6 sm:p-8 rounded-md"
            >
              {status === 'success' ? (
                /* Success Feedback Pane */
                <div className="py-8 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-success/10 border border-success/20 flex items-center justify-center text-success mx-auto">
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="font-display text-lg font-bold text-text-primary">
                    Message Received // 起動
                  </h4>
                  <p className="text-xs text-text-secondary max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out. I have received your message and will review your
                    query shortly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="border border-border-custom bg-surface text-text-primary hover:border-accent hover:text-accent px-4 py-2 text-xs font-mono font-medium rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent transition-all"
                  >
                    SEND_ANOTHER_MESSAGE
                  </button>
                </div>
              ) : (
                /* Standard Form Element */
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Spam bot honeypot field (hidden from sight/screen readers) */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website">Leave this field blank</label>
                    <input
                      type="text"
                      id="website"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name input */}
                    <div className="space-y-1">
                      <label
                        htmlFor="form-name"
                        className="font-mono text-2xs uppercase text-text-secondary"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="form-name"
                        required
                        value={name}
                        disabled={status === 'loading'}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-background border border-border-custom focus:border-accent px-4 py-2.5 text-xs rounded-sm focus-visible:outline-none transition-colors text-text-primary"
                        placeholder="Your name"
                      />
                    </div>

                    {/* Email input */}
                    <div className="space-y-1">
                      <label
                        htmlFor="form-email"
                        className="font-mono text-2xs uppercase text-text-secondary"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="form-email"
                        required
                        value={email}
                        disabled={status === 'loading'}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-background border border-border-custom focus:border-accent px-4 py-2.5 text-xs rounded-sm focus-visible:outline-none transition-colors text-text-primary"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="space-y-1">
                    <label
                      htmlFor="form-message"
                      className="font-mono text-2xs uppercase text-text-secondary"
                    >
                      Message *
                    </label>
                    <textarea
                      id="form-message"
                      required
                      rows={5}
                      value={message}
                      disabled={status === 'loading'}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-background border border-border-custom focus:border-accent px-4 py-2.5 text-xs rounded-sm focus-visible:outline-none resize-none transition-colors text-text-primary"
                      placeholder="Specify project details, timelines, or roles here..."
                    />
                  </div>

                  {/* Error Notification Alert */}
                  {status === 'error' && (
                    <div className="border border-error/20 bg-error/5 text-error px-4 py-3 text-xs rounded-sm flex items-start space-x-2">
                      <AlertCircle size={14} className="mt-0.5 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Submit Action Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-text-primary text-background hover:bg-accent hover:text-white disabled:opacity-50 disabled:hover:bg-text-primary disabled:hover:text-background px-5 py-3 text-xs font-mono font-medium rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent transition-all cursor-pointer"
                    >
                      {status === 'loading' ? (
                        <>
                          <span className="w-3.5 h-3.5 border-2 border-background border-t-transparent rounded-full animate-spin" />
                          <span>SENDING_MESSAGE...</span>
                        </>
                      ) : (
                        <>
                          <Send size={14} />
                          <span>TRANSMIT_INQUIRY</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
