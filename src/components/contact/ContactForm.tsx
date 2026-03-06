'use client';

import { useState } from 'react';
import styles from './ContactForm.module.scss';

type FormValues = {
  name: string;
  email: string;
  artistName: string;
  company: string;
  service: string;
  timeline: string;
  message: string;
};

const initialValues: FormValues = {
  name: '',
  email: '',
  artistName: '',
  company: '',
  service: '',
  timeline: '',
  message: '',
};

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: 'idle' | 'success' | 'error';
    message: string;
  }>({
    type: 'idle',
    message: '',
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus({ type: 'idle', message: '' });

    if (!values.name.trim() || !values.email.trim() || !values.message.trim()) {
      setStatus({
        type: 'error',
        message: 'Please complete name, email, and message.',
      });
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong.');
      }

      setStatus({
        type: 'success',
        message: 'Thanks — your inquiry has been sent.',
      });
      setValues(initialValues);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Something went wrong.';
      setStatus({
        type: 'error',
        message,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.infoCard}>
        <p className={styles.kicker}>Start an inquiry</p>
        <h2>Tell us about your project.</h2>
        <p>
          Share as much detail as you can about the artist, campaign, timing,
          and goals. The more context you give, the easier it is to understand
          how we can help.
        </p>

        <ul className={styles.points}>
          <li>Album and single release campaigns</li>
          <li>Tour announcements and live press outreach</li>
          <li>Artist positioning and messaging support</li>
          <li>Long-term PR strategy for bands and labels</li>
        </ul>
      </div>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.grid}>
          <div className={styles.field}>
            <label htmlFor='name'>Your Name *</label>
            <input
              id='name'
              name='name'
              type='text'
              value={values.name}
              onChange={handleChange}
              placeholder='Jane Smith'
              autoComplete='name'
            />
          </div>

          <div className={styles.field}>
            <label htmlFor='email'>Email *</label>
            <input
              id='email'
              name='email'
              type='email'
              value={values.email}
              onChange={handleChange}
              placeholder='jane@example.com'
              autoComplete='email'
            />
          </div>

          <div className={styles.field}>
            <label htmlFor='artistName'>Artist / Band Name</label>
            <input
              id='artistName'
              name='artistName'
              type='text'
              value={values.artistName}
              onChange={handleChange}
              placeholder='Band or artist name'
            />
          </div>

          <div className={styles.field}>
            <label htmlFor='company'>Label / Company</label>
            <input
              id='company'
              name='company'
              type='text'
              value={values.company}
              onChange={handleChange}
              placeholder='Optional'
            />
          </div>

          <div className={styles.field}>
            <label htmlFor='service'>Service Needed</label>
            <select
              id='service'
              name='service'
              value={values.service}
              onChange={handleChange}
            >
              <option value=''>Select a service</option>
              <option value='media-relations'>Media Relations</option>
              <option value='press-campaign'>Press Campaign</option>
              <option value='tour-pr'>Tour PR</option>
              <option value='artist-positioning'>Artist Positioning</option>
              <option value='general'>General Inquiry</option>
            </select>
          </div>

          <div className={styles.field}>
            <label htmlFor='timeline'>Timeline</label>
            <input
              id='timeline'
              name='timeline'
              type='text'
              value={values.timeline}
              onChange={handleChange}
              placeholder='e.g. Album releases in September'
            />
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor='message'>Project Details *</label>
          <textarea
            id='message'
            name='message'
            value={values.message}
            onChange={handleChange}
            rows={8}
            placeholder='Tell us about your campaign, goals, release schedule, and what kind of PR support you need.'
          />
        </div>

        {status.type !== 'idle' && (
          <div
            className={`${styles.status} ${
              status.type === 'success' ? styles.success : styles.error
            }`}
            role='status'
            aria-live='polite'
          >
            {status.message}
          </div>
        )}

        <button type='submit' className={styles.submit} disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Inquiry'}
        </button>
      </form>
    </div>
  );
}
