"use client";
import { useState } from "react";
import { Globe, Mail, MapPin, Send } from "lucide-react";
import PageHero from "@/components/layout/PageHero";

const EMAIL = "rizkysandipratama28@gmail.com";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", type: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim()) e.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "That email address looks invalid.";
    if (!form.message.trim()) e.message = "Please write a message.";
    return e;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length > 0) return;
    const subject = encodeURIComponent(`[Portfolio] Message from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nType: ${form.type || "-"}\n\n${form.message}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const field = "w-full bg-[#0d0b10] border border-white/25 px-4 py-3 font-tape text-[14px] text-[#F1E5D0] placeholder:text-[#B8ADB4]/70 focus:border-[#F5BA60] focus:outline-none transition-colors";
  const label = "block font-tape text-[11px] font-bold tracking-[0.2em] text-[#F1E5D0] mb-2";
  const err = "font-tape text-[12px] text-[#FF8FA5] mt-1.5";

  return (
    <>
      <PageHero
        channel="CH-07"
        room="Recording Studio · Booth A"
        kicker="Record a message"
        accent="#FF718E"
        timecode="00:07:00"
        title={<>LET&apos;S MAKE<br />SOMETHING WORTH<br /><span className="text-[#FF718E]">REPLAYING.</span></>}
        sub="Tell me about the project, the team, or the idea. Your message opens in your email client, pre-filled and ready to send."
      >
        <div className="mx-auto lg:ml-auto max-w-[340px]">
          <div className="relative rotate-[2deg] bg-[#1a0b10] border-4 border-[#2a1a20] px-6 py-8 text-center shadow-[0_0_60px_-10px_rgba(255,113,142,0.55),inset_0_0_30px_rgba(255,113,142,0.2)]">
            <span className="block font-display text-[clamp(2.4rem,6vw,3.6rem)] leading-none text-[#FF718E] [text-shadow:0_0_14px_#FF718E,0_0_36px_#FF718E]">ON AIR</span>
            <span className="block font-tape text-[11px] tracking-[0.3em] text-[#FF8FA5] mt-3">STUDIO A · ACCEPTING TAPES</span>
            <span className="absolute -top-4 left-8 w-0.5 h-4 bg-[#4a3a3a]" aria-hidden="true" />
            <span className="absolute -top-4 right-8 w-0.5 h-4 bg-[#4a3a3a]" aria-hidden="true" />
          </div>
        </div>
      </PageHero>

      <section className="bg-[#0d0b10] border-y border-white/[0.06] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 grid gap-12 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="bg-[#17141b] border border-white/20 shadow-[0_24px_44px_-18px_rgba(0,0,0,0.95)]">
            <div className="flex items-center gap-3 px-6 py-3 border-b border-white/15 bg-black/30">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF718E] animate-glow-pulse" aria-hidden="true" />
              <span className="font-tape text-[11px] font-bold tracking-[0.2em] text-[#FF718E]">REC</span>
              <span className="ml-auto font-tape text-[11px] tracking-[0.18em] text-[#B8ADB4]">CH-07 · SP</span>
            </div>

            {submitted ? (
              <div className="p-10 text-center" role="status">
                <p className="font-display text-2xl text-[#6FC6BE] mb-3">MESSAGE RECORDED.</p>
                <p className="text-[16px] text-[#F1E5D0]/85 leading-relaxed">Your email client should now be open with the message ready to send. If nothing opened, write to <a className="underline hover:text-[#F5BA60]" href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
                <button onClick={() => setSubmitted(false)} className="mt-6 font-tape text-[12px] font-bold border border-white/30 px-4 py-2 hover:border-[#F5BA60] hover:text-[#F5BA60] transition-colors">RECORD ANOTHER</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="p-6 md:p-8 space-y-6">
                <div>
                  <label htmlFor="name" className={label}>NAME</label>
                  <input id="name" name="name" autoComplete="name" type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined} placeholder="Your name" className={field} />
                  {errors.name && <p id="name-err" className={err}>{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className={label}>EMAIL</label>
                  <input id="email" name="email" autoComplete="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-err" : undefined} placeholder="you@example.com" className={field} />
                  {errors.email && <p id="email-err" className={err}>{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="ptype" className={label}>PROJECT TYPE <span className="text-[#B8ADB4] font-medium">(OPTIONAL)</span></label>
                  <input id="ptype" name="type" type="text" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} placeholder="Web app, UI/UX, collaboration..." className={field} />
                </div>
                <div>
                  <label htmlFor="msg" className={label}>MESSAGE</label>
                  <textarea id="msg" name="message" rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} aria-invalid={!!errors.message} aria-describedby={errors.message ? "msg-err" : undefined} placeholder="Tell me about your project..." className={`${field} resize-y`} />
                  {errors.message && <p id="msg-err" className={err}>{errors.message}</p>}
                </div>
                <button type="submit" className="w-full flex items-center justify-center gap-2 bg-[#F1E5D0] hover:bg-[#FF718E] text-[#151319] font-tape text-[13px] font-bold tracking-[0.12em] px-6 py-4 transition-colors">
                  <Send size={15} /> RECORD MESSAGE
                </button>
              </form>
            )}
          </div>

          <aside className="space-y-6">
            <div className="paper relative p-6 rotate-[1deg] shadow-[0_20px_36px_-14px_rgba(0,0,0,0.9)] font-tape">
              <span className="masking-tape absolute -top-3 right-8 w-16 h-6 rotate-[3deg]" aria-hidden="true" />
              <p className="text-[10px] font-bold tracking-[0.22em] text-[#151319]/70 mb-4">STUDIO DIRECTORY</p>
              {[
                { icon: Mail, k: "EMAIL", v: EMAIL, href: `mailto:${EMAIL}` },
                { icon: Globe, k: "LINKEDIN", v: "linkedin.com/in/rizksan", href: "https://linkedin.com/in/rizksan" },
                { icon: MapPin, k: "LOCATION", v: "Jakarta, Indonesia" },
              ].map((c) => (
                <div key={c.k} className="flex items-start gap-3 py-3 border-b border-dashed border-[#151319]/35 last:border-0">
                  <c.icon size={16} className="mt-1 shrink-0" aria-hidden="true" />
                  <div className="min-w-0">
                    <p className="text-[10px] tracking-[0.2em] text-[#151319]/65">{c.k}</p>
                    {c.href ? (
                      <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined} className="text-[14px] font-semibold break-all underline underline-offset-4 hover:text-[#C22F54]">{c.v}</a>
                    ) : (
                      <p className="text-[14px] font-semibold">{c.v}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <p className="font-tape text-[12px] text-[#B8ADB4] leading-relaxed">No server stores your message. Submitting hands it to your own email app, so nothing leaves your device until you press send there.</p>
          </aside>
        </div>
      </section>
    </>
  );
}
