"use client";

import { useState, FormEvent } from "react";
import { inquiry } from "@/lib/content";

interface FormState {
  name: string;
  email: string;
  phone: string;
  petName: string;
  petType: string;
  service: string;
  message: string;
}

type Status = "idle" | "loading" | "success" | "error";

const empty: FormState = {
  name: "", email: "", phone: "", petName: "", petType: "", service: "", message: "",
};

const inputClass =
  "w-full font-body text-sm text-brand-charcoal bg-white border border-brand-sage/30 rounded-xl px-4 py-3 placeholder:text-brand-charcoal/30 focus:outline-none focus:ring-2 focus:ring-brand-rose/40 focus:border-brand-rose transition-colors duration-150";

const labelClass =
  "block font-body text-xs font-medium text-brand-charcoal/60 uppercase tracking-wider mb-1.5";

export default function InquiryForm() {
  const [form, setForm] = useState<FormState>(empty);
  const [status, setStatus] = useState<Status>("idle");

  function field(key: keyof FormState) {
    return (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => setForm((prev) => ({ ...prev, [key]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm(empty);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <section id="contact" className="pt-20 pb-16 md:pt-32 md:pb-20 bg-brand-cream">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <div className="w-8 h-0.5 bg-brand-rose mx-auto mb-8" />
          <h2 className="font-heading text-2xl font-semibold text-brand-charcoal mb-4">
            Message Sent!
          </h2>
          <p className="font-body text-brand-charcoal/65 leading-relaxed">
            {inquiry.success}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="pt-20 pb-16 md:pt-32 md:pb-20 bg-brand-cream">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-body text-brand-rose text-xs font-medium tracking-[0.2em] uppercase mb-4">
            Get in Touch
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-brand-charcoal mb-4 text-balance">
            {inquiry.heading}
          </h2>
          <p className="font-body text-brand-charcoal/55 leading-relaxed max-w-lg mx-auto">
            {inquiry.subheading}
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-5">

          {/* Name + Email */}
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className={labelClass}>
                {inquiry.fields.name.label}
              </label>
              <input
                id="name" type="text" name="name" required autoComplete="name"
                placeholder={inquiry.fields.name.placeholder}
                value={form.name} onChange={field("name")}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>
                {inquiry.fields.email.label}
              </label>
              <input
                id="email" type="email" name="email" required autoComplete="email"
                placeholder={inquiry.fields.email.placeholder}
                value={form.email} onChange={field("email")}
                className={inputClass}
              />
            </div>
          </div>

          {/* Phone + Pet Name */}
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="phone" className={labelClass}>
                {inquiry.fields.phone.label}
              </label>
              <input
                id="phone" type="tel" name="phone" autoComplete="tel"
                placeholder={inquiry.fields.phone.placeholder}
                value={form.phone} onChange={field("phone")}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="petName" className={labelClass}>
                {inquiry.fields.petName.label}
              </label>
              <input
                id="petName" type="text" name="petName"
                placeholder={inquiry.fields.petName.placeholder}
                value={form.petName} onChange={field("petName")}
                className={inputClass}
              />
            </div>
          </div>

          {/* Pet Type + Service */}
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="petType" className={labelClass}>
                {inquiry.fields.petType.label}
              </label>
              <input
                id="petType" type="text" name="petType"
                placeholder={inquiry.fields.petType.placeholder}
                value={form.petType} onChange={field("petType")}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="service" className={labelClass}>
                {inquiry.fields.service.label}
              </label>
              <select
                id="service" name="service" required
                value={form.service} onChange={field("service")}
                className={`${inputClass} ${!form.service ? "text-brand-charcoal/30" : ""}`}
              >
                <option value="" disabled>{inquiry.fields.service.placeholder}</option>
                {inquiry.services.map((s) => (
                  <option key={s} value={s} className="text-brand-charcoal">{s}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className={labelClass}>
              {inquiry.fields.message.label}
            </label>
            <textarea
              id="message" name="message" required rows={5}
              placeholder={inquiry.fields.message.placeholder}
              value={form.message} onChange={field("message")}
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* Error */}
          {status === "error" && (
            <p className="font-body text-sm text-brand-rose" role="alert">
              {inquiry.error}
            </p>
          )}

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full sm:w-auto px-10 py-3.5 rounded-full bg-brand-rose text-white font-body text-sm font-medium hover:bg-brand-rose/85 disabled:opacity-60 transition-all duration-200"
            >
              {status === "loading" ? "Sending…" : inquiry.submit}
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}
