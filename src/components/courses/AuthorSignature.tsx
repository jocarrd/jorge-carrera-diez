import Image from "next/image";
import Link from "next/link";
import { getCopy, site } from "@/content";
import type { Locale } from "@/i18n/config";
import { routePath } from "@/i18n/routes";

export function AuthorSignature({ locale }: { locale: Locale }) {
  const { signature } = getCopy(locale).profile;

  return (
    <aside className="author-signature" aria-label={signature.label}>
      <Image
        src={site.photo}
        alt={site.name}
        width={96}
        height={96}
        className="author-signature-photo"
      />
      <div>
        <p className="author-signature-label">{signature.label}</p>
        <p className="author-signature-text">{signature.text}</p>
        <div className="author-signature-actions">
          <Link
            href={routePath(locale, "experience")}
            className="author-signature-link"
          >
            {signature.experience} →
          </Link>
          <Link
            href={routePath(locale, "contact")}
            className="author-signature-secondary"
          >
            {signature.contact}
          </Link>
        </div>
      </div>
    </aside>
  );
}
