"use client";

import { useState } from "react";
import { getCopy, site } from "@/content";
import type { Locale } from "@/i18n/config";

type State = "idle" | "sending" | "ok" | "error";

export function ContactForm({ locale }: { locale: Locale }) {
  const copy = getCopy(locale).pages.services.form;
  const [state, setState] = useState<State>("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setState("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          product: data.get("product"),
          need: data.get("need"),
          company: data.get("company"),
        }),
      });
      if (!response.ok) throw new Error("failed");
      form.reset();
      setState("ok");
    } catch {
      setState("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate={false}>
      <div className="contact-form-grid">
        <label className="field">
          <span className="field-label">{copy.name}</span>
          <input className="field-input" name="name" required maxLength={120} />
        </label>
        <label className="field">
          <span className="field-label">{copy.email}</span>
          <input
            className="field-input"
            name="email"
            type="email"
            required
            maxLength={200}
          />
        </label>
      </div>

      <label className="field mt-5">
        <span className="field-label">{copy.product}</span>
        <input className="field-input" name="product" maxLength={300} />
        <span className="field-hint">{copy.productHint}</span>
      </label>

      <label className="field mt-5">
        <span className="field-label">{copy.need}</span>
        <textarea
          className="field-input field-input--area"
          name="need"
          rows={5}
          required
          maxLength={4000}
        />
        <span className="field-hint">{copy.needHint}</span>
      </label>

      <input
        className="field-trap"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
      />

      <div className="mt-7 flex flex-wrap items-center gap-4">
        <button
          className="boton boton-solido"
          type="submit"
          disabled={state === "sending"}
        >
          <span>{state === "sending" ? copy.sending : copy.submit}</span>
        </button>
        {state === "ok" ? (
          <p className="field-note" role="status">
            {copy.ok}
          </p>
        ) : null}
        {state === "error" ? (
          <p className="field-note field-note--error" role="alert">
            {copy.error}{" "}
            <a className="underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
        ) : null}
      </div>
    </form>
  );
}
