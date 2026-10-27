import { useEffect, useState } from 'react';
import resumeFile from '@assets/CV Marinés garcía.pdf';
import { profile } from '@/data/profile';
import '@styles/Sections.css';

const Contact = () => {
  const { email, github, linkedin } = profile.contact;
  const [note, setNote] = useState('');

  useEffect(() => {
    if (!note) return;
    const t = setTimeout(() => setNote(''), 4000);
    return () => clearTimeout(t);
  }, [note]);

  // mailto: no hace nada si el navegador no tiene un programa de correo,
  // así que además copiamos el correo y lo mostramos.
  const onEmailClick = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setNote(`Email copied: ${email}`);
    } catch {
      setNote(`My email: ${email}`);
    }
  };

  return (
    <section className="section contact" id="contact">
      <p className="contact__say">Say hi!</p>
      <h2 className="contact__title">Let's make something magical together</h2>

      <div className="contact__links">
        {email && (
          <a className="pill glass" href={`mailto:${email}`} onClick={onEmailClick}>
            Email me
          </a>
        )}
        {github && (
          <a className="pill glass" href={github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
        {linkedin && (
          <a className="pill glass" href={linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        )}
        <a className="pill pill--solid" href={resumeFile} download>
          Download resume
        </a>
      </div>

      <p className="contact__note" role="status" aria-live="polite">
        {note}
      </p>
    </section>
  );
};

export default Contact;
