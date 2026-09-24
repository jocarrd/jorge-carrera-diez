"use client";

import { useState } from "react";
import { getCopy, site } from "@/content";
import type { Locale } from "@/i18n/config";

export function ContactForm({ locale }: { locale: Locale }) {
  const copy = getCopy(locale).pages.services.form;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState("");
  const [need, setNeed] = useState("");

  const subject = name ? `${copy.formSubject} · ${name}` : copy.formSubject;
  const body = [
    `${copy.name}: ${name}`,
    `${copy.email}: ${email}`,
    `${copy.product}: ${product}`,
    "",
    need,
  ].join("\n");

  const href = `mailto:${site.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;

  return (
    <div className="contact-form">
      <div className="contact-form-grid">
        <label className="field">
          <span className="field-label">{copy.name}</span>
          <input
            className="field-input"
            value={name}
            onChange={(event) => setName(event.target.value)}
            maxLength={120}
          />
        </label>
        <label className="field">
          <span className="field-label">{copy.email}</span>
          <input
            className="field-input"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            maxLength={200}
          />
        </label>
      </div>

      <label className="field mt-5">
        <span className="field-label">{copy.product}</span>
        <input
          className="field-input"
          value={product}
          onChange={(event) => setProduct(event.target.value)}
          maxLength={300}
        />
        <span className="field-hint">{copy.productHint}</span>
      </label>

      <label className="field mt-5">
        <span className="field-label">{copy.need}</span>
        <textarea
          className="field-input field-input--area"
          rows={5}
          value={need}
          onChange={(event) => setNeed(event.target.value)}
          maxLength={4000}
        />
        <span className="field-hint">{copy.needHint}</span>
      </label>

      <div className="mt-7 flex flex-wrap items-center gap-4">
        <a className="boton boton-solido" href={href}>
          <span>{copy.submit}</span>
        </a>
        <p className="field-note">{copy.note}</p>
      </div>
    </div>
  );
}
