"use client";
import { useState } from "react";
export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("");
  const api = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";
  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({ ...form, [e.target.name]: e.target.value });
  async function submit(e: React.FormEvent) {
    e.preventDefault(); setStatus("Sending...");
    try {
      const response = await fetch(`${api}/api/contact`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      if (!response.ok) throw new Error("API unavailable");
      setStatus("Thank you. Your message has been received."); setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      const mailto = `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@proteinshaikh.com"}?subject=${encodeURIComponent(form.subject || "Website enquiry")}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
      window.location.href = mailto;
      setStatus("Opening your email application. You can send the message from there.");
    }
  }
  return <form className="contact-form" onSubmit={submit}>
    <label>Your name<input name="name" value={form.name} onChange={update} required maxLength={100}/></label>
    <label>Email address<input name="email" type="email" value={form.email} onChange={update} required maxLength={180}/></label>
    <label>Subject<input name="subject" value={form.subject} onChange={update} required maxLength={160}/></label>
    <label>Message<textarea name="message" rows={6} value={form.message} onChange={update} required maxLength={5000}/></label>
    <button className="button button-dark" type="submit">Send enquiry <span>→</span></button>
    {status && <p className="form-status" role="status">{status}</p>}
    <p className="fine-print">Please do not include account numbers, passwords, identity documents or other sensitive financial information.</p>
  </form>;
}
