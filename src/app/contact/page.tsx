import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
export const metadata: Metadata = { title: "Contact" };
export default function ContactPage() {
  return <div className="container page-shell contact-layout"><div><span className="eyebrow">GET IN TOUCH</span><h1>Contact</h1><p className="page-intro">Have a question about an article, a suggestion for a topic or a general enquiry? Send a message.</p><div className="contact-note"><h3>Personal financial enquiries</h3><p>If you are looking for help understanding your financial situation, you can describe your enquiry here. Any personalized investment-advisory service is subject to applicable regulatory permissions.</p></div></div><ContactForm /></div>;
}
